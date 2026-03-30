# FE Report

## 구현 결과

- Next.js App Router 기반의 단일 페이지 포트폴리오를 정적 우선 구조로 구현했다.
- 실제 콘텐츠는 [`app/content.ts`](/Users/yeomjaeheon/Documents/dev/mumu/job-change/app/content.ts)에 타입드 데이터로 분리했다.
- 화면 구조는 Hero, 요약, 대표 프로젝트 3건, 역량, 경력, 문제 해결 방식, 연락으로 구성했다.

## 주요 변경

- [`app/page.tsx`](/Users/yeomjaeheon/Documents/dev/mumu/job-change/app/page.tsx)
  페이지 전체 레이아웃과 섹션 구조 구현
- [`app/content.ts`](/Users/yeomjaeheon/Documents/dev/mumu/job-change/app/content.ts)
  한국어 중심 포트폴리오 콘텐츠와 타입 정의
- [`app/layout.tsx`](/Users/yeomjaeheon/Documents/dev/mumu/job-change/app/layout.tsx)
  메타데이터 정리
- [`app/globals.css`](/Users/yeomjaeheon/Documents/dev/mumu/job-change/app/globals.css)
  색상 토큰, 타이포 스택, 모션/배경 스타일 정리
- [`components/ui/badge.tsx`](/Users/yeomjaeheon/Documents/dev/mumu/job-change/components/ui/badge.tsx)
- [`components/ui/button-link.tsx`](/Users/yeomjaeheon/Documents/dev/mumu/job-change/components/ui/button-link.tsx)
- [`components/ui/card.tsx`](/Users/yeomjaeheon/Documents/dev/mumu/job-change/components/ui/card.tsx)
- [`components/ui/separator.tsx`](/Users/yeomjaeheon/Documents/dev/mumu/job-change/components/ui/separator.tsx)
  shadcn/ui 스타일의 로컬 프리미티브 추가

## 기술 결정

- `next/font/google` 대신 CSS 폰트 스택을 사용해 네트워크 의존을 줄였다.
- `build` 스크립트는 `next build --webpack`으로 고정해 현재 환경에서 안정적으로 정적 빌드되도록 했다.
- 모바일 메뉴는 `details/summary` 기반으로 구현해 불필요한 클라이언트 상태를 만들지 않았다.

## 검증

- `yarn lint` 통과
- `yarn build` 통과
