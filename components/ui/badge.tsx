type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-subtle bg-accent-soft px-3 py-1.5 font-mono text-[11px] font-medium tracking-[0.1em] text-label ${className}`.trim()}
    >
      {children}
    </span>
  );
}
