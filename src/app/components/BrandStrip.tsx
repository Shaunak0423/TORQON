import Image from "next/image";

export default function BrandStrip() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 h-28 md:h-36 w-full">
      <div className="relative bg-sun">
        <Image
          src="/patterns/pattern-orange.jpeg"
          alt=""
          fill
          className="object-cover opacity-40 mix-blend-multiply"
          sizes="25vw"
        />
      </div>
      <div className="relative bg-coral">
        <Image
          src="/patterns/pattern-yellow.jpeg"
          alt=""
          fill
          className="object-cover opacity-40 mix-blend-multiply"
          sizes="25vw"
        />
      </div>
      <div className="relative bg-sage">
        <Image
          src="/patterns/pattern-teal.jpeg"
          alt=""
          fill
          className="object-cover opacity-30 mix-blend-multiply"
          sizes="25vw"
        />
      </div>
      <div className="bg-ink" />
    </div>
  );
}
