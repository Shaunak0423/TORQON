import RegisterButton from "./RegisterButton";
import { EVENT } from "../site.config";
import Chevrons from "./Chevrons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-paper">
      {/* Decorative layer — pinned behind everything, clipped to the section */}
      <div className="corner-stripes absolute inset-0 -z-10 pointer-events-none" />
      <div className="absolute -right-24 -top-24 h-[36rem] w-[36rem] rounded-full bg-sun opacity-[0.06] -z-10 pointer-events-none" />

      {/* Content layer — explicitly above the decoration */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
        <p className="tag-label text-xs uppercase mb-6">
          <span>{EVENT.organisers} present</span>
        </p>
        <h1 className="reveal font-display text-[16vw] leading-[0.85] md:text-[8.5rem] text-sun mt-2">
          TORQON
        </h1>
        <p
          className="reveal font-display italic -skew-x-3 text-2xl md:text-4xl mt-4 md:mt-6 max-w-2xl text-sun"
          style={{ animationDelay: "0.1s" }}
        >
          {EVENT.tagline}
        </p>
        <div className="reveal flex items-center gap-2 mt-6" style={{ animationDelay: "0.25s" }}>
          <Chevrons />
          <p className="text-paper/70 text-sm uppercase tracking-widest">
            {EVENT.motto}
          </p>
        </div>
        <p
          className="reveal text-paper/70 mt-4 max-w-xl text-base md:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          A road marathon that trades finish-line boredom for
          checkpoint push-ups, mid-run challenges, and an ice bath waiting at
          the end.
        </p>
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
    </section>
  );
}