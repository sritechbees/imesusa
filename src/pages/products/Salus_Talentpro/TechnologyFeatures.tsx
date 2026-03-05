"use client";

import { motion } from "framer-motion";

export default function TechnologyFeatures() {
  const features = [
    {
      title: "Dual Applicator System",
      desc: "Two specialized applicators allow treatment of both localized pain areas and larger body regions.",
    },
    {
      title: "Precision Electromagnetic Stimulation",
      desc: "Advanced electromagnetic field technology designed to stimulate tissues and support natural recovery.",
    },
    {
      title: "Non-Invasive Therapy",
      desc: "Provides pain relief without injections, surgery, or medication.",
    },
    {
      title: "Easy Clinical Operation",
      desc: "Designed for simple operation in clinics, wellness centers, and rehabilitation facilities.",
    },
    {
      title: "Repeatable Treatment Sessions",
      desc: "Safe for repeated therapy sessions for ongoing pain management.",
    },
    {
      title: "Modern Pain Management Technology",
      desc: "Supports physicians in providing advanced therapy solutions to patients.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Technology & Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}