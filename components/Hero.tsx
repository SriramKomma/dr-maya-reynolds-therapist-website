import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Minimal geometric background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-gray-100 to-transparent rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-tl from-gray-100 to-transparent rounded-full opacity-20 transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="order-1 text-center lg:text-left">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded-full border border-gray-200">
                  Licensed Clinical Psychologist
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-gray-900 mb-6 leading-tight">
                Find calm amidst
                <br />
                <span className="text-gray-700">the overwhelm</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                Evidence-based therapy for anxiety, trauma, and burnout in{" "}
                <span className="font-medium text-gray-800">
                  Santa Monica, CA
                </span>
              </p>

              <div className="flex justify-start">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Schedule a Consultation
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-8">
                <div className="relative aspect-[3/4] rounded-full overflow-hidden bg-gray-100 shadow-2xl border border-gray-200">
                  <Image
                    src="/images/dr-maya-reynolds1.png"
                    alt="Dr. Maya Reynolds, Licensed Clinical Psychologist"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 45vw, 35vw"
                  />
                  {/* Subtle overlay for professional look */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-gray-900/5 rounded-full"></div>
                </div>

                {/* Professional badge */}
                <div className="absolute -bottom-4 -right-4 bg-white border border-gray-200 rounded-full p-3 shadow-lg">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
