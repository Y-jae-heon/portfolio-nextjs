# CLAUDE.md — 포트폴리오 코드 변경 가이드

> 이 파일은 이력서(`염재헌_토스페이먼츠_이력서.docx/.pdf`)와 현재 포트폴리오 코드를 대조 분석한 결과를 기반으로, 코드 변경 플랜을 AI 에이전트가 실행할 수 있도록 정의한 지침서입니다.

이 이력서에 담긴 염재헌은
문제 앞에서 멈추지 않는 사람이에요.
서드파티가 안 되면 Native 모듈을 직접 짜고, 타이머가 틀리면 브라우저 렌더링 사이클부터 다시 짚고, PM이 없으면 그 자리를 채웁니다. 이 패턴이 이력서 전반에 반복돼요. 한 번의 우연이 아니라 일관된 태도예요.
경계를 두지 않는 사람이에요.
퍼블리셔로 시작해서 백엔드, 네트워크, 앱, 브릿지, PM 역할까지 했어요. 이건 단순히 "풀스택"이라는 말로 설명되지 않아요. 필요한 자리에 필요한 역할로 채워지는 걸 자연스럽게 해온 사람이에요. 직함보다 제품이 먼저인 사람.
다양한 도메인을 넘나든 사람이에요.
핀테크, 헬스케어, 엔터테인먼트, 상담, 채용, 충전소까지. 보통은 한 도메인에서 깊어지는 게 일반적인데, 재헌님은 매번 새로운 맥락에 뛰어들고 그 안에서 리딩 역할을 해왔어요. 적응력과 맥락 파악 속도가 빠른 사람이라는 뜻이에요.

---

## 1. 프로젝트 개요

| 항목       | 내용                                                       |
| ---------- | ---------------------------------------------------------- |
| 프레임워크 | Next.js 16 (App Router, Static-first)                      |
| 언어       | TypeScript                                                 |
| UI         | TailwindCSS v4 + ShadCN                                    |
| 핵심 파일  | `app/content.ts` — 모든 포트폴리오 데이터의 단일 진실 원천 |
| 렌더링     | `app/page.tsx` — content.ts 데이터를 소비하는 정적 페이지  |
| 배포       | Vercel Hobby (서버리스, backend 없음)                      |

**변경 시 원칙:**

- 콘텐츠 변경은 반드시 `app/content.ts`만 수정한다.
- `page.tsx`는 레이아웃 구조 변경이 필요할 때만 수정한다.
- 새 섹션 추가 시 `PortfolioContent` 타입을 먼저 확장한다.

---

## 2. 이력서 vs 포트폴리오 GAP 분석

### 2-1. 대표 프로젝트 불일치 (최우선 수정)

현재 포트폴리오의 featured projects는 이력서에 명시된 대표 프로젝트와 다르다.

| 순위 | 이력서의 프로젝트                                            | 현재 포트폴리오                        | 상태                |
| ---- | ------------------------------------------------------------ | -------------------------------------- | ------------------- |
| 1    | **마인드아너스** (requestAnimationFrame Timer Hook, PM 리딩) | ❌ 없음                                | 추가 필요           |
| 2    | **SMTOWN** (Android Native 브릿지, AR/NFC/BLE)               | ✅ 있음 (내용 상이)                    | 내용 보완           |
| 3    | **리뷰핀치** (AI 리뷰 분석 80% 단축, OpenAI + TensorFlow)    | ❌ 없음                                | 추가 필요           |
| -    | Boostree                                                     | 포트폴리오에만 있음                    | 제거 또는 유지 검토 |
| -    | DoctorInHome                                                 | 포트폴리오에만 있음 (이력서엔 "그 외") | 제거 또는 유지 검토 |

**결론**: featured projects 3개를 마인드아너스 / SMTOWN / 리뷰핀치로 교체해야 한다.

---

### 2-2. Hero 섹션 헤드라인 차이

