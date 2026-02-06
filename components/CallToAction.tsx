import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

export default function CallToAction() {
  const symptoms = [
    "Constant worry and racing thoughts",
    "Physical tension, difficulty sleeping, or panic attacks",
    "Feeling emotionally exhausted or burned out",
    "Overthinking and perfectionism that holds you back",
    "Lingering effects of past trauma impacting daily life",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-20 right-10 w-40 h-40 bg-gray-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-white rounded-full blur-3xl opacity-25"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative w-full h-[600px] bg-gray-100 rounded order-2 md:order-1 shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50 rounded">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/dr-maya-reynolds.png"
                    alt="Contemplative therapy session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-heading font-light text-gray-900 mb-6">
                You don't have to face this{" "}
                <span className="italic text-gray-600">alone.</span>
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                If you are experiencing any of these, there's hope:
              </p>

              <ul className="space-y-3 mb-8">
                {symptoms.map((symptom, index) => (
                  <Reveal key={index} delay={60 + index * 90}>
                    <li className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-gray-500 mt-1 text-lg">•</span>
                      <span className="text-gray-700 leading-relaxed">
                        {symptom}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>

              <p className="text-lg text-gray-600 mb-8">
                With compassionate support and evidence-based treatment, we'll
                work together to help you heal and move forward with confidence.
              </p>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
                Start Your Healing Journey
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
