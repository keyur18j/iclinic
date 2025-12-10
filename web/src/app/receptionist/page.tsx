"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const sizeOptions = ["0 - 200", "201 - 500", "501 - 1000", "1000 +"] as const;
type SizeOption = (typeof sizeOptions)[number];

export default function ReceptionistActionPage() {
  const [selectedSize, setSelectedSize] = useState<SizeOption | null>(null);
  const router = useRouter();

  const handleContinue = () => {
    if (!selectedSize) return;
    router.push(`/contact?size=${encodeURIComponent(selectedSize)}`);
  };

  const canContinue = !!selectedSize;

  return (
    <main className="min-h-screen bg-[#f7f2e9] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Page heading */}
        <header className="mb-10">
          <h1 className="text-3xl font-semibold text-[var(--brand-dark)] md:text-4xl">
            See iClinic in Action
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700">
            Learn how iClinic saves clinicians hours of phone time every day
            while increasing appointments, and explore ROI-focused trial
            options tailored to the size of your practice.
          </p>
        </header>

        {/* Two-column layout */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          {/* LEFT: ROI + testimonial card */}
          <section className="rounded-[32px] border border-[#e7cfa4] bg-[#fdf6ea] p-6 shadow-sm md:p-8">
            {/* Top metrics row */}
            <div className="grid gap-6 border-b border-[#f0dfc0] pb-6 md:grid-cols-2">
              <div>
                <p className="text-3xl font-semibold text-[var(--brand-gold)]">
                  2.4 Hrs
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                  Less daily admin time
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-[var(--brand-gold)]">
                  18.5%
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
                  Increase in patients served
                </p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-6 space-y-6">
              <p className="text-sm leading-relaxed text-neutral-800">
                “After trying multiple tools, I found iClinic to be the most
                comprehensive and intuitive. Now our front desk feels calm,
                patients get answers instantly, and my team can focus on actual
                care instead of chasing phone calls.”
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f6e3b2] to-[#c9a44c] text-xs font-semibold text-white">
                  HF
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--brand-dark)]">
                  Vijaiganesh Nagarajan, MD
                  </p>
                  <p className="text-xs text-neutral-500">
                    Medical Director, Multi-site Clinic
                  </p>
                </div>
              </div>

              {/* Partner logos placeholders */}
              <div className="mt-4 grid gap-4 text-xs text-neutral-500 md:grid-cols-3">
                <div className="flex items-center justify-center rounded-2xl border border-[#f0dfc0] bg-white/70 px-3 py-3">
                  <span>Aliana Family Clinic</span>
                </div>
                <div className="flex items-center justify-center rounded-2xl border border-[#f0dfc0] bg-white/70 px-3 py-3">
                  <span>Cinco Ranch Pediatrics</span>
                </div>
                <div className="flex items-center justify-center rounded-2xl border border-[#f0dfc0] bg-white/70 px-3 py-3">
                  <span>Sugarland Care Center</span>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT: practice size selector */}
          <section className="rounded-[32px] bg-white p-6 shadow-xl md:p-8">
            <h2 className="text-lg font-semibold text-[var(--brand-dark)]">
              Select the size of your practice
            </h2>
            <p className="mt-2 text-xs text-neutral-500">
              We’ll tailor your demo and ROI estimates based on how many
              providers you have.
            </p>

            <div className="mt-6 space-y-3">
              {sizeOptions.map((option) => {
                const isActive = selectedSize === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedSize(option)}
                    className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition
                      ${
                        isActive
                          ? "border-[var(--brand-gold)] bg-[var(--brand-gold-soft)]/30"
                          : "border-neutral-200 bg-white hover:border-[var(--brand-gold)]/70"
                      }`}
                  >
                    <span className="font-medium text-neutral-800">
                      {option}
                    </span>
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition
                        ${
                          isActive
                            ? "border-[var(--brand-gold)] bg-[var(--brand-gold)]/10"
                            : "border-[#f1d5aa]"
                        }`}
                    >
                      {isActive && (
                        <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-gold)]" />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={handleContinue}
              disabled={!canContinue}
              className={`mt-8 flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold text-white transition
                ${
                  canContinue
                    ? "bg-[var(--brand-dark)] hover:bg-black"
                    : "cursor-not-allowed bg-neutral-300 text-neutral-600"
                }`}
            >
              Continue ✨
            </button>

            { !canContinue && (
              <p className="mt-2 text-[11px] text-neutral-400">
                Please select the size of your practice to continue.
              </p>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