| 위치               | 현재 텍스트                                                                         | 이력서 기반 권장 텍스트                                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `content.headline` | "복잡한 서비스 문제를\n구조적으로 해결하고,\n실제 운영 가능한 시스템으로 만듭니다." | "주어진 도구로 안 되면 직접 만들고,\n팀에 비어 있는 역할이 있으면\n채워왔습니다."                                           |
| `content.intro`    | 현재 유지 가능                                                                      | "React·React Native 기반 B2B·B2C 서비스를 5년 넘게 리딩하면서, 서드파티 한계에 부딪히면 직접 해결해왔습니다." 방향으로 보완 |

---

### 2-3. heroMetrics 수치 업데이트

이력서의 정량 성과와 현재 heroMetrics가 일치하지 않는다.

| metric         | 현재                          | 이력서 기반 권장                            |
| -------------- | ----------------------------- | ------------------------------------------- |
| value: "0→1"   | SaaS 플랫폼 및 AI 서비스 구축 | 유지 가능                                   |
| value: "Multi" | 20+ 프로젝트 수행             | `경력 5년 6개월` 추가 가능                  |
| value: "Lead"  | 기술 리딩 및 구조 개선        | "AI 분석 80% 단축" 등 구체 성과로 교체 권장 |

---

### 2-4. 역량(capabilities) 섹션 보완

이력서의 3대 강점이 capabilities 섹션에 충분히 반영되지 않았다.

| 이력서 강점                                                   | 현재 포트폴리오 역량             | 보완 방향                                       |
| ------------------------------------------------------------- | -------------------------------- | ----------------------------------------------- |
| **멀티플랫폼 연동** (Android Native Module, RN Bridge)        | 없음                             | 별도 CapabilityGroup 추가 또는 기존 항목에 반영 |
| **서비스 리딩 & 오너십** (PM 부재 시 리딩, 현업 커뮤니케이션) | "문제 구조화 & 실행"에 일부 포함 | 구체 사례 보완 필요                             |
| **자동화 & 구조 설계** (AI 파이프라인 80% 단축, SSR 라우팅)   | "AI / 자동화 제품화"에 일부 포함 | 수치 명시 필요                                  |

---

### 2-5. Timeline 세부 프로젝트 보완

현재 timeline은 회사 단위로만 기록되어 있다. 이력서는 회사 안에서 수행한 개별 프로젝트를 상세히 나열한다.

**슬로그업 (2023.02 - 현재) 내 프로젝트:**

- 마인드아너스 (2025.03~2025.07)
- SMTOWN (2025.01~진행 중)
- 리뷰핀치 (2024.10~2025.03)
- 썬데이 (2024.12~2025.01)
- 닥터인홈, SK가스 행복1톤 등

**Timeline 항목에 subProjects 배열 타입 추가를 검토한다.**

---

### 2-6. 누락된 섹션 추가 검토

이력서에는 있지만 포트폴리오에 없는 항목:

| 항목           | 이력서 내용                                              | 포트폴리오 추가 여부                  |
| -------------- | -------------------------------------------------------- | ------------------------------------- |
| 기술 스택 명시 | TypeScript, React, RN, Next.js, NestJS, AWS, FastLane 등 | Skills 섹션 신규 추가 검토            |
| 학력           | 한국방송통신대학교 컴퓨터과학과 (재학/휴학)              | contact 또는 timeline 하단 추가 검토  |
| 자격증/교육    | 웹디자인기능사, SK AX AI 교육 수료 (2026.03~04 진행 중)  | 자격증 섹션 또는 timeline에 통합 검토 |
| 경력 기간      | 5년 6개월                                                | hero 또는 summary에 명시 검토         |

---

## 3. 코드 변경 플랜 (우선순위 순)

### Phase 1 — 콘텐츠 정합성 수정 (필수, `app/content.ts` 수정)

#### Task 1-1: featured projects 교체

`content.projects` 배열을 다음 3개로 교체한다.

