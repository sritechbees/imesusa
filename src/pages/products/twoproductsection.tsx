"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import App_layout from "@/component/layout/app_layout";
import Link from "next/link";
import Head from "next/head";

const backgrounds = [
  "/images/tms-banner.jpg",
  "/images/salus-banner.jpg",
];

export default function ProductHeroBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <App_layout>
      <Head>
        <title>International Medical Equipment Solution | Products</title>
      </Head>
      <section className="relative h-screen w-full overflow-hidden">

        {/* Background Image */}
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

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center h-full max-w-6xl mx-auto px-6 text-white">

          <div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Advanced Medical Wellness Technology
            </h1>

            <h2 className="text-xl md:text-2xl text-cyan-400 mb-6">
              TMS & SALUS Talent Pro
            </h2>

            <p className="max-w-2xl text-gray-200 mb-10 text-lg">
              Discover innovative non-invasive medical technologies designed
              for brain wellness and pain management solutions for modern
              MedSpa and clinical environments.
            </p>

            {/* Buttons */}
            <div className="flex gap-6 flex-wrap">

              {/* TMS Button */}
              <Link href="/products/tms/TMSOverview">
              <button className="px-8 py-4 bg-cyan-500 rounded-full font-semibold hover:scale-105 hover:bg-cyan-400 transition duration-300 shadow-lg">
                Explore TMS
              </button></Link>

              {/* SALUS Button */}
               <Link href="/products/Salus_Talentpro/herosection">
              <button className="px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
                Explore SALUS Talent Pro
              </button></Link>

            </div>

          </div>

        </div>

      </section>
    </App_layout>
  );
}