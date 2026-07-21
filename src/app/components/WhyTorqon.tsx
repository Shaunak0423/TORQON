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
    <section className="bg-sun">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
        <h2 className="font-display text-4xl md:text-6xl mb-8">WHY TORQON?</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <p className="bg-coral/70 rounded-2xl px-6 py-4 text-ink font-medium">
            Traditional marathons are only about running.
          </p>
          <p className="bg-sage/70 rounded-2xl px-6 py-4 text-ink font-medium">
            TORQON transforms a marathon into an experience.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-3 text-lg md:text-xl font-medium">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-sun text-sm">
                ✓
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
