---
req_id: REQ-004
section: Capabilities
priority: P0
target_file: app/content.ts
status: done
created: 2026-03-30
---

# [Capabilities] 멀티플랫폼 연동 그룹 추가

## 설명
capabilities 배열에 '멀티플랫폼 연동' CapabilityGroup을 추가. React Native와 Android/iOS Native 모듈 직접 개발, 서드파티 한계 독립 해결, NFC/BLE/AR Unity 하드웨어 연동 경험을 items로 구성.

## 완료 기준
- [x] capabilities 배열에 title이 '멀티플랫폼 연동'인 항목이 존재함
- [x] 해당 그룹의 items에 'Android Native 모듈', 'NFC', 'BLE', 'AR' 중 2개 이상 키워드가 포함됨
- [x] description이 한 문장 이상으로 역량을 구체적으로 설명함
- [x] 기존 4개 CapabilityGroup이 유지됨

## 이력서 대응
이력서 멀티플랫폼 연동 카드: 'React Native와 Android Native 브릿지를 직접 개발. iOS/AOS 환경별 호환성 이슈를 독립적으로 해결한 경험.'

## 선행 티켓
없음

## 참조
- CLAUDE.md §3 코드 변경 플랜 Task 1-4
- app/content.ts
