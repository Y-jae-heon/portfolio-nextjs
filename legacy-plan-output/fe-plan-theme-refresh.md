# FE Plan: Theme Refresh

## 목표

- 기존 단일 페이지 구조를 유지하면서 색상/폰트/컴포넌트 레이어를 새 디자인 시스템으로 교체한다.
- 정적 우선, Vercel 배포 가능, 접근성 유지라는 현재 기술 제약을 그대로 지킨다.

## 구현 워크스트림

1. 폰트 로딩 전략 확정
2. 글로벌 토큰 재정의
3. 공통 UI 프리미티브 재스타일링
4. 페이지 섹션별 타이포/간격 재조정
5. 반응형 및 접근성 회귀 점검

## 파일별 터치 포인트

- `app/layout.tsx`: `Pretendard`, `JetBrains Mono` 로딩 및 body/class 연결
- `app/globals.css`: 색상 토큰, 폰트 토큰, 배경/보더/포커스/모션 유틸리티 재정의
- `app/page.tsx`: 섹션별 클래스 조정, Hero/Project/Card 밀도 재조정
- `components/ui/badge.tsx`: mono 라벨 체계에 맞는 스타일 축소
- `components/ui/button-link.tsx`: primary/secondary 버튼 명도 대비 재정의
- `components/ui/card.tsx`: 그림자/라운드/보더 규칙 단순화
- `components/ui/separator.tsx`: 새 보더 톤 반영

## 폰트 전략

- 가능하면 `next/font/local`로 self-host 하여 런타임 네트워크 의존을 없앤다.
- `Pretendard`는 heading/body용 가중치만 최소 세트로 로딩한다.
- `JetBrains Mono`는 label/number/emphasis 용도로 필요한 가중치만 제한적으로 로딩한다.
- 폰트가 준비되지 않았다면 구현 전 `public/fonts/` 또는 로컬 에셋 경로를 먼저 확정한다.

## 구현 규칙

- 기존 `font-display` 의존을 제거하고 display/sans 역할을 `Pretendard`로 통합한다.
- `text-accent-ink`, `bg-accent-soft` 같은 현행 블루 계열 유틸리티는 회색/적색 중심으로 다시 설계한다.
- 장식성 배경 레이어를 줄이고, 필요하면 매우 미세한 그리드/노이즈만 남긴다.
- 주요 수치와 메타 텍스트만 mono로 남겨 폰트 대비가 정보 구조를 돕게 만든다.

## 리스크

- 현재 페이지는 블루 accent 기반 클래스가 넓게 퍼져 있어 전환 시 누락 가능성이 있다.
- 기존 `font-display` 클래스 사용처가 많아 폰트 역할 정리 없이 교체하면 타이포가 무너질 수 있다.
- Pretendard 에셋 확보 방식이 늦어지면 구현보다 먼저 폰트 조달 이슈가 생긴다.
- 붉은 accent를 과하게 쓰면 전체 인상이 경고/오류 UI처럼 보일 수 있다.

## 검증 체크리스트

- 모든 주요 헤드라인이 `Pretendard`로 일관되게 렌더링되는가
- hero/project/contact의 CTA 대비가 충분한가
- 회색 본문 텍스트가 모바일에서도 흐리지 않은가
- mono 사용처가 숫자/메타/강조 영역으로 제한되는가
- build, lint, Playwright 스냅샷 기준에서 회귀가 없는가
