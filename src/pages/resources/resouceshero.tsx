"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Link from "next/link";
import App_layout from "@/component/layout/app_layout";
import ProductVideos from "./resourcespages";
import DownloadBrochures from "./downloadbrochures";
import FDACompliance from "./fda";
import TechnologyTimeline from "./TechnologyTimeline";
import DoctorTestimonials from "./DoctorTestimonials";


export default function ResourcesHeroSection() {
  return (
    <App_layout>
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/resources-bg.jpg"
        alt="Medical Technology"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400/30 blur-[120px] rounded-full"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">

        {/* Small Title */}
        <motion.p
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="uppercase tracking-widest text-cyan-400 text-sm mb-4"
        >
          Medical Technology Resources
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Explore Our Medical <br />
          Innovation Resources
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:1 }}
          className="mt-6 text-gray-200 max-w-2xl mx-auto"
        >
          Access product catalogs, clinical documentation, and demonstration
          videos related to our advanced medical technologies and solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:1.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
        >

          {/* Button 1 */}
           <Link href="/resources/viewresourse">
          <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 transition rounded-lg font-semibold shadow-lg hover:scale-105">
            View Resources
          </button></Link>

          {/* Button 2 */}
          <Link href="/resources/downloadcatalog">
          <button className="px-8 py-3 border border-white/40 hover:bg-white hover:text-black transition rounded-lg font-semibold hover:scale-105">
            Download Catalog
          </button></Link>
          

        </motion.div>

      </div>
    </section>
    <ProductVideos/>
    <DownloadBrochures/>
    <FDACompliance/>
    <TechnologyTimeline/>
    <DoctorTestimonials/>
   </App_layout>
    
  );
}