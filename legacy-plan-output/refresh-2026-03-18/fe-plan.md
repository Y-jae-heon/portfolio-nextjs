# FE Plan

## 목표

- 현재 블루 기반 토큰과 디스플레이 폰트를 제거하고, 흑백 중심의 정적 우선 테마로 마이그레이션한다.
- Pretendard와 JetBrains Mono를 안정적으로 로드하고, 섹션과 공용 UI가 새 시각 규칙을 따르도록 정리한다.

## 구현 워크스트림

1. 폰트 로딩 전략 정리
2. 글로벌 토큰과 배경 스타일 재정의
3. 공용 UI 프리미티브 재조정
4. Hero와 Projects 중심으로 페이지 위계 재배치
5. 세부 텍스트/메타 스타일 정리
6. QA용 시각 회귀 체크

## 파일별 터치포인트

- `app/layout.tsx`: 폰트 import 및 body 클래스 정리
- `app/globals.css`: 색상 토큰, 폰트 변수, 배경, 그림자, 애니메이션 강도 조정
- `app/page.tsx`: 섹션별 className와 강조 계층 재조정
- `components/ui/badge.tsx`: 칩 톤 다운
- `components/ui/card.tsx`: 반경, 보더, 그림자 재조정
- `components/ui/button-link.tsx`: 기본/보조 CTA 대비 수정
- `components/ui/separator.tsx`: 구획선 가시성 검토

## 폰트 로딩 전략

- `next/font/local` 또는 프로젝트 정책에 맞는 방식으로 `Pretendard`, `JetBrains Mono`를 명시적으로 로드한다.
- 네트워크 의존이 생기지 않도록 가능하면 로컬 또는 안정적 번들 경로를 우선 검토한다.
- Body, heading, mono token을 CSS 변수로 고정해 컴포넌트에서 재사용한다.

## 마이그레이션 리스크

- 기존 `font-display`, `accent-*`, 배경 그라데이션 유틸리티를 한 번에 바꾸면 여러 섹션이 동시에 깨질 수 있다.
- 컬러 토큰 축소로 인해 hover/focus 대비가 약해질 수 있다.
- Pretendard 미적용 시 한국어 인상이 크게 무너진다.

## 검증 체크리스트

- 블루 계열 토큰이 제거되었는지
- 모든 숫자/메타가 Mono 규칙을 따르는지
- Hero와 Project 카드가 모바일/데스크톱 모두에서 안정적인지
- sticky header와 CTA의 대비가 충분한지
- `yarn lint`와 정적 빌드가 통과하는지