```typescript
// 프로젝트 1: 마인드아너스
{
  slug: "mindaonors",
  eyebrow: "상담 플랫폼",
  name: "마인드아너스",
  summary: "앱·웹 혼합 환경에서 상담사·내담자 간 세션 타이머 오차 문제를 requestAnimationFrame 기반 커스텀 Hook으로 근본 해결했습니다.",
  problem: "setTimeout 기반 타이머가 탭 비활성 시 실행 지연을 누적시켜 상담 세션 종료 시점 오류를 반복적으로 유발했습니다.",
  role: "PM 부재 기간 프로젝트 전반 리딩, 프론트엔드 개발 및 현업 커뮤니케이션 주도.",
  approach: [
    "브라우저 렌더링 사이클에 맞추는 방식이 근본 해결이라 판단, requestAnimationFrame 기반 커스텀 Timer Hook으로 교체.",
    "기존 Hook 구조를 유지해 팀 전환 비용을 최소화하는 방향으로 설계.",
    "세션 및 병합 알고리즘 도입으로 상담 세션 흐름 정합성 확보.",
  ],
  impact: [
    "탭 비활성 상태에서도 타이머 누적 오차를 프레임 수준으로 억제.",
    "세션 시간 불일치 이슈 재현 없음.",
    "PM 부재 기간 전반 리딩으로 서비스 품질 유지.",
  ],
  stack: ["React Native", "React", "NestJS", "TailwindCSS", "ShadCN", "Zustand", "Sendbird Call"],
  tradeoff: "완전한 서버 동기화보다 클라이언트 렌더링 사이클에 맞춘 접근을 선택해 구현 복잡도와 레이턴시 비용을 절감했습니다.",
}

// 프로젝트 2: SMTOWN (기존 내용 보강)
{
  slug: "smtown",
  eyebrow: "대규모 서비스 / 멀티플랫폼",
  name: "SMTown",
  summary: "서드파티 라이브러리 호환 불가 문제를 Android Native 모듈 직접 개발·브릿징으로 해결하고, AR·NFC·BLE 연동을 완료했습니다.",
  problem: "AR Unity 연동 시 서드파티 라이브러리가 기존 앱 환경(Gradle 버전·빌드 구조)과 호환되지 않아 현업 요구사항 충족 불가. iOS는 Xcode 재빌드로 해결 가능했으나 AOS는 별도 접근 필요.",
  role: "기술 리더로 문제 분석 및 구조 개선 주도, Android Native 모듈 개발 및 RN 브릿징, 하드웨어 연동 기술 가이드.",
  approach: [
    "서드파티 교체 대신 Android Native 모듈을 직접 개발해 React Native와 브릿징.",
    "Unity 제작사에서 전달받은 Android 빌드 파일을 직접 분석·수정해 호환성 이슈 해결.",
    "이후 NFC 태그·BLE 응원봉 등 하드웨어 연동 기술 가이드 역할 수행.",
  ],
  impact: [
    "iOS/Android 양 플랫폼 AR Unity 기능 정상 연동 완료.",
    "투입 전 업무 문제점 파악 후 주도적으로 업무 프로세스 개선, 시스템 실패율 감소.",
  ],
  stack: ["React Native", "Android Native Module", "React", "Zustand", "Yarn Berry"],
  tradeoff: "서드파티 교체로 인한 일정 리스크보다 Native 모듈 직접 개발의 유지보수 비용을 선택했습니다.",
}

// 프로젝트 3: 리뷰핀치
{
  slug: "reviewpinch",
  eyebrow: "AI 자동화 서비스",
  name: "리뷰핀치",
  summary: "OpenAI와 TensorFlow 기반 AI 파이프라인으로 고객 리뷰 수십만 건 분석을 자동화해 소요 시간을 80% 단축했습니다.",
  problem: "고객 리뷰 수십만 건을 담당자가 수동으로 분류·분석하는 구조로, 브랜드 하나의 리포트 생성에 수 시간 소요. 의사결정 속도를 저해하는 병목.",
  role: "프로젝트 전반 리딩, 기술·디자인 가이드, 현업 커뮤니케이션. AI 파이프라인 설계 및 백오피스·B2C 웹 구현.",
  approach: [
    "OpenAI 프롬프팅으로 감성 분류 자동화.",
    "TensorFlow 기반 토픽 모델링·형태소 분석으로 구조화된 인사이트 파이프라인 설계.",
    "ReChart로 분석 결과 즉시 시각화해 의사결정 속도 향상.",
  ],
  impact: [
    "브랜드 리뷰 분석 소요 시간 약 80% 단축.",
    "마케팅·전략팀의 데이터 기반 의사결정 속도 향상.",
    "리포트·리뷰 분석 현황 모니터링 백오피스 및 고객용 B2C 웹 개발 완료.",
  ],
  stack: ["React", "NestJS", "Python", "TailwindCSS", "ShadCN", "OpenAI", "TensorFlow", "ReChart"],
  tradeoff: "완전 자동화보다 Human-in-the-loop 구조를 유지해 데이터 신뢰도를 확보하는 방향을 선택했습니다.",
}
```

