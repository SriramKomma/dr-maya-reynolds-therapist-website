import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center relative overflow-hidden">
      {/* Minimal geometric background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-gray-100 to-transparent rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-tl from-gray-100 to-transparent rounded-full opacity-30 transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Minimal Emoji Section */}
        <div className="mb-8">
          <div className="text-6xl md:text-8xl font-light text-gray-400 mb-4">
            💤
          </div>
          <div className="w-16 h-16 border-2 border-gray-300 rounded-full mx-auto opacity-50"></div>
        </div>

        {/* Main Message */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-light text-gray-900 mb-2">
            Oops — not an error,
          </h1>
          <h2 className="text-3xl md:text-4xl font-heading font-light text-gray-800 mb-6">
            just a pause.
          </h2>

          <div className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            This page is resting for now
            <span className="text-gray-400 ml-2">💤</span>
          </div>

          <div className="text-base md:text-lg text-gray-500 font-light">
            Please check back soon.
          </div>
        </div>

        {/* Minimal Divider */}
        <div className="my-8 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-50"></div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105 shadow-sm">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Return Home
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center gap-3 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105 shadow-sm">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Contact Us
          </Link>
        </div>

        {/* Subtle footer text */}
        <div className="mt-8 text-gray-400 text-sm">
          This is just a temporary pause. Everything is working as intended. ✨
        </div>
      </div>
    </div>
  );
}
