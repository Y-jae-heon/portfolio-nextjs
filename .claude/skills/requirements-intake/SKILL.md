---
name: requirements-intake
description: |
  사용자가 새 작업을 지시하거나 요구사항 파일을 제공할 때 실행하는 오케스트레이터.
  요구사항 분석 → 티켓 발행 순서로 실행한다.
  다음 상황에서 반드시 이 스킬을 사용한다:
  - "~를 수정해줘", "~를 추가해줘", "콘텐츠 변경 시작" 등 새 구현 지시
  - "이력서 분석해줘", "요구사항 정리해줘" 등 파일 기반 분석 요청
  - "티켓 발행해줘", "작업 쪼개줘", "태스크 만들어줘" 등 명시적 티켓 요청
  단순 질의·탐색·코드 설명 요청에서는 실행하지 않는다.
---

## 역할

새 작업 요청을 받으면 아래 3단계를 순서대로 실행한다:
1. **requirements-analyzer** — 요구사항 추출 및 포트폴리오 섹션 매핑
2. **TaskCreate** — 세션 내 티켓 발행
3. **Write** — `./ai-work/tickets/` 에 MD 파일로 저장 (세션 간 영속성)

---

## 실행 절차

### Step 0. 입력 수집

사용자 메시지에서 아래를 확인한다:
- 직접 지시 내용 (메시지 원문)
- 파일 경로가 언급된 경우 해당 파일 경로

파일이 언급된 경우 파일 경로만 메모한다 (파일을 직접 읽지 않는다 — 에이전트가 읽게 한다).

---

### Step 1. requirements-analyzer 에이전트 호출

```
Agent tool 호출:
  subagent_type: "requirements-analyzer"
  prompt: |
    아래 입력에서 포트폴리오 변경 요구사항을 추출하고 구조화하세요.

    입력:
    <사용자 메시지 원문 또는 파일 경로>

    프로젝트 루트: /Users/yeomjaeheon/Documents/dev/mumu/job-change
    참조 문서:
      - CLAUDE.md (GAP 분석, 코드 변경 플랜, 작업 우선순위)
      - app/content.ts (현재 포트폴리오 데이터)

    출력: requirements-analyzer 에이전트 정의의 JSON 스키마 형식으로 반환
    산출물 저장: ./ai-work/analysis/YYYY-MM-DD-requirements.json
```

에이전트 출력(JSON)을 변수로 보관한다. 출력을 사용자에게 중간에 표시하지 않는다.
에이전트가 `./ai-work/analysis/`에 JSON 파일을 저장했는지 확인한다.

---

### Step 2. 티켓 발행 (TaskCreate + MD 파일 저장)

requirements-analyzer 완료 후 아래 규칙으로 티켓을 발행한다.

**발행 규칙**
- `implementation_order` 순서대로 발행
- `dependency_map`에 선행 요구사항이 있으면 티켓 본문에 명시
- `needs_clarification: true` 항목은 확인 티켓으로 분리

**티켓 제목 형식**
```
[{section}] {requirements.description 요약}
```
예: `[Projects] 대표 프로젝트 3개 교체`
예: `[확인필요] [Skills] 새 스킬 카테고리 추가`

**티켓 본문 형식 (TaskCreate description 및 MD 파일 공통)**
```markdown
---
req_id: {id}
section: {section}
priority: {priority}
target_file: {target_file}
status: todo
created: {오늘 날짜 YYYY-MM-DD}
---

# [{section}] {제목}

## 설명
{description}

## 완료 기준
{acceptance_criteria 항목별 체크박스 - [ ] 형식}

## 이력서 대응
{resume_alignment}

## 선행 티켓
{dependency_map 기반 — 없으면 "없음"}

## 참조
- CLAUDE.md §3 코드 변경 플랜
- app/content.ts
```

**MD 파일 저장 규칙**
- 저장 위치: `./ai-work/tickets/`
- 파일명: `{REQ-ID}-{section}.md` (예: `REQ-001-Projects.md`)
- TaskCreate와 Write를 각 티켓마다 순서대로 실행한다 (TaskCreate → Write → 다음 티켓)
- `needs_clarification` 티켓은 파일명에 접두사 추가: `REVIEW-{REQ-ID}-{section}.md`

**세션 재개 시 MD 파일 활용**
- 새 세션에서 `./ai-work/tickets/` 파일을 읽어 이전 티켓 상태를 복원할 수 있다.
- `status: todo` → 미완료, `status: in_progress` → 진행 중, `status: done` → 완료
- 티켓 상태 업데이트 시 MD 파일의 `status` 필드도 함께 수정한다.

---

### Step 3. 사용자에게 요약 리포트 출력

모든 티켓 발행 후 아래 형식으로 사용자에게 보고한다.

```markdown
## 요구사항 분석 완료

**요약**: {summary}

### 발행된 티켓
| 티켓 | 섹션 | 우선순위 | 대상 파일 | 상태 |
|------|------|----------|----------|------|
| 대표 프로젝트 교체 | Projects | P0 | content.ts | 구현 가능 |
| Skills 섹션 추가 | Skills | P1 | content.ts + page.tsx | 구현 가능 |

### 확인 필요 항목
{needs_clarification 요구사항별 질문}

### 다음 단계
1. 확인 필요 항목이 있으면 사용자 확인 후 재분류
2. 첫 번째 티켓 작업 시작 전 **content-tuner** 실행
```

---

## 주의사항

- requirements-analyzer 출력을 사용자에게 중간에 노출하지 않는다 (혼란 방지).
- 파일 내용을 프롬프트에 직접 복사하지 않는다 — 에이전트가 경로로 읽게 한다.
- `needs_clarification` 항목을 자의적으로 폐기하지 않는다. 반드시 사용자에게 알리고 확인 받는다.
- 티켓 발행 후 자동으로 구현에 진입하지 않는다. 사용자가 시작하면 content-tuner를 먼저 실행한다.
