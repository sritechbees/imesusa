"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Cpu, Activity, ShieldCheck, Settings, RefreshCw, Sparkles } from "lucide-react";

export default function TechnologyFeatures() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    {
      icon: <Cpu size={22} />,
      title: "Dual Applicator System",
      desc: "Two specialized applicators allow treatment of both localized pain areas and larger body regions.",
    },
    {
      icon: <Activity size={22} />,
      title: "Precision Electromagnetic Stimulation",
      desc: "Advanced electromagnetic field technology designed to stimulate tissues and support natural recovery.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Non-Invasive Therapy",
      desc: "Provides pain relief without injections, surgery, or medication.",
    },
    {
      icon: <Settings size={22} />,
      title: "Easy Clinical Operation",
      desc: "Designed for simple operation in clinics, wellness centers, and rehabilitation facilities.",
    },
    {
      icon: <RefreshCw size={22} />,
      title: "Repeatable Treatment Sessions",
      desc: "Safe for repeated therapy sessions for ongoing pain management.",
    },
    {
      icon: <Sparkles size={22} />,
      title: "Modern Pain Management Technology",
      desc: "Supports physicians in providing advanced therapy solutions to patients.",
    },
  ];

  return (
    <section className="relative py-16 md:py-20 bg-white dark:bg-slate-950 overflow-hidden">

      {/* 🔥 Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/product/Technology & Key Features.jpg" // 👈 add your image
          alt="bg"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* 🔥 Overlay (for readability) */}
      <div className="absolute inset-0 bg-white/20 dark:bg-slate-950/90 z-0"></div>

      {/* 🔥 Floating Gradient Blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#fd5da2]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-[#fd5da2]/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <h2
          data-aos="fade-up"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 md:mb-16"
        >
          Technology & <span className="text-[#fd5da2]">Key Features</span>
        </h2>

        {/* LIST */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-10">

            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="flex items-start gap-6 group"
              >

                {/* ICON */}
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full
                  bg-[#fd5da2]/10 text-[#fd5da2]
                  group-hover:scale-110 transition duration-300"
                >
                  {feature.icon}
                </div>

                {/* CONTENT */}
                <div className="flex-1">

                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-[#fd5da2] transition">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                    {feature.desc}
                  </p>

                  {/* Accent Line */}
                  <div className="mt-3 w-0 h-[2px] bg-[#fd5da2] group-hover:w-20 transition-all duration-500"></div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}