import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-8 text-center bg-gradient-to-b from-transparent to-[var(--glass-border)]">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 mt-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 pb-2">
        Welcome to Remind365
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10 leading-relaxed font-light">
        Seamlessly manage users, telegram integrations, and notifications all in one robust and beautiful platform.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/login" 
          className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl text-lg font-bold btn-animate shadow-xl shadow-indigo-500/30"
        >
          Get Started
        </Link>
        <Link 
          href="/about" 
          className="bg-white dark:bg-gray-800 text-gray-900 border border-gray-200 dark:border-gray-700 dark:text-white px-8 py-4 rounded-xl text-lg font-bold btn-animate shadow-md hover:shadow-lg"
        >
          Learn More
        </Link>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full text-left">
        <div className="card-premium btn-animate group cursor-default">
          <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span className="text-2xl text-primary">👨‍💼</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Admin Control</h3>
          <p className="text-gray-600 dark:text-gray-400">Complete control over user management, from creation to secure deletion.</p>
        </div>
        <div className="card-premium btn-animate group cursor-default">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span className="text-2xl text-purple-600 dark:text-purple-400">🔒</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Secure Access</h3>
          <p className="text-gray-600 dark:text-gray-400">Enterprise-grade security using JWT standards to protect your dashboard.</p>
        </div>
        <div className="card-premium btn-animate group cursor-default">
          <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span className="text-2xl text-pink-600 dark:text-pink-400">📱</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Telegram Ready</h3>
          <p className="text-gray-600 dark:text-gray-400">Bind multiple chat IDs directly into the user profile for seamless notifications.</p>
        </div>
      </div>
    </div>
  );
}
