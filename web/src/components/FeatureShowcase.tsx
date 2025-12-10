"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Feature = {
  id: string; // "01", "02", ...
  name: string; // e.g. "AI Receptionist"
  description: string; // 3–4 lines of text
  image: string; // path to image in /public
  icons: string[]; // emoji-based icons for now
};

const FEATURES: Feature[] = [
  {
    id: "01",
    name: "AI Receptionist",
    description:
      "Your AI front-desk answers every call instantly, 24/7. No hold music, no waiting. Patients get immediate answers to common questions about hours, directions, insurance, and more. Handles routine inquiries so your staff can focus on in-person care.",
    image: "/features/receptionist.png",
    icons: ["📞", "🤖", "⚡"],
  },
  {
    id: "02",
    name: "Smart Scheduling",
    description:
      "Automated appointment booking that works across phone, SMS, and email. Patients can schedule, reschedule, or cancel appointments seamlessly. The system checks real-time availability and sends confirmations automatically, reducing no-shows and administrative burden.",
    image: "/features/scheduling.png",
    icons: ["📅", "⚡", "🔄"],
  },
  {
    id: "03",
    name: "Medication Refills",
    description:
      "Streamlined refill request processing. Patients can request medication refills through any channel, and the AI captures all necessary information accurately. Requests are automatically routed to the appropriate provider for approval, with status updates sent back to patients.",
    image: "/features/refills.png",
    icons: ["💊", "📋", "✅"],
  },
  {
    id: "04",
    name: "Secure Message Taking",
    description:
      "AI captures detailed messages from patients with precision and context. Messages are securely routed to the correct provider inbox in your EHR system. Ensures nothing gets lost in translation and providers have all the information they need to respond effectively.",
    image: "/features/messaging.png",
    icons: ["💬", "🔒", "📨"],
  },
  {
    id: "05",
    name: "Omnichannel Reminders",
    description:
      "Automated appointment reminders delivered via the patient's preferred channel—voice, SMS, or email. Reduces no-shows significantly by reaching patients where they're most likely to see and respond. Customizable timing and messaging to match your clinic's communication style.",
    image: "/features/reminders.png",
    icons: ["📱", "🔔", "📧"],
  },
  {
    id: "06",
    name: "Analytics & Insights",
    description:
      "Comprehensive dashboard showing call volumes, common questions, peak times, and patient satisfaction metrics. Track performance, identify trends, and make data-driven decisions to optimize your clinic's operations. All insights are presented in an easy-to-understand format.",
    image: "/features/analytics.png",
    icons: ["📊", "📈", "💡"],
  },
];

export function FeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState<boolean[]>(
    new Array(FEATURES.length).fill(false)
  );
  const [imageError, setImageError] = useState(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setActiveIndex(index);
              setVisible((prev) => {
                const copy = [...prev];
                copy[index] = true;
                return copy;
              });
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Reset image error when active feature changes
  useEffect(() => {
    setImageError(false);
  }, [activeIndex]);

  const activeFeature = FEATURES[activeIndex];

  return (
    <section className="bg-[var(--brand-muted)]/60 py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading block */}
        <div className="mb-12 space-y-4 text-center md:text-left">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
            Capabilities
          </div>
          <h2 className="text-3xl font-semibold text-[var(--brand-dark)]">
            Everything your clinic front desk needs — in one AI platform.
          </h2>
          <p className="text-sm text-neutral-600">
            Scroll through our core features to see how iClinic transforms your
            front-desk operations with intelligent automation.
          </p>
        </div>

        {/* Grid with left features + right sticky visual */}
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* LEFT COLUMN - Stacked features */}
          <div className="space-y-8">
            {FEATURES.map((feature, index) => {
              const isActive = index === activeIndex;
              const hasBeenVisible = visible[index];

              return (
                <div
                  key={feature.id}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`
                    relative border-l pl-6 transition-all duration-300
                    ${
                      isActive
                        ? "border-[var(--brand-gold)]"
                        : "border-neutral-300/70"
                    }
                    feature-fade
                    ${hasBeenVisible ? "feature-fade-visible" : ""}
                  `}
                >
                  {/* Numbered circle */}
                  <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-neutral-500 shadow-sm">
                    {feature.id}
                  </div>

                  {/* Feature title */}
                  <h3
                    className={`
                      text-xl font-semibold tracking-tight
                      ${
                        isActive
                          ? "text-[var(--brand-dark)]"
                          : "text-neutral-700"
                      }
                    `}
                  >
                    {feature.name}
                  </h3>

                  {/* Icons row */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {feature.icons.map((icon, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center justify-center rounded-full bg-white/70 px-2 py-1 text-[11px] text-neutral-700 shadow-sm"
                      >
                        {icon}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {feature.description}
                  </p>

                  {/* Gold gradient underline */}
                  <div
                    className={`
                      mt-4 h-px w-full origin-left bg-gradient-to-r
                      from-[var(--brand-gold)] to-transparent transition-transform duration-300
                      ${isActive ? "scale-x-100" : "scale-x-0"}
                    `}
                  />
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN - Sticky preview panel */}
          <div className="relative mt-4 md:mt-0">
            <div className="sticky top-24">
              <div className="overflow-hidden rounded-3xl bg-[var(--brand-dark-soft)] p-6 shadow-2xl">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
                    {activeFeature.id} · {activeFeature.name}
                  </div>
                  <div className="rounded-full bg-[var(--brand-gold)]/10 px-3 py-1 text-[11px] text-[var(--brand-gold)]">
                    Live preview
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl bg-black/60 p-4">
                  <div className="relative h-64 w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#1f1f1f] to-[#050505] feature-preview-fade">
                    {/* Image or placeholder */}
                    {imageError ? (
                      <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm">
                        Image placeholder
                      </div>
                    ) : (
                      <Image
                        src={activeFeature.image}
                        alt={activeFeature.name}
                        fill
                        sizes="(min-width: 768px) 480px, 100vw"
                        className="object-cover opacity-70"
                        onError={() => setImageError(true)}
                      />
                    )}
                    <div className="relative flex h-full w-full items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4">
                      <p className="max-w-xs text-xs text-neutral-200">
                        Conceptual preview of{" "}
                        <span className="font-semibold">
                          {activeFeature.name}
                        </span>{" "}
                        in action. Replace this with your product screenshots
                        when ready.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-[11px] text-neutral-400">
                  As you scroll through the features on the left, this panel
                  updates instead of the entire page scrolling away, creating a
                  focused storytelling moment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

