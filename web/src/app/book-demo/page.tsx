"use client";

import { useState } from "react";

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    clinicName: "",
    numberOfProviders: "",
    contactName: "",
    email: "",
    phone: "",
    preferredTime: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    // For now, just log the data
    console.log("Demo request submitted:", formData);

    // Simulate API call
    try {
      // In a real app, you would call your API endpoint here
      // await fetch("/api/demo-request", { method: "POST", body: JSON.stringify(formData) });
      setStatus("success");
      setFormData({
        clinicName: "",
        numberOfProviders: "",
        contactName: "",
        email: "",
        phone: "",
        preferredTime: "",
      });
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Book a demo</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          See iClinic in action. Schedule a personalized demo to learn how our AI
          front-desk can transform your clinic&apos;s operations.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="clinicName"
            className="text-xs font-medium text-slate-700 dark:text-slate-300 block"
          >
            Clinic name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="clinicName"
            name="clinicName"
            required
            value={formData.clinicName}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="numberOfProviders"
            className="text-xs font-medium text-slate-700 dark:text-slate-300 block"
          >
            Number of providers <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="numberOfProviders"
            name="numberOfProviders"
            required
            min="1"
            value={formData.numberOfProviders}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="contactName"
            className="text-xs font-medium text-slate-700 dark:text-slate-300 block"
          >
            Contact person name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            required
            value={formData.contactName}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-xs font-medium text-slate-700 dark:text-slate-300 block"
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
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-xs font-medium text-slate-700 dark:text-slate-300 block"
          >
            Phone for demo
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Recommended for scheduling purposes
          </p>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="preferredTime"
            className="text-xs font-medium text-slate-700 dark:text-slate-300 block"
          >
            Preferred time window
          </label>
          <textarea
            id="preferredTime"
            name="preferredTime"
            rows={3}
            value={formData.preferredTime}
            onChange={handleChange}
            placeholder="e.g., Weekday mornings, Tuesday afternoons, etc."
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
          />
        </div>

        {status === "success" && (
          <div className="rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4">
            <p className="text-sm text-green-800 dark:text-green-200">
              Thanks! We&apos;ll reach out to schedule your demo.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4">
            <p className="text-sm text-red-800 dark:text-red-200">
              Something went wrong. Please try again or contact us directly.
            </p>
          </div>
        )}

        <button
          type="submit"
          className="bg-sky-500 text-background rounded-lg px-6 py-3 text-sm font-semibold hover:bg-sky-600 transition w-full sm:w-auto"
        >
          Request demo
        </button>
      </form>
    </div>
  );
}

