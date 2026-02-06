import Image from "next/image";
import Reveal from "./Reveal";

export default function OurOffice() {
  return (
    <section
      id="office"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-20 right-10 w-40 h-40 bg-gray-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-white rounded-full blur-3xl opacity-25"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-5xl font-heading font-light text-gray-900 mb-4">
              A Calm, Grounding Space
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My Santa Monica office is a quiet, private space designed to feel
              calm and grounding, with natural light and a comfortable,
              uncluttered environment where you can feel at ease.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Reveal>
              <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/office3.png"
                  alt="Dr. Maya Reynolds' therapy office - comfortable seating area"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/office4.png"
                  alt="Dr. Maya Reynolds' therapy office - calm, welcoming space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Convenient Location",
                content: (
                  <>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 rounded-full mb-4 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-6 h-6 text-white"
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
                    <h3 className="text-xl font-heading text-gray-900 mb-2">
                      Convenient Location
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Located in the heart of Santa Monica near the beach, with
                      easy street parking and accessible by public
                      transportation.
                    </p>
                  </>
                ),
              },
              {
                title: "Comfortable Environment",
                content: (
                  <>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 rounded-full mb-4 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-6 h-6 text-white"
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
                    </div>
                    <h3 className="text-xl font-heading text-gray-900 mb-2">
                      Comfortable Environment
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our therapy room features soft lighting, comfortable
                      seating, and calming decor to help you feel relaxed and
                      supported.
                    </p>
                  </>
                ),
              },
              {
                title: "Privacy & Confidentiality",
                content: (
                  <>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 rounded-full mb-4 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-heading text-gray-900 mb-2">
                      Privacy & Confidentiality
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Your privacy is paramount. Our office is designed to
                      ensure complete confidentiality and discretion.
                    </p>
                  </>
                ),
              },
            ].map((col, idx) => (
              <Reveal key={idx} delay={40 + idx * 100}>
                <div className="text-center md:text-left group hover:scale-105 transition-transform bg-white rounded-xl p-6 shadow-lg hover:shadow-xl">
                  {col.content}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={60}>
            <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-heading text-gray-900 mb-4">
                    In-Person & Telehealth Options
                  </h3>
                  <p className="text-gray-600 mb-4">
                    I offer both in-person sessions at my Santa Monica office
                    and secure telehealth appointments for clients throughout
                    California. Choose the format that works best for your needs
                    and schedule.
                  </p>
                  <p className="text-gray-600">
                    <strong className="text-gray-900">
                      Flexible Scheduling:
                    </strong>{" "}
                    Evening and weekend appointments available by request
                  </p>
                </div>
                <div className="relative h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/office1.jpeg"
                        alt="Office exterior"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