#### Task 1-2: headline 및 intro 업데이트

```typescript
// content.headline 변경
headline: "주어진 도구로 안 되면 직접 만들고,\n팀에 비어 있는 역할이 있으면\n채워왔습니다.",

// content.intro 변경
intro: "React·React Native 기반 B2B·B2C 서비스를 5년 넘게 리딩하면서, 서드파티 한계에 부딪히면 Android Native 모듈을 직접 개발해 브릿징하고, 타이머 오차가 반복되면 브라우저 렌더링 사이클부터 다시 짚었습니다.",
```

#### Task 1-3: heroMetrics 업데이트

```typescript
heroMetrics: [
  {
    value: "80%",
    label: "AI 파이프라인으로 분석 시간 단축",
    detail: "OpenAI + TensorFlow 기반 리뷰 분석 자동화로 수동 작업 시간 80% 절감",
  },
  {
    value: "5년+",
    label: "React / React Native 기반 B2B·B2C 서비스 리딩",
    detail: "20개 이상의 프로젝트 수행, SaaS·AI·IoT·모바일 도메인 End-to-End 경험",
  },
  {
    value: "Native",
    label: "Android 네이티브 모듈 직접 개발",
    detail: "서드파티 한계를 Android Native Module + RN 브릿징으로 직접 돌파한 경험",
  },
],
```

#### Task 1-4: capabilities 업데이트

기존 4개 그룹에서 **멀티플랫폼 연동** 그룹을 추가하거나, 기존 항목에 내용을 보강한다.

```typescript
// 추가할 CapabilityGroup
{
  title: "멀티플랫폼 연동",
  description: "React Native와 Android/iOS Native 모듈을 직접 개발해 서드파티 한계를 독립적으로 해결합니다.",
  items: [
    "Android Native 모듈 개발로 서드파티 라이브러리 호환성 이슈 직접 해결",
    "iOS/AOS 환경별 빌드 차이를 파악하고 플랫폼별 독립 접근 적용",
    "NFC, BLE, AR Unity 등 하드웨어·외부 SDK 연동 경험",
  ],
},
```

---

### Phase 2 — 구조 개선 (`app/content.ts` 타입 확장 + `app/page.tsx` 보완)

#### Task 2-1: Skills 섹션 신규 추가

이력서에 명시된 스킬 목록을 포트폴리오에 추가한다.

**`content.ts` 타입 추가:**

```typescript
export type SkillGroup = {
  category: string;
  items: string[];
};

// PortfolioContent에 추가
skills: SkillGroup[];
```

**데이터:**

```typescript
skills: [
  { category: "핵심", items: ["TypeScript", "React", "React Native", "Next.js"] },
  { category: "스타일", items: ["TailwindCSS", "ShadCN", "StyledComponent"] },
  { category: "상태관리", items: ["Zustand", "ContextAPI"] },
  { category: "백엔드", items: ["NestJS", "Node.js", "GraphQL", "PostgreSQL", "MySQL"] },
  { category: "인프라", items: ["AWS", "GitHub Actions", "FastLane", "SST"] },
  { category: "기타", items: ["VueJS", "Java", "JSP", "Python", "TensorFlow", "OpenAI"] },
],
```

