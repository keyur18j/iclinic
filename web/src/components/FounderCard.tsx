import Image from "next/image";

type FounderCardProps = {
  name: string;
  title: string;
  imageSrc: string;
};

export function FounderCard({ name, title, imageSrc }: FounderCardProps) {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="relative h-64 w-52 overflow-hidden rounded-3xl md:h-72 md:w-56">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 224px, 208px"
          priority
        />
      </div>

      <div className="mt-4 text-center">
        <p className="text-base font-semibold text-[var(--brand-dark)]">
          {name}
        </p>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
          {title}
        </p>
      </div>
    </div>
  );
}

