import RouteDivider from "./RouteDivider";

const steps = [
  { label: "Registration", detail: "Check in and collect your BIB" },
  { label: "Opening Ceremony", detail: "Warm-up and welcome on stage" },
  { label: "Start · TORQMAN / 10K / 5K / 3K", detail: "Pick your route, hit the road" },
  { label: "TORQMAN Challenge Checkpoints", detail: "Push-ups, Squats, Burpees & more mini-challenges along the way" },
  { label: "Finish", detail: "Cross the line" },
  { label: "Ice Bath", detail: "Recover hard, earn the reset" },
  { label: "Prize Distribution", detail: "Podium for the top finishers" },
];


export default function EventFlow() {
  return (
    <section id="event" className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
      <p className="tag-label text-xs uppercase mb-3">
        <span>03 — How the day runs</span>
      </p>
      <h2 className="font-display text-5xl md:text-7xl mb-14">ABOUT THE EVENT</h2>

      <ol className="space-y-0">
        {steps.map((step, i) => (
          <li key={step.label}>
            <div className="flex items-start gap-5 md:gap-8">
              <span className="font-display text-2xl md:text-3xl text-coral shrink-0 w-10 md:w-14">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pb-2">
                <h3 className="font-display text-xl md:text-2xl">{step.label}</h3>
                <p className="text-ink/70">{step.detail}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="pl-10 md:pt-10">
                <RouteDivider color="var(--ink-40)" className="h-6 md:h-8" />
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
