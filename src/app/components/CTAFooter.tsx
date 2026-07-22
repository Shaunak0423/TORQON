import Image from "next/image";
import RegisterButton from "./RegisterButton";
import { EVENT } from "../site.config";

export default function CTAFooter() {
  return (
    <>
      <section className="relative bg-ink text-paper overflow-hidden">
        <Image
          src="/illustrations/finish-line.jpeg"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
        <div className="relative mx-auto max-w-6xl px-2 md:px-8 py-20 md:py-28 text-center">
          <h2 className="font-display text-2xl md:text-7xl mb-6 text-sun">
            YOUR SPOT ON THE START LINE IS WAITING
          </h2>
          <p className="text-paper/70 text-lg mb-10 max-w-xl mx-auto">
            Choose your distance, grab your BIB, and find out what a marathon
            feels like with checkpoints, a crowd, and an ice bath at the end.
          </p>
          <RegisterButton size="lg" className="!bg-sun !text-ink hover:!bg-white" />
        </div>
      </section>

      <footer className="bg-ink text-paper/60 border-t border-paper/10">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="relative h-9 w-36">
            <Image
              src="/brand/torqon-logo-teal.png"
              alt="TORQON"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="text-sm">{EVENT.organisers} · {EVENT.venue}</p>
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
