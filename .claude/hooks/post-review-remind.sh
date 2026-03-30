#!/bin/bash
# SubagentStop hook: code-reviewer 완료 후 qa-reporter 실행을 안내한다.

INPUT=$(cat)
AGENT_TYPE=$(echo "$INPUT" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('agent_type',''))" 2>/dev/null)

if [ "$AGENT_TYPE" != "code-reviewer" ]; then
  exit 0
fi

context="[워크플로우] code-reviewer가 완료되었습니다. 다음 단계로 /qa-reporter 스킬을 실행해 QA 시뮬레이션 리포트를 생성하세요. 리뷰 결과는 ./ai-work/review/에 저장되어 있습니다."
context_escaped=$(echo "$context" | python3 -c 'import sys,json; print(json.dumps(sys.stdin.read()))')
echo "{\"hookSpecificOutput\":{\"additionalContext\":$context_escaped}}"
exit 0
