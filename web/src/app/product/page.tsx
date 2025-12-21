import Link from "next/link";

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-background pb-20 pt-20 md:pt-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* 1. Product hero */}
        <section className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
            AI front-desk solution
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[var(--brand-dark)] md:text-5xl">
            AI front desk for modern clinics.
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700">
            iClinic&apos;s AI front-desk solution automates routine clinic operations,
            allowing your staff to focus on patient care while ensuring every call and message
            is handled professionally and efficiently.
          </p>
        </section>

        {/* 2. Features grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[var(--brand-dark)] mb-6">
            Core features
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-3">
              <h3 className="text-xl font-semibold">AI Receptionist</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Never miss a call again. Our AI answers instantly, understands patient needs,
                and handles routine inquiries without putting anyone on hold. Available 24/7
                to provide consistent, professional service.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-3">
              <h3 className="text-xl font-semibold">Smart Scheduling</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Automate appointment booking, cancellations, and rescheduling. The AI checks
                availability in real-time, sends confirmation reminders, and reduces no-shows
                by keeping patients informed.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-3">
              <h3 className="text-xl font-semibold">Medication Refills</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Process medication refill requests automatically. The AI captures all necessary
                information and routes requests to the appropriate provider for approval,
                streamlining the refill workflow.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-3">
              <h3 className="text-xl font-semibold">Secure Messages</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                AI captures messages accurately and routes them to the right provider inbox.
                All messages are securely stored and easily accessible through your EHR.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-3">
              <h3 className="text-xl font-semibold">Omnichannel</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Send appointment confirmations and reminders via the patient&apos;s preferred
                channel—voice, SMS, or email. Ensure important information reaches patients
                when and how they need it.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-3">
              <h3 className="text-xl font-semibold">Analytics</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Track call volumes, appointment bookings, patient satisfaction, and more.
                Get insights into your clinic&apos;s communication patterns to optimize operations.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Integrations section */}
        <section className="mb-16">
          <h2 className="text-lg font-semibold text-[var(--brand-dark)] mb-2">
            Built to connect with your existing tools.
          </h2>
          <p className="text-xs text-neutral-500 mb-6">
            iClinic integrates with leading EHRs, CRMs, and scheduling systems so you
            don&apos;t have to change your stack to modernize your front desk.
          </p>

          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-8">
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {[
                "Dentrix",
                "Athenahealth",
                "Epic",
                "Cerner",
                "Allscripts",
                "eClinicalWorks",
                "NextGen",
                "Practice Fusion",
              ].map((system, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {system}
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-neutral-500 text-center">
              And many more. Contact us to verify compatibility with your specific system.
            </p>
          </div>
        </section>

        {/* 4. Pricing section */}
        <section className="mb-16">
          <div className="space-y-4 text-center mb-8">
            <h2 className="text-3xl font-semibold text-[var(--brand-dark)]">Pricing</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Simple, transparent pricing that scales with your practice.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="rounded-xl border-2 border-[var(--brand-gold)] bg-white/80 dark:bg-gray-900/80 p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">Standard Plan</h3>
                <p className="text-2xl font-semibold text-[var(--brand-gold)]">
                  $250/month per provider
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Up to 1000 minutes included
                </p>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-sm">Includes:</p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-gold)] mt-1">✓</span>
                    <span>24/7 AI call handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-gold)] mt-1">✓</span>
                    <span>Smart scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-gold)] mt-1">✓</span>
                    <span>Refill requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-gold)] mt-1">✓</span>
                    <span>Message taking & secure inbox routing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-gold)] mt-1">✓</span>
                    <span>Omnichannel confirmations (voice, SMS, email)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--brand-gold)] mt-1">✓</span>
                    <span>Basic EHR integration</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-[var(--brand-muted)]/40 dark:bg-gray-800 p-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Overage:</strong> Usage above 1000 minutes can be billed per minute
                  or upgraded to a higher tier. Contact us for custom enterprise pricing.
                </p>
              </div>
            </div>
          </div>

          {/* ROI explanation */}
          <section className="max-w-3xl mx-auto mt-12 space-y-6">
            <h3 className="text-2xl font-semibold text-center">Return on investment</h3>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                At $250/month per provider, iClinic pays for itself with just one additional
                new patient per month or by preventing a few missed appointments. Most clinics
                see a positive ROI within the first month.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Beyond direct revenue, consider the value of reduced staff workload, improved
                patient satisfaction, and the ability to capture after-hours inquiries that
                would otherwise be missed.
              </p>
            </div>
          </section>
        </section>

        {/* 5. Final CTA banner */}
        <section className="rounded-xl border border-[var(--brand-gold)]/30 bg-[var(--brand-muted)]/40 p-8 text-center">
          <h2 className="text-2xl font-semibold text-[var(--brand-dark)] mb-3">
            Ready to transform your clinic&apos;s front desk?
          </h2>
          <p className="text-sm text-neutral-600 mb-6 max-w-2xl mx-auto">
            Book a demo to see iClinic in action and get a personalized ROI estimate for your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[var(--brand-gold)] text-black rounded-lg px-6 py-3 text-sm font-semibold hover:bg-[var(--brand-gold-soft)] transition text-center"
            >
              Book a Demo
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 dark:border-gray-700 rounded-lg px-6 py-3 text-sm text-foreground hover:bg-gray-50 dark:hover:bg-gray-900 transition text-center"
            >
              Contact sales
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

