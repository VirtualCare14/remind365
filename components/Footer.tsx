export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden border-t border-gray-200">

      {/* Background blobs */}
      <div className="absolute top-[-60px] left-[-40px] w-[220px] h-[220px] bg-orange-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-40px] right-[-40px] w-[200px] h-[200px] bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full px-5 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-12">


        {/* Divider */}
        <div className="flex items-center gap-3 mb-7">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-300/40 to-transparent" />
          <span className="text-base">✨</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
        </div>

        {/* Bottom row: copyright + designed by */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">

          {/* Copyright */}
          <p className="text-xs lg:text-lg text-gray-500">
            © {currentYear}{" "}
            <span className="font-semibold text-gray-700">Remind365</span>
            . All rights reserved.
          </p>

          {/* Designed by */}
          <p className="text-xs lg:text-lg text-gray-600">
            Designed &amp; Developed by{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-400">
              Orange Virtual Connect
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}
