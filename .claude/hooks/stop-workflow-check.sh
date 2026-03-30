#!/bin/bash
# Stop hook: 구현 후 리뷰/QA가 누락됐는지 확인한다.

PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(pwd)}"
TODAY=$(date +%Y-%m-%d)
TRACKER="$PROJECT_DIR/ai-work/.changed-files"

# 변경 추적 파일이 없으면 구현 작업이 없었으므로 통과
if [ ! -f "$TRACKER" ]; then
  exit 0
fi

changed_count=$(wc -l < "$TRACKER" | tr -d ' ')
# 헤더 라인 제외
changed_count=$((changed_count - 1))

if [ "$changed_count" -le 0 ]; then
  exit 0
fi

# 오늘 리뷰가 있는지 확인
has_review=false
if ls "$PROJECT_DIR/ai-work/review/${TODAY}"*.md 1>/dev/null 2>&1; then
  has_review=true
fi

# 오늘 QA가 있는지 확인
has_qa=false
if ls "$PROJECT_DIR/ai-work/qa/${TODAY}"*.md 1>/dev/null 2>&1; then
  has_qa=true
fi

# 누락 항목 알림
missing=""
if [ "$has_review" = false ]; then
  missing="$missing\n  - code-reviewer 리뷰 미실행 → /code-reviewer 실행 권장"
fi
if [ "$has_qa" = false ]; then
  missing="$missing\n  - qa-reporter QA 미실행 → /qa-reporter 실행 권장"
fi

if [ -n "$missing" ]; then
  context="[워크플로우 체크] 오늘 ${changed_count}개 소스 파일이 변경되었지만 아래 단계가 누락되었습니다:$missing\n\n변경된 파일 목록은 ./ai-work/.changed-files 에서 확인할 수 있습니다."
  context_escaped=$(echo -e "$context" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))')
  echo "{\"hookSpecificOutput\":{\"additionalContext\":$context_escaped}}"
fi

# 세션 종료 시 tracker 정리하지 않음 — 다음 세션에서 참조 가능
exit 0
