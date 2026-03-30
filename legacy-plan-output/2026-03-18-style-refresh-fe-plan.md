# FE Plan: Style Refresh

## 목표

- 기존 정적 우선 구조는 유지한 채 컬러 토큰, 폰트 로딩, 주요 컴포넌트 스타일을 새 시스템으로 교체한다.
- 구현 범위를 디자인 토큰, 타이포 적용, 컴포넌트 정리, 섹션 레이아웃 미세 조정으로 제한해 과도한 구조 변경을 피한다.
- 결과물은 여전히 Vercel Hobby에 무리 없이 배포 가능해야 한다.

## 구현 범위

- `app/layout.tsx`: Pretendard, JetBrains Mono를 `next/font` 또는 로컬 전략으로 연결
- `app/globals.css`: 컬러 변수, 폰트 변수, background, shadow, selection, animation 값 정리
- `components/ui/*`: `ButtonLink`, `Badge`, `Card`, `Separator`의 새 variant 체계 반영
- `app/page.tsx`: section spacing, text hierarchy, card density, CTA emphasis 재조정

## 작업 순서

1. 폰트 로딩 전략을 확정하고 `body`, mono label, metric number 적용 지점을 분리한다.
2. 블루 계열 토큰과 배경 패턴을 제거하고 4색 체계로 CSS 변수를 교체한다.
3. 공용 UI 프리미티브를 새 토큰 기준으로 정리해 페이지 수정 범위를 줄인다.
4. Hero, project, capability, timeline 섹션의 밀도와 정렬을 손본다.
5. 반응형과 접근성을 확인하고 시각 회귀를 점검한다.

## 구현 원칙

- 색상 의미는 토큰 이름보다 사용 맥락으로 유지한다.
- Mono는 숫자와 라벨 중심으로 제한하고, 긴 문장에는 쓰지 않는다.
- 그림자, gradient, blur는 제거하거나 매우 약하게 줄인다.
- border와 spacing이 시각 구조를 담당하게 만든다.

## 기술 리스크

- Pretendard 공급 방식을 잘못 고르면 폰트 로딩이 불안정할 수 있다.
- 기존 `font-display` 클래스 사용처가 많아 한 번에 제거할 때 typography regression이 생길 수 있다.
- accent 색이 회색으로 바뀌면 기존 hover/focus 대비가 약해질 수 있어 접근성 재검증이 필요하다.
- 빨강을 넣는 위치가 많아지면 전체 톤이 깨지므로 variant 레벨에서 통제해야 한다.

## 완료 조건

- 주요 컴포넌트가 새 토큰과 폰트 체계만으로 일관되게 렌더링된다.
- 페이지에 남아 있는 블루 계열 스타일이 없다.
- Hero와 프로젝트 영역에서 정보 위계가 이전보다 더 명확하다.
- `yarn lint`와 빌드가 통과 가능하다.
