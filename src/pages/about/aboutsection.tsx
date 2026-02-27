"use client";

import App_layout from "@/component/layout/app_layout";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function AboutSection() {
  return (
    <App_layout>
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-16 font-[Poppins]">
      <div className="max-w-7xl mx-auto space-y-28">
        
        {/* 1 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <Image
            src="/about/about1.jpg"
            alt="Medical Innovation"
            width={600}
            height={400}
            className="rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Our Purpose: Meaningful Medical Innovation
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We introduce medical technologies that truly make a difference.
              Every device we bring forward is clinically validated, safe,
              practical, and designed to enhance quality of life in U.S.
              healthcare and wellness environments.
            </p>
          </div>
        </motion.div>

        {/* 2 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Bridging Korean Innovation to the United States
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Korea is one of the most advanced medical technology ecosystems
              in the world. Our mission is to connect proven Korean medical
              innovation with the real-world needs of U.S. clinics, wellness
              centers, and healthcare providers.
            </p>
          </div>

          <Image
            src="/about/about1.jpg"
            alt="Medical Technology Korea"
            width={600}
            height={400}
            className="rounded-3xl shadow-xl order-1 md:order-2"
          />
        </motion.div>

        {/* 3 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <Image
            src="/about/about1.jpg"
            alt="Medical Solutions"
            width={600}
            height={400}
            className="rounded-3xl shadow-xl"
          />

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              More Than Distribution
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are not just a distributor of machines — we are a curator of
              meaningful medical solutions. Every product we introduce is
              selected based on its ability to genuinely benefit patients and
              healthcare professionals.
            </p>
          </div>
        </motion.div>

        {/* 4 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Our Commitment & Future Focus
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If it does not help people — we do not introduce it. If it truly
              benefits lives — we stand behind it. iMESUSA will begin by
              introducing TMS and Electromagnetic Stimulation devices,
              representing our commitment to safe and clinically meaningful
              innovation.
            </p>
          </div>

          <Image
            src="/about/about1.jpg"
            alt="TMS Machine"
            width={600}
            height={400}
            className="rounded-3xl shadow-xl order-1 md:order-2"
          />
        </motion.div>

      </div>
    </section>
    </App_layout>
  );
}