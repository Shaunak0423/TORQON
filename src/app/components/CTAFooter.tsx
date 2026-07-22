import RegisterButton from "./RegisterButton";
import { EVENT } from "../site.config";

export default function CTAFooter() {
  return (
    <>
      <section className="bg-sun">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 md:py-28 text-center">
          {/* <!-- -1px spacing on mobile, 2px on desktop --> */}
          <h2 className="font-display text-3xl md:text-6xl tracking-[-1px] md:tracking-[2px] mb-6">
            YOUR SPOT ON THE START LINE IS WAITING
          </h2>
          <p className="text-ink/70 text-lg mb-10 max-w-xl mx-auto">
            Choose your distance, grab your BIB, and find out what a marathon
            feels like with checkpoints, a crowd, and an ice bath at the end.
          </p>
          <RegisterButton size="lg" />
        </div>
      </section>

      <footer className="bg-ink text-paper/60">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl text-paper mb-1">TORQON</p>
            <p className="text-sm">{EVENT.organisers} · {EVENT.venue}</p>
          </div>
          <RegisterButton
            variant="outline"
            className="!border-paper/40 !text-paper hover:!bg-paper hover:!text-ink"
          >
            Register Now
          </RegisterButton>
        </div>
        <div className="mx-auto max-w-6xl px-5 md:px-8 pb-8 text-xs text-paper/30">
          © {new Date().getFullYear()} TORQON. All rights reserved.
        </div>
      </footer>
    </>
  );
}
