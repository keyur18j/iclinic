import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-12">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Pricing</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Simple, transparent pricing that scales with your practice.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="rounded-xl border-2 border-brand-gold bg-white/80 dark:bg-gray-900/80 p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Standard Plan</h2>
            <p className="text-2xl font-semibold text-brand-gold">
              $250/month per provider
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Up to 1000 minutes included
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-semibold">Includes:</p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-brand-gold mt-1">✓</span>
                <span>24/7 AI call handling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold mt-1">✓</span>
                <span>Smart scheduling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold mt-1">✓</span>
                <span>Refill requests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold mt-1">✓</span>
                <span>Message taking & secure inbox routing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold mt-1">✓</span>
                <span>Omnichannel confirmations (voice, SMS, email)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold mt-1">✓</span>
                <span>Basic EHR integration</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg bg-brand-muted dark:bg-gray-800 p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Overage:</strong> Usage above 1000 minutes can be billed per minute
              or upgraded to a higher tier. Contact us for custom enterprise pricing.
            </p>
          </div>
        </div>
      </div>

      <section className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold text-center">Return on investment</h2>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            At $250/month per provider, iClinic pays for itself with just one additional
            new patient per month or by preventing a few missed appointments. Most clinics
            see a positive ROI within the first month.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Beyond direct revenue, consider the value of reduced staff workload, improved
            patient satisfaction, and the ability to capture after-hours inquiries that
            would otherwise be missed.
          </p>
        </div>
      </section>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/book-demo"
          className="bg-brand-gold text-black rounded-lg px-6 py-3 text-sm font-semibold hover:bg-brand-gold-soft transition text-center"
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
    </div>
  );
}

