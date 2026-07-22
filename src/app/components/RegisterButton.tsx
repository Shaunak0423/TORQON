import { REGISTER_URL } from "../site.config";

type Props = {
  variant?: "solid" | "outline";
  size?: "md" | "lg";
  className?: string;
  children?: React.ReactNode;
};

export default function RegisterButton({
  variant = "solid",
  size = "md",
  className = "",
  children = "Register Now",
}: Props) {
  const base =
  "items-center justify-center gap-2 rounded-full font-display tracking-wide transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";
  const sizes =
    size === "lg" ? "px-3 py-3 text-xl md:text-xl" : "px-6 py-3 text-base";
  const variants =
    variant === "solid"
      ? "bg-ink text-sun hover:bg-black"
      : "bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-sun";

  return (
    <a
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes} ${variants} ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
