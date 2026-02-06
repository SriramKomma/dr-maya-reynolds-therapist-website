import Image from "next/image";
import Reveal from "./Reveal";

export default function Services() {
  const services = [
    {
      title: "Anxiety & Panic Treatment",
      description:
        "If you experience constant worry, tension in your body, difficulty sleeping, or feel like you're always bracing for something to go wrong, I can help. Using evidence-based approaches including CBT and mindfulness-based practices, we'll work together to help you manage overwhelming feelings and develop lasting calm.",
      image: "Anxiety",
    },
    {
      title: "Trauma Therapy & EMDR",
      description:
        "I work with adults who have experienced single-incident trauma as well as complex, long-standing patterns stemming from childhood, relationships, or chronic stress. My trauma work emphasizes safety, stabilization, and helping you feel more regulated—both in sessions and in daily life. EMDR is integrated when appropriate.",
      image: "Trauma",
    },
    {
      title: "Burnout & High-Achiever Support",
      description:
        "Are you an entrepreneur, creative, or professional feeling disconnected after years of pushing through stress? I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Therapy becomes a space to slow down, reconnect, and build more sustainable ways of working and living.",
      image: "BurnOut",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-20 right-10 w-40 h-40 bg-gray-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-white rounded-full blur-3xl opacity-25"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading font-light text-gray-900 mb-4">
              How I Can Help
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized therapeutic approaches tailored to your unique needs
              and healing journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Reveal key={index} delay={80 + index * 120}>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Service Image */}
                  <div className="h-64 bg-gray-100 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={`/images/${service.image}.jpg`}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-heading text-gray-900 mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
