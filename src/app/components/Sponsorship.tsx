const benefits = [
  "Start to finish branding",
  "Route branding",
  "Stage backdrop",
  "Runners' BIBs",
  "Standees",
  "Water stations",
  "Registration desks",
  "Instagram, Facebook, YouTube & website",
];

export default function Sponsorship() {
  return (
    <section id="sponsors" className="pattern-corner pattern-yellow bg-coral/25">
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
        <p className="tag-label text-xs uppercase mb-6">
          <span>06 — Partner with us</span>
        </p>
        <h2 className="font-display text-3xl md:text-7xl mb-14">
          SPONSORSHIP BENEFITS
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-4">
              <span className="h-2.5 w-2.5 rounded-full bg-ink shrink-0" />
              <span className="text-lg md:text-xl">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
