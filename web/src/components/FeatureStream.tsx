"use client";

import { useEffect, useState } from "react";

type Feature = {
  label: string;
  icon: string; // emoji for now
};

const FEATURES: Feature[] = [
  { label: "24/7 AI Call Answering", icon: "📞" },
  { label: "Smart Scheduling", icon: "📅" },
  { label: "Medication Refills", icon: "💊" },
  { label: "Automated Message Taking", icon: "✉️" },
  { label: "Secure Provider Inbox", icon: "🔐" },
  { label: "Omnichannel Reminders", icon: "🔔" },
  { label: "EHR-Ready Summaries", icon: "📋" },
  { label: "Multi-Location Routing", icon: "🗺️" },
  { label: "Custom Call Flows", icon: "⚙️" },
  { label: "Analytics Dashboard", icon: "📊" },
];

// Shuffle function for random order each reload
function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function FeatureStream() {
  const [features, setFeatures] = useState<Feature[]>(FEATURES);

  useEffect(() => {
    setFeatures(shuffle(FEATURES)); // randomize on first load
  }, []);

  return (
    <section className="relative z-0 w-full bg-brand-muted py-10 feature-stream">
      {/* top gradient fade */}
      <div className="pointer-events-none absolute top-0 left-0 h-6 w-full bg-gradient-to-b from-brand-muted to-transparent" />

      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-4 text-center text-[13px] font-medium tracking-wide text-gray-600">
          Live stream of what iClinic can handle
        </p>

        <div className="relative overflow-hidden">
          {/* side gradient masks */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-brand-muted to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-brand-muted to-transparent" />

          {/* scrolling row */}
          <div className="marquee-smooth flex min-w-max gap-4 py-2">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex gap-4">
                {features.map((feature, i) => (
                  <div
                    key={`${copy}-${i}`}
                    className="
                      inline-flex items-center gap-2 whitespace-nowrap
                      rounded-full bg-white/70 px-4 py-2
                      text-[13px] text-brand-dark shadow-sm
                      backdrop-blur-sm border border-brand-gold-soft/40
                    "
                  >
                    <span className="text-base">{feature.icon}</span>
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-6 w-full bg-gradient-to-t from-brand-muted to-transparent" />
    </section>
  );
}

