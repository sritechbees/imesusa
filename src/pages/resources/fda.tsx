"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FDACompliance() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
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
    <section className="relative bg-slate-950 py-24 px-4 sm:px-6">

      {/* Glow background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Title */}
        <div className="text-center mb-16">

          <p
            data-aos="fade-up"
            className="text-cyan-400 uppercase tracking-widest text-sm mb-4"
          >
            Regulatory Transparency
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            FDA & Compliance
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="max-w-3xl mx-auto text-gray-400 leading-relaxed"
          >
            iMESUSA is committed to introducing medical technologies with
            strong clinical value, safety awareness, and regulatory
            responsibility. Every technology we introduce is evaluated with
            attention to compliance considerations and real-world healthcare
            usability.
          </p>

        </div>

        {/* Compliance Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {items.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="bg-slate-900 border border-white/10 rounded-xl p-6 hover:border-cyan-400 transition duration-300"
            >

              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom Note */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-gray-400 leading-relaxed">
            Our goal is to ensure that healthcare providers have access to
            technologies that are meaningful, safe, and responsibly
            implemented within modern medical and wellness environments.
          </p>
        </div>

      </div>
    </section>
  );
}