"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";

export default function FDACompliance() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const items = [
    {
      title: "Regulatory Awareness",
      desc: "Every device introduced by iMESUSA is carefully reviewed with awareness of regulatory requirements and compliance standards applicable within U.S. healthcare environments.",
    },
    {
      title: "Clinical Validation",
      desc: "We prioritize technologies that are supported by clinical research, real-world results, and proven therapeutic value.",
    },
    {
      title: "Safety Standards",
      desc: "Patient safety is a core principle. Devices are evaluated for safety, usability, and responsible integration into clinical and wellness practices.",
    },
    {
      title: "Responsible Implementation",
      desc: "Healthcare providers maintain full responsibility for the appropriate use of medical technologies within their clinical, wellness, and regulatory frameworks.",
    },
  ];

  return (
    <App_layout>
      <section className="relative py-20 mt-12 md:py-24 px-4 sm:px-6 bg-slate-950 overflow-hidden">

        {/* 🔥 Glow Background */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#fd5da2]/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* 🔥 TITLE */}
          <div className="text-center mb-14 md:mb-16">

            <p
              data-aos="fade-up"
              className="text-[#fd5da2] uppercase tracking-widest text-xs sm:text-sm mb-3"
            >
              Regulatory Transparency
            </p>

            <h2
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 leading-tight"
            >
              <span className="text-white">FDA &</span>{" "}
              <span className="bg-gradient-to-r from-[#fd5da2] to-pink-400 bg-clip-text text-transparent">
                Compliance
              </span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="max-w-2xl md:max-w-3xl mx-auto text-gray-400 text-sm sm:text-base leading-relaxed"
            >
              iMESUSA is committed to introducing medical technologies with strong
              clinical value, safety awareness, and regulatory responsibility.
            </p>

          </div>

          {/* 🔥 CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">

            {items.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="group relative p-5 md:p-6 rounded-xl 
                bg-slate-900/80 backdrop-blur-md
                border border-white/10
                transition-all duration-500
                hover:border-[#fd5da2]
                hover:-translate-y-2
                hover:bg-slate-900"
              >

                <div className="relative z-10">

                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 
                  text-white group-hover:text-[#fd5da2] transition">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* 🔥 BOTTOM NOTE */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-14 md:mt-16 text-center max-w-2xl md:max-w-3xl mx-auto"
          >
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Our goal is to ensure that healthcare providers have access to
              technologies that are meaningful, safe, and responsibly implemented.
            </p>
          </div>

        </div>
      </section>
    </App_layout>
  );
}