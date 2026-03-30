#!/bin/bash
# SessionStart hook: ai-work 디렉토리 상태를 스캔해 컨텍스트에 주입한다.

PROJECT_DIR="${CLAUDE_PROJECT_DIR:-$(pwd)}"
AI_WORK="$PROJECT_DIR/ai-work"

output=""

# 1. 미완료 티켓 확인
if [ -d "$AI_WORK/tickets" ]; then
  todo_tickets=$(grep -rl 'status: todo\|status: in_progress' "$AI_WORK/tickets/" 2>/dev/null | sort)
  if [ -n "$todo_tickets" ]; then
    ticket_list=""
    while IFS= read -r f; do
      name=$(basename "$f")
      status=$(grep -m1 'status:' "$f" | awk '{print $2}')
      ticket_list="$ticket_list\n  - $name ($status)"
    done <<< "$todo_tickets"
    output="$output\n[ai-work/tickets] 미완료 티켓:$ticket_list"
  fi
fi

# 2. 최신 분석 파일 확인
if [ -d "$AI_WORK/analysis" ]; then
  latest_analysis=$(ls -t "$AI_WORK/analysis/"*.json 2>/dev/null | head -1)
  if [ -n "$latest_analysis" ]; then
    output="$output\n[ai-work/analysis] 최신 분석: $(basename "$latest_analysis")"
  fi
fi

# 3. 최신 콘텐츠 제안 확인
if [ -d "$AI_WORK/content-proposals" ]; then
  latest_proposal=$(ls -t "$AI_WORK/content-proposals/"*.md 2>/dev/null | head -1)
  if [ -n "$latest_proposal" ]; then
    output="$output\n[ai-work/content-proposals] 최신 제안: $(basename "$latest_proposal")"
  fi
fi

# 4. 최신 리뷰/QA 확인
if [ -d "$AI_WORK/review" ]; then
  latest_review=$(ls -t "$AI_WORK/review/"*.md 2>/dev/null | head -1)
  if [ -n "$latest_review" ]; then
    output="$output\n[ai-work/review] 최신 리뷰: $(basename "$latest_review")"
  fi
fi

if [ -d "$AI_WORK/qa" ]; then
  latest_qa=$(ls -t "$AI_WORK/qa/"*.md 2>/dev/null | head -1)
  if [ -n "$latest_qa" ]; then
    output="$output\n[ai-work/qa] 최신 QA: $(basename "$latest_qa")"
  fi
fi

# 출력이 있으면 additionalContext로 주입
if [ -n "$output" ]; then
  context="[ai-work 현황]$output\n\n워크플로우: requirements-intake → content-tuner → 구현 → code-reviewer → qa-reporter\n산출물은 모두 ./ai-work/ 하위에 저장됩니다."
  # JSON escape
  context_escaped=$(echo -e "$context" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))')
  echo "{\"hookSpecificOutput\":{\"additionalContext\":$context_escaped}}"
fi

exit 0
