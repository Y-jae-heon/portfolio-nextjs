import { IMG } from "@/app/assets";
import { StaticImageData } from "next/image";

export type NavLink = {
  label: string;
  href: `#${string}`;
};

export type HeroMetric = {
  value: string;
  label: string;
  detail: string;
};

export type Project = {
  slug: string;
  eyebrow: string;
  name: string;
  summary: string;
  problem: string;
  role: string;
  approach: string[];
  impact: string[];
  stack: string[];
  tradeoff: string;
};

export type CapabilityGroup = {
  title: string;
  description: string;
  items: string[];
};

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
  subProjects?: SubProject[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

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

export type PhilosophyItem = {
  title: string;
  description: string;
};

export type PortfolioContent = {
  name: string;
  role: string;
  location: string;
  headline: string;
  intro: string;
  heroMetrics: HeroMetric[];
  chips: string[];
  navLinks: NavLink[];
  summary: {
    lead: string;
    paragraphs: string[];
    bullets: string[];
  };
  projects: Project[];
  capabilities: CapabilityGroup[];
  timeline: TimelineItem[];
  skills: SkillGroup[];
  education: EducationItem[];
  certifications: CertificationItem[];
  philosophy: PhilosophyItem[];
  contact: {
    email: string;
    location: string;
    links: { label: string; href: string; note: string, img: StaticImageData }[];
  };
};

export const content: PortfolioContent = {
  name: "Jaeheon Yeom",
  role: "프로덕트 엔지니어",
  location: "Frontend Engineer · 경력 5년+",
  headline:
    "주어진 도구로 안 되면 직접 만들고,\n팀에 비어 있는 역할이 있으면\n채워왔습니다.",
  intro:
    "React·React Native 기반 B2B·B2C 서비스를 5년 넘게 리딩하면서, 서드파티 한계에 부딪히면 Android Native 모듈을 직접 개발해 브릿징하고, 타이머 오차가 반복되면 브라우저 렌더링 사이클부터 다시 짚었습니다.",
  heroMetrics: [
    {
      value: "80%",
      label: "AI 파이프라인으로 분석 시간 단축",
      detail:
        "OpenAI + TensorFlow 기반 리뷰 분석 자동화로 수동 작업 시간 80% 절감",
    },
    {
      value: "5년+",
      label: "React / React Native 기반 B2B·B2C 서비스 리딩",
      detail:
        "20개 이상의 프로젝트 수행, SaaS·AI·IoT·모바일 도메인 End-to-End 경험",
    },
    {
      value: "Native",
      label: "Android 네이티브 모듈 직접 개발",
      detail:
        "서드파티 한계를 Android Native Module + RN 브릿징으로 직접 돌파한 경험",
    },
  ],

  chips: [
    "End-to-End 개발",
    "서비스 아키텍처 설계",
    "운영 문제 해결",
    "AI 기능 설계 및 적용",
  ],
  navLinks: [
    { label: "프로젝트", href: "#projects" },
    { label: "역량", href: "#capabilities" },
    { label: "경력", href: "#timeline" },
    { label: "스킬", href: "#skills" },
    { label: "학력/자격", href: "#education" },
    { label: "문제 해결 방식", href: "#philosophy" },
    { label: "연락", href: "#contact" },
  ],
  summary: {
    lead:
      "여러 프로젝트와 이해관계가 얽힌 환경에서 문제를 구조화하고, 실제로 동작하는 시스템으로 연결하는 역할을 해왔습니다. 프론트엔드 구현을 중심으로, 서버 아키텍처와 AI 기능까지 고려해 제품이 운영 가능한 상태로 이어지도록 만듭니다.",
    paragraphs: [
    "20개 이상의 프로젝트를 수행하며 SaaS 플랫폼, IoT 연동 앱, AI 기반 서비스까지 다양한 영역을 경험했습니다. 단순 구현이 아니라, 서비스가 운영되는 과정에서 발생하는 병목과 구조 문제를 해결하는 데 집중해왔습니다.",
    
    "기술전략팀 리딩과 여러 조직 간 협업 과정에서 요구를 다시 정의하고, 트레이드오프를 명확히 드러내며, 이후에도 확장 가능한 구조를 남기는 방식으로 일해왔습니다. 혼란한 상황에서도 실행 가능한 방향으로 정리하는 것이 가장 큰 강점입니다.",
  ],

  bullets: [
    "모호한 요구를 구조화하고, 실행 가능한 계획과 지표로 전환합니다.",
    "프론트엔드부터 서비스 아키텍처, AI 기능까지 End-to-End로 연결합니다.",
    "운영 중 발생하는 성능, 세션, 구조 문제를 직접 해결합니다.",
    "여러 팀과 이해관계를 조율하며 빠르게 실행 가능한 상태를 만듭니다.",
  ],
  },
  projects: [
    {
      slug: "mindaonors",
      eyebrow: "상담 플랫폼",
      name: "마인드아너스",

      summary:
        "앱·웹 혼합 환경에서 상담사·내담자 간 세션 타이머 오차 문제를 requestAnimationFrame 기반 커스텀 Hook으로 근본 해결했습니다.",

      problem:
        "setTimeout 기반 타이머가 탭 비활성 시 실행 지연을 누적시켜 상담 세션 종료 시점 오류를 반복적으로 유발했습니다.",

      role:
        "PM 부재 기간 프로젝트 전반 리딩, 프론트엔드 개발 및 현업 커뮤니케이션 주도.",

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

      tradeoff:
        "완전한 서버 동기화보다 클라이언트 렌더링 사이클에 맞춘 접근을 선택해 구현 복잡도와 레이턴시 비용을 절감했습니다.",
    },

    {
      slug: "smtown",
      eyebrow: "대규모 서비스 / 멀티플랫폼",
      name: "SMTown",

      summary:
        "서드파티 라이브러리 호환 불가 문제를 Android Native 모듈 직접 개발·브릿징으로 해결하고, AR·NFC·BLE 연동을 완료했습니다.",

      problem:
        "AR Unity 연동 시 서드파티 라이브러리가 기존 앱 환경(Gradle 버전·빌드 구조)과 호환되지 않아 현업 요구사항 충족 불가. iOS는 Xcode 재빌드로 해결 가능했으나 AOS는 별도 접근 필요.",

      role:
        "기술 리더로 문제 분석 및 구조 개선 주도, Android Native 모듈 개발 및 RN 브릿징, 하드웨어 연동 기술 가이드.",

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

      tradeoff:
        "서드파티 교체로 인한 일정 리스크보다 Native 모듈 직접 개발의 유지보수 비용을 선택했습니다.",
    },

    {
      slug: "reviewpinch",
      eyebrow: "AI 자동화 서비스",
      name: "리뷰핀치",

      summary:
        "OpenAI와 TensorFlow 기반 AI 파이프라인으로 고객 리뷰 수십만 건 분석을 자동화해 소요 시간을 80% 단축했습니다.",

      problem:
        "고객 리뷰 수십만 건을 담당자가 수동으로 분류·분석하는 구조로, 브랜드 하나의 리포트 생성에 수 시간 소요. 의사결정 속도를 저해하는 병목.",

      role:
        "프로젝트 전반 리딩, 기술·디자인 가이드, 현업 커뮤니케이션. AI 파이프라인 설계 및 백오피스·B2C 웹 구현.",

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

      tradeoff:
        "완전 자동화보다 Human-in-the-loop 구조를 유지해 데이터 신뢰도를 확보하는 방향을 선택했습니다.",
    },
  ],
  capabilities: [
    {
      title: "문제 구조화 & 실행",
      description:
        "모호한 요구와 혼란한 상황을 정리해 실행 가능한 구조로 바꿉니다.",
      items: [
        "여러 이해관계가 얽힌 요구를 구조화하고 우선순위를 명확히 정리",
        "문제 정의부터 구현 범위, 일정까지 실행 가능한 계획으로 전환",
        "팀이 바로 움직일 수 있는 형태로 의사결정과 방향을 정리",
      ],
    },

    {
      title: "서비스 아키텍처 설계",
      description:
        "프론트엔드, 서버 구조, 데이터 흐름을 연결해 운영 가능한 시스템을 설계합니다.",
      items: [
        "프론트엔드 중심에서 시작해 백엔드 인접 구조까지 고려한 설계",
        "성능, 확장성, 운영 비용을 함께 고려한 구조 설계",
        "멀티 프로젝트 환경에서도 일관된 구조와 기준을 유지",
      ],
    },

    {
      title: "운영 문제 해결",
      description:
        "실서비스에서 발생하는 병목과 구조 문제를 분석하고 직접 해결합니다.",
      items: [
        "세션, 푸시, 렌더링 등 실제 병목 지점을 분석하고 구조 개선",
        "불안정한 시스템을 운영 가능한 상태로 안정화",
        "문제 발생 시 빠르게 원인을 파악하고 해결 방향을 주도",
      ],
    },

    {
      title: "멀티플랫폼 연동",
      description:
        "React Native와 Android/iOS Native 모듈을 직접 개발해 서드파티 한계를 독립적으로 해결합니다.",
      items: [
        "Android Native 모듈 개발로 서드파티 라이브러리 호환성 이슈 직접 해결",
        "iOS/AOS 환경별 빌드 차이를 파악하고 플랫폼별 독립 접근 적용",
        "NFC, BLE, AR Unity 등 하드웨어·외부 SDK 연동 경험",
      ],
    },

    {
      title: "AI / 자동화 제품화",
      description:
        "AI를 기능이 아니라 실제 서비스로 연결되는 형태로 설계합니다.",
      items: [
        "OpenAI + TensorFlow 기반 AI 파이프라인으로 리뷰 분석 시간 80% 단축",
        "Human-in-the-loop 구조로 신뢰 가능한 AI 시스템 구축",
        "프롬프트, UX, 평가 루프를 반복 개선해 실제 사용 가능한 수준으로 고도화",
      ],
    },
  ],
  timeline: [
    {
      period: "2023 — 현재",
      role: "프로덕트 엔지니어 → 기술전략팀 팀장",
      company: "주식회사 슬로그업",

      scope:
        "SaaS, AI, 모바일 앱, 플랫폼 안정성까지 다양한 프로젝트를 수행하며, 현재는 기술전략팀을 리딩하며 조직과 서비스 전반의 기술 방향을 담당하고 있습니다.",

      highlights: [
        "10개 이상의 프로젝트를 수행하며 SaaS, AI, IoT 서비스까지 End-to-End로 설계 및 구현",
        "SMTown 등 복잡한 서비스, 대형 플랫폼에서 문제를 분석하고 구조 개선 주도",
        "AI TF 및 AI 사업팀을 주도하며 RAG 기반 시스템과 AI 기능을 서비스로 연결",
      ],
      subProjects: [
        { name: "마인드아너스", period: "2025.03–2025.07", oneLineSummary: "상담사·내담자 매칭 플랫폼 / requestAnimationFrame Timer Hook / PM 리딩" },
        { name: "SMTOWN", period: "2025.01–진행 중", oneLineSummary: "SM Entertainment 팬 서비스 앱 / Android Native Bridge / AR·NFC·BLE 연동" },
        { name: "리뷰핀치", period: "2024.10–2025.03", oneLineSummary: "리뷰 분석 AI 자동화 / OpenAI + TensorFlow / 80% 시간 단축" },
        { name: "썬데이", period: "2024.12–2025.01", oneLineSummary: "채용 평판조회 / Next.js Middleware 라우팅 / SST 서버리스 배포" },
      ],
    },
    {
      period: "2022.09 — 2023.02",
      role: "전환 및 성장 구간",
      company: "Frontend 중심 전환",

      scope:
        "기존 SI/풀스택 경험을 기반으로 React Native, React, Next.js 중심의 프론트엔드 및 제품 중심 개발자로 방향을 전환했습니다.",

      highlights: [
        "React 기반 모바일 앱/웹 개발 경험 시작",
        "TypeScript, 상태관리, 컴포넌트 구조 설계 등 프론트엔드 역량 강화",
        "단순 구현에서 제품 관점과 사용자 흐름 중심 개발로 관점 전환",
      ],
    },
    {
      period: "2020.06 — 2022.09",
      role: "소프트웨어 엔지니어 (주임)",
      company: "(주)새솔소프트",

      scope:
        "Spring 기반 MVC 구조에서 퍼블리싱부터 프론트엔드, 백엔드까지 전반을 담당하며 ERP, 스트리밍, 관제 시스템 등 다양한 프로젝트를 수행했습니다.",

      highlights: [
        "ERP, 관제 시스템, 스트리밍 플랫폼 등 10개 이상의 프로젝트를 빠르게 구축 및 유지보수",
        "온프레미스 환경과 네트워크 설계까지 포함된 시스템 개발 경험",
        "Node, Redis, 실시간 소켓 등 다양한 기술을 활용한 서비스 구현 경험",
      ],
    },
  ],
  skills: [
    { category: "핵심", items: ["TypeScript", "React", "React Native", "Next.js"] },
    { category: "스타일", items: ["TailwindCSS", "ShadCN", "StyledComponent"] },
    { category: "상태관리", items: ["Zustand", "ContextAPI"] },
    { category: "백엔드", items: ["NestJS", "Node.js", "GraphQL", "PostgreSQL", "MySQL"] },
    { category: "인프라", items: ["AWS", "GitHub Actions", "FastLane", "SST"] },
    { category: "기타", items: ["VueJS", "Java", "JSP", "Python", "TensorFlow", "OpenAI"] },
  ],
  education: [
    { name: "한국방송통신대학교", major: "컴퓨터과학과", period: "2022.03–현재", status: "재학/휴학" },
  ],
  certifications: [
    { name: "웹디자인기능사 (국가기술자격증)" },
    { name: "스마트디지털 UI/UX 앱&웹디자인 교육 수료", period: "2020.02–2020.07" },
    { name: "SK AX 상생 아카데미 AI 관련 교육 수료", period: "2026.03–2026.04" },
  ],
  philosophy: [
    {
      title: "모호한 요구를 그대로 구현하지 않고, 먼저 구조화합니다.",
      description:
        "여러 이해관계와 요구가 섞인 상태에서는 구현보다 문제를 다시 정의하는 것이 먼저입니다. 무엇을 만들지보다, 무엇을 해결해야 하는지를 명확히 하는 데 시간을 씁니다.",
    },

    {
      title: "아키텍처는 ‘지금 팀이 감당할 수 있는 구조’로 설계합니다.",
      description:
        "이론적으로 완벽한 구조보다 중요한 것은 실제 팀이 유지할 수 있는 구조입니다. 팀의 숙련도, 일정, 조직 상황을 고려해 현실적으로 유지 가능한 설계를 선택합니다.",
    },

    {
      title: "운영에서 깨지는 시스템은 좋은 구현이 아니라고 봅니다.",
      description:
        "성능, 세션, 데이터 흐름 등은 실제 서비스에서 검증되어야 합니다. 문제는 운영에서 드러나기 때문에, 항상 운영 환경을 기준으로 설계하고 개선합니다.",
    },

    {
      title: "혼란한 상황에서도 실행 가능한 방향을 만드는 역할을 합니다.",
      description:
        "조직이 정리되어 있지 않거나 방향이 불명확한 상황에서도, 팀이 움직일 수 있는 최소한의 구조와 기준을 만들어 실행으로 연결하는 것을 중요하게 생각합니다.",
    },
  ],
  contact: {
    email: "yeomjae5766@gmail.com",
    location: "원격 및 하이브리드 포지션 검토 가능",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Y-jae-heon",
        note: "코드와 실험, 구현 디테일을 확인할 수 있습니다.",
        img: IMG.GitHubLogo,
      },
      // {
      //   label: "LinkedIn",
      //   href: "https://www.linkedin.com/in/jaeheon-yeom/",
      //   note: "경력 맥락과 대외 프로필을 볼 수 있습니다.",
      // },
    ],
  },
};
