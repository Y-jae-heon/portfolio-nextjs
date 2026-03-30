---
req_id: REQ-003
section: Hero
priority: P0
target_file: app/content.ts
status: done
created: 2026-03-30
---

# [Hero] heroMetrics 정량 성과 기준 교체

## 설명
heroMetrics 3개를 이력서 정량 성과 기준으로 교체. 현재 '0→1 / Multi / Lead' 조합을 '80% AI 파이프라인 분석 단축 / 5년+ React·RN 리딩 / Native Android 모듈 직접 개발'로 변경.

## 완료 기준
- [x] heroMetrics[0].value가 '80%'이고 label에 'AI 파이프라인' 또는 '분석 시간 단축' 포함
- [x] heroMetrics[1].value가 '5년+' 이고 label에 'React' 및 'React Native' 포함
- [x] heroMetrics[2].value가 'Native'이고 label에 'Android' 및 '네이티브 모듈' 포함
- [x] 모든 metric의 detail 필드가 비어 있지 않음

## 이력서 대응
이력서 자동화&구조설계 카드: 'AI 파이프라인 구축으로 분석 시간 80% 단축' / 경력 5년 6개월 / 멀티플랫폼 연동 카드

## 선행 티켓
없음

## 참조
- CLAUDE.md §3 코드 변경 플랜 Task 1-3
- app/content.ts
