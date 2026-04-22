"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", number: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("✓ Message sent successfully! We'll get back to you soon.");
        setForm({ name: "", number: "", message: "" });
      } else {
        setError(data.error || "Failed to send message.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative w-full px-5 sm:px-8 md:px-16 lg:px-24 py-20 sm:py-28 text-center overflow-hidden">
        <div className="absolute top-[-80px] left-[-60px] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-60px] right-[-60px] w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/40 border border-indigo-200 dark:border-indigo-700/60 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-6">
          <span>📬</span>
          <span>Get In Touch</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-500 to-purple-600 leading-[1.1] pb-2 max-w-4xl mx-auto">
          Contact Us
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
          Have a question or want a demo? We'd love to hear from you — drop us a message and we'll get back to you promptly.
        </p>

        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="w-10 sm:w-16 h-0.5 bg-gradient-to-r from-transparent to-indigo-400 rounded-full" />
          <span className="text-xl">✉️</span>
          <div className="w-10 sm:w-16 h-0.5 bg-gradient-to-l from-transparent to-purple-400 rounded-full" />
        </div>
      </section>

      {/* ══════════════════════ TWO-COLUMN LAYOUT ══════════════════════ */}
      <section className="w-full px-5 sm:px-8 md:px-16 lg:px-24 pb-20 sm:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* ── LEFT: Contact Details ── */}
          <div className="flex flex-col gap-6">

            {/* Intro blurb */}
            <div className="card-premium rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-8 sm:py-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950/40 dark:via-gray-900 dark:to-purple-950/40 relative overflow-hidden">
              <div className="absolute top-[-30px] right-[-30px] w-[140px] h-[140px] bg-indigo-200/20 dark:bg-indigo-700/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl sm:text-3xl">🏢</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold mb-2 text-gray-900 dark:text-white">
                  We're Here to <span className="text-primary">Help</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Whether you have a question, need a walkthrough, or just want to say hello — our team is ready and happy to assist you.
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="card-premium btn-animate group cursor-default flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <span className="text-2xl sm:text-3xl">📍</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold mb-1 text-gray-900 dark:text-white">Our Office</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  1109, SS Omnia, 11th floor,  Sector 86,<br />Gurgaon ,Haryana , 122004
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="card-premium btn-animate group cursor-default flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <span className="text-2xl sm:text-3xl">📞</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold mb-1 text-gray-900 dark:text-white">Call Us</h3>
                <a
                  href="tel:9310557136"
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  9310557136
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="card-premium btn-animate group cursor-default flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <span className="text-2xl sm:text-3xl">📧</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold mb-1 text-gray-900 dark:text-white">Email Us</h3>
                <a
                  href="mailto:support@remind365.in"
                  className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors break-all"
                >
                  support@remind365.in
                </a>
              </div>
            </div>

          </div>

          {/* ── RIGHT: Contact Form ── */}
          <div className="card-premium rounded-2xl sm:rounded-3xl px-6 sm:px-10 py-8 sm:py-12 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950/40 dark:via-gray-900 dark:to-purple-950/40 relative overflow-hidden">

            <div className="absolute top-[-40px] right-[-40px] w-[180px] h-[180px] bg-indigo-200/20 dark:bg-indigo-700/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] bg-purple-200/20 dark:bg-purple-700/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-2xl sm:text-3xl">💬</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-1 text-gray-900 dark:text-white">
                Send a <span className="text-primary">Message</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-7">
                We'll respond within 24 hours.
              </p>

              <div className="space-y-5">

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Rahul Sharma"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 focus:border-transparent transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Your Number
                  </label>
                  <input
                    type="tel"
                    name="number"
                    placeholder="e.g. 9876543210"
                    value={form.number}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 focus:border-transparent transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us how we can help you..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 focus:border-transparent transition resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-2xl text-base sm:text-lg font-bold btn-animate shadow-2xl shadow-indigo-500/30 hover:scale-105 transition-transform disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <><span>📩</span> Send Message</>
                  )}
                </button>

              </div>

              {/* Success */}
              {success && (
                <div className="mt-5 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-start gap-3">
                  <span className="text-green-500 text-lg mt-0.5">✅</span>
                  <p className="text-green-700 dark:text-green-400 text-sm sm:text-base font-medium">{success}</p>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="mt-5 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3">
                  <span className="text-red-500 text-lg mt-0.5">⚠️</span>
                  <p className="text-red-700 dark:text-red-400 text-sm sm:text-base font-medium">{error}</p>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════ CTA BANNER ══════════════════════ */}
      <section className="w-full px-4 sm:px-6 md:px-0 pb-16 sm:pb-20">
        <div className="card-premium md:rounded-3xl rounded-2xl text-center px-6 sm:px-10 py-12 sm:py-16 md:px-20 md:py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950/40 dark:via-gray-900 dark:to-purple-950/40 relative overflow-hidden">

          <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-indigo-200/20 dark:bg-indigo-700/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-[-40px] left-[-40px] w-[180px] h-[180px] bg-purple-200/20 dark:bg-purple-700/10 rounded-full blur-2xl pointer-events-none" />

          <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl flex items-center justify-center mx-auto mb-5 relative z-10">
            <span className="text-2xl sm:text-3xl">🚀</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white relative z-10">
            Want to See It in <span className="text-primary">Action?</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8 relative z-10">
            Book a free demo and we'll walk you through everything Remind365 can do for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
            <a
              href="/login"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-2xl text-base sm:text-lg font-bold btn-animate shadow-2xl shadow-indigo-500/30 hover:scale-105 transition-transform"
            >
              <span>🚀</span> Get Started Free
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800/80 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-3.5 rounded-2xl text-base sm:text-lg font-bold btn-animate shadow-md hover:shadow-xl hover:scale-105 transition-transform backdrop-blur-sm"
            >
              <span>💡</span> Learn More
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
