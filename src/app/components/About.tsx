const cosmic = [
  "Achieved an all-time high in sales for Silver Spoon Restaurant.",
  "Generated leads and conversions for Docelar Infra within one month.",
  "Executed campaigns for Navtara Restaurant.",
  "Managed marketing for major Goa college events, including Happenings (GEC) and Plataunica (Goa University).",
];

const godspeed = [
  "One of Goa's most renowned fitness communities.",
  "Organised futsal, bodybuilding, and multiple sports & cultural events.",
  "More than a gym — a thriving, community-driven brand.",
  "Started in 2023 by Vidyesh Kavlekar & Sahil Naik.",
];

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-display text-xl mb-4 text-paper">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-lg md:text-xl font-medium text-paper">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="pattern-corner pattern-orange bg-sun">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
      <p className="tag-label text-xs uppercase mb-6">
          <span>05 — Who&apos;s behind it</span>
      </p>
      <h2 className="font-display text-4xl md:text-6xl mb-8 text-paper">ABOUT US</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <Column title="Cosmic Media" items={cosmic} />
        <Column title="Godspeed" items={godspeed} />
      </div>
      </div>
    </section>
  );
}