**`page.tsx` 추가 위치**: `#timeline` 섹션 바로 아래, `#philosophy` 바로 위.

#### Task 2-2: Timeline 서브 프로젝트 보완

```typescript
// TimelineItem 타입 확장
export type SubProject = {
  name: string;
  period: string;
  oneLineSummary: string;
};

export type TimelineItem = {
  period: string;
  role: string;
  company: string;
  scope: string;
  highlights: string[];
  subProjects?: SubProject[]; // 추가
};
```

**슬로그업 timeline 항목에 subProjects 추가:**

```typescript
subProjects: [
  { name: "마인드아너스", period: "2025.03–2025.07", oneLineSummary: "상담사·내담자 매칭 플랫폼 / requestAnimationFrame Timer Hook / PM 리딩" },
  { name: "SMTOWN", period: "2025.01–진행 중", oneLineSummary: "SM Entertainment 팬 서비스 앱 / Android Native Bridge / AR·NFC·BLE 연동" },
  { name: "리뷰핀치", period: "2024.10–2025.03", oneLineSummary: "리뷰 분석 AI 자동화 / OpenAI + TensorFlow / 80% 시간 단축" },
  { name: "썬데이", period: "2024.12–2025.01", oneLineSummary: "채용 평판조회 / Next.js Middleware 라우팅 / SST 서버리스 배포" },
],
```

**`page.tsx`에서 subProjects 렌더링 추가**: 각 TimelineItem 카드 하단에 서브 프로젝트 배지 목록 표시.

#### Task 2-3: Education/Certification 섹션 추가 (선택)

이력서에 있는 학력과 자격증을 timeline 하단 또는 contact 섹션 근처에 추가한다.

```typescript
// content.ts 추가
export type EducationItem = {
  name: string;
  major?: string;
  period: string;
  status?: string;
};

export type CertificationItem = {
  name: string;
  period?: string;
};

// PortfolioContent에 추가
education: EducationItem[];
certifications: CertificationItem[];
```

**데이터:**

```typescript
education: [
  { name: "한국방송통신대학교", major: "컴퓨터과학과", period: "2022.03–현재", status: "재학/휴학" },
],
certifications: [
  { name: "웹디자인기능사 (국가기술자격증)" },
  { name: "스마트디지털 UI/UX 앱&웹디자인 교육 수료", period: "2020.02–2020.07" },
  { name: "SK AX 상생 아카데미 AI 관련 교육 수료", period: "2026.03–2026.04" },
],
```

---

### Phase 3 — 검증

#### Task 3-1: 빌드 확인

```bash
npm run build
```

빌드 에러 없이 통과되어야 한다. TypeScript 타입 오류, missing import, undefined 접근 오류를 확인한다.

#### Task 3-2: 시각적 검증

```bash
npm run dev
```

개발 서버에서 다음을 확인한다:

- Hero 섹션: 새 헤드라인과 metrics 정상 표시
- Projects 섹션: 3개 카드가 마인드아너스/SMTOWN/리뷰핀치로 교체됨
- 상세 project 블록: Problem/Role/Approach/Impact/Tradeoff 전체 표시
- Capabilities: 멀티플랫폼 연동 그룹 표시 (Phase 2 적용 시)
- Skills 섹션: 카테고리별 뱃지 목록 (Phase 2 적용 시)
- Timeline: 서브 프로젝트 표시 (Phase 2 적용 시)

#### Task 3-3: 모바일 반응형 확인

Chrome DevTools에서 모바일 뷰포트(375px)로 전환해 프로젝트 카드, 타임라인, 역량 섹션 레이아웃 확인.

---

## 4. 파일별 변경 요약

| 파일             | 변경 유형 | 변경 내용                                                                                       |
| ---------------- | --------- | ----------------------------------------------------------------------------------------------- |
| `app/content.ts` | 필수 수정 | projects 3개 교체, headline/intro 업데이트, heroMetrics 변경, capabilities 보강                 |
| `app/content.ts` | 선택 추가 | SkillGroup 타입 + skills 데이터, SubProject 타입 + subProjects 데이터, education/certifications |
| `app/page.tsx`   | 선택 수정 | Skills 섹션 렌더링 추가, Timeline subProjects 렌더링 추가                                       |

---

## 5. 변경 불필요 항목

- `components/` — UI 컴포넌트는 변경 불필요
- `app/globals.css` — 디자인 토큰 변경 불필요
- `app/layout.tsx` — 메타데이터는 별도 검토 (변경 가능하나 우선순위 낮음)
- `next.config.ts`, `tsconfig.json`, `package.json` — 변경 불필요

---

## 6. 이력서 원본 참조 경로

| 파일        | 경로                                |
| ----------- | ----------------------------------- |
| Word 이력서 | `./염재헌_토스페이먼츠_이력서.docx` |
| PDF 이력서  | `./염재헌_토스페이먼츠_이력서.pdf`  |

콘텐츠 작성 시 위 파일의 실제 문장을 기준으로 하되, 웹 포트폴리오에 맞게 간결하게 편집한다.

---

## 7. Agent Workflow

포트폴리오 변경 작업은 아래 파이프라인을 따른다. 각 단계는 전용 에이전트/스킬/훅으로 자동화되어 있다.

### 7-1. 워크플로우 파이프라인

```
요구사항 접수 → 분석 → 콘텐츠 제안 → 구현 → 코드 리뷰 → QA 시뮬레이션
```

| 단계 | 스킬 / 에이전트 | 트리거 | 산출물 경로 |
|------|-----------------|--------|-------------|
| 1. 요구사항 분석 | `/requirements-intake` → `requirements-analyzer` 에이전트 | 사용자의 새 작업 지시, 요구사항 파일 제공 | `./ai-work/analysis/YYYY-MM-DD-requirements.json` + `./ai-work/tickets/REQ-XXX-{section}.md` |
| 2. 콘텐츠 제안 | `/content-tuner` → `content-tuner` 에이전트 | `content.ts` 수정 전 (proactive), 콘텐츠 조정 요청 시 | `./ai-work/content-proposals/YYYY-MM-DD-{섹션명}.md` |
| 3. 구현 | 메인 에이전트 직접 수행 | 티켓 기반 구현 시작 | `app/content.ts`, `app/page.tsx` 등 |
| 4. 코드 리뷰 | `/code-reviewer` → `code-reviewer` 에이전트 | 소스 파일 수정 완료 후 (proactive) | `./ai-work/review/YYYY-MM-DD-review.md` |
| 5. QA 시뮬레이션 | `/qa-reporter` → `qa-reporter` 에이전트 | code-reviewer 완료 후 (proactive) | `./ai-work/qa/YYYY-MM-DD-qa.md` |

---

### 7-2. 에이전트 정의

| 에이전트 | 파일 | 모델 | 역할 |
|----------|------|------|------|
| `requirements-analyzer` | `.claude/agents/requirements-analyzer.md` | Sonnet | 요구사항 추출 → 포트폴리오 섹션 매핑 → 구조화 JSON 반환 |
| `content-tuner` | `.claude/agents/content-tuner.md` | Sonnet | 섹션별 Before/After 비교 제안, 이력서 정합성 검증, 규칙 위반 체크 |

---

### 7-3. 스킬 정의

| 스킬 | 파일 | 설명 |
|------|------|------|
| `requirements-intake` | `.claude/skills/requirements-intake/SKILL.md` | 오케스트레이터. requirements-analyzer 호출 → TaskCreate 티켓 발행 → MD 파일 저장 |
| `content-tuner` | `.claude/skills/content-tuner/SKILL.md` | content-tuner 에이전트를 호출해 콘텐츠 조정 제안을 생성 |
| `code-reviewer` | `.claude/skills/code-reviewer/SKILL.md` | 변경 파일 목록 수집 → code-reviewer 에이전트 호출 → 리뷰 리포트 저장 |
| `qa-reporter` | `.claude/skills/qa-reporter/SKILL.md` | 최신 리뷰 리포트 경로 확인 → qa-reporter 에이전트 호출 → QA 리포트 저장 |

