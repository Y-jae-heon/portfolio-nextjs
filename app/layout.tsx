import type { Metadata } from "next";
import "pretendard/dist/web/static/pretendard.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/600.css";
import "./globals.css";

const themeInitScript = `
(() => {
  try {
    const storageKey = "theme";
    const storedTheme = localStorage.getItem(storageKey);
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const theme = storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : systemTheme;

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = "light";
    document.documentElement.style.colorScheme = "light";
  }
})();
`;

export const metadata: Metadata = {
  title: "Jaeheon Yeom | 시니어 프로덕트 엔지니어",
  description:
    "제품 관점의 문제 정의, 프런트엔드 실행, 시스템 사고, AI 기반 반복 개선 역량을 보여주는 정적 우선 포트폴리오입니다.",
  openGraph: {
    title: "Jaeheon Yeom | 시니어 프로덕트 엔지니어",
    description:
      "문제 정의, 아키텍처 사고, 실행 성과를 중심으로 구성한 시니어 프로덕트 엔지니어 포트폴리오입니다.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaeheon Yeom | 시니어 프로덕트 엔지니어",
    description:
      "실제 성과와 프로젝트 사례를 중심으로 정리한 프로덕트 엔지니어 포트폴리오입니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
