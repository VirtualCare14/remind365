export default function About() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative w-full px-5 sm:px-8 md:px-16 lg:px-24 py-20 sm:py-28 text-center overflow-hidden">

        {/* Background blobs */}
        <div className="absolute top-[-80px] left-[-60px] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-60px] right-[-60px] w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-sm font-semibold mb-6">
          <span>💡</span>
          <span>Our Story</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-orange-500 to-amber-600 leading-[1.1] pb-2 max-w-4xl mx-auto">
          About Remind365
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
          Built for businesses that want to stay ahead — simple, secure, and always on time.
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="w-10 sm:w-16 h-0.5 bg-gradient-to-r from-transparent to-orange-400 rounded-full" />
          <span className="text-xl">🏢</span>
          <div className="w-10 sm:w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-400 rounded-full" />
        </div>
      </section>

      {/* ══════════════════════ MISSION STATEMENT ══════════════════════ */}
      <section className="w-full px-5 sm:px-8 md:px-16 lg:px-24 pb-16 sm:pb-20">
        <div className="card-premium rounded-2xl sm:rounded-3xl px-6 sm:px-10 md:px-16 py-10 sm:py-14 bg-gradient-to-br from-orange-50 via-white to-amber-50 text-center relative overflow-hidden">

          <div className="absolute top-[-40px] right-[-40px] w-[180px] h-[180px] bg-orange-200/20 rounded-full blur-2xl pointer-events-none" />

          {/* <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <span className="text-2xl sm:text-3xl">🎯</span>
          </div> */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
            “From Innovation to Impact <span className="text-primary">– The Minds Behind Remind365”</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
           <span className="text-orange-500"> Orange Virtual Global Solutions Pvt. Ltd. </span>is on a mission to redefine how businesses operate by combining smart technology with human expertise. With a focus on building scalable and efficient solutions, we simplify the complexities of daily operations—from managing communications and customer interactions to organizing workflows and data. Our flagship product, <span className="text-primary">Remind365</span>, is designed to streamline payment tracking and automated reminders, eliminating the hassle of follow-ups. Built for performance and simplicity, it empowers businesses to stay organized, improve cash flow, and focus on growth instead of routine tasks.
          </p>
        </div>
      </section>

      {/* ══════════════════════ WHAT WE OFFER ══════════════════════ */}
      <section className="w-full px-5 sm:px-8 md:px-16 lg:px-24 pb-16 sm:pb-20">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 text-gray-900">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto">
            Everything you need, nothing you don't.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">

          <div className="card-premium btn-animate group cursor-default">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <span className="text-2xl sm:text-3xl">👥</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">User Management</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Administrators can effortlessly create, edit, disable, or securely delete user accounts — all from one clean dashboard.
            </p>
          </div>

          <div className="card-premium btn-animate group cursor-default">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <span className="text-2xl sm:text-3xl">📲</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Telegram Integration</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our unique mapping system allows multiple Telegram Chat IDs to be bound to a single user — enabling instant, reliable notifications.
            </p>
          </div>

          <div className="card-premium btn-animate group cursor-default">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <span className="text-2xl sm:text-3xl">🔐</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Secure by Default</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Powered by modern web technologies, JSON Web Tokens, and robust data isolation protocols — your data is always protected.
            </p>
          </div>

          <div className="card-premium btn-animate group cursor-default">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <span className="text-2xl sm:text-3xl">⚡</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Built for Speed</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Lightweight and fast — no bloat, no complexity. Get up and running in minutes with zero learning curve.
            </p>
          </div>

          <div className="card-premium btn-animate group cursor-default">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <span className="text-2xl sm:text-3xl">🏢</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">MSME Focused</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Designed specifically for small and medium businesses that need powerful tools without the enterprise price tag.
            </p>
          </div>

          <div className="card-premium btn-animate group cursor-default">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
              <span className="text-2xl sm:text-3xl">🔔</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Smart Reminders</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Set it once and let Remind365 handle the rest — daily, weekly, or custom reminders delivered right to your phone.
            </p>
          </div>

        </div>
      </section>

      {/* ══════════════════════ VALUES ══════════════════════ */}
      <section className="w-full px-5 sm:px-8 md:px-16 lg:px-24 pb-16 sm:pb-20">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 text-gray-900">
            Our <span className="text-primary">Values</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto">
            The principles that guide everything we build.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 text-center">

          <div className="card-premium group cursor-default">
            <div className="text-4xl sm:text-5xl mb-4">🛡️</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">Trust</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We build with security-first thinking. Your data and your customers' data is never compromised.
            </p>
          </div>

          <div className="card-premium group cursor-default">
            <div className="text-4xl sm:text-5xl mb-4">✨</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">Simplicity</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Powerful tools shouldn't be complicated. We strip away the noise so you can focus on what matters.
            </p>
          </div>

          <div className="card-premium group cursor-default">
            <div className="text-4xl sm:text-5xl mb-4">🚀</div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">Growth</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We grow with our users. Every feature is built based on real feedback from real business owners.
            </p>
          </div>

        </div>
      </section>

      {/* ══════════════════════ CTA BANNER ══════════════════════ */}
      <section className="w-full px-4 sm:px-6 md:px-0 pb-16 sm:pb-20">
        <div className="card-premium md:rounded-3xl rounded-2xl text-center px-6 sm:px-10 py-12 sm:py-16 md:px-20 md:py-20 bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">

          <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-orange-200/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-[-40px] left-[-40px] w-[180px] h-[180px] bg-amber-200/20 rounded-full blur-2xl pointer-events-none" />

          <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-5 relative z-10">
            <span className="text-2xl sm:text-3xl">👋</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 relative z-10">
            Ready to Get <span className="text-primary">Started?</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8 relative z-10">
            Join businesses already using Remind365 to stay on top of every payment — effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-2xl text-base sm:text-lg font-bold btn-animate shadow-2xl shadow-orange-500/30 hover:scale-105 transition-transform"
            >
              <span>📅</span> Book Free Demo
            </a>
            <a
              href="/login"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-3.5 rounded-2xl text-base sm:text-lg font-bold btn-animate shadow-md hover:shadow-xl hover:scale-105 transition-transform backdrop-blur-sm"
            >
              <span>🚀</span> Get Started
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
