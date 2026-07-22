import Image from "next/image";

const cities = [
  { name: "Ponda", pct: 52.1 },
  { name: "Panjim", pct: 21.3 },
  { name: "Margao", pct: 17.1 },
  { name: "Mapusa", pct: 9.5 },
];

const audience = [
  "Youth",
  "Working individuals",
  "Fitness enthusiasts",
  "Families & children",
];

export default function TargetAudience() {
  return (
    <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-ink/40 mb-3">
        05 — Who&apos;s showing up
      </p>
      <h2 className="font-display text-3xl md:text-7xl mb-14">TARGET AUDIENCE</h2>

      <div className="grid md:grid-cols-2 gap-14">
        <div>
          <p className="text-lg leading-relaxed text-ink/70 mb-8">
            Designed for youth, working individuals, fitness enthusiasts and
            families — TORQON promotes active lifestyles, wellness, personal
            growth, and meaningful community engagement through inclusive,
            entertaining experiences.
          </p>
          <ul className="flex flex-wrap gap-3 mb-8">
            {audience.map((a) => (
              <li
                key={a}
                className="rounded-full bg-sage/50 px-4 py-2 text-sm font-medium"
              >
                {a}
              </li>
            ))}
          </ul>
          <div className="flex gap-10">
            <div>
              <p className="font-display text-1xl md:text-4xl">18–45</p>
              <p className="text-ink/40 text-sm">Core age range</p>
            </div>
            <div>
              <p className="font-display text-1xl md:text-4xl">600–800</p>
              <p className="text-ink/40 text-sm">Expected footfall</p>
            </div>
            <div>
              <p className="font-display text-1xl md:text-4xl">55 / 45</p>
              <p className="text-ink/40 text-sm">Male / Female split</p>
            </div>
          </div>
        </div>

        <div>
          <div className="relative h-40 rounded-2xl overflow-hidden mb-6">
            <Image
              src="/illustrations/joggers.jpeg"
              alt="Runners on the road"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          {/* <p className="text-sm text-ink/40 mb-4">
            Where interest is coming from — social survey, 1,113 responses
          </p>
          <div className="space-y-4">
            {cities.map((c) => (
              <div key={c.name}>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span>{c.name}</span>
                  <span>{c.pct}%</span>
                </div>
                <div className="h-3 rounded-full bg-ink/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-coral"
                    style={{ width: `${c.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
