const pandavas = [
  { name: "Bheem", trait: "Power", desc: "Drives execution with strength and determination." },
  { name: "Yudhishthira", trait: "Experience", desc: "Leads with wisdom, strategy, and experience." },
  { name: "Arjun", trait: "Skill", desc: "Delivers precision through expertise and focus." },
  { name: "Nakul", trait: "Influence", desc: "Builds connections and amplifies impact." },
  { name: "Sahadev", trait: "Intellect", desc: "The strategist and problem-solver." },
];

const founders = [
  {
    name: "Vidyesh Kavlekar",
    lines: ["7× Mr. Goa Championship", "Mr. Asia Winner", "15 years in bodybuilding & fitness"],
  },
  {
    name: "Sahil Naik",
    lines: [
      "Forbes 30 Under 30 India 2018 & Asia 2019",
      "Represented by Gallery Experimenter, exhibited internationally",
    ],
  },
];

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div className="h-16 w-16 rounded-full bg-ink text-sun font-display text-xl flex items-center justify-center shrink-0">
      {initials}
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-ink/40 mb-3">
        07 — The people behind it
      </p>
      <h2 className="font-display text-3xl md:text-7xl mb-4">5 PANDAVAS</h2>
      <p className="text-ink/70 mb-12 max-w-xl">
        The core team steering TORQON, each bringing a different strength to
        the table.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
        {pandavas.map((p) => (
          <div key={p.name} className="rounded-2xl border-2 border-ink/10 p-5">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-coral mb-3">
              {p.trait}
            </p>
            <h3 className="font-display text-lg mb-2">{p.name}</h3>
            <p className="text-sm text-ink/70 leading-snug">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* <h3 className="font-display text-3xl mb-8">Cosmic Media — Founders</h3>
      <div className="grid sm:grid-cols-2 gap-8">
        {founders.map((f) => (
          <div key={f.name} className="flex gap-4">
            <Avatar name={f.name} />
            <div>
              <p className="font-display text-lg mb-1">{f.name}</p>
              <ul className="text-ink/70 space-y-0.5 text-sm">
                {f.lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}
