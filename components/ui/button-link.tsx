type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const base =
    "interactive-control inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";
  const styles =
    variant === "primary"
      ? "border border-transparent bg-accent !text-white shadow-[0_12px_30px_var(--accent-glow)] hover:bg-accent-strong"
      : "border border-subtle bg-surface text-primary shadow-[0_10px_24px_rgba(15,23,42,0.08)] hover:border-strong hover:bg-surface-strong";

  return (
    <a
      href={href}
      data-variant={variant}
      className={`${base} ${styles} ${className}`.trim()}
    >
      {children}
    </a>
  );
}
