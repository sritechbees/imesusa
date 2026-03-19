"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
export default function Aboutmore() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
<App_layout>
    <div className="bg-white dark:bg-slate-950 text-gray-700 dark:text-gray-300 transition-colors duration-500 mt-16 overflow-hidden">

      {/* HERO */}
      <section className="py-16 md:py-16 px-4 sm:px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h1
            data-aos="fade-up"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About <span className="text-[#fd5da2]">iMESUSA</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-4xl mx-auto mt-8 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400"
          >
            International Medical Equipment Solution introduces medical
            technologies that truly make a difference. Our goal is to bring
            clinically validated and high-quality medical innovations into
            modern healthcare and wellness environments across the United
            States.
          </p>

        </div>

      </section>

      {/* MISSION */}
      <section className="py-16 md:py-16 px-4 sm:px-6">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center group">

    {/* LEFT SIDE */}
    <div data-aos="fade-right">

      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition duration-300 group-hover:text-[#fd5da2]">
        <span className="text-gray-900">Our</span> Mission
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        Our mission is to carefully select and introduce clinically
        validated, high-quality medical devices that enhance quality of
        life.
      </p>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        Every device we introduce is evaluated based on clinical value,
        safety, regulatory awareness, and real-world usability within
        healthcare and wellness environments.
      </p>

    </div>

    {/* RIGHT SIDE */}
    <div
      data-aos="fade-left"
      className="relative overflow-hidden bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6 md:p-8 shadow-sm transition group"
    >
       

      {/* Hover Overlay (Left → Right) */}
      <div className="absolute inset-0 bg-[#fd5da2]/50 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-xl"></div>

      <p className="relative z-10 text-gray-700 dark:text-gray-300 leading-relaxed">
        We believe medical technology should always serve people and
        improve lives through meaningful innovation, safety, and
        practical usability in real healthcare settings.
      </p>

    </div>

  </div>

</section>

      {/* CORE PRINCIPLES */}
     <section className="py-16 md:py-16 px-4 sm:px-6">

  <div className="max-w-6xl mx-auto text-center">

    <h2
      data-aos="fade-up"
      className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10"
    >
      Our <span className="text-[#fd5da2]">Core Principles</span>
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">

      {[
        {
          title: "Meaningful",
          desc: "Delivering real clinical value and measurable patient benefit."
        },
        {
          title: "Practical",
          desc: "Easy to implement in real healthcare environments."
        },
        {
          title: "Safe",
          desc: "Meeting strict regulatory and medical safety standards."
        },
        {
          title: "Life Improving",
          desc: "Helping people live healthier and better lives."
        },
      ].map((item, index) => (

        <div
          key={index}
          data-aos="zoom-in"
          data-aos-delay={index * 150}
          className="group relative p-5 md:p-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden transition duration-300 hover:shadow-lg hover:-translate-y-1"
        >

        {/* WHITE OVERLAY */}
          <div className="absolute inset-0 bg-white/40 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>

          {/* PINK OVERLAY */}
          <div className="absolute inset-0 bg-[#fd5da2]/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* Animated Top Border */}
          <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#fd5da2] group-hover:w-full transition-all duration-500"></div>

          <div className="relative z-10">

            {/* Title */}
            <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 transition duration-300 group-hover:text-[#fd5da2] group-hover:tracking-wide">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">
              {item.desc}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* KOREA */}
     <section className="py-16 md:py-16 px-4 sm:px-6">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">

    {/* LEFT CARD */}
    <div
      data-aos="fade-right"
      className="group relative bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 md:p-8 rounded-xl shadow-sm overflow-hidden transition duration-300 hover:shadow-lg hover:-translate-y-1"
    >

      {/* WHITE OVERLAY */}
      <div className="absolute inset-0 bg-white/40 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>

      {/* PINK OVERLAY */}
      <div className="absolute inset-0 bg-[#fd5da2]/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* TOP BORDER ANIMATION */}
      <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#fd5da2] group-hover:w-full transition-all duration-500"></div>

      <div className="relative z-10">

        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 transition duration-300 group-hover:text-[#fd5da2]">
          Korean Medical Innovation
        </h3>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">
          Korea is one of the most advanced medical technology ecosystems
          in the world. iMESUSA aims to bridge Korean medical innovation
          with the practical needs of healthcare providers in the United
          States.
        </p>

      </div>

    </div>

    {/* RIGHT SIDE (CLEAN) */}
    <div data-aos="fade-left">

      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Bridging Technology & Healthcare
      </h3>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        Our goal is to connect proven medical technologies with clinics,
        wellness centers, and healthcare providers that are looking for
        safe, innovative, and practical solutions.
      </p>

    </div>

  </div>

</section>
      {/* COMMITMENT */}
      <section className="py-16 md:py-16 px-4 sm:px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2
            data-aos="fade-up"
            className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Our Commitment
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6"
          >
            We are not simply distributors of machines. We act as curators of
            meaningful medical solutions designed to improve lives and support
            healthcare professionals.
          </p>

          <div className="space-y-3">

            <p data-aos="fade-up" className="text-gray-700 dark:text-gray-300">
              If a technology does not help people — we do not introduce it.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-[#fd5da2] font-semibold"
            >
              If it truly benefits lives — we proudly stand behind it.
            </p>

          </div>

        </div>

      </section>

    </div>
     </App_layout>
  );
}