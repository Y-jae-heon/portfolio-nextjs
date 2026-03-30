import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { content } from "./content";
import Image from "next/image";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
  tone?: "default" | "panel";
};

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  tone = "default",
}: SectionProps) {
  return (
    <section id={id} className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 max-w-5xl sm:mb-12">
          <p className="font-mono text-[14px] font-medium text-accent-ink">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-ink sm:text-4xl break-all whitespace-pre-wrap">
            {title}
          </h2>
          <p className="mt-4 text-pretty text-base leading-8 text-muted sm:text-lg sm:leading-8">
            {description}
          </p>
        </div>
        <div
          className={
            tone === "panel"
              ? "rounded-[2rem] border border-subtle bg-surface-muted p-6 sm:p-8 lg:p-10"
              : ""
          }
        >
          {children}
        </div>
      </div>
    </section>
  );
}

function MobileNav() {
  return (
    <details className="relative md:hidden">
      <summary
        data-variant="secondary"
        className="interactive-control flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full border border-subtle bg-surface px-4 text-sm font-semibold text-ink shadow-[0_10px_24px_rgba(2,6,23,0.14)] marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        메뉴
      </summary>
      <div className="absolute right-0 mt-3 w-60 rounded-[1.25rem] border border-subtle bg-surface-strong p-4 shadow-premium backdrop-blur-sm">
        <nav aria-label="Mobile primary">
          <ul className="flex flex-col gap-2">
            {content.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="interactive-control block rounded-xl px-3 py-2.5 text-sm font-medium text-muted hover:bg-accent-soft hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </details>
  );
}

function ProjectCard({
  slug,
  eyebrow,
  name,
  summary,
  impact,
  stack,
}: {
  slug: string;
  eyebrow: string;
  name: string;
  summary: string;
  impact?: string;
  stack: string[];
}) {
  return (
    <Card className="flex h-full flex-col p-6 sm:p-7">
      <p className="font-mono text-[11px] font-medium text-accent-ink">
        {eyebrow}
      </p>
      <h3 className="mt-4 text-2xl font-semibold text-ink">
        {name}
      </h3>
      <p className="mt-3 text-sm leading-7 text-secondary">{summary}</p>
      {impact && (
        <div className="mt-6 rounded-[1.25rem] border border-strong bg-inset-emphasis p-4">
          <p className="font-mono text-[11px] font-medium text-accent-ink">
            성과
          </p>
          <p className="mt-3 text-sm font-medium leading-7 text-primary">{impact}</p>
        </div>
      )}
      <div className="mt-6 flex flex-wrap gap-2">
        {stack.slice(0, 3).map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
      <a
        href={`#${slug}`}
        className="interactive-text-link mt-7 inline-flex text-sm font-semibold text-label hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        상세 보기
      </a>
    </Card>
  );
}

function DetailBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[1.25rem] border border-subtle bg-inset-surface p-5">
      <p className="font-mono text-[11px] font-medium text-accent-ink">
        {label}
      </p>
      <div className="mt-3 text-sm leading-7 text-secondary sm:text-base sm:leading-7">
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-page text-ink">
      <header className="sticky top-0 z-40 border-b border-subtle bg-header backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a className="flex flex-col" href="#top">
            <span className="text-lg font-semibold text-ink">
              {content.name}
            </span>
            <span className="mt-1 font-mono text-[11px] font-medium text-muted">
              {content.role}
            </span>
          </a>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {content.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="interactive-text-link text-sm font-medium text-muted hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              data-variant="secondary"
              className="interactive-control hidden min-h-11 items-center rounded-full border border-subtle bg-surface px-4 text-sm font-semibold text-primary shadow-[0_10px_24px_rgba(15,23,42,0.08)] hover:border-strong hover:bg-surface-strong md:inline-flex"
            >
              연락하기
            </a>
            <MobileNav />
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
          <div className="pointer-events-none absolute inset-x-0 top-10 mx-auto h-72 max-w-6xl rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_62%)] blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:items-stretch lg:gap-8">
            <div className="lg:col-span-7 lg:pr-8">
              <p className="font-mono text-[11px] font-medium text-accent-ink">
                {content.location}
              </p>
              <h1 className="mt-5 max-w-4xl text-balance text-xl font-semibold leading-[1.08] text-ink sm:text-2xl lg:text-4xl whitespace-pre-wrap">
                {content.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted sm:leading-9">
                {content.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {content.chips.map((chip) => (
                  <Badge key={chip}>{chip}</Badge>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <ButtonLink href="#projects">프로젝트 보기</ButtonLink>
                <ButtonLink href="#contact" variant="secondary">
                  연락하기
                </ButtonLink>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <Card className="relative h-full overflow-hidden p-6 sm:p-7">
                <div className="pointer-events-none absolute inset-x-6 top-0 h-32 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_72%)] blur-2xl" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] font-medium text-accent-ink">
                        핵심 성과
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted">
                        실행 속도와 제품 신뢰도를 함께 보여주는 최근 사례입니다.
                      </p>
                    </div>
                    <div className="rounded-full border border-subtle bg-inset-surface px-3 py-1.5 font-mono text-[11px] font-medium text-tertiary">
                      Dashboard
                    </div>
                  </div>
                  <ul className="mt-7 grid gap-4">
                    {content.heroMetrics.map((metric, index) => (
                      <li
                        key={metric.label}
                        className={`rounded-[1.35rem] border p-5 ${
                          index === 0
                            ? "border-strong bg-inset-emphasis"
                            : "border-subtle bg-inset-surface"
                        }`}
                      >
                        <p className="font-mono text-3xl font-semibold text-ink">
                          {metric.value}
                        </p>
                        <p className="mt-3 text-sm font-semibold text-ink">
                          {metric.label}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-muted">
                          {metric.detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </aside>
          </div>
        </section>

        <Section
          id="summary"
          eyebrow="요약"
          title={"복잡한 서비스와 조직 환경 속에서도\n끝까지 실행으로 연결하는 엔지니어입니다."}
          description={content.summary.lead}
          tone="panel"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.95fr)]">
            <div className="space-y-5 text-base leading-8 text-muted sm:text-lg sm:leading-9">
              {content.summary.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Card className="bg-surface-strong p-6">
              <p className="font-mono text-[11px] font-medium text-accent-ink">
                일하는 방식
              </p>
              <ul className="mt-5 space-y-4">
                {content.summary.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                    <span className="text-sm leading-7 text-ink">{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="대표 프로젝트"
          title="문제 정의, 시스템 사고, 실행 완성도를 보여주는 대표 프로젝트 3건입니다."
          description="각 사례는 문제를 어떻게 다시 정의했는지, 어떤 기술 경계를 선택했는지, 그리고 실제로 어떤 변화를 만들었는지 기준으로 정리했습니다."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {content.projects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                eyebrow={project.eyebrow}
                name={project.name}
                summary={project.summary}
                impact={project.impact[0]}
                stack={project.stack}
              />
            ))}
          </div>

          <div className="mt-10 space-y-6">
            {content.projects.map((project, index) => (
              <article
                id={project.slug}
                key={project.slug}
                className="overflow-hidden rounded-[2rem] border border-subtle bg-surface shadow-premium"
              >
                <div className="grid gap-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                  <div className="border-b border-subtle bg-surface-strong p-6 sm:p-8 lg:border-b-0 lg:border-r">
                    <p className="font-mono text-[11px] font-medium text-accent-ink">
                      {project.eyebrow}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold text-ink sm:text-[2rem]">
                      {project.name}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-secondary sm:text-base sm:leading-8">
                      {project.summary}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>
                    <div className="mt-8 rounded-[1.5rem] border border-strong bg-inset-emphasis p-5">
                      <p className="font-mono text-[11px] font-medium text-accent-ink">
                        핵심 성과
                      </p>
                      <p className="mt-3 text-base font-medium leading-7 text-primary">
                        {project.impact[0]}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <DetailBlock label="문제">
                        <p>{project.problem}</p>
                      </DetailBlock>
                      <DetailBlock label="역할">
                        <p>{project.role}</p>
                      </DetailBlock>
                      <DetailBlock label="접근 방식">
                        <ul className="space-y-2">
                          {project.approach.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </DetailBlock>
                      <DetailBlock label="성과">
                        <ul className="space-y-2">
                          {project.impact.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </DetailBlock>
                    </div>

                    <Separator className="my-6" />

                    <div className="rounded-[1.5rem] border border-subtle bg-surface-muted p-5">
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-mono text-[11px] font-medium text-accent-ink">
                          트레이드오프
                        </p>
                        <span className="font-mono text-[11px] font-medium text-tertiary">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-secondary sm:text-base sm:leading-8">
                        {project.tradeoff}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="capabilities"
          eyebrow="역량"
          title={"기술이 아니라,\n실제 문제를 해결하는 방식으로 정의한 역량입니다."}
          description="여러 프로젝트와 조직이 얽힌 환경에서 문제를 구조화하고, 실제로 동작하는 시스템으로 연결해왔습니다. 제품 실행, 아키텍처 설계, 운영 문제 해결, AI 제품화까지 전 과정을 다룹니다."
          tone="panel"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {content.capabilities.map((group) => (
              <Card key={group.title} className="bg-surface-strong p-6">
                <h3 className="text-2xl font-semibold text-ink">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{group.description}</p>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2.5 h-2 w-2 rounded-full bg-accent" />
                      <span className="text-sm leading-7 text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="timeline"
          eyebrow="경력"
          title={"구현에서 시작해서\n서비스 구조와 조직 실행까지 다루는 역할로 확장해왔습니다."}
          description="빠르게 만드는 것에서 시작해, 지금은 복잡한 서비스와 조직 환경을 정리하고 실행 가능한 구조로 만드는 데 집중하고 있습니다."
        >
          <div className="relative space-y-5 pl-6 sm:pl-8">
            <div className="absolute bottom-0 left-0 top-0 w-px bg-[linear-gradient(to_bottom,rgba(59,130,246,0.5),rgba(148,163,184,0.18),rgba(59,130,246,0.18))]" />
            {content.timeline.map((item) => (
              <article
                key={`${item.period}-${item.company}`}
                className="relative rounded-[1.75rem] border border-subtle bg-surface p-6 sm:p-7"
              >
                <div className="absolute -left-[1.85rem] top-8 h-3 w-3 rounded-full border border-[rgba(59,130,246,0.65)] bg-page shadow-[0_0_0_4px_rgba(59,130,246,0.16)] sm:-left-[2.35rem]" />
                <p className="font-mono text-[11px] font-medium text-accent-ink">
                  {item.period}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-ink">
                  {item.role} · {item.company}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.scope}</p>
                <ul className="mt-5 space-y-3">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2.5 h-2 w-2 rounded-full bg-accent" />
                      <span className="text-sm leading-7 text-ink">{highlight}</span>
                    </li>
                  ))}
                </ul>
                {item.subProjects && item.subProjects.length > 0 && (
                  <div className="mt-6 rounded-[1.25rem] border border-subtle bg-inset-surface p-5">
                    <p className="font-mono text-[11px] font-medium text-accent-ink">
                      주요 프로젝트
                    </p>
                    <div className="mt-3 space-y-3">
                      {item.subProjects.map((sub) => (
                        <div key={sub.name} className="flex flex-col gap-1 rounded-xl border border-subtle bg-surface p-3 sm:flex-row sm:items-center sm:gap-3">
                          <div className="flex items-center gap-2">
                            <Badge>{sub.name}</Badge>
                            <span className="font-mono text-[11px] text-tertiary">{sub.period}</span>
                          </div>
                          <span className="text-sm text-muted">{sub.oneLineSummary}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="기술 스택"
          title={"프론트엔드를 중심으로\n서버, AI, 인프라까지 확장해온 기술 스택입니다."}
          description="각 프로젝트에서 실제로 사용하고 문제를 해결한 기술들을 카테고리별로 정리했습니다."
          tone="panel"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.skills.map((group) => (
              <div key={group.category} className="rounded-[1.25rem] border border-subtle bg-surface-strong p-5">
                <p className="font-mono text-[11px] font-medium text-accent-ink">
                  {group.category}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {(content.education.length > 0 || content.certifications.length > 0) && (
          <Section
            id="education"
            eyebrow="학력 / 자격"
            title="지속적으로 학습하고 성장해온 기록입니다."
            description="실무와 병행하며 컴퓨터과학 학위를 이수 중이고, 관련 자격과 교육을 통해 역량을 확장해왔습니다."
          >
            <div className="grid gap-5 md:grid-cols-2">
              {content.education.length > 0 && (
                <Card className="p-6">
                  <p className="font-mono text-[11px] font-medium text-accent-ink">학력</p>
                  <ul className="mt-4 space-y-3">
                    {content.education.map((edu) => (
                      <li key={edu.name} className="flex flex-col gap-1">
                        <span className="text-base font-semibold text-ink">{edu.name}</span>
                        {edu.major && <span className="text-sm text-secondary">{edu.major}</span>}
                        <span className="font-mono text-[11px] text-tertiary">
                          {edu.period}{edu.status ? ` · ${edu.status}` : ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
              {content.certifications.length > 0 && (
                <Card className="p-6">
                  <p className="font-mono text-[11px] font-medium text-accent-ink">자격 / 교육</p>
                  <ul className="mt-4 space-y-3">
                    {content.certifications.map((cert) => (
                      <li key={cert.name} className="flex flex-col gap-1">
                        <span className="text-sm font-medium text-ink">{cert.name}</span>
                        {cert.period && (
                          <span className="font-mono text-[11px] text-tertiary">{cert.period}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
          </Section>
        )}

        <Section
          id="philosophy"
          eyebrow="문제 해결 방식"
          title={"모호한 상황에서도 실행 가능한 방향을 만드는\n문제 해결 기준입니다."}
          description="복잡한 요구와 조직 환경 속에서 문제를 어떻게 구조화하고, 실제로 동작하는 시스템으로 연결하는지에 대한 판단 기준입니다."
          tone="panel"
        >
          <ol className="grid gap-5 md:grid-cols-2">
            {content.philosophy.map((item, index) => (
              <li
                key={item.title}
                className="rounded-[1.75rem] border border-subtle bg-surface-strong p-6"
              >
                <p className="font-mono text-[11px] font-medium text-accent-ink">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="contact"
          eyebrow="연락"
          title="프로덕트 엔지니어 역할을 검토하고 있습니다."
          description="문제 정의부터 시스템 설계, 실제 구현 디테일까지 함께 책임질 수 있는 엔지니어를 찾고 있다면 이야기 나눠보고 싶습니다."
        >
          <Card className="overflow-hidden p-8 sm:p-10">
            <div className="grid gap-8 md:grid-cols-[1.8fr_0.95fr]">
              <div className="rounded-[1.75rem] border border-subtle bg-surface-strong p-6">
                <p className="font-mono text-[11px] font-medium text-accent-ink">
                  Contact
                </p>
                <p className="mt-4 text-lg font-semibold text-ink">
                  {content.contact.location}
                </p>
                <p className="mt-3 max-w-lg text-sm leading-7 text-muted">
                  제품 맥락을 이해하면서 프런트엔드 실행과 시스템적 판단을 함께 가져갈 수 있는 역할을 우선적으로 검토합니다.
                </p>
                <ButtonLink href={`mailto:${content.contact.email}`} className="mt-6">
                  {content.contact.email}
                </ButtonLink>
              </div>
              <div className="flex gap-4 justify-center items-center">
                {content.contact.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    data-variant="secondary"
                    className="interactive-control items-center flex rounded-[1.5rem] border border-subtle bg-surface p-5 shadow-[0_12px_28px_rgba(2,6,23,0.14)] hover:border-strong hover:bg-surface-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                  >
                    <div className="flex self-stretch items-center gap-2">
                    <Image src={link.img} width={40} height={40} alt={`${link.label} logo`} />
                    <p className="text-sm font-semibold text-ink">Go to {link.label}</p>
                    </div>
                    {/* <p className="mt-2 text-sm leading-6 text-muted">{link.note}</p> */}
                  </a>
                ))}
              </div>
            </div>
          </Card>
        </Section>
      </main>

      <footer className="border-t border-subtle py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-xs text-muted sm:px-8 md:flex-row md:items-center md:justify-between">
          <span>© 2026 {content.name}</span>
          <span>명확한 문제 정의, 성과, 실행력을 빠르게 전달하도록 설계했습니다.</span>
        </div>
      </footer>
    </div>
  );
}
