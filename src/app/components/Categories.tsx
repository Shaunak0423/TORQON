import Image from "next/image";
import RegisterButton from "./RegisterButton";

const runs = [
  {
    distance: "3 KM",
    title: "Beginners Run",
    detail: "Perfect for first-time participants, families & casual runners.",
    image: "/illustrations/joggers.jpeg",
  },
  {
    distance: "5 KM",
    title: "Fun Run",
    detail: "Challenge yourself while enjoying the experience.",
    image: "/illustrations/starting-blocks.jpeg",
  },
  {
    distance: "10 KM",
    title: "Competitive Run",
    detail: "For runners ready to push their endurance.",
    image: "/illustrations/sprint-race.jpeg",
  },
];

const torqmanSteps = [
  "Complete the marathon.",
  "Clear every checkpoint.",
  "Conquer every fitness hurdle.",
  "Finish the ice bath recovery.",
];

export default function Categories() {
  const basePath = process.env.DEPLOY_TARGET === "gh-pages" ? "/TORQON" : "";
  return (
    <section id="categories" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-paper/40 mb-3">
          04 — Pick your distance
        </p>
        <h2 className="font-display text-2xl md:text-7xl mb-3">
          ONE EVENT, TWO WAYS TO COMPLETE
        </h2>
        <p className="text-paper/60 text-lg mb-14">Choose your challenge.</p>

        <div className="relative grid lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Left panel — run categories */}
          <div className="pattern-corner pattern-orange bg-sun rounded-3xl p-6 md:p-8">
            <p className="relative z-10 inline-block rounded-full bg-ink/80 text-paper text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 mb-6">
              Run Categories
            </p>
            <div className="relative z-10 space-y-6">
              {runs.map((r, i) => (
                <div key={r.distance}>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <p className="font-display text-4xl md:text-5xl text-paper mb-3">
                        {r.distance}
                      </p>
                      <h3 className="font-display text-lg text-ink">{r.title}</h3>
                      <p className="text-ink/70 text-sm max-w-xs">{r.detail}</p>
                    </div>
                    <div className="relative h-20 w-28 rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={`${basePath}${r.image}`}
                        alt={r.title}
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    </div>
                  </div>
                  {i < runs.length - 1 && (
                    <div className="h-px bg-ink/15 mt-6" />
                  )}
                </div>
              ))}
            </div>
            <RegisterButton
              variant="outline"
              className="relative z-10 mt-8 !border-ink !text-ink hover:!bg-ink hover:!text-sun"
            >
              Register for a distance
            </RegisterButton>
          </div>

          {/* OR divider */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 h-16 w-16 items-center justify-center rounded-full bg-paper text-ink font-display text-lg shadow-xl">
            OR
          </div>
          <div className="lg:hidden flex items-center justify-center py-2">
            <span className="font-display text-lg text-paper/50">— OR —</span>
          </div>

          {/* Right panel — TORQMAN challenge */}
          <div className="pattern-corner pattern-teal relative bg-ink border-2 border-sage/40 rounded-3xl p-6 md:p-8 overflow-hidden">
            <Image
              src={`${basePath}/illustrations/finish-line.jpeg`}
              alt=""
              fill
              className="object-cover opacity-25"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />

            <p className="relative z-10 inline-block rounded-full bg-sage text-paper text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 mb-6">
              TORQMAN Challenge
            </p>
            <h3 className="relative z-10 font-display text-5xl md:text-6xl text-paper mb-1">
              TORQMAN
            </h3>
            <p className="relative z-10 text-sage font-semibold uppercase tracking-widest text-sm mb-6">
              One ultimate challenge
            </p>

            <ul className="relative z-10 space-y-3 mb-8">
              {torqmanSteps.map((step) => (
                <li key={step} className="flex items-center gap-3 text-paper/90">
                  <span className="text-sage">◆</span>
                  {step}
                </li>
              ))}
            </ul>

            <p className="relative z-10 text-xs uppercase tracking-widest text-paper/50 mb-1">
              Earn the title
            </p>
            <p className="relative z-10 font-display text-2xl text-sage mb-8">
              TORQMAN
            </p>

            <RegisterButton
              variant="outline"
              className="relative z-10 !border-sage !text-sage hover:!bg-sage hover:!text-ink"
            >
              Register for TORQMAN
            </RegisterButton>
          </div>
        </div>
      </div>
    </section>
  );
}
