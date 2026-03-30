#!/bin/bash
# PreToolUse hook: content.ts 수정 전 content-tuner 제안이 있는지 확인한다.

INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('tool_input',{}).get('file_path',''))" 2>/dev/null)

# content.ts 수정이 아니면 통과
if [[ "$FILE_PATH" != *"app/content.ts"* ]]; then
  exit 0
fi

PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(pwd)}"
TODAY=$(date +%Y-%m-%d)
PROPOSALS_DIR="$PROJECT_DIR/ai-work/content-proposals"

# 오늘 날짜 제안 파일이 있는지 확인
if [ -d "$PROPOSALS_DIR" ]; then
  today_proposals=$(ls "$PROPOSALS_DIR/"${TODAY}*.md 2>/dev/null)
  if [ -n "$today_proposals" ]; then
    # 제안 존재 — 통과
    exit 0
  fi
fi

# 제안 없음 — 컨텍스트로 알림 (차단하지는 않음)
context="[주의] content.ts를 수정하려 하지만 오늘($TODAY) 생성된 content-tuner 제안이 ./ai-work/content-proposals/에 없습니다. content-tuner 스킬을 먼저 실행해 Before/After 제안을 생성한 뒤 수정하는 것을 권장합니다."
context_escaped=$(echo "$context" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))')
echo "{\"hookSpecificOutput\":{\"additionalContext\":$context_escaped}}"
exit 0
