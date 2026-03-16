"use client";
import { motion } from "framer-motion";

export default function ProductOverview() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <motion.img
          initial={{ opacity:0, x:-50 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.7 }}
          src="/about/practical.jpg"
          alt="TMS Device"
          className="w-full rounded-xl"
        />

        <motion.div
          initial={{ opacity:0, x:50 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.7 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Transcranial Magnetic Stimulation (TMS)
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Transcranial Magnetic Stimulation (TMS) is introduced as a
            non-invasive brain wellness technology that allows MedSpas
            to expand beyond aesthetics into mental and emotional wellness.
          </p>

          <p className="text-gray-600 leading-relaxed">
            The program is delivered in a calm MedSpa environment and
            designed for wellness-focused, cash-based care rather than
            traditional psychiatric treatment settings.
          </p>
        </motion.div>

      </div>
    </section>
  );
}