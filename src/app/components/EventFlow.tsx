import Image from "next/image";
import RouteDivider from "./RouteDivider";

const steps = [
  { label: "Registration", detail: "Check in and collect your BIB" },
  { label: "Opening Ceremony", detail: "Warm-up and welcome on stage" },
  { label: "Start · 10K / 5K / 3K", detail: "Pick your route, hit the road" },
  {
    label: "Challenge Checkpoints",
    detail: "Push-ups & mini-challenges along the way",
    image: "/illustrations/water-station.jpeg",
  },
  {
    label: "Finish",
    detail: "Cross the line",
    image: "/illustrations/finish-line.jpeg",
  },
  { label: "Ice Bath", detail: "Recover hard, earn the reset" },
  { label: "Prize Distribution", detail: "Podium for the top finishers" },
  
];

export default function EventFlow() {
  const basePath = process.env.DEPLOY_TARGET === "gh-pages" ? "/TORQON" : "";
  return (
    <section id="event" className="pattern-corner pattern-yellow bg-coral/25">
    <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-28">
      <p className="tag-label text-xs uppercase mb-6">
        <span>03 — How the day runs</span>
      </p>
      <h2 className="font-display text-3xl md:text-7xl mb-14">ABOUT THE EVENT</h2>

      <ol className="space-y-0">
        {steps.map((step, i) => (
          <li key={step.label}>
            <div className="flex items-start gap-5 md:gap-8">
              <span className="font-display text-2xl md:text-3xl text-sage shrink-0 w-10 md:w-14">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pb-2 flex-1 flex items-center gap-5 flex-wrap">
                <div>
                  <h3 className="font-display text-xl md:text-2xl">{step.label}</h3>
                  <p className="text-ink/70">{step.detail}</p>
                </div>
                {step.image && (
                  <div className="relative h-16 w-24 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={`${basePath}${step.image}`}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                )}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="pl-10 md:pl-14">
                <RouteDivider color="var(--ink-40)" className="h-6 md:h-8" />
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
    </section>
  );
}
