"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import About from "./about";

export default function AboutHero() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <App_layout>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-24 sm:py-28 px-4 sm:px-6">

        {/* Glow Background */}
        <div className="pointer-events-none absolute top-[-100px] left-[-100px] w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/20 blur-[120px] rounded-full"></div>
        <div className="pointer-events-none absolute bottom-[-120px] right-[-120px] w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/20 blur-[120px] rounded-full"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">

          {/* Small Title */}
          <p
            data-aos="fade-up"
            className="text-cyan-400 uppercase tracking-widest text-xs sm:text-sm mb-4"
          >
            International Medical Equipment Solution
          </p>

          {/* Main Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Medical Technologies <br className="hidden sm:block" />
            That Truly Make a Difference
          </h1>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed"
          >
            Our mission is to carefully select and introduce clinically
            validated, high-quality medical devices that enhance quality of
            life. Every device we introduce is selected based on clinical
            value, safety, regulatory awareness, and real-world usability
            within U.S. healthcare and wellness environments.
          </p>

          {/* Divider */}
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="w-20 sm:w-24 h-[3px] bg-cyan-400 mx-auto mt-8 rounded"
          ></div>

          {/* Core Values */}
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-14 text-gray-300"
          >
            {["Meaningful", "Practical", "Safe", "Life-Improving"].map(
              (item, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-lg py-4 px-3 backdrop-blur bg-white/5 hover:border-cyan-400 transition"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <About />
    </App_layout>
  );
}