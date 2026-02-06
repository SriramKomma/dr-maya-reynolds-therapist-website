"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/95 backdrop-blur-sm border-b border-neutral-200">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-heading font-medium text-neutral-900">
            Dr. Maya Reynolds
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-neutral-700 hover:text-primary-600 transition-colors">
              Services
            </Link>
            <Link
              href="#about"
              className="text-neutral-700 hover:text-primary-600 transition-colors">
              About
            </Link>
            <Link
              href="#office"
              className="text-neutral-700 hover:text-primary-600 transition-colors">
              Our Office
            </Link>
            <Link
              href="#contact"
              className="px-6 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="#services"
              className="text-neutral-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link
              href="#about"
              className="text-neutral-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link
              href="#office"
              className="text-neutral-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}>
              Our Office
            </Link>
            <Link
              href="#contact"
              className="block px-6 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
