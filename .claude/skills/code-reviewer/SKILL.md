---
name: code-reviewer
description: |
  코드 구현이 완료된 후 code-reviewer 에이전트를 실행해 리뷰를 수행한다.
  다음 상황에서 반드시 이 스킬을 사용한다:
  - 사용자가 "코드 리뷰", "리뷰해줘", "review", "리뷰 실행" 등을 언급할 때
  - 한 개 이상의 소스 파일 작성/수정이 완료됐을 때 (사용자가 요청하지 않아도 proactively 실행)
  토큰 절약을 위해 파일 내용이 아닌 경로와 diff 요약만 에이전트에 전달한다.
---

## 실행 절차

### 1. 변경 파일 목록 수집 (토큰 절약 핵심)

git이 초기화된 경우:
```bash
git diff --name-only HEAD 2>/dev/null || git diff --name-only --cached 2>/dev/null
```

git이 없는 경우: 현재 대화에서 Write/Edit 도구로 작성된 파일 경로를 수집한다.

### 2. 리뷰 대상 결정

- 변경 파일이 없으면 사용자에게 대상을 확인한다.
- 파일이 많을 경우 핵심 변경분만 추린다 (소스 파일 우선, 설정·문서 파일 후순위).

### 3. code-reviewer 에이전트 호출

아래 형식으로 Agent 도구를 호출한다. **파일 내용을 프롬프트에 직접 포함하지 않는다** — 에이전트가 직접 읽게 한다.

```
Agent tool 호출:
  subagent_type: "code-reviewer"
  prompt: |
    다음 파일들의 코드 리뷰를 수행하고 결과를 ./ai-work/review/ 에 저장하세요.

    변경된 파일 목록:
    <파일 경로 목록 — 내용 없이 경로만>

    프로젝트: 포트폴리오 웹사이트 (Next.js 16 + TypeScript + TailwindCSS v4 + ShadCN)
    리뷰 초점: 타입 정합성, 이력서-콘텐츠 일치, 렌더링 오류 가능성, 반응형 호환
    결과 저장: ./ai-work/review/YYYY-MM-DD-review.md
```

### 4. 완료 후 사용자에게 알림

리뷰 완료 후:
- 리포트 경로를 알려준다.
- qa-reporter 실행 여부를 제안한다.

## 주의사항

- 프롬프트에 파일 내용을 복사하지 않는다 (토큰 낭비).
- `./ai-work/review/` 디렉토리가 없으면 에이전트가 생성하도록 프롬프트에 명시한다.
- 구현 단계가 아닌 탐색/질의 턴에서는 실행하지 않는다.
