---
req_id: REQ-002
section: Hero
priority: P0
target_file: app/content.ts
status: done
created: 2026-03-30
---

# [Hero] headline + intro 이력서 기준 교체

## 설명
content.headline을 이력서 첫 줄 문장으로 교체. content.intro를 이력서 소개 문단(React·React Native 기반 B2B·B2C 서비스 5년 넘게 리딩, 서드파티 한계 → Android Native 모듈 직접 개발, 타이머 오차 → 브라우저 렌더링 사이클)으로 업데이트.

## 완료 기준
- [x] headline이 '주어진 도구로 안 되면 직접 만들고,\n팀에 비어 있는 역할이 있으면\n채워왔습니다.'로 변경됨
- [x] intro에 'React·React Native', '5년', 'Android Native 모듈', '브라우저 렌더링 사이클' 키워드가 포함됨
- [x] intro가 한 문장 이상의 구체적 기술 경험 서사로 구성됨

## 이력서 대응
이력서 헤드라인: '주어진 도구로 안 되면 직접 만들고, 팀에 비어 있는 역할이 있으면 채워왔습니다.' / 소개 첫 단락

## 선행 티켓
없음

## 참조
- CLAUDE.md §3 코드 변경 플랜 Task 1-2
- app/content.ts
