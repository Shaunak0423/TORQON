import RegisterButton from "./RegisterButton";

const categories = [
  {
    distance: "3 KM",
    title: "Fun Run / Walk",
    detail: "For beginners — no training required, just show up.",
    color: "bg-sage",
    glow: "rgba(185, 202, 166, 0.55)",
    light: false,
  },
  {
    distance: "5 KM",
    title: "The Middle Ground",
    detail: "A week of practice will set you up nicely.",
    color: "bg-coral",
    glow: "rgba(232, 138, 128, 0.55)",
    light: false,
  },
  {
    distance: "10 KM",
    title: "Serious Competitors",
    detail: "The full challenge, checkpoints and all.",
    color: "bg-sun",
    glow: "rgba(233, 213, 74, 0.6)",
    light: true,
  },
  {
    distance: "TORQMAN",
    title: "The highlight of the event",
    detail: "The high-intensity challenge.",
    color: "bg-fire-glow",
    glow: "rgba(255, 138, 61, 0.75)",
    light: true,
  },
];

export default function Categories() {
  return (
    <section id="categories" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
        {/* <p className="text-xs font-semibold tracking-[0.3em] uppercase text-paper/40 mb-3">
          
        </p> */}
        <p className="tag-label text-xs uppercase mb-3">
          <span>04 — Pick your distance</span>
        </p>
        <h2 className="font-display text-5xl md:text-7xl mb-14">CATEGORIES</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((c) => (
            <div
              key={c.distance}
              className={`card-glow ${c.color} text-ink rounded-3xl p-8 flex flex-col justify-between min-h-[280px]`}
              style={{ "--glow-color": c.glow } as React.CSSProperties}
            >
              <div>
                <p className="font-display text-5xl mb-4">{c.distance}</p>
                <h3 className="font-display text-xl mb-2">{c.title}</h3>
                <p className="text-ink/70">{c.detail}</p>
              </div>
              <RegisterButton
                variant="outline"
                className="mt-8 !border-ink self-start"
              >
                Register for {c.distance}
              </RegisterButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
