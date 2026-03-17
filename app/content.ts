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

export type TimelineItem = {
  period: string;
  role: string;
  company: string;
  scope: string;
  highlights: string[];
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
  location: "안양",
  headline:
    "복잡한 서비스 문제를\n구조적으로 해결하고,\n실제 운영 가능한 시스템으로 만듭니다.",
  intro:
    "프론트엔드 Web and App, 서버 아키텍처, AI 기능까지 End-to-End로 연결합니다. 모호한 요구를 구조화하고, 제품으로 빠르게 실행하는 데 강점이 있습니다.",
  heroMetrics: [
    {
      value: "0→1",
      label: "SaaS 플랫폼 및 AI 서비스 구축",
      detail:
        "자동 생성형 SaaS와 AI 기능(OCR·LLM)을 실제 서비스로 설계하고 운영 단계까지 연결",
    },
    {
      value: "Multi",
      label: "20+ 프로젝트 수행",
      detail:
        "웹, 모바일, IoT, AI까지 다양한 도메인에서 서비스 구축 및 문제 해결 경험",
    },
    {
      value: "Lead",
      label: "기술 리딩 및 구조 개선",
      detail:
        "기술전략팀 리딩, 업무 워크플로우 개선, 세션 전반적인 시스템 개선 등 복잡한 문제 해결 주도",
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
      slug: "boostree",
      eyebrow: "SaaS 플랫폼",
      name: "Boostree",

      summary:
        "피부과 대상 자동 생성형 SaaS 플랫폼을 설계하고, 도메인/권한/운영 구조까지 포함한 멀티 테넌트 시스템으로 구축했습니다.",

      problem:
        "기존 피부과 CRM과 홈페이지 운영 방식은 수작업과 외주 의존도가 높아 확장성과 운영 효율이 떨어졌습니다. 각 병원별 커스터마이징 비용이 크고, 일관된 관리가 어려운 구조였습니다.",

      role:
        "플랫폼 설계 및 프론트엔드를 맡았으며, 도메인 자동 생성 파이프라인과 권한 구조, 운영 시스템 설계를 주도했습니다.",

      approach: [
        "병원 단위로 자동 생성되는 멀티 테넌시 구조를 설계하고, 도메인 및 배포 파이프라인을 구축했습니다.",
        "시술 상품, 이벤트, 일정, 권한 관리 등 핵심 운영 기능을 표준화된 구조로 설계했습니다.",
        "Next.js 기반으로 SEO 및 페이지 생성 전략을 구성해 마케팅 유입까지 고려했습니다.",
      ],

      impact: [
        "병원별 홈페이지 및 관리 시스템 생성 과정을 자동화했습니다.",
        "기존 수작업 기반 운영을 플랫폼 기반으로 전환했습니다.",
        "운영 및 확장 비용을 구조적으로 줄일 수 있는 기반을 구축했습니다.",
      ],

      stack: [
        "Next.js",
        "TypeScript",
        "Multi-tenant architecture",
        "Automation pipeline",
        "SEO",
      ],

      tradeoff:
        "초기에는 병원별 커스터마이징 요구를 일부 제한하고, 공통 구조를 우선 구축해 확장성과 운영 효율을 확보했습니다.",
    },

    {
      slug: "doctorinhome",
      eyebrow: "AI + IoT 서비스",
      name: "DoctorInHome",

      summary:
        "OCR과 LLM을 활용한 약 정보 자동 기록 기능과 IoT 연동 기반 홈케어 앱을 설계하고 구현했습니다.",

      problem:
        "사용자가 약 정보를 직접 기록해야 하는 번거로움이 있었고, 홈케어 기기 데이터도 앱과 자연스럽게 연결되지 않아 사용자 경험이 단절되어 있었습니다.",

      role:
        "PM 역할과 함께 앱, BOS, 일부 백엔드 구조 설계를 담당하며 전체 서비스 흐름을 설계하고 구현을 주도했습니다.",

      approach: [
        "약 봉투 이미지를 OCR로 텍스트화하고, LLM을 통해 약 정보를 추론하는 자동 기록 기능을 설계했습니다.",
        "IoT 기기와 앱 간 데이터 흐름을 안정적으로 연결하는 구조를 구성했습니다.",
        "사용자 입력을 최소화하고 자동화 중심의 UX 흐름으로 개선했습니다.",
      ],

      impact: [
        "약 정보 입력 과정을 자동화하여 사용자 입력 부담을 크게 줄였습니다.",
        "IoT 데이터와 앱 경험을 연결해 서비스 일관성을 개선했습니다.",
        "프로젝트 PM 및 개발 리딩을 통해 1차 서비스 런칭을 완료했습니다.",
      ],

      stack: [
        "React Native",
        "TypeScript",
        "OCR",
        "LLM",
        "IoT integration",
      ],

      tradeoff:
        "완전 자동화보다 사용자 검증 단계를 유지해 데이터 정확성과 신뢰도를 확보하는 방향을 선택했습니다.",
    },

    {
      slug: "smtown",
      eyebrow: "대규모 서비스 개선",
      name: "SMTown",

      summary:
        "복잡하게 얽힌 세션 구조와 푸시 시스템 병목 문제를 해결하고, 안정적인 운영 구조로 개선했습니다.",

      problem:
        "유저 세션 관리와 푸시 시스템이 비정상적으로 얽혀 있어 병목이 발생했고, 서비스 안정성과 운영 대응이 어려운 상태였습니다.",

      role:
        "기술 리더 역할로 문제 분석 및 구조 개선을 주도하고, 네이티브 모듈 및 RN 마이그레이션을 지원했습니다.",

      approach: [
        "유저 세션 관리 구조를 전면 재정리해 상태 흐름을 단순화했습니다.",
        "OneSignal 기반 푸시 시스템의 병목 원인을 분석하고 구조를 개선했습니다.",
        "RN 버전 업그레이드 및 외부 서비스(AppsFlyer) 전환을 안정적으로 진행했습니다.",
      ],

      impact: [
        "푸시 및 세션 관련 병목 문제를 해결했습니다.",
        "서비스 안정성과 운영 대응 속도를 개선했습니다.",
        "기술 리더 부재 상황에서 프로젝트 안정화를 주도했습니다.",
      ],

      stack: [
        "React Native",
        "TypeScript",
        "Native modules",
        "Push system",
        "Session architecture",
      ],

      tradeoff:
        "단기 기능 개선보다, 전체 세션 구조와 안정성을 우선 재정비하는 방향을 선택했습니다.",
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
      title: "AI / 자동화 제품화",
      description:
        "AI를 기능이 아니라 실제 서비스로 연결되는 형태로 설계합니다.",
      items: [
        "OCR, LLM 기반 기능을 실제 사용자 흐름에 맞게 설계",
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
