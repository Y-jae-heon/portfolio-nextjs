---
req_id: REQ-009
section: Layout
priority: P3
target_file: app/page.tsx
status: done
created: 2026-03-30
---

# [검증] 시각적 + 모바일 반응형 확인

## 설명
개발 서버(pnpm run dev)에서 Hero 새 헤드라인·metrics, Projects 3개 카드, Capabilities 멀티플랫폼 그룹, Skills 섹션, Timeline subProjects 배지, Education/Certifications 블록이 정상 렌더링되는지 시각적 검증. 모바일 375px 뷰포트에서 레이아웃 깨짐 없음 확인.

## 완료 기준
- [x] Hero 섹션에 새 헤드라인 '주어진 도구로 안 되면 직접 만들고...' 표시됨
- [x] Projects 섹션에 마인드아너스/SMTOWN/리뷰핀치 카드 3개 표시됨
- [x] Capabilities 섹션에 멀티플랫폼 연동 그룹 표시됨
- [x] Skills 섹션에 카테고리별 배지 목록 표시됨
- [x] Timeline 슬로그업 카드 하단에 subProjects 배지 표시됨
- [x] 모바일(375px) 뷰포트에서 프로젝트 카드·타임라인 레이아웃 깨짐 없음

## 이력서 대응
해당 없음

## 선행 티켓
REQ-008

## 참조
- CLAUDE.md §3 코드 변경 플랜 Task 3-2, Task 3-3
