import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">

      {/* ═══════════════════════════ HERO ═══════════════════════════ */}
      <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] w-full px-5 sm:px-8 md:px-16 lg:px-24 text-center overflow-hidden bg-gradient-to-b from-transparent to-[var(--glass-border)]">

        {/* Background blobs */}
        <div className="absolute top-[-120px] left-[-100px] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-orange-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[260px] sm:w-[420px] h-[260px] sm:h-[420px] bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[300px] sm:w-[600px] h-[150px] sm:h-[200px] bg-pink-300/10 rounded-full blur-3xl pointer-events-none" />

        {/* Badge */}
        <div className="mt-12 sm:mt-16 mb-6 sm:mb-8 inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs sm:text-sm md:text-base font-semibold tracking-wide shadow-sm">
          <span>🚀</span>
          <span>Built for Small Businesses & MSMEs</span>
        </div>

        {/* Heading */}
     <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight mb-5 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-orange-400 to-amber-500 pb-2 leading-[1.1] max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
  Focus on Business, Not Follow-Ups
</h1>

        {/* Divider accent */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-8 sm:w-12 md:w-20 h-0.5 bg-gradient-to-r from-transparent to-orange-400 rounded-full" />
          <span className="text-xl sm:text-2xl">💸</span>
          <div className="w-8 sm:w-12 md:w-20 h-0.5 bg-gradient-to-l from-transparent to-amber-400 rounded-full" />
        </div>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-xs sm:max-w-xl md:max-w-3xl mb-3 sm:mb-4 leading-relaxed font-light">
        With Remind 365, you don't need multiple apps or complex systems. Everything you need to track payments is in one place — simple, secure, and built just for you. </p>

        {/* Secondary description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-xs sm:max-w-lg md:max-w-2xl mb-8 sm:mb-10 leading-relaxed">
          Remind 365 is a bespoke payment reminder tool for small businesses and MSMEs — ensuring you stay on top of every receivable, every day.
        </p>

        {/* CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14 w-full sm:w-auto px-2 sm:px-0">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg font-bold btn-animate shadow-2xl shadow-orange-500/30 flex items-center justify-center gap-2 hover:scale-105 transition-transform"
          >
            <span>📅</span> Book Free Demo
          </Link>
          <Link
            href="/about"
            className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg font-bold btn-animate shadow-md hover:shadow-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform backdrop-blur-sm"
          >
            <span>💡</span> Learn More
          </Link>
        </div> */}

        {/* Trust Stats */}
        <div className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto px-2 sm:px-0">
          <div className="grid grid-cols-3 divide-x divide-gray-200 bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl px-2 sm:px-4 py-4 sm:py-5 shadow-lg">
            <div className="flex flex-col items-center px-2 sm:px-4">
              <span className="text-lg sm:text-2xl md:text-3xl font-extrabold text-gray-900">100%</span>
              <span className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-1 text-center leading-tight">Private & Secure</span>
            </div>
            <div className="flex flex-col items-center px-2 sm:px-4">
              <span className="text-lg sm:text-2xl md:text-3xl font-extrabold text-gray-900">Zero</span>
              <span className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-1 text-center leading-tight">Missed Payments</span>
            </div>
            <div className="flex flex-col items-center px-2 sm:px-4">
              <span className="text-lg sm:text-2xl md:text-3xl font-extrabold text-gray-900">1 App</span>
              <span className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-1 text-center leading-tight">All Reminders</span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-10 sm:mt-12 mb-4 sm:mb-6 flex flex-col items-center gap-1.5 text-gray-600 animate-bounce">
          <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold">Scroll to explore</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* ═══════════════════════ WHY REMIND 365 ═══════════════════════ */}
      <section className="mt-16 sm:mt-20 w-full px-5 sm:px-8 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 text-gray-900">
            Why <span className="text-primary">Remind 365?</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto">
            Stay Organized, Stay in Control
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 text-left">

          <div className="card-premium btn-animate group cursor-default">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <span className="text-2xl sm:text-3xl">📋</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">One Platform, Zero Chaos</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              No more spreadsheets, sticky notes, or scattered reminders across apps. Remind 365 gives you a single, focused platform to track all your upcoming payments effortlessly.
            </p>
          </div>

          <div className="card-premium btn-animate group cursor-default">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <span className="text-2xl sm:text-3xl">🔒</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Private & Secure Alerts</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Your data stays completely secure. Integrated with Telegram, Remind 365 sends reminders only to you—not your customers—ensuring full control and confidentiality.
            </p>
          </div>

          <div className="card-premium btn-animate group cursor-default">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <span className="text-2xl sm:text-3xl">⏰</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Never Miss a Due Date</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Get timely alerts for every pending payment so you can take action when it matters most. Avoid missed follow-ups and improve your cash flow with consistent tracking.
            </p>
          </div>

          <div className="card-premium btn-animate group cursor-default">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <span className="text-2xl sm:text-3xl">🏢</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Built for MSMEs</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Designed with simplicity in mind, Remind 365 works seamlessly for businesses of all sizes—especially those who need a lightweight, no-complexity solution.
            </p>
          </div>

        </div>
      </section>

      {/* ═══════════════════════ HOW IT WORKS ═══════════════════════ */}
      <section className="mt-16 sm:mt-20 w-full px-5 sm:px-8 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 text-gray-900">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto">
            Get started in minutes — no setup complexity, no learning curve.
          </p>
        </div>

        {/* Mobile: vertical stepper | Desktop: horizontal grid */}
        <div className="block lg:hidden space-y-4">
          {[
            { step: "Step 1", color: "orange", icon: "📝", title: "Add Payment Details", desc: "Enter customer name, amount, and due date — quick and straightforward." },
            { step: "Step 2", color: "amber", icon: "⚙️", title: "Set Reminder Frequency", desc: "Choose how and when you want alerts — fully on your terms." },
            { step: "Step 3", color: "green", icon: "📲", title: "Receive Telegram Notifications", desc: "Get daily reminders delivered directly to your phone via Telegram." },
            { step: "Step 4", color: "pink", icon: "✅", title: "Take Action On Time", desc: "Follow up without missing a single payment — every time." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 card-premium">
              <div className={`w-12 h-12 shrink-0 bg-${item.color}-100 rounded-lg flex items-center justify-center`}>
                <span className="text-2xl">{item.icon}</span>
              </div>
              <div>
                <span className={`text-xs font-bold text-${item.color}-500 uppercase tracking-widest mb-1 block`}>{item.step}</span>
                <h3 className="text-base font-bold mb-1 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:grid grid-cols-4 gap-8 text-left relative">
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-orange-200 via-amber-200 to-pink-200 z-0" />

          <div className="card-premium btn-animate group cursor-default relative z-10">
            <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <span className="text-3xl">📝</span>
            </div>
            <span className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-2 block">Step 1</span>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Add Payment Details</h3>
            <p className="text-gray-600 text-base leading-relaxed">Enter customer name, amount, and due date — quick and straightforward.</p>
          </div>

          <div className="card-premium btn-animate group cursor-default relative z-10">
            <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <span className="text-3xl">⚙️</span>
            </div>
            <span className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-2 block">Step 2</span>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Set Reminder Frequency</h3>
            <p className="text-gray-600 text-base leading-relaxed">Choose how and when you want alerts — fully on your terms.</p>
          </div>

          <div className="card-premium btn-animate group cursor-default relative z-10">
            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <span className="text-3xl">📲</span>
            </div>
            <span className="text-sm font-bold text-green-500 uppercase tracking-widest mb-2 block">Step 3</span>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Receive Telegram Notifications</h3>
            <p className="text-gray-600 text-base leading-relaxed">Get daily reminders delivered directly to your phone via Telegram.</p>
          </div>

          <div className="card-premium btn-animate group cursor-default relative z-10">
            <div className="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <span className="text-3xl">✅</span>
            </div>
            <span className="text-sm font-bold text-pink-500 uppercase tracking-widest mb-2 block">Step 4</span>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Take Action On Time</h3>
            <p className="text-gray-600 text-base leading-relaxed">Follow up without missing a single payment — every time.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ KEY FEATURES ═══════════════════════ */}
      <section className="mt-16 sm:mt-20 w-full px-5 sm:px-8 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 text-gray-900">
            Key <span className="text-primary">Features</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto">
            Everything you need to stay on top of your payments — nothing you don't.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 text-left">

          <div className="card-premium btn-animate group cursor-default">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <span className="text-2xl sm:text-3xl">🔔</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Daily Payment Alerts</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Receive automated daily reminders via Telegram so no due date ever slips through the cracks.
            </p>
          </div>

          <div className="card-premium btn-animate group cursor-default">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <span className="text-2xl sm:text-3xl">🙋</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Single-User Notifications</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Alerts go only to you — not your customers. Complete privacy and control over your follow-up process.
            </p>
          </div>

          <div className="card-premium btn-animate group cursor-default">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <span className="text-2xl sm:text-3xl">🖥️</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Simple & Easy Interface</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              A clean, clutter-free UI designed so anyone can get started instantly — no training required.
            </p>
          </div>

          <div className="card-premium btn-animate group cursor-default">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <span className="text-2xl sm:text-3xl">📊</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Centralized Payment Tracking</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              All your pending payments in one place — no switching between apps, sheets, or notes.
            </p>
          </div>

          <div className="card-premium btn-animate group cursor-default">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <span className="text-2xl sm:text-3xl">🔐</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Secure Data Handling</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Your business data is protected with enterprise-grade security standards at every layer.
            </p>
          </div>

          <div className="card-premium btn-animate group cursor-default">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <span className="text-2xl sm:text-3xl">🗓️</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Custom Reminder Scheduling</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Set reminders on your own schedule — daily, weekly, or custom intervals that suit your workflow.
            </p>
          </div>

        </div>
      </section>

      {/* ══════════════════ FOCUS ON BUSINESS (CTA BANNER) ══════════════════ */}
      <section className="mt-16 sm:mt-20 w-full pb-16 sm:pb-20 px-4 sm:px-6 md:px-0">
        <div className="card-premium md:rounded-3xl rounded-2xl text-center px-6 sm:px-10 py-12 sm:py-16 md:px-20 md:py-24 bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">

          {/* Decorative background circles */}
          <div className="absolute top-[-60px] right-[-60px] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-orange-200/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-[-40px] left-[-40px] w-[160px] sm:w-[240px] h-[160px] sm:h-[240px] bg-amber-200/30 rounded-full blur-2xl pointer-events-none" />

          {/* Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 relative z-10">
            <span className="text-2xl sm:text-3xl">🚀</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-5 text-gray-900 relative z-10">
            Stop Chasing Payments Manually,{" "}
            <span className="text-primary">Automate Reminders and Get Paid Faster</span>
          </h2>

          {/* Body */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed relative z-10">
            With Remind 365, you don't need multiple apps or complex systems. Everything you need to track payments is in one place —{" "}
            <span className="font-semibold text-gray-800">simple, secure, and built just for you.</span>
          </p>

          {/* Pill Tags */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 relative z-10">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-100 text-orange-700 rounded-full text-xs sm:text-sm font-semibold">
              🎯 One Platform
            </span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-100 text-amber-700 rounded-full text-xs sm:text-sm font-semibold">
              🔒 Fully Secure
            </span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-semibold">
              ⚡ Zero Complexity
            </span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-pink-100 text-pink-700 rounded-full text-xs sm:text-sm font-semibold">
              🏢 Built for MSMEs
            </span>
          </div>

          {/* CTA inside banner */}
          <div className="mt-8 sm:mt-10 relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-2xl text-base sm:text-lg font-bold btn-animate shadow-2xl shadow-orange-500/30 hover:scale-105 transition-transform"
            >
              <span>📅</span> Book a Free Demo
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
