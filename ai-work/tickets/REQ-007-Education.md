---
req_id: REQ-007
section: Education
priority: P2
target_file: app/content.ts
status: done
created: 2026-03-30
---

# [Education] 학력 + 자격증/교육 섹션 추가

## 설명
EducationItem, CertificationItem 타입을 추가하고 PortfolioContent에 education, certifications 필드를 추가. 이력서 기준 학력 1개(한국방송통신대학교), 자격증/교육 3개(웹디자인기능사, UI/UX 교육 수료, SK AX AI 교육 수료)를 데이터로 작성. page.tsx에 렌더링 위치 결정 및 추가.

## 완료 기준
- [x] EducationItem 타입이 { name: string; major?: string; period: string; status?: string } 형태로 export됨
- [x] CertificationItem 타입이 { name: string; period?: string } 형태로 export됨
- [x] education 배열에 한국방송통신대학교 컴퓨터과학과 항목이 포함됨
- [x] certifications 배열에 웹디자인기능사, 스마트디지털 UI/UX 교육, SK AX AI 교육 3개 항목이 포함됨
- [x] page.tsx에 education/certifications 데이터가 렌더링됨 (contact 또는 timeline 하단 인접 위치)

## 이력서 대응
이력서 학력: 한국방송통신대학교 컴퓨터과학과 (2022.03 - 재학/휴학) / 자격증·교육: 웹디자인기능사, 스마트디지털 UI/UX 앱&웹디자인 교육 수료(2020.02-2020.07), SK AX 상생 아카데미 AI 관련 교육 수료(2026.03-2026.04)

## 선행 티켓
REQ-005, REQ-006

## 참조
- CLAUDE.md §3 코드 변경 플랜 Task 2-3
- app/content.ts, app/page.tsx
