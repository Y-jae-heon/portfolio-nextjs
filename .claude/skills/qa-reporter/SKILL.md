---
name: qa-reporter
description: |
  code-reviewer 에이전트 실행이 완료된 후 qa-reporter 에이전트를 실행해 QA 시뮬레이션 리포트를 생성한다.
  다음 상황에서 반드시 이 스킬을 사용한다:
  - 사용자가 "QA", "qa 리포트", "qa 해줘", "테스트 시뮬레이션", "qa-reporter" 등을 언급할 때
  - code-reviewer 에이전트 실행이 막 완료됐을 때 (사용자가 요청하지 않아도 proactively 실행)
  토큰 절약을 위해 리뷰 리포트 내용을 복사하지 않고 경로만 에이전트에 전달한다.
---

## 실행 절차

### 1. 최신 리뷰 리포트 경로 확인 (토큰 절약 핵심)

```bash
ls -t ./ai-work/review/*.md 2>/dev/null | head -1
```

경로만 메모한다. 파일 내용을 읽지 않는다.

### 2. 변경 파일 목록 확인

code-reviewer 실행 시 사용한 파일 목록을 재사용한다.
없으면 다시 수집한다:
```bash
git diff --name-only HEAD 2>/dev/null
```

### 3. qa-reporter 에이전트 호출

아래 형식으로 Agent 도구를 호출한다. **리뷰 내용을 프롬프트에 직접 포함하지 않는다** — 에이전트가 경로를 통해 직접 읽게 한다.

```
Agent tool 호출:
  subagent_type: "qa-reporter"
  prompt: |
    아래 코드 리뷰 리포트를 바탕으로 QA 시뮬레이션을 수행하고 결과를 ./ai-work/qa/ 에 저장하세요.

    코드 리뷰 리포트 경로: <리뷰 파일 경로>
    변경된 파일 목록: <파일 경로 목록 — 내용 없이 경로만>

    프로젝트: 포트폴리오 웹사이트 (Next.js 16 + TypeScript + TailwindCSS v4 + ShadCN)
    QA 초점: 빌드 성공 여부, 타입 오류, 섹션별 렌더링 정상 확인, 모바일 반응형, 이력서-콘텐츠 정합성
    결과 저장: ./ai-work/qa/YYYY-MM-DD-qa.md
```

### 4. 완료 후 사용자에게 알림

QA 리포트 완료 후 리포트 경로를 알려준다.

## 주의사항

- 리뷰 리포트 내용을 프롬프트에 복사하지 않는다 (토큰 낭비) — 경로만 전달.
- `./ai-work/qa/` 디렉토리가 없으면 에이전트가 생성하도록 프롬프트에 명시한다.
- 리뷰 리포트(`./ai-work/review/`)가 존재하지 않으면 먼저 code-reviewer를 실행하도록 안내한다.
