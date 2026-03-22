"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import Link from "next/link";

import SalusTalentPro from "./salus_talentpro";
import PainManagement from "./PainManagement";
import TechnologyFeatures from "./TechnologyFeatures";
import ClinicalBenefits from "./ClinicalBenefits";
import HealthcareSettings from "./HealthcareSettings";

export default function HeroSection() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <App_layout>

      {/* HERO */}
      <section className="relative h-[90vh] mt-20 flex items-center justify-center overflow-hidden">

        {/* 🔥 Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/about/product2.png')",
          }}
        ></div>

        {/* 💖 Pink Overlay Theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0b14]/90 via-[#1a0b14]/80 to-[#1a0b14]/90"></div>

        {/* ✨ Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-aos="fade-up"
          className="relative z-10 text-center max-w-3xl px-6"
        >

          {/* Tag */}
          <span className="inline-block px-4 py-1 text-sm rounded-full bg-[#fd5da2]/20 text-[#fd5da2]">
            Advanced Medical Device
          </span>

          {/* Title */}
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            SALUS Talent Pro
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-lg sm:text-xl text-[#fd5da2] font-medium">
            Premium Electromagnetic Field Stimulator
          </p>

          {/* Description */}
          <p className="mt-6 text-gray-300 leading-relaxed">
            Experience next-generation pain relief with precision electromagnetic therapy.
            Designed for both localized and full-body treatments, delivering clinical-grade
            performance for modern healthcare environments.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">

            {/* Primary Button */}
            <Link href="/resources/downloadcatalog">
              <button className="px-6 py-3 rounded-xl text-white font-medium
                bg-[#fd5da2]
                hover:bg-[#e14c8f]
                shadow-lg shadow-[#fd5da2]/40
                hover:scale-105 transition duration-300">
                View Brochure
              </button>
            </Link>

            {/* Secondary Button */}
            <button className="px-6 py-3 rounded-xl border border-[#fd5da2] text-[#fd5da2]
              hover:bg-[#fd5da2]/10 transition duration-300">
              Learn More
            </button>

          </div>

        </motion.div>

      </section>

      {/* OTHER SECTIONS */}
      <PainManagement/>
      <TechnologyFeatures/>
      <ClinicalBenefits/>
      <HealthcareSettings/>
      <SalusTalentPro/>

    </App_layout>
  );
}