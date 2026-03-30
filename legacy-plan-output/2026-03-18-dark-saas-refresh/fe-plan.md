# FE Plan

## 구현 범위

- `app/globals.css` 토큰 전환
- `app/page.tsx` 레이아웃 및 섹션 위계 조정
- `components/ui/*` 프리미티브 다크 SaaS 톤 재구성
- 새 산출물 디렉터리 및 handoff 문서 생성

## 구현 원칙

- 콘텐츠 타입은 유지
- 불필요한 client state 추가 금지
- ShadCn은 핵심 프리미티브 톤만 반영
- 텍스트 강조는 색상보다 명도와 구조로 해결

## 리스크

- 다크 테마에서 본문 대비가 약해질 수 있음
- 모노 자간 축소 과정에서 메타 정보 구분력이 떨어질 수 있음
- Hero gradient가 과해지면 신뢰감이 떨어질 수 있음

## 검증

- lint
- build
- Playwright 스크린샷
