import Image from "next/image";
import RegisterButton from "./RegisterButton";
import Chevrons from "./Chevrons";
import { EVENT } from "../site.config";

export default function Hero() {
  const basePath = process.env.DEPLOY_TARGET === "gh-pages" ? "/TORQON" : "";
  return (
    <section
      id="top"
      className="corner-stripes relative overflow-hidden bg-ink text-paper"
    >
      <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <div>
          <p className="reveal tag-label text-xs uppercase mb-6 ml-5 md:ml-0">
            <span>{EVENT.organisers}</span>
          </p>
          <h1 className="reveal font-display text-[16vw] leading-[0.82] md:text-[7rem] text-sun mt-12 md:mt-0">
            TORQON
          </h1>
          <p
            className="reveal font-display italic -skew-x-3 text-1xl md:text-4xl mt-4 md:mt-6 max-w-2xl text-coral"
            style={{ animationDelay: "0.1s" }}
          >
            {EVENT.tagline}
          </p>
          <p
            className="reveal text-paper/70 mt-4 max-w-xl text-base md:text-lg"
            style={{ animationDelay: "0.2s" }}
          >
            {EVENT.motto} A road marathon that trades finish-line boredom for
            checkpoint push-ups, mid-run challenges, and an ice bath waiting
            at the end.
          </p>

          <div
            className="reveal flex items-center gap-2 mt-6"
            style={{ animationDelay: "0.25s" }}
          >
            <Chevrons />
            <p className="text-paper/70 text-sm uppercase tracking-widest">
              Finish every checkpoint. Finish the race.
            </p>
          </div>

          <div
            className="reveal mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <RegisterButton size="lg" className="!bg-sun !text-ink hover:!bg-white" />
            <a
              href="#event"
              className="text-paper/80 border-b border-paper/40 hover:border-paper transition-colors pb-0.5"
            >
              See how the day runs
            </a>
          </div>
          <div
            className="reveal mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-paper/60"
            style={{ animationDelay: "0.4s" }}
          >
            <span>{EVENT.venue}</span>
            <span aria-hidden="true">·</span>
            <span>{EVENT.date}</span>
            <span aria-hidden="true">·</span>
            <span>3K · 5K · 10K</span>
          </div>
        </div>

        <div className="reveal hidden lg:block relative h-[420px] rounded-3xl overflow-hidden" style={{ animationDelay: "0.15s" }}>
          <Image
            src={`${basePath}/illustrations/starting-blocks.jpeg`}
            alt="Runner at the starting blocks"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
