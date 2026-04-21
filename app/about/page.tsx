export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
        About Remind365
      </h1>
      <div className="card-premium space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
        <p>
          Remind365 is a streamlined solution designed to eliminate the friction in managing users and broadcasting alerts. 
          Built with an emphasis on performance and stunning aesthetics, it brings enterprise-level administrative control 
          to a minimalist interface.
        </p>
        <p>
          Administrators can effortlessly create, edit, disable, or securely delete user accounts. Additionally, our 
          unique mapping system allows multiple Telegram Chat IDs to be instantly bound to a single user—enabling 
          complex notification networks with zero hassle.
        </p>
        <p>
          Secure by default. Powered by modern web technologies, JSON Web Tokens, and robust data isolation protocols.
        </p>
      </div>
    </div>
  );
}
