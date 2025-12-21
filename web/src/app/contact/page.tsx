"use client";

import { useState } from "react";

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
    <main className="min-h-screen bg-background pb-20 pt-20 md:pt-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* 1. Contact hero + form */}
        <section className="mb-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            {/* LEFT: text */}
            <div>
              <h1 className="text-4xl font-semibold text-[var(--brand-dark)] mb-4">
                Contact us
              </h1>
              <p className="text-sm leading-relaxed text-neutral-700 mb-4">
                Our team is ready to help you transform your clinic&apos;s front desk.
                Have questions about iClinic? Send us a message and we&apos;ll get back to you as soon as possible.
              </p>
              <p className="text-xs text-neutral-500">
                Already an existing customer? Email support directly at{" "}
                <a href="mailto:support@iclinic.com" className="text-[var(--brand-gold)] hover:underline">
                  support@iclinic.com
                </a>
              </p>
            </div>

            {/* RIGHT: form */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="clinicName"
                    className="text-xs font-medium text-gray-700 dark:text-gray-300 block"
                  >
                    Clinic/Organization name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="clinicName"
                    name="clinicName"
                    required
                    value={formData.clinicName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-gray-700 dark:text-gray-300 block"
                  >
                    Your name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-gray-700 dark:text-gray-300 block"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-xs font-medium text-gray-700 dark:text-gray-300 block"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="numProviders"
                    className="text-xs font-medium text-gray-700 dark:text-gray-300 block"
                  >
                    Number of providers
                  </label>
                  <input
                    type="text"
                    id="numProviders"
                    name="numProviders"
                    value={formData.numProviders}
                    onChange={handleChange}
                    placeholder="e.g., 1-5, 6-10, 20+"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="emr"
                    className="text-xs font-medium text-gray-700 dark:text-gray-300 block"
                  >
                    EMR/EHR system
                  </label>
                  <input
                    type="text"
                    id="emr"
                    name="emr"
                    value={formData.emr}
                    onChange={handleChange}
                    placeholder="e.g., Epic, Athena, Dentrix"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-gray-700 dark:text-gray-300 block"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)] resize-none"
                  />
                </div>

                {status === "success" && (
                  <div className="rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4">
                    <p className="text-sm text-green-800 dark:text-green-200">
                      Thank you for your message! We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4">
                    <p className="text-sm text-red-800 dark:text-red-200">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[var(--brand-gold)] text-black rounded-lg px-6 py-3 text-sm font-semibold hover:bg-[var(--brand-gold-soft)] transition"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* 2. About Us block */}
        <section className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
            About iClinic
          </p>
          <h2 className="text-2xl font-semibold text-[var(--brand-dark)]">
            Created by physicians, for physicians.
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-neutral-700">
            iClinic was founded to solve a critical problem facing healthcare clinics
            today: the overwhelming burden on front-desk staff and the frustration patients
            experience when they can&apos;t reach their clinic. We believe AI should augment
            human capabilities, not replace them. Our AI front-desk handles routine inquiries,
            scheduling, and administrative tasks, freeing your staff to focus on in-person
            patient care and complex situations that require human judgment and empathy.
          </p>

          {/* Values grid */}
          <div className="grid gap-6 md:grid-cols-3 mt-8">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-2">
              <h3 className="font-semibold text-lg">Security first</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Every aspect of iClinic is designed with HIPAA compliance in mind, from
                encrypted communications to secure data handling and audit trails.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-2">
              <h3 className="font-semibold text-lg">Built by physicians</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Our team combines deep expertise in healthcare operations, AI technology,
                and software engineering to deliver a product that truly serves both clinics
                and their patients.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 p-6 space-y-2">
              <h3 className="font-semibold text-lg">Modern infrastructure</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Built on modern cloud infrastructure (AWS) with 99.9% uptime, ensuring your
                clinic&apos;s front-desk is always available when patients need it.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

