# 콘텐츠 조정 제안 — REQ-004: Capabilities (멀티플랫폼 연동 그룹 추가)

생성일: 2026-03-30
대상 파일: app/content.ts
티켓: REQ-004-Capabilities.md

---

## 조정 대상: Capabilities (content.capabilities 배열 — 그룹 추가)

### Before

```typescript
capabilities: [
  {
    title: "문제 구조화 & 실행",
    description: "모호한 요구와 혼란한 상황을 정리해 실행 가능한 구조로 바꿉니다.",
    items: [
      "여러 이해관계가 얽힌 요구를 구조화하고 우선순위를 명확히 정리",
      "문제 정의부터 구현 범위, 일정까지 실행 가능한 계획으로 전환",
      "팀이 바로 움직일 수 있는 형태로 의사결정과 방향을 정리",
    ],
  },
  {
    title: "서비스 아키텍처 설계",
    description: "프론트엔드, 서버 구조, 데이터 흐름을 연결해 운영 가능한 시스템을 설계합니다.",
    items: [
      "프론트엔드 중심에서 시작해 백엔드 인접 구조까지 고려한 설계",
      "성능, 확장성, 운영 비용을 함께 고려한 구조 설계",
      "멀티 프로젝트 환경에서도 일관된 구조와 기준을 유지",
    ],
  },
  {
    title: "운영 문제 해결",
    description: "실서비스에서 발생하는 병목과 구조 문제를 분석하고 직접 해결합니다.",
    items: [
      "세션, 푸시, 렌더링 등 실제 병목 지점을 분석하고 구조 개선",
      "불안정한 시스템을 운영 가능한 상태로 안정화",
      "문제 발생 시 빠르게 원인을 파악하고 해결 방향을 주도",
    ],
  },
  {
    title: "AI / 자동화 제품화",
    description: "AI를 기능이 아니라 실제 서비스로 연결되는 형태로 설계합니다.",
    items: [
      "OCR, LLM 기반 기능을 실제 사용자 흐름에 맞게 설계",
      "Human-in-the-loop 구조로 신뢰 가능한 AI 시스템 구축",
      "프롬프트, UX, 평가 루프를 반복 개선해 실제 사용 가능한 수준으로 고도화",
    ],
  },
]
```

**문제점:**
- 이력서의 3대 강점 중 "멀티플랫폼 연동"(Android Native 모듈 직접 개발, RN 브릿징, NFC·BLE·AR 연동)이 완전히 누락되어 있음
- 현재 "운영 문제 해결"에 세션·푸시·렌더링 언급이 있으나, Native 모듈 직접 개발이라는 하드웨어 수준의 기술 깊이는 드러나지 않음
- projects 섹션 SMTOWN의 핵심 기여(Native Bridge)를 뒷받침하는 역량 카테고리가 없어 프로젝트와 역량 섹션 간 맥락이 단절됨

---

### After

기존 4개 그룹을 유지하면서 "멀티플랫폼 연동" 그룹을 추가합니다.

