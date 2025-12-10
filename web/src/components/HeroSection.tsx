"use client";

import Link from "next/link";

const orbitRoles = [
  "AI Receptionist",
  "AI Scheduler",
  "AI Scribe",
  "AI Medical Coder",
  "AI Pharmacist",
  "AI Triage Nurse",
  "AI Follow-up Agent",
];

export function HeroSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-background py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 md:flex-row md:items-start">
        {/* LEFT: headline + copy */}
        <div className="w-full md:w-1/2 hero-fade-up">
          {/* 👉 I will tweak this text later to match my current hero copy */}
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
            Experience the future of healthcare
          </p>

          <h1 className="mt-4 text-4xl leading-tight text-[var(--brand-dark)] md:text-5xl">
            <span className="block">
              Make your clinic a{" "}
              <span className="text-[var(--brand-gold)]">Smart Clinic</span> too.
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-700">
            iClinic transforms medical facilities into Smart Clinics, leveraging
            AI to streamline patient communication, appointment scheduling,
            medication refills, and clinic operations – so your team can focus
            on care, not calls.
          </p>

          <p className="mt-3 text-xs font-medium text-neutral-500">
            Created by physicians, for physicians.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-dark)] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-black transition"
            >
              Book a demo ✨
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-[var(--brand-dark)] bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-dark)] hover:bg-neutral-100 transition"
            >
              For clinics &amp; physicians →
            </Link>
          </div>

          <p className="mt-4 text-[11px] text-neutral-500">
            Loved by busy clinics that never want to miss another patient call.
          </p>
        </div>

        {/* RIGHT: orbit of AI roles + central card */}
        <div className="relative w-full md:w-1/2 hero-fade-up-delayed">
          <div className="relative mx-auto h-[360px] w-[360px] max-w-full">
            {/* soft radial gold glow */}
            <div className="hero-orbit-glow absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_rgba(201,164,76,0.22),_transparent_60%)]" />

            {/* orbit rings */}
            <div className="pointer-events-none absolute inset-6 rounded-full border border-neutral-200/60" />
            <div className="pointer-events-none absolute inset-14 rounded-full border border-neutral-200/40" />
            <div className="pointer-events-none absolute inset-22 rounded-full border border-neutral-200/25" />

            {/* central card */}
            <div className="pointer-events-auto absolute left-1/2 top-[45%] z-20 w-[240px] max-w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/10">
              <div className="border-b border-neutral-100 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-[radial-gradient(circle_at_30%_30%,_#f6e3b2,_#c9a44c)]" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                      Front desk &amp; scheduling
                    </p>
                    <p className="text-sm font-semibold text-[var(--brand-dark)]">
                      AI Receptionist
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-5 py-4 text-xs text-neutral-700">
                <ul className="space-y-2">
                  <li>• Appointment scheduling</li>
                  <li>• Patient check-in &amp; intake questions</li>
                  <li>• Front desk support &amp; routing</li>
                </ul>

                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                  Collaborates with
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-[10px] text-neutral-700">
                    AI Scribe
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-[10px] text-neutral-700">
                    AI Medical Coder
                  </span>
                </div>

                {/* <button className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-dark)] px-3 py-2 text-[11px] font-semibold text-white hover:bg-black transition">
                  Explore AI Receptionist ✨
                </button> */}
                <Link
                  href="/receptionist"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full 
                            bg-[var(--brand-dark)] px-3 py-2 text-[11px] font-semibold text-white 
                            hover:bg-black transition"
                >
                  Explore AI Receptionist ✨
                </Link>
              </div>
            </div>

            {/* orbiting role pills */}
            {orbitRoles.map((role, i) => {
              const angle = (i / orbitRoles.length) * Math.PI * 2;
              const radius = 250;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={role}
                  className="pointer-events-none absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: `translate(-50%, -50%)`,
                  }}
                >
                  <div className="hero-orbit-item flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] text-neutral-800 shadow-md shadow-black/10">
                    <div className="h-5 w-5 rounded-full bg-[radial-gradient(circle_at_30%_30%,_#ffffff,_#c9a44c)]" />
                    <span>{role}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

