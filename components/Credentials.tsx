"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

export default function Credentials() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = [
    {
      id: "education",
      title: "Education",
      content: [
        "PsyD in Clinical Psychology - Pepperdine University, 2014",
        "MA in Clinical Psychology - Pepperdine University, 2012",
        "BA in Psychology - University of California, Berkeley, 2009",
      ],
      icon: "🎓",
    },
    {
      id: "licensure",
      title: "Licensure",
      content: [
        "Licensed Clinical Psychologist - California Board of Psychology",
        "License #: PSY28647 (Active)",
        "Licensed since 2015",
      ],
      icon: "📋",
    },
    {
      id: "certifications",
      title: "Specialized Training",
      content: [
        "EMDR Therapy - Basic and Advanced Training",
        "Cognitive Behavioral Therapy (CBT) Certification",
        "Mindfulness-Based Stress Reduction (MBSR)",
        "Advanced Training in Anxiety Disorders and Panic",
        "Trauma-Informed Care Approaches",
        "Somatic and Body-Based Therapy Techniques",
      ],
      icon: "⭐",
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-heading font-light text-gray-900 mb-12 text-center">
            Professional Background
          </h2>

          <div className="space-y-1">
            {sections.map((section, idx) => (
              <Reveal key={section.id} delay={idx * 80}>
                <div className="border-b border-gray-200 bg-white rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <button
                    className="w-full flex justify-between items-center py-6 text-left"
                    onClick={() =>
                      setOpenSection(
                        openSection === section.id ? null : section.id,
                      )
                    }>
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{section.icon}</span>
                      <span className="text-2xl font-heading text-gray-900">
                        {section.title}
                      </span>
                    </div>
                    <span className="text-3xl text-gray-400 group-hover:text-gray-600 transition-colors">
                      {openSection === section.id ? "−" : "+"}
                    </span>
                  </button>

                  {openSection === section.id && (
                    <div className="pb-6 animate-fade-in pl-12">
                      <ul className="space-y-3">
                        {section.content.map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-gray-600">
                            <span className="text-gray-500 mt-1 text-lg">
                              •
                            </span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
