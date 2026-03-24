"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function ClinicalBenefits() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const benefits = [
    "Non-invasive pain relief treatment",
    "Drug-free therapy option",
    "Supports natural recovery process",
    "Improves patient comfort and mobility",
    "Safe for repeated treatment sessions",
    "Enhances patient satisfaction in clinical care",
  ];

  return (
    <section className="py-20 px-6 md:px-16 overflow-hidden bg-white dark:bg-[#0f172a] transition-all duration-500">

      {/* TOP CENTER TITLE */}
      <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
        
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          <span className="text-gray-900 dark:text-white">
            Clinical
          </span>{" "}
          <span className="bg-gradient-to-r from-[#fd5da2] to-pink-400 bg-clip-text text-transparent">
            Benefits
          </span>
        </h2>

        <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          SALUS Talent Pro provides physicians with a modern solution for
          non-invasive pain management. It enhances treatment outcomes while
          ensuring patient comfort and safety.
        </p>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div data-aos="fade-right" className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#fd5da2]/30 to-transparent rounded-2xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-500"></div>

          <Image
            src="/product/home-3.png"
            alt="Clinical Benefits"
            width={600}
            height={400}
            className="rounded-2xl shadow-2xl relative z-10 transform group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* RIGHT BENEFITS */}
        <div className="grid gap-4" data-aos="fade-left">
          {benefits.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="flex items-start gap-4 p-4 rounded-xl 
              bg-white/70 dark:bg-white/5 
              backdrop-blur-md 
              border border-gray-200 dark:border-white/10 
              shadow-md hover:shadow-xl 
              hover:-translate-y-1 transition duration-300"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-[#fd5da2] to-pink-400 text-white font-bold">
                ✓
              </div>

              <p className="text-gray-700 dark:text-gray-300">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}