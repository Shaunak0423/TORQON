export default function Chevrons({ className = "" }: { className?: string }) {
  return (
    <span className={`chevrons font-display text-lg ${className}`} aria-hidden="true">
      <span>&gt;</span><span>&gt;</span><span>&gt;</span><span>&gt;</span>
    </span>
  );
}