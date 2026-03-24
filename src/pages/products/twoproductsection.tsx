"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import App_layout from "@/component/layout/app_layout";
import Link from "next/link";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

const backgrounds = [
  "/about/tms1bg.png",
  "/about/product2.png",
  "/product/medical1.jpg",
  "/product/medical2.jpg",
];

export default function ProductHeroBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    const interval = setInterval(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * backgrounds.length);
      } while (randomIndex === index);

      setIndex(randomIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <App_layout>
      <Head>
        <title>International Medical Equipment Solution | Products</title>
      </Head>

      <section className="relative h-screen w-full overflow-hidden">

        {/* Background */}
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgrounds[index]})`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">

          <div className="max-w-3xl">

            {/* TITLE */}
            <h1
              data-aos="fade-up"
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">
                Advanced Medical
              </span>{" "}
              <span className="bg-gradient-to-r from-[#22d3ee] via-[#fd5da2] to-[#a78bfa] bg-clip-text text-transparent">
                Wellness Technology
              </span>
            </h1>

            {/* SUBTITLE */}
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-lg md:text-2xl mb-6"
            >
              <span className="text-cyan-400 font-semibold">
                TMS
              </span>{" "}
              <span className="text-white">&</span>{" "}
              <span className="text-pink-400 font-semibold">
                SALUS Talent Pro
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-gray-200 mb-10 text-base md:text-lg leading-relaxed"
            >
              Discover innovative non-invasive medical technologies designed
              for brain wellness and pain management solutions for modern
              MedSpa and clinical environments.
            </p>

            {/* BUTTONS */}
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
            >

              {/* TMS BUTTON */}
              <Link href="/products/tms/TMSOverview">
                <button className="px-8 py-3 md:py-4 rounded-full font-semibold 
                bg-gradient-to-r from-[#22d3ee] to-[#0ea5e9] 
                text-white shadow-lg 
                hover:scale-105 hover:shadow-cyan-400/50 
                transition duration-300 w-full sm:w-auto">
                  Explore TMS
                </button>
              </Link>

              {/* SALUS BUTTON */}
              <Link href="/products/Salus_Talentpro/herosection">
                <button className="px-8 py-3 md:py-4 rounded-full font-semibold 
                border border-pink-400 text-pink-400 
                hover:bg-pink-400 hover:text-white 
                hover:shadow-lg hover:shadow-pink-400/40
                transition duration-300 w-full sm:w-auto">
                  Explore SALUS Talent Pro
                </button>
              </Link>

            </div>

          </div>

        </div>
      </section>
    </App_layout>
  );
}