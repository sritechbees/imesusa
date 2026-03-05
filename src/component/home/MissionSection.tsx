"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <h2 className="text-4xl font-bold mb-6">
            Meaningful Medical Technology
          </h2>

          <p className="text-gray-600 mb-4">
            We introduce medical technologies that truly make a difference.
            Our mission is to carefully select and introduce clinically
            validated, high-quality medical devices that improve quality
            of life.
          </p>

          <p className="text-gray-600 mb-4">
            Every device we introduce is selected based on clinical value,
            safety, regulatory awareness, and real-world usability within
            U.S. healthcare and wellness settings.
          </p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <Image
            src="/about/medical-tech.jpg"
            alt="Medical Technology"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </motion.div>

      </div>
    </section>
  );
}