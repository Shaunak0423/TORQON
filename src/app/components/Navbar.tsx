import RegisterButton from "./RegisterButton";

const links = [
  { href: "#event", label: "The Event" },
  { href: "#categories", label: "Categories" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b-2 border-ink">
      <nav className="mx-auto max-w-6xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl md:text-3xl tracking-wide">
          TORQON
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/70">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <RegisterButton size="md" className="!hidden sm:!inline-flex" />
        <RegisterButton size="md" className="!inline-flex sm:!hidden !px-4 !py-2 !text-sm">
          Register
        </RegisterButton>
      </nav>
    </header>
  );
}
