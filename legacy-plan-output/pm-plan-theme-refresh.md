# PM Plan: Theme Refresh

## 목표

- 포트폴리오의 첫인상을 "잘 만든 UI"보다 "실력이 바로 읽히는 엔지니어" 쪽으로 재정렬한다.
- 색상과 타이포를 절제된 흑백 기반으로 단순화해 콘텐츠 해석 속도를 높인다.
- Apple-like한 정제감은 유지하되, 장식보다 구조와 문장 신뢰도를 우선한다.

## 핵심 방향

- Primary `#000000`, Secondary `#FFFFFF`를 중심으로 정보 위계를 만든다.
- Accent `#6B7280`는 보조 정보, 구분선, 메타 텍스트에만 제한적으로 사용한다.
- Optional Accent `#EF4444`는 경고, 핵심 성과 강조, CTA 보조 포인트처럼 "정말 필요한 순간"에만 쓴다.
- 제목/본문은 `Pretendard`, 코드/숫자/정량 성과/메타 라벨은 `JetBrains Mono`로 역할을 분리한다.

## 수행 범위

- 리브랜딩 목적과 수용 기준 재정의
- 섹션별 UX 우선순위 재정렬
- PD/FE/QA용 역할 분담 및 handoff 기준 확정
- 구현 전 스타일 시스템 변경 범위 고정

## 섹션 우선순위

1. Hero: 역할, 수준, 핵심 성과가 즉시 읽혀야 한다.
2. Featured Projects: 카드보다 사례 구조가 먼저 읽혀야 한다.
3. Professional Summary: 강점 나열보다 일하는 방식의 근거가 보여야 한다.
4. Capability Map: 범용 역량 맵이 아니라 기술 판단력의 압축본처럼 보여야 한다.
5. Career Timeline: 연혁이 아니라 방향성과 성장 맥락을 정리한다.
6. Problem-solving Philosophy: 추상론이 아니라 실제 의사결정 원칙처럼 읽혀야 한다.
7. Contact: 가볍지 않고 명확한 마지막 CTA로 정리한다.

## 산출물

- `plan-output/pd-plan-theme-refresh.md`
- `plan-output/fe-plan-theme-refresh.md`
- `plan-output/qa-plan-theme-refresh.md`
- `.codex/agents/pm-to-pd-handoff-theme-refresh.md`
- `.codex/agents/pm-to-fe-handoff-theme-refresh.md`

## 수용 기준

- 첫 화면에서 시각적 인상보다 포지셔닝과 성과가 먼저 읽혀야 한다.
- 전체 페이지가 흑백 기반에서도 밋밋하지 않고, 정보 위계가 명확해야 한다.
- 메타 텍스트, 수치, 스택, 강조 표현의 역할이 폰트만으로도 구분되어야 한다.
- CTA와 강조 색상은 적어 보일 정도로 절제되어야 한다.
- 기존보다 읽기 속도와 신뢰감이 올라가야 하며, 템플릿 느낌은 줄어야 한다.
