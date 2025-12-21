import { ImpactBanner } from "@/components/ImpactBanner";
import { FeatureStream } from "@/components/FeatureStream";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { HeroCarousel } from "@/components/HeroCarousel";

export default function Home() {
  return (
    <main className="bg-background">
      {/* 1. Big hero carousel directly under navbar */}
      <HeroCarousel />

      {/* 2–4. Other sections (no pricing here) */}
      <div className="mt-20 space-y-20">
        {/* Live rolling stream of features */}
        <FeatureStream />

        {/* Scroll-based feature explanation (if component exists) */}
        <FeatureShowcase />

        {/* ROI / percentages section */}
        <section className="bg-[var(--brand-muted)]/40 py-12">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
              Real impact
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[var(--brand-dark)] md:text-3xl">
              AI Voice Agents that drive real ROI.
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-neutral-700">
              Faster calls. Lower costs. Higher accuracy. All with less effort from your team.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-3xl font-semibold text-[var(--brand-gold)]">50%+</p>
                <p className="mt-1 text-sm font-medium text-[var(--brand-dark)]">
                  Cost reduction
                </p>
                <p className="mt-3 text-xs text-neutral-600">
                  Automates phone-based workflows to slash manual effort and lower
                  costs without sacrificing patient experience.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-3xl font-semibold text-[var(--brand-gold)]">20%+</p>
                <p className="mt-1 text-sm font-medium text-[var(--brand-dark)]">
                  Revenue increase
                </p>
                <p className="mt-3 text-xs text-neutral-600">
                  More appointments, tighter scheduling, and better provider utilization.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-3xl font-semibold text-[var(--brand-gold)]">99%+</p>
                <p className="mt-1 text-sm font-medium text-[var(--brand-dark)]">
                  QA accuracy
                </p>
                <p className="mt-3 text-xs text-neutral-600">
                  Reviews every call, delivering near-perfect accuracy at scale.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
