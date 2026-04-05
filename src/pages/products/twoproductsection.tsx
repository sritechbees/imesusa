"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import App_layout from "@/component/layout/app_layout";
import Link from "next/link";
import Head from "next/head";

export default function ProductHeroBanner() {

  const [text, setText] = useState("");
  const fullText = "Wellness Technology";

  const images = [
    
    "/product/benefits.jpeg",
    "/product/Procedure.jpg",
    "/product/Pain Management Clinics.jpg",
  ];

  const [[index, direction], setIndex] = useState([0, 0]);

  // 🔥 Typing Animation
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 80);
    return () => clearInterval(typing);
  }, []);

  // 🔥 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  const paginate = (newDirection: number) => {
    setIndex([
      (index + newDirection + images.length) % images.length,
      newDirection,
    ]);
  };

  const goToSlide = (i: number) => {
    setIndex([i, i > index ? 1 : -1]);
  };

  // 🔥 Swipe Power
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  // 🔥 Slide Animation
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
    }),
    center: { x: 0 },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
    }),
  };

  return (
    <App_layout>
      <Head>
        <title>Product Slider</title>
      </Head>

      <section className="relative mt-16 w-full h-[90vh] overflow-hidden">

        {/* 🎬 IMAGE SLIDER */}
        <div className="absolute inset-0">
          <AnimatePresence custom={direction} initial={false}>
            <motion.img
              key={index}
              src={images[index]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
              className="absolute w-full h-full select-none"
            />
          </AnimatePresence>
        </div>

        {/* 📝 CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 z-10">
          <div className="max-w-3xl">

            {/* TITLE */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              <span>Advanced Medical </span>

              <span className="bg-gradient-to-r from-[#fd5da2] via-pink-400 to-white bg-clip-text text-transparent">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            {/* SUBTITLE */}
            <h2 className="text-base sm:text-lg md:text-2xl mb-6 text-white drop-shadow-lg">
              <span className="text-[#fd5da2] font-semibold">TMS</span>{" "}
              <span>&</span>{" "}
              <span className="text-pink-300 font-semibold">
                SALUS Talent Pro
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-white mb-10 text-sm sm:text-base md:text-lg drop-shadow-lg">
             Discover innovative non-invasive medical technologies designed for brain wellness and pain management solutions for modern MedSpa and clinical environments.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <Link href="/products/tms/TMSOverview">
                <button className="px-8 py-3 md:py-4 rounded-full font-semibold 
                  bg-gradient-to-r from-[#fd5da2] to-pink-400 
                  text-white shadow-lg 
                  hover:scale-110 hover:shadow-[#fd5da2]/50
                  transition duration-300 w-full sm:w-auto">
                  Explore TMS
                </button>
              </Link>

              <Link href="/products/Salus_Talentpro/herosection/">
                <button className="px-8 py-3 md:py-4 rounded-full font-semibold 
                  border border-white text-white
                  hover:bg-white hover:text-black
                  hover:scale-110 hover:shadow-lg
                  transition duration-300 w-full sm:w-auto">
                  Explore SALUS Talent Pro
                </button>
              </Link>
            </div>

          </div>
        </div>

        {/* 🔘 DOTS */}
        <div className="absolute bottom-6 w-full flex justify-center gap-3 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>

      </section>
    </App_layout>
  );
}