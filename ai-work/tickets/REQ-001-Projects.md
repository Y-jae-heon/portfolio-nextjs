---
req_id: REQ-001
section: Projects
priority: P0
target_file: app/content.ts
status: done
created: 2026-03-30
---

# [Projects] 대표 프로젝트 3개 교체

## 설명
content.projects 배열을 이력서 기준 3개 프로젝트(마인드아너스, SMTOWN, 리뷰핀치)로 교체. 현재 Boostree, DoctorInHome, SMTown(내용 상이) 3개를 완전히 교체한다. 각 프로젝트는 slug/eyebrow/name/summary/problem/role/approach/impact/stack/tradeoff 필드를 이력서 문장 기준으로 작성.

## 완료 기준
- [x] projects 배열 길이가 3이고, slug가 각각 mindaonors, smtown, reviewpinch임
- [x] 마인드아너스: requestAnimationFrame 기반 Timer Hook, PM 리딩, Sendbird Call 스택 포함
- [x] SMTOWN: Android Native 모듈 직접 개발, AR·NFC·BLE 연동, eyebrow에 '멀티플랫폼' 포함
- [x] 리뷰핀치: OpenAI + TensorFlow, 80% 단축, B2C 웹 + 백오피스 언급 포함
- [x] 각 프로젝트에 tradeoff 필드가 비어 있지 않음
- [x] Boostree, DoctorInHome 항목이 projects 배열에서 제거됨

## 이력서 대응
이력서 슬로그업 섹션: 마인드아너스(2025.03-2025.07), SMTOWN(2025.01-진행 중), 리뷰핀치(2024.10-2025.03)

## 선행 티켓
없음

## 참조
- CLAUDE.md §3 코드 변경 플랜 Task 1-1
- app/content.ts
