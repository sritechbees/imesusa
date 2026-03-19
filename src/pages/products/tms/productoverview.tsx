"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ProductOverview() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔹 SMALL TITLE (TOP CENTER) */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-[#fd5da2] font-semibold uppercase">
            Brain Wellness Technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* 🧠 IMAGE (NO SHADOW) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/product/tmsdevice.png"
              alt="TMS Device"
              width={500}
              height={500}
              className="rounded-xl object-contain"
            />
          </motion.div>

          {/* 📝 CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* 🎯 HEADING (HALF COLOR) */}
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Transcranial Magnetic <br />
              <span className="text-[#fd5da2]">
                Stimulation (TMS)
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A non-invasive brain wellness technology designed for MedSpa-based
              care. It helps expand beyond aesthetics into mental clarity,
              emotional balance, and cognitive wellness.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Delivered in a calm environment, this program supports
              wellness-focused care without traditional clinical settings.
            </p>

            {/* 🔘 READ MORE BUTTON */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-5 py-2 border border-[#fd5da2] text-[#fd5da2] rounded-lg font-semibold hover:bg-[#fd5da2] hover:text-white transition duration-300"
            >
              {showMore ? "Show Less" : "Read More"}
            </button>

            {/* 📦 TOGGLE CONTENT */}
            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-2 gap-4 mt-6">

                    {[
                      "Non-Invasive",
                      "No Medication",
                      "No Downtime",
                      "Safe & Effective",
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="border border-gray-200 rounded-lg py-3 text-center text-sm font-medium text-gray-700 cursor-pointer transition duration-300 hover:bg-[#fd5da2] hover:text-white hover:border-[#fd5da2]"
                      >
                        {item}
                      </motion.div>
                    ))}

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

        </div>
      </div>
    </section>
  );
}