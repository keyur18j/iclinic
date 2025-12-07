"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    clinicName: "",
    name: "",
    email: "",
    phone: "",
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
      setFormData({ clinicName: "", name: "", email: "", phone: "", message: "" });
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
        <h1 className="text-4xl font-bold">Contact us</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Have questions about iClinic? We&apos;re here to help. Send us a message
          and we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="clinicName"
            className="text-xs font-medium text-gray-700 dark:text-gray-300 block"
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
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-xs font-medium text-gray-700 dark:text-gray-300 block"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
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
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
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
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
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
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold resize-none"
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
          className="bg-brand-gold text-black rounded-lg px-6 py-3 text-sm font-semibold hover:bg-brand-gold-soft transition w-full sm:w-auto"
        >
          Send message
        </button>
      </form>
    </div>
  );
}

