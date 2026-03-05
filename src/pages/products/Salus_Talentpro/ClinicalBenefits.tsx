"use client";

import { motion } from "framer-motion";

export default function ClinicalBenefits() {
  const benefits = [
    "Non-invasive pain relief treatment",
    "Drug-free therapy option",
    "Supports natural recovery process",
    "Improves patient comfort and mobility",
    "Safe for repeated treatment sessions",
    "Enhances patient satisfaction in clinical care",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Clinical Benefits
          </h2>

          <p className="text-gray-600 mb-6">
            SALUS Talent Pro provides physicians with a modern solution for
            non-invasive pain management. The technology supports improved
            treatment outcomes while maintaining patient comfort.
          </p>

          <ul className="space-y-4">
            {benefits.map((item, index) => (
              <li
                key={index}
                className="bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/patient-treatment.jpg"
            className="rounded-xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}