"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";
import About from "./about";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <App_layout>
      
      <Head>
        <title>International Medical Equipment Solution | About</title>
      </Head>

      <section className="relative h-[90vh] mt-16 flex items-center justify-center text-center overflow-hidden">

        {/* Background Image */}
        <Image
          src="/about/medical innovation.jpg"
          alt="Medical Background"
          fill
          className="object-cover scale-105"
          priority
        />

        {/* Trending Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#fd5da2]/40 to-black/80"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6">

          {/* Small Title */}
          <p
            data-aos="fade-down"
            data-aos-delay="100"
            className="text-[#fd5da2] uppercase tracking-widest text-sm mb-4"
          >
            International Medical Equipment Solution
          </p>

          {/* Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
          >
            Medical Technologies <br className="hidden sm:block" />
            That Truly Make a Difference
          </h1>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-gray-200 max-w-2xl mx-auto text-base sm:text-lg"
          >
            Our mission is to carefully select and introduce clinically
            validated, high-quality medical devices that enhance quality of
            life.
          </p>

          {/* Buttons */}
          <div
            data-aos="zoom-in"
            data-aos-delay="700"
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/resources/downloadcatalog">
            <button className="px-8 py-3 bg-[#fd5da2] text-white rounded-full font-semibold hover:scale-105 transition shadow-lg hover:shadow-[#fd5da2]/50">
              Explore Technologies
            </button></Link>

          <Link href="/about/aboutmore">
            <button className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-[#fd5da2] transition">
              Learn More
            </button></Link>
          </div>

          {/* Bottom Divider */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            className="w-24 h-[3px] bg-[#fd5da2] mx-auto mt-10 rounded-full"
          ></div>

        </div>
      </section>

      <About />
    </App_layout>
  );
}