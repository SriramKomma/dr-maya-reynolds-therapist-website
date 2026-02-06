"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  delay?: number; // ms
  duration?: number; // ms
  once?: boolean;
};

export default function Reveal({
  children,
  className = "",
  threshold = 0.15,
  rootMargin = "0px",
  delay = 0,
  duration = 700,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once && el) observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.2,0.8,0.2,1)",
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity",
      }}>
      {children}
    </div>
  );
}

// Note: RevealGroup removed to avoid client function calls from server.
// Use manual mapping with <Reveal delay={base + i * stagger}> in server components.
