type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-[1.5rem] border border-subtle bg-surface shadow-premium ${className}`.trim()}
    >
      {children}
    </div>
  );
}
