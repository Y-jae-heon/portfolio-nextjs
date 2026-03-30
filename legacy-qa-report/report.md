# QA Audit

## 실행 결과

- `yarn lint` 통과
- `yarn build` 통과
- `yarn test:e2e` 통과

## 제품 및 디자인 검수

- 첫 화면에서 시니어 프로덕트 엔지니어 포지셔닝과 정량 성과, CTA가 즉시 보인다.
- 프로젝트 3건이 이력서 요약이 아니라 케이스 스터디 형식으로 읽힌다.
- UI는 과도하게 화려하지 않고, 정보 밀도와 위계 중심으로 정리되어 있다.
- 모바일과 데스크톱 모두 핵심 구조가 유지된다.

## 프런트엔드 및 배포 검수

- 콘텐츠는 로컬 타입드 파일에서 관리되며 서버 의존성이 없다.
- 접근성 기본값, 포커스 스타일, reduced motion 대응이 포함되어 있다.
- 현재 환경에서는 `next build --webpack` 경로가 안정적으로 동작한다.

## 스크린샷

- 데스크톱: [desktop-full.png](/Users/yeomjaeheon/Documents/dev/mumu/job-change/qa-report/screenshots/desktop-full.png)
- 모바일: [mobile-full.png](/Users/yeomjaeheon/Documents/dev/mumu/job-change/qa-report/screenshots/mobile-full.png)
