"use client";

import { useState } from "react";
import { FounderCard } from "@/components/FounderCard";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    clinicName: "",
    name: "",
    email: "",
    phone: "",
    numProviders: "",
    emr: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    // For now, just log the data
    console.log("Contact form submitted:", formData);

    // Simulate API call
    try {
      // In a real app, you would call your API endpoint here
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });
      setStatus("success");
      setFormData({ clinicName: "", name: "", email: "", phone: "", numProviders: "", emr: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen bg-background pb-20 pt-16 md:pt-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* CONTACT SECTION */}
        <section className="mb-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            {/* LEFT */}
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
                Contact us
              </p>

              <h1 className="text-3xl font-semibold text-[var(--brand-dark)] md:text-4xl">
                Talk to the iClinic team
              </h1>

              <p className="text-sm leading-relaxed text-neutral-700">
                Whether you&apos;re running a single-site clinic or a multi-location
                group, we&apos;ll help you understand exactly how an AI front desk can
                fit into your workflows, technology stack, and budget.
              </p>

              <ul className="space-y-2 text-sm text-neutral-700">
                <li>• See a live walkthrough tailored to your specialty and call volume.</li>
                <li>• Map iClinic to your phone tree, scheduling, and refills process.</li>
                <li>• Get ROI estimates based on staffing costs and missed-call volume.</li>
              </ul>

              <p className="text-sm text-neutral-700">
                Existing customer? Reach us at{" "}
                <a
                  href="mailto:support@imedclinic.ai"
                  className="font-semibold text-[var(--brand-gold)] underline underline-offset-2"
                >
                  support@imedclinic.ai
                </a>
                .
              </p>
            </div>

            {/* RIGHT (FORM) */}
            <form
              className="space-y-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8"
              onSubmit={handleSubmit}
            >
              <div className="space-y-1 text-sm">
                <label htmlFor="name" className="font-medium text-neutral-800">
                  Your full name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-[var(--brand-gold)] focus:bg-white"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="clinicName" className="font-medium text-neutral-800">
                  Healthcare organization
                </label>
                <input
                  type="text"
                  id="clinicName"
                  name="clinicName"
                  required
                  placeholder="Your organization name"
                  value={formData.clinicName}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-[var(--brand-gold)] focus:bg-white"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="font-medium text-neutral-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-[var(--brand-gold)] focus:bg-white"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="numProviders" className="font-medium text-neutral-800">
                  Number of providers
                </label>
                <input
                  type="text"
                  id="numProviders"
                  name="numProviders"
                  placeholder="# of providers"
                  value={formData.numProviders}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-[var(--brand-gold)] focus:bg-white"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="emr" className="font-medium text-neutral-800">
                  EMR / EHR
                </label>
                <input
                  type="text"
                  id="emr"
                  name="emr"
                  placeholder="e.g., Athena, Kareo, eClinicalWorks"
                  value={formData.emr}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-[var(--brand-gold)] focus:bg-white"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="message" className="font-medium text-neutral-800">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us what you want to automate (calls, scheduling, refills, messages)..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm outline-none focus:border-[var(--brand-gold)] focus:bg-white"
                />
              </div>

              {status === "success" && (
                <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                  <p className="text-sm text-green-800">
                    Thank you for your message! We&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="rounded-lg bg-red-50 border border-red-200 p-4">
                  <p className="text-sm text-red-800">
                    Something went wrong. Please try again or email us directly.
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-dark)] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black transition"
              >
                Submit
              </button>

              <p className="text-[11px] leading-relaxed text-neutral-500">
                By submitting, you agree to be contacted by iClinic. We never sell your data.
              </p>
            </form>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="border-t border-neutral-200 pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
            About us
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[var(--brand-dark)] md:text-3xl">
            Created by physicians, for physicians.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-700">
            iClinic was built to solve the real front-desk bottleneck: missed calls,
            endless hold times, and manual back-and-forth that frustrates patients and
            burns out staff. Our AI voice agents answer instantly, capture intent
            accurately, and deliver structured outcomes to your team—so your clinic
            runs smoother without sacrificing patient trust.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <FounderCard
              name="Vijaiganesh Nagarajan"
              title="Founder"
              imageSrc="/images/founder-vijai.png"
            />

            <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[var(--brand-dark)]">
                Security & compliance first
              </p>
              <p className="mt-2 text-sm text-neutral-700">
                Built with HIPAA-ready infrastructure, encryption in transit and at rest,
                and audit-friendly logs designed for healthcare workflows.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[var(--brand-dark)]">
                Designed for real clinics
              </p>
              <p className="mt-2 text-sm text-neutral-700">
                Flexible routing, multi-location support, and configurable workflows for
                scheduling, refills, and secure message taking.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

