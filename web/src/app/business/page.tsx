export default function BusinessPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">For clinic owners & practice managers</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          Reduce staffing pressure, eliminate missed calls, improve patient satisfaction,
          and extend your clinic&apos;s availability—all while maintaining the personal
          touch your patients expect.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Key benefits</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-2">
            <h3 className="font-semibold text-lg">Reduced staffing pressure</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Free your front-desk staff from routine calls and administrative tasks,
              allowing them to focus on in-person patient interactions and complex inquiries.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-2">
            <h3 className="font-semibold text-lg">Fewer missed calls</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Every call is answered instantly, 24/7. No more busy signals, voicemail
              overload, or frustrated patients unable to reach your clinic.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-2">
            <h3 className="font-semibold text-lg">Better patient satisfaction</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Patients get immediate answers and can schedule appointments at their
              convenience, leading to higher satisfaction and retention rates.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-2">
            <h3 className="font-semibold text-lg">Extended hours coverage</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Provide 24/7 availability without the cost of round-the-clock staff.
              Handle after-hours calls, weekend scheduling, and emergency inquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Compare your options</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-4">
            <h3 className="font-semibold text-lg">In-house staff</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• High labor costs</li>
              <li>• Limited to business hours</li>
              <li>• Training and turnover challenges</li>
              <li>• Can be overwhelmed during peak times</li>
              <li>• Requires benefits and management</li>
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-4">
            <h3 className="font-semibold text-lg">Outsourced answering service</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• Lower cost than in-house</li>
              <li>• 24/7 availability</li>
              <li>• Limited integration with EHR</li>
              <li>• Variable quality and consistency</li>
              <li>• Less control over patient experience</li>
            </ul>
          </div>
          <div className="rounded-xl border-2 border-brand-gold bg-brand-gold/10 dark:bg-brand-gold/20 p-6 space-y-4">
            <h3 className="font-semibold text-lg">AI front-desk (iClinic)</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• Cost-effective fixed pricing</li>
              <li>• True 24/7 instant response</li>
              <li>• Seamless EHR integration</li>
              <li>• Consistent, professional service</li>
              <li>• Scales with your practice</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