```typescript
capabilities: [
  {
    title: "문제 구조화 & 실행",
    description: "모호한 요구와 혼란한 상황을 정리해 실행 가능한 구조로 바꿉니다.",
    items: [
      "여러 이해관계가 얽힌 요구를 구조화하고 우선순위를 명확히 정리",
      "문제 정의부터 구현 범위, 일정까지 실행 가능한 계획으로 전환",
      "팀이 바로 움직일 수 있는 형태로 의사결정과 방향을 정리",
    ],
  },
  {
    title: "서비스 아키텍처 설계",
    description: "프론트엔드, 서버 구조, 데이터 흐름을 연결해 운영 가능한 시스템을 설계합니다.",
    items: [
      "프론트엔드 중심에서 시작해 백엔드 인접 구조까지 고려한 설계",
      "성능, 확장성, 운영 비용을 함께 고려한 구조 설계",
      "멀티 프로젝트 환경에서도 일관된 구조와 기준을 유지",
    ],
  },
  {
    title: "멀티플랫폼 연동",
    description:
      "React Native와 Android/iOS Native 모듈을 직접 개발해 서드파티 한계를 독립적으로 해결합니다.",
    items: [
      "Android Native 모듈 직접 개발 및 React Native 브릿징으로 서드파티 호환성 이슈 해결",
      "iOS/AOS 환경별 빌드 차이를 파악하고 플랫폼별 독립 접근 적용",
      "NFC 태그, BLE 응원봉, AR Unity 등 하드웨어·외부 SDK 연동 경험",
    ],
  },
  {
    title: "운영 문제 해결",
    description: "실서비스에서 발생하는 병목과 구조 문제를 분석하고 직접 해결합니다.",
    items: [
      "세션, 푸시, 렌더링 등 실제 병목 지점을 분석하고 구조 개선",
      "불안정한 시스템을 운영 가능한 상태로 안정화",
      "문제 발생 시 빠르게 원인을 파악하고 해결 방향을 주도",
    ],
  },
  {
    title: "AI / 자동화 제품화",
    description: "AI를 기능이 아니라 실제 서비스로 연결되는 형태로 설계합니다.",
    items: [
      "OCR, LLM 기반 기능을 실제 사용자 흐름에 맞게 설계",
      "Human-in-the-loop 구조로 신뢰 가능한 AI 시스템 구축",
      "프롬프트, UX, 평가 루프를 반복 개선해 실제 사용 가능한 수준으로 고도화",
    ],
  },
]
```

**배치 위치 선택 근거:**
"멀티플랫폼 연동"을 "서비스 아키텍처 설계"와 "운영 문제 해결" 사이(3번째 위치)에 배치합니다. 아키텍처 설계 → 플랫폼 연동 기술 → 운영 문제 해결 순으로 기술 깊이가 구체화되는 흐름이 자연스럽기 때문입니다.

---

### 근거

**이력서 대조 결과:**
- 이력서 "멀티플랫폼 연동" 카드: "React Native와 Android Native 브릿지를 직접 개발. iOS/AOS 환경별 호환성 이슈를 독립적으로 해결한 경험." 명시
- SMTOWN 프로젝트 항목: "서드파티 라이브러리 호환 불가 → Android Native 모듈 직접 개발·브릿징", "NFC 태그·BLE 응원봉 연동 기술 가이드" 명시
- CLAUDE.md GAP 분석 2-4: "멀티플랫폼 연동(Android Native Module, RN Bridge)이 capabilities에 없음 → 별도 CapabilityGroup 추가" 명시

**기존 그룹 유지 이유:**
티켓 완료 기준에 "기존 4개 CapabilityGroup이 유지됨"이 포함되어 있으며, 기존 4개 역량 모두 이력서와 정합되는 내용이므로 유지합니다.

---

### 규칙 검증

- [x] CONTENT_ONLY: `app/content.ts`의 `content.capabilities` 배열만 수정 (그룹 추가)
- [x] RESUME_ALIGNED: 이력서 멀티플랫폼 연동 카드 및 SMTOWN 항목 내용과 정합
- [x] NO_FABRICATION: items의 모든 기술 항목(Android Native, NFC, BLE, AR Unity)이 이력서에 명시된 사실
- [x] TYPE_FIRST: `CapabilityGroup` 타입 변경 없음. 기존 타입(`title`, `description`, `items`) 그대로 사용

---

### 연쇄 영향

- **REQ-001 Projects**: SMTOWN의 eyebrow에 "멀티플랫폼" 포함 시 capabilities의 "멀티플랫폼 연동" 그룹과 섹션 간 맥락이 연결됨. 방문자가 Projects → Capabilities 순서로 읽을 때 일관성 확보.
- **REQ-003 heroMetrics**: heroMetrics의 `Native` 항목과 capabilities "멀티플랫폼 연동" 그룹이 같은 역량을 다른 층위에서 설명. 상호 보완 관계.
- **page.tsx**: capabilities 배열 길이가 4 → 5로 변경. 그리드 레이아웃이 `grid-cols-2` 등 고정 값이면 홀수 처리 확인 필요. 렌더링 로직이 배열 map 기반이라면 자동 반영됨.
- **내비게이션**: `navLinks`의 "역량" 링크(`#capabilities`)는 변경 불필요.
