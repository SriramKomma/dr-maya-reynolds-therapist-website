import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-50 via-white to-gray-100 border-t border-gray-200 relative overflow-hidden">
      {/* Elegant geometric background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-gray-100 to-transparent rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-tl from-gray-100 to-transparent rounded-full opacity-20 transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 py-16">
          {/* Brand Section */}
          <Reveal>
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-3xl font-heading font-light text-gray-900 mb-2">
                  Dr. Maya Reynolds
                </h3>
                <p className="text-gray-600 text-sm font-medium tracking-wide uppercase">
                  Licensed Clinical Psychologist
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Santa Monica Office
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      123 45th Street W<br />
                      Santa Monica, CA 90401
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 7.89a2 2 0 002.82 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <a
                      href="mailto:dr.mayareynolds@therapyoffice.com"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors mt-1 block">
                      dr.mayareynolds@therapyoffice.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Phone</p>
                    <a
                      href="tel:+13105551847"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors mt-1 block">
                      (310) 555-1847
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Services Section */}
          <Reveal delay={80}>
            <div>
              <h4 className="text-lg font-heading font-light text-gray-900 mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#services"
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-2 group">
                    <span className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-gray-900 transition-colors"></span>
                    <span>Anxiety & Panic Treatment</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-2 group">
                    <span className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-gray-900 transition-colors"></span>
                    <span>Trauma Therapy & EMDR</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-2 group">
                    <span className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-gray-900 transition-colors"></span>
                    <span>Burnout & High-Achiever Support</span>
                  </Link>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Office Info Section */}
          <Reveal delay={160}>
            <div>
              <h4 className="text-lg font-heading font-light text-gray-900 mb-6">
                Office
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#office"
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-2 group">
                    <span className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-gray-900 transition-colors"></span>
                    <span>Location & Hours</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#office"
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-2 group">
                    <span className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-gray-900 transition-colors"></span>
                    <span>In-Person Sessions</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#office"
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-2 group">
                    <span className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-gray-900 transition-colors"></span>
                    <span>Telehealth Options</span>
                  </Link>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* About Section */}
          <Reveal delay={240}>
            <div>
              <h4 className="text-lg font-heading font-light text-gray-900 mb-6">
                About
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#about"
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-2 group">
                    <span className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-gray-900 transition-colors"></span>
                    <span>Meet Dr. Reynolds</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-2 group">
                    <span className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-gray-900 transition-colors"></span>
                    <span>Approach to Therapy</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-2 group">
                    <span className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-gray-900 transition-colors"></span>
                    <span>Professional Background</span>
                  </Link>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <Reveal>
            <div className="text-center lg:text-left">
              <p className="text-gray-600 text-sm">
                © 2026 Dr. Maya Reynolds, PsyD. All Rights Reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Licensed Clinical Psychologist | California License #PSY12345
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-gray-600 hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <Link
                href="/good-faith-estimate"
                className="text-gray-600 hover:text-gray-900 transition-colors">
                Good Faith Estimate
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-gray-900 transition-colors">
                Terms of Service
              </Link>
              <Link
                href="/disclaimer"
                className="text-gray-600 hover:text-gray-900 transition-colors">
                Disclaimer
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Subtle bottom accent */}
        <div className="mt-8 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-40"></div>
        </div>
      </div>
    </footer>
  );
}
