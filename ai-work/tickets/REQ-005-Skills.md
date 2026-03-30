---
req_id: REQ-005
section: Skills
priority: P1
target_file: app/content.ts
status: done
created: 2026-03-30
---

# [Skills] SkillGroup 타입 + 데이터 신규 추가

## 설명
SkillGroup 타입을 content.ts에 추가하고, PortfolioContent에 skills 필드를 추가. 이력서 스킬 섹션 기준으로 핵심/스타일/상태관리/백엔드/인프라/기타 6개 카테고리 데이터를 작성. page.tsx에 Skills 섹션 렌더링 블록을 timeline 아래, philosophy 위에 추가.

## 완료 기준
- [x] SkillGroup 타입이 { category: string; items: string[] } 형태로 export됨
- [x] PortfolioContent에 skills: SkillGroup[] 필드가 추가됨
- [x] skills 데이터가 핵심(TypeScript, React, React Native, Next.js) 포함 6개 카테고리로 구성됨
- [x] page.tsx에 #skills id를 가진 섹션이 timeline 뒤에 렌더링됨
- [x] navLinks에 '스킬' 항목이 추가되거나, 기존 네비게이션과 일관성이 유지됨

## 이력서 대응
이력서 스킬 섹션: 핵심 TypeScript·React·React Native·Next.js / 스타일 TailwindCSS·ShadCN·StyledComponent / 상태관리 Zustand·ContextAPI / 백엔드 NestJS·Node.js·GraphQL·PostgreSQL·MySQL / 인프라 AWS·GitHub Actions·FastLane·SST / 기타 VueJS·Java·JSP

## 선행 티켓
없음

## 참조
- CLAUDE.md §3 코드 변경 플랜 Task 2-1
- app/content.ts, app/page.tsx
