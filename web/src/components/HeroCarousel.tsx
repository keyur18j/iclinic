"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";

const AUTO_MS = 8000;

const slides = [
  {
    id: 0,
    render: () => (
      // Existing Smart Clinic hero with circular design
      <HeroSection />
    ),
  },
  {
    id: 1,
    render: () => (
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row">
          <div className="w-full md:w-3/5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
              See iClinic in action
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-[var(--brand-dark)] md:text-4xl">
              Save hours on the phone while filling your schedule.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-700">
              Learn how AI receptionists handle calls, scheduling, refills, and secure messages
              so your team can focus on higher-value work — without missing patient touchpoints.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-2xl bg-white px-4 py-3 text-xs shadow-sm">
                <p className="text-xl font-semibold text-[var(--brand-gold)]">2.4 hrs</p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                  Less daily admin time
                </p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-xs shadow-sm">
                <p className="text-xl font-semibold text-[var(--brand-gold)]">18.5%</p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                  Increase in patients served
                </p>
              </div>
            </div>
            <Link
              href="/product"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--brand-dark)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black transition"
            >
              Explore the product →
            </Link>
          </div>

          <div className="hidden w-full md:flex md:w-2/5 md:justify-center">
            <div className="h-56 w-full max-w-sm rounded-3xl border border-neutral-200 bg-[var(--brand-muted)]/40 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Real-world impact
              </p>
              <p className="mt-3 text-sm text-neutral-700">
                "Our phones used to ring off the hook. Now patients get answers immediately,
                and my staff finally has time to breathe."
              </p>
              <p className="mt-4 text-xs font-semibold text-[var(--brand-dark)]">
                Practice owner, multi-provider clinic
              </p>
            </div>
          </div>
        </div>
      </section>
    ),
  },
  {
    id: 2,
    render: () => (
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 md:flex-row">
          <div className="w-full md:w-1/2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
              Integrations
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-[var(--brand-dark)] md:text-4xl">
              Built to plug into your existing tools.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-700">
              iClinic works alongside your current EHR, phone system, scheduling platform, and CRM.
              No need to rip and replace — just connect and go live.
            </p>
            <p className="mt-3 text-xs text-neutral-500">
              Support for multi-clinic groups, shared call centers, and complex routing rules.
            </p>
            <Link
              href="/product"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--brand-dark)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black transition"
            >
              View integrations →
            </Link>
          </div>

          <div className="w-full md:w-1/2">
            {/* Integration diagram: central node with surrounding logos */}
            <div className="relative mx-auto h-64 max-w-md rounded-3xl bg-[radial-gradient(circle_at_center,_rgba(201,164,76,0.18),_transparent_70%)]">
              <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[var(--brand-dark)] text-xs font-semibold text-white flex items-center justify-center shadow-lg">
                iClinic
              </div>
              {/* Surrounding integration placeholders */}
              <div className="absolute left-1/2 top-1/4 -translate-x-1/2 rounded-xl bg-white px-3 py-2 text-[10px] font-medium text-neutral-700 shadow-sm border border-neutral-200">
                EHR Systems
              </div>
              <div className="absolute right-1/4 top-1/2 -translate-y-1/2 rounded-xl bg-white px-3 py-2 text-[10px] font-medium text-neutral-700 shadow-sm border border-neutral-200">
                Phone
              </div>
              <div className="absolute left-1/4 top-1/2 -translate-y-1/2 rounded-xl bg-white px-3 py-2 text-[10px] font-medium text-neutral-700 shadow-sm border border-neutral-200">
                Scheduling
              </div>
              <div className="absolute left-1/2 bottom-1/4 -translate-x-1/2 rounded-xl bg-white px-3 py-2 text-[10px] font-medium text-neutral-700 shadow-sm border border-neutral-200">
                CRM
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
  },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Set up auto-advance timer
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_MS);

    // Cleanup on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []); // Only run on mount

  const handleDotClick = (index: number) => {
    // Clear existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    // Update active index
    setActiveIndex(index);
    
    // Reset timer
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_MS);
  };

  return (
    <section className="bg-background relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl overflow-hidden px-4 pt-8 md:pt-10">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full flex-shrink-0">
              {slide.render()}
            </div>
          ))}
        </div>

        {/* Dots navigation */}
        <div className="mt-4 flex justify-center gap-3 pb-4">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  isActive
                    ? "w-6 bg-[var(--brand-dark)]"
                    : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

