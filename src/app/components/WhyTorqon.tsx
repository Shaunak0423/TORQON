const points = [
  "Challenge checkpoints",
  "Sponsor activities",
  "Ice bath recovery",
  "Family friendly",
  "Fitness community",
  "Entertainment",
];

export default function WhyTorqon() {
  return (
    // <section className="pattern-corner pattern-orange bg-sun">
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
        <h2 className="font-display text-3xl md:text-7xl mb-12">WHY TORQON?</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <p className="bg-ink/80 rounded-2xl px-6 py-4 text-paper font-medium">
            Traditional marathons are only about running.
          </p>
          <p className="bg-sage/80 rounded-2xl px-6 py-4 text-paper font-medium">
            TORQON transforms a marathon into an experience.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
          {points.map((p) => (
            <li key={p} className="flex gap-3 text-ink/70 leading-snug ">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-sun text-sm">
                ✓
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    // </section>
  );
}