---

### 7-4. 훅 설정 (`.claude/settings.json`)

| 이벤트 | 매처 | 스크립트 | 동작 |
|--------|------|----------|------|
| **SessionStart** | `startup\|resume\|compact` | `session-start.sh` | `ai-work/` 디렉토리를 스캔해 미완료 티켓·최신 분석·제안·리뷰·QA 현황을 컨텍스트에 주입 |
| **PreToolUse** | `Edit\|Write` | `check-content-tuner.sh` | `content.ts` 수정 시 오늘 날짜의 content-tuner 제안이 없으면 경고 메시지 주입 (차단하지는 않음) |
| **PostToolUse** | `Edit\|Write` | `track-changes.sh` | 소스 파일(`.ts`, `.tsx`, `.css`, `.json`) 변경 시 `ai-work/.changed-files`에 경로 기록 |
| **SubagentStop** | `code-reviewer` | `post-review-remind.sh` | code-reviewer 완료 후 qa-reporter 실행을 안내하는 컨텍스트 주입 |
| **Stop** | (전체) | `stop-workflow-check.sh` | 세션 종료 시 변경된 파일이 있는데 리뷰/QA가 누락됐으면 경고 |

---

### 7-5. 산출물 디렉토리 구조

```
ai-work/
├── analysis/              # requirements-analyzer JSON 출력
│   └── YYYY-MM-DD-requirements.json
├── tickets/               # 티켓 MD 파일 (세션 간 영속성)
│   ├── REQ-001-Projects.md
│   └── REVIEW-REQ-003-Skills.md    # 확인 필요 티켓
├── content-proposals/     # content-tuner Before/After 제안
│   └── YYYY-MM-DD-{섹션명}.md
├── review/                # code-reviewer 리뷰 리포트
│   └── YYYY-MM-DD-review.md
├── qa/                    # qa-reporter QA 시뮬레이션 리포트
│   └── YYYY-MM-DD-qa.md
└── .changed-files         # track-changes 훅이 기록하는 변경 파일 목록
```

---

### 7-6. 워크플로우 실행 예시

```
사용자: "대표 프로젝트를 이력서 기준으로 교체해줘"

1. /requirements-intake 실행
   → requirements-analyzer가 요구사항 추출 (P0 Projects 섹션)
   → 티켓 발행: REQ-001-Projects.md

2. /content-tuner 실행 (구현 전 필수)
   → content-tuner가 Projects 섹션 Before/After 제안 생성
   → ai-work/content-proposals/2026-03-30-projects.md 저장

3. 구현 (메인 에이전트)
   → app/content.ts 수정
   → check-content-tuner.sh 훅이 제안 존재 확인 → 통과
   → track-changes.sh 훅이 변경 파일 기록

4. /code-reviewer 실행 (구현 완료 후 proactive)
   → 변경 파일 목록 전달 → 리뷰 리포트 저장
   → post-review-remind.sh 훅이 qa-reporter 실행 안내

5. /qa-reporter 실행 (리뷰 완료 후 proactive)
   → 리뷰 리포트 경로 + 변경 파일 전달 → QA 리포트 저장

6. 세션 종료 시
   → stop-workflow-check.sh가 리뷰/QA 누락 여부 최종 확인
```

---

### 7-7. 토큰 절약 원칙

- 에이전트에 **파일 내용을 복사하지 않는다** — 경로만 전달하고 에이전트가 직접 읽게 한다.
- requirements-analyzer의 중간 JSON 출력은 사용자에게 노출하지 않는다.
- code-reviewer / qa-reporter는 파일 경로 목록만으로 호출한다.
