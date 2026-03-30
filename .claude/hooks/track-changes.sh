#!/bin/bash
# PostToolUse hook: 소스 파일 변경을 추적해 ai-work에 기록한다.

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('tool_input',{}).get('file_path',''))" 2>/dev/null)

# 파일 경로가 없거나 ai-work 내부 파일이면 무시
if [ -z "$FILE_PATH" ] || [[ "$FILE_PATH" == *"ai-work"* ]] || [[ "$FILE_PATH" == *".claude"* ]]; then
  exit 0
fi

# 소스 파일만 추적 (.ts, .tsx, .css, .json 등)
if [[ "$FILE_PATH" != *.ts && "$FILE_PATH" != *.tsx && "$FILE_PATH" != *.css && "$FILE_PATH" != *.json ]]; then
  exit 0
fi

PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(pwd)}"
TODAY=$(date +%Y-%m-%d)
TRACKER="$PROJECT_DIR/ai-work/.changed-files"

# 파일이 없으면 생성
if [ ! -f "$TRACKER" ]; then
  echo "# Changed files tracker - $TODAY" > "$TRACKER"
fi

# 이미 기록된 파일이면 무시
if grep -qF "$FILE_PATH" "$TRACKER" 2>/dev/null; then
  exit 0
fi

echo "$FILE_PATH" >> "$TRACKER"
exit 0
