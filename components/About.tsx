import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-20 right-10 w-40 h-40 bg-gray-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-1/3 w-24 h-24 bg-white rounded-full blur-3xl opacity-25"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="flex gap-6 items-center">
                {/* Main large image */}
                <div className="relative w-3/5 aspect-[3/4] rounded-full overflow-hidden bg-gray-100 shadow-lg">
                  <Image
                    src="/images/dr-maya-reynolds2.png"
                    alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Decorative smaller circle */}
                <div className="relative w-2/5 aspect-square rounded-full overflow-hidden bg-gray-50">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50">
                    <span className="text-gray-400 text-xs text-center px-4">
                      {/* Decorative element */}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-5xl font-heading font-light text-gray-900 mb-6">
                Hi, I'm Dr. Maya Reynolds.
              </h2>

              <div className="space-y-4 text-gray-600">
                <p>
                  I'm a licensed clinical psychologist based in Santa Monica,
                  California, offering therapy for adults who feel overwhelmed
                  by anxiety, stress, or the lingering effects of past
                  experiences. Many of the people I work with are
                  high-achieving, thoughtful, and self-aware—but internally feel
                  exhausted, stuck in overthinking, or emotionally on edge.
                </p>

                <p>
                  My work often focuses on anxiety, panic, trauma, and burnout.
                  Clients frequently come to me feeling "functional" on the
                  outside while quietly struggling with constant worry, tension
                  in their body, difficulty sleeping, or a sense that they're
                  always bracing for something to go wrong. Others are
                  navigating the impact of earlier life experiences that
                  continue to affect their relationships, confidence, or sense
                  of safety.
                </p>

                <p>
                  I take a warm, collaborative, and grounded approach to
                  therapy. Sessions are structured enough to feel supportive,
                  while still leaving space for reflection and depth. I
                  integrate evidence-based methods such as cognitive-behavioral
                  therapy (CBT), EMDR, mindfulness-based practices, and
                  body-oriented techniques to help clients understand both the
                  emotional and physiological sides of what they're
                  experiencing.
                </p>

                <p>
                  I believe therapy works best when clients feel respected,
                  understood, and actively involved in the process. My goal is
                  not just symptom relief, but helping clients develop insight,
                  resilience, and a stronger relationship with themselves over
                  time.
                </p>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-md hover:bg-gray-900 hover:text-white transition-colors">
                Let's Connect
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
