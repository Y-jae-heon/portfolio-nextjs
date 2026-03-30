---
req_id: REQ-006
section: Timeline
priority: P1
target_file: app/content.ts
status: done
created: 2026-03-30
---

# [Timeline] SubProject 타입 + 슬로그업 하위 프로젝트 추가

## 설명
SubProject 타입을 추가하고 TimelineItem에 subProjects?: SubProject[] 옵셔널 필드를 추가. 슬로그업 timeline 항목에 마인드아너스/SMTOWN/리뷰핀치/썬데이 4개의 subProjects를 추가. page.tsx에서 subProjects가 있을 때 TimelineItem 카드 하단에 배지 목록으로 렌더링.

## 완료 기준
- [x] SubProject 타입이 { name: string; period: string; oneLineSummary: string } 형태로 export됨
- [x] TimelineItem에 subProjects?: SubProject[] 필드가 추가됨
- [x] 슬로그업 항목의 subProjects 배열에 마인드아너스, SMTOWN, 리뷰핀치, 썬데이 4개 항목이 포함됨
- [x] page.tsx에서 subProjects 존재 시 카드 하단에 배지/목록 형태로 렌더링됨
- [x] subProjects가 없는 timeline 항목(새솔소프트, 전환구간)에 렌더링 오류가 없음

## 이력서 대응
이력서 슬로그업 하위 프로젝트: 마인드아너스(2025.03-2025.07), SMTOWN(2025.01-진행 중), 리뷰핀치(2024.10-2025.03), 썬데이(2024.12-2025.01)

## 선행 티켓
없음

## 참조
- CLAUDE.md §3 코드 변경 플랜 Task 2-2
- app/content.ts, app/page.tsx
