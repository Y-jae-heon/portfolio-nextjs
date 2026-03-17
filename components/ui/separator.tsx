type SeparatorProps = {
  className?: string;
};

export function Separator({ className = "" }: SeparatorProps) {
  return (
    <div
      aria-hidden
      className={`border-t border-subtle ${className}`.trim()}
    />
  );
}
