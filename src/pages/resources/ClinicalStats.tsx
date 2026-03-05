"use client";
import { motion } from "framer-motion";

const stats = [
  {
    number: "95%",
    label: "Treatment Success Rate",
  },
  {
    number: "120+",
    label: "Hospitals Using Our Technology",
  },
  {
    number: "50K+",
    label: "Patients Treated",
  },
  {
    number: "12+",
    label: "Years of Medical Research",
  },
];

export default function ClinicalStats() {
  return (
    <section className="py-20 bg-blue-50">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-14">
          Clinical Results & Impact
        </h2>

        <div className="grid md:grid-cols-4 gap-10">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-10 rounded-xl shadow-lg"
            >
              <h3 className="text-5xl font-bold text-blue-600">
                {item.number}
              </h3>

              <p className="mt-4 text-gray-600">{item.label}</p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}