"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function MissionSection() {

  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-20 md:py-16 bg-white overflow-hidden">

      {/* soft background decorations */}
 
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Meaningful{" "}
            <span className="text-[#fd5da2]">Medical Technology</span>
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed text-base">
            We introduce medical technologies that truly make a difference.
            Our mission is to carefully select and introduce clinically
            validated, high-quality medical devices that improve quality
            of life.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed text-base">
            Every device we introduce is selected based on clinical value,
            safety, regulatory awareness, and real-world usability within
            U.S. healthcare and wellness settings.
          </p>

          {/* EXPAND CONTENT */}
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.4 }}
              className="text-gray-600 mt-4 space-y-3"
            >
              <p>
                Our focus is on technologies that deliver measurable
                clinical benefits while supporting healthcare providers
                with safe and practical solutions.
              </p>

              <p>
                We collaborate with global innovators to ensure that
                advanced medical technology becomes accessible to modern
                clinics, wellness centers, and healthcare systems.
              </p>
            </motion.div>
          )}

          {/* BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="mt-8 px-8 py-3 rounded-xl bg-[#fd5da2] text-white font-medium hover:bg-pink-600 transition duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            {open ? "Show Less" : "Read More"}
          </button>

        </motion.div>


        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >

          {/* blob image shape */}
          <div className="relative w-[300px] sm:w-[380px] md:w-[420px] lg:w-[460px] h-[320px] sm:h-[380px] md:h-[420px] rounded-[60%_40%_50%_50%/50%_60%_40%_50%] overflow-hidden shadow-xl">

            <Image
              src="/about/image3.jpg"
              alt="Medical Technology"
              fill
              className="object-cover transition duration-700 hover:scale-110"
            />

          </div>

          {/* decorative glow */}
          <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-[#fd5da2]/20 blur-2xl rounded-full"></div>

        </motion.div>

      </div>
    </section>
  );
}