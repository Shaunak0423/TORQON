export default function RouteDivider({
  color = "var(--ink)",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      className={`route-divider ${className}`}
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 20 C 60 0, 120 40, 180 20 S 300 0, 360 20 S 480 40, 540 20 S 660 0, 720 20 S 840 40, 900 20 S 1020 0, 1080 20 S 1170 30, 1200 20"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeDasharray="2 12"
        strokeLinecap="round"
      />
    </svg>
  );
}
