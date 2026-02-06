import Image from "next/image";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-20 right-10 w-40 h-40 bg-gray-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-white rounded-full blur-3xl opacity-25"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <Reveal>
          <h2 className="text-5xl md:text-6xl font-heading font-light mb-6">
            Ready to take the first step?
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Reaching out for therapy can feel daunting, but you don't have to
            figure everything out before we talk. I offer a free 15-minute phone
            consultation to see if we might be a good fit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="mailto:dr.mayareynolds@therapyoffice.com"
              className="px-8 py-4 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium text-lg">
              Email Me
            </a>
            <a
              href="tel:+13105551847"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-md hover:bg-gray-900 hover:text-white transition-colors font-medium text-lg">
              Call: (310) 555-1847
            </a>
          </div>

          <p className="text-gray-500">
            I typically respond to inquiries within 24 hours. <br />
            If you're experiencing a mental health emergency, please call 988 or
            go to your nearest emergency room.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
