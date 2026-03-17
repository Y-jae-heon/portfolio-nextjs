"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialTheme(): Theme {
  const datasetTheme = document.documentElement.dataset.theme;
  if (datasetTheme === "light" || datasetTheme === "dark") {
    return datasetTheme;
  }

  const storedTheme = localStorage.getItem(STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return getSystemTheme();
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") {
      return "light";
    }

    return getInitialTheme();
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const nextTheme: Theme = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      data-variant="secondary"
      aria-label={`${nextTheme} 테마로 전환`}
      aria-pressed={theme === "dark"}
      onClick={() => setTheme(nextTheme)}
      suppressHydrationWarning
      className="interactive-control inline-flex min-h-11 items-center gap-1 rounded-full border border-subtle bg-surface p-1 text-sm font-semibold text-primary shadow-[0_10px_24px_rgba(15,23,42,0.08)] hover:border-strong hover:bg-surface-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <span
        suppressHydrationWarning
        className={`rounded-full px-3 py-2 text-[12px] font-medium transition-colors ${
          theme === "light"
            ? "bg-inset-emphasis text-primary"
            : "text-tertiary"
        }`}
      >
        라이트
      </span>
      <span
        suppressHydrationWarning
        className={`rounded-full px-3 py-2 text-[12px] font-medium transition-colors ${
          theme === "dark"
            ? "bg-inset-emphasis text-primary"
            : "text-tertiary"
        }`}
      >
        다크
      </span>
    </button>
  );
}
