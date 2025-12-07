import Link from "next/link";
import { ImpactBanner } from "@/components/ImpactBanner";
import { FeatureStream } from "@/components/FeatureStream";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-16">
      {/* Hero Section */}
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <div className="inline-block rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-semibold text-brand-gold">
            AI Front-Desk for Clinics
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            AI Front-Desk for <span className="text-brand-gold">Clinics</span>
          </h1>
          <p className="text-xl text-brand-gold font-medium">
            Instant answers, 24/7 scheduling, refills & messaging so your staff can focus on patient care.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Handles routine calls, scheduling, medication refill requests, and secure messages.
            Works across phone, SMS and email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book-demo"
              className="rounded-md bg-brand-gold px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-brand-gold-soft transition text-center"
            >
              Book a Demo
            </Link>
            <Link
              href="/pricing"
              className="rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-6 py-3 text-sm text-foreground hover:bg-gray-50 dark:hover:bg-gray-900 transition text-center"
            >
              See pricing & ROI
            </Link>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            One extra new patient per month can cover the full cost.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-4">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Dashboard preview – calls, schedules & messages in one place
          </p>
          <div className="aspect-video rounded-lg bg-gradient-to-br from-brand-gold/10 to-brand-muted dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Replace with real product screenshot later.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Key features</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Simplify clinic front-desk operations with AI-powered automation
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "AI Call Handling – No Waiting",
              description: "Instant pickup, no hold music. Patients get immediate answers to their questions.",
            },
            {
              title: "Smart Scheduling",
              description: "Automated appointment booking, cancellations, and reminders to reduce no-shows.",
            },
            {
              title: "Medication Refill Requests",
              description: "Process refill requests automatically and route to providers for approval.",
            },
            {
              title: "Automated Message Taking & Secure Inbox",
              description: "AI captures messages accurately and routes them to the right provider inbox.",
            },
            {
              title: "Omnichannel Confirmations",
              description: "Send appointment confirmations via voice, SMS, and email based on patient preference.",
            },
            {
              title: "EHR Integration Ready",
              description: "Seamlessly integrates with major EHR systems for streamlined workflows.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-2"
            >
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">How it works</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { step: "1", title: "Patient calls or messages", description: "Patient reaches out via phone, SMS, or email" },
            { step: "2", title: "AI front-desk answers immediately", description: "AI handles the interaction instantly, 24/7" },
            { step: "3", title: "Schedules / Processes / Takes message", description: "AI books appointments, processes refills, or captures messages" },
            { step: "4", title: "Sends summary to EHR", description: "All interactions are logged and routed to provider inbox" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-2 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-brand-gold text-black flex items-center justify-center font-bold mx-auto">
                {item.step}
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust / Compliance Strip */}
      <section className="flex flex-wrap gap-3 justify-center">
        {[
          "HIPAA-focused design",
          "Built on AWS",
          "Supported by modern AI infrastructure",
        ].map((badge, idx) => (
          <span
            key={idx}
            className="px-4 py-2 rounded-full bg-brand-muted dark:bg-brand-dark-soft text-xs font-medium text-gray-700 dark:text-gray-300"
          >
            {badge}
          </span>
        ))}
      </section>

      {/* Pricing Teaser */}
      <section className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-8 space-y-4 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold">Simple, transparent pricing</h2>
        <p className="text-lg font-semibold text-brand-gold">
          Starts at $250/month per provider (up to 1000 minutes).
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          One missed appointment can cost more than the monthly subscription.
        </p>
        <Link
          href="/pricing"
          className="inline-block bg-brand-gold text-black rounded-lg px-6 py-3 text-sm font-semibold hover:bg-brand-gold-soft transition"
        >
          View full pricing
        </Link>
      </section>

      {/* FAQ Teaser */}
      <section className="space-y-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Frequently asked questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "Is this HIPAA-compliant?",
              answer: "Yes. iClinic is built with HIPAA-focused design principles and uses secure, encrypted infrastructure to protect patient data.",
            },
            {
              question: "Does it work with my EHR?",
              answer: "iClinic uses standards-based integration protocols. We support integration with major EHR systems. Contact us for specific compatibility details.",
            },
            {
              question: "How long does setup take?",
              answer: "Most clinics start in days, not months. Our streamlined onboarding process gets you up and running quickly.",
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-2"
            >
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="text-center pt-4">
          <Link
            href="/contact"
            className="text-sm text-brand-gold hover:underline"
          >
            Have more questions? Contact us
          </Link>
        </div>
      </section>

      <FeatureStream />

      {/* Impact / ROI Banner */}
      <ImpactBanner />
    </div>
  );
}
