import Link from "next/link";

const features = [
  {
    title: "AI Receptionist",
    body: "Greets every caller, understands intent, and routes them to the right workflow — scheduling, refills, secure messages, or triage — with near-zero wait time.",
  },
  {
    title: "Smart Scheduling",
    body: "Books, reschedules, and cancels appointments based on your visit types, provider rules, and templates — reducing phone tag and keeping calendars full.",
  },
  {
    title: "Medication Refills",
    body: "Collects key refill details and prepares structured requests so clinicians can review and approve faster, with consistent information every time.",
  },
  {
    title: "Secure Message Taking",
    body: "Captures detailed patient messages, tags urgency, and routes them into a secure inbox/ticketing workflow so nothing gets lost in voicemail.",
  },
  {
    title: "Omnichannel Reminders",
    body: "Automated confirmations and reminders over voice, SMS, and email to reduce no-shows and last-minute gaps in your schedule.",
  },
  {
    title: "Analytics & Quality",
    body: "Track call volume, intents, outcomes, and missed calls prevented — plus QA and continuous tuning to improve accuracy over time.",
  },
];

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-background pb-20 pt-16 md:pt-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* HERO */}
        <section className="mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
            Product
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-[var(--brand-dark)] md:text-4xl">
            AI front desk that feels like a real team member.
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700">
            iClinic answers every call, handles scheduling, refills, and secure
            messages, and sends structured outcomes into your existing systems.
            Patients get help immediately. Staff get their time back. Your clinic
            runs smoother.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-dark)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black transition"
            >
              Book a demo →
            </Link>
            <Link
              href="/receptionist"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-dark)] hover:bg-neutral-50 transition"
            >
              Explore AI Receptionist →
            </Link>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mb-16">
          <h2 className="text-lg font-semibold text-[var(--brand-dark)]">
            Everything your front desk does — automated.
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-neutral-700">
            Built for busy clinics: fast answers, consistent information, and workflows
            that match how your team operates today.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-semibold text-[var(--brand-dark)]">
                  {f.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* INTEGRATIONS */}
        <section className="mb-16">
          <h2 className="text-lg font-semibold text-[var(--brand-dark)]">
            Works with the tools you already use.
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-neutral-700">
            iClinic plugs into your phone system, EHR, and scheduling tools. No rip-and-replace —
            we respect your workflows and automate the repetitive parts.
          </p>
          <p className="mt-2 text-xs text-neutral-500">
            Multi-location support, shared call centers, and complex routing rules included.
          </p>

          {/* If you already have an Integrations diagram component, render it here.
              Otherwise keep this placeholder card for now. */}
          <div className="mt-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-[var(--brand-dark)]">Integration diagram</p>
            <p className="mt-2 text-sm text-neutral-600">
              Drop your integrations diagram/logos here (EHRs, scheduling, CRM, etc.).
            </p>
          </div>
        </section>

        {/* PRICING */}
        <section className="mb-16 rounded-3xl border border-neutral-200 bg-[var(--brand-muted)]/40 p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
            <div>
              <h2 className="text-lg font-semibold text-[var(--brand-dark)]">
                Simple, transparent pricing.
              </h2>
              <p className="mt-2 text-sm text-neutral-700">
                Start with one provider and scale to your entire organization.
                No hidden fees, no setup charges, and no long-term lock-in.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li>• 24/7 AI receptionist coverage.</li>
                <li>• Scheduling, refills, and secure messages included.</li>
                <li>• HIPAA-ready infrastructure and audit-friendly logs.</li>
                <li>• Onboarding + continuous support.</li>
              </ul>

              <p className="mt-4 text-xs text-neutral-500">
                One new patient booking a month often covers the cost.
                Most practices see meaningful upside within 60–90 days.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
                Standard plan
              </p>
              <p className="mt-3 text-3xl font-semibold text-[var(--brand-dark)]">
                $250
                <span className="text-base font-normal text-neutral-600">
                  {" "}
                  / month per provider
                </span>
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Includes up to 1,000 minutes of AI call time per provider per month.
                Volume pricing available for groups.
              </p>

              <div className="mt-5 space-y-2 text-sm text-neutral-700">
                <p>• No setup fees</p>
                <p>• Month-to-month</p>
                <p>• Cancel anytime</p>
              </div>

              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-dark)] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black transition"
              >
                Talk to sales / book a demo
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[var(--brand-dark)]">
                Want to see iClinic in your workflow?
              </h3>
              <p className="mt-1 text-sm text-neutral-700">
                We&apos;ll tailor a demo to your specialty, call volume, and routing rules.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-dark)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black transition"
            >
              Book a demo →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
