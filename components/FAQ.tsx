"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer:
        "I am an out-of-network provider and do not bill insurance directly. However, I can provide you with detailed receipts (superbills) that you can submit to your insurance company for potential reimbursement under your out-of-network benefits. Many PPO plans cover a significant portion of therapy costs. I also accept HSA and FSA payments.",
      icon: "💰",
    },
    {
      question: "What are your rates?",
      answer:
        "Individual therapy sessions (50 minutes) are $200. Initial consultation sessions (60 minutes) are $225. I offer a limited number of reduced-fee spots for clients experiencing financial hardship. Payment is due at the time of service and can be made via credit card, HSA/FSA card, or Zelle.",
      icon: "💵",
    },
    {
      question: "How does the first session work?",
      answer:
        "Your first session is an opportunity for us to get to know each other and see if we're a good fit. We'll discuss what brings you to therapy, your goals, relevant history, and any questions you have about the process. There's no pressure to commit after the initial consultation—it's important that you feel comfortable with your therapist.",
      icon: "🤝",
    },
    {
      question: "Do you offer telehealth sessions?",
      answer:
        "Yes! I offer secure, HIPAA-compliant video sessions for clients located anywhere in California. Many of my clients find telehealth just as effective as in-person therapy, with the added convenience of attending from a comfortable private space. In-person sessions are also available at my Santa Monica office.",
      icon: "💻",
    },
    {
      question: "How long does therapy take?",
      answer:
        "The length of therapy depends on your specific goals and needs. Some clients find significant relief after a few months of focused work, while others benefit from longer-term support as they work through deeper patterns. We'll regularly check in about your progress and can adjust the frequency and focus of our work as needed.",
      icon: "⏱️",
    },
    {
      question: "What if I'm not sure therapy is right for me?",
      answer:
        "That's completely normal! Many people feel uncertain when they first reach out. I offer a free 15-minute phone consultation where we can talk about what you're experiencing and whether my approach might be helpful. This is a no-pressure conversation to help you get a sense of how I work.",
      icon: "🤔",
    },
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
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative h-[600px] bg-gray-100 rounded-lg overflow-hidden sticky top-24 shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/office2.jpeg"
                    alt="Calming therapy office"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div>
              <h2 className="text-5xl font-heading font-light text-gray-900 mb-12">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Reveal key={index} delay={40 + index * 80}>
                    <div className="border-b border-gray-200 pb-4 bg-white rounded-lg p-4 hover:shadow-lg transition-shadow">
                      <button
                        className="w-full flex justify-between items-start text-left gap-4"
                        onClick={() =>
                          setOpenIndex(openIndex === index ? null : index)
                        }>
                        <div className="flex items-start gap-4 flex-1">
                          <span className="text-2xl mt-1">{faq.icon}</span>
                          <span className="text-xl font-heading text-gray-900">
                            {faq.question}
                          </span>
                        </div>
                        <span className="text-2xl text-gray-400 flex-shrink-0 group-hover:text-gray-600 transition-colors">
                          {openIndex === index ? "−" : "+"}
                        </span>
                      </button>

                      {openIndex === index && (
                        <div className="mt-4 text-gray-600 animate-fade-in pl-8">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
