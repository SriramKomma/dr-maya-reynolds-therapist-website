import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-light text-neutral-900 mb-6">
                <span className="bg-yellow-100 px-2 py-1 rounded-md">
                  You're not broken
                </span>
                . You're overwhelmed.
              </h2>

              <p className="text-lg text-neutral-600 mb-4">
                Many of my clients appear "functional" on the
                outside—high-achieving, thoughtful, self-aware. But internally,
                they feel exhausted, stuck in overthinking, or constantly on
                edge. The anxiety, stress, or lingering effects of past
                experiences have become too much to carry alone.
              </p>
              <p className="text-lg text-neutral-600">
                Whether you're navigating panic, trauma, burnout, or the weight
                of perfectionism, I'm here to help you find your footing again.
                Therapy is a space to slow down, reconnect with yourself, and
                develop more sustainable ways of living and working.
              </p>
            </div>

            {/* Image */}
            <div className="relative w-full h-[500px] bg-secondary-100 rounded">
              {/* Intro image */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary-100 to-accent-100 rounded">
                <div className="relative w-full h-full">
                  <img
                    src="/images/office3.png"
                    alt="Therapy session"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
