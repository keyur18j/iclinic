export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Products</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          iClinic&apos;s AI front-desk solution automates routine clinic operations,
          allowing your staff to focus on patient care while ensuring every call and message
          is handled professionally and efficiently.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-3">
          <h2 className="text-2xl font-semibold">AI Call Handling</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Never miss a call again. Our AI answers instantly, understands patient needs,
            and handles routine inquiries without putting anyone on hold. Available 24/7
            to provide consistent, professional service.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-3">
          <h2 className="text-2xl font-semibold">Smart Scheduling</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Automate appointment booking, cancellations, and rescheduling. The AI checks
            availability in real-time, sends confirmation reminders, and reduces no-shows
            by keeping patients informed.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-3">
          <h2 className="text-2xl font-semibold">Refills & Messaging</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Process medication refill requests automatically. The AI captures all necessary
            information and routes requests to the appropriate provider for approval,
            streamlining the refill workflow.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-3">
          <h2 className="text-2xl font-semibold">Omnichannel Notifications</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Send appointment confirmations and reminders via the patient&apos;s preferred
            channel—voice, SMS, or email. Ensure important information reaches patients
            when and how they need it.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-3 md:col-span-2">
          <h2 className="text-2xl font-semibold">EHR Integration</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Seamlessly integrate with your existing EHR system. All interactions, appointments,
            and messages are automatically logged and synced, ensuring your clinical team
            has complete visibility into patient communications.
          </p>
        </div>
      </div>
    </div>
  );
}

