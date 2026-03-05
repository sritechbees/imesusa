"use client";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2016",
    title: "Research & Development",
    desc: "Initial development and medical research began for advanced treatment systems.",
  },
  {
    year: "2018",
    title: "Clinical Testing",
    desc: "Device successfully completed clinical testing with high patient success rates.",
  },
  {
    year: "2020",
    title: "FDA Compliance",
    desc: "Device passed regulatory safety and compliance procedures.",
  },
  {
    year: "2023",
    title: "Global Deployment",
    desc: "Adopted by hospitals and medical institutions worldwide.",
  },
];

export default function TechnologyTimeline() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Technology Evolution
        </h2>

        <div className="space-y-10 border-l-4 border-blue-500 pl-10">

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -left-7 top-1 w-4 h-4 bg-blue-500 rounded-full"></div>

              <h3 className="text-xl font-semibold">{item.year}</h3>
              <p className="font-medium">{item.title}</p>
              <p className="text-gray-600">{item.desc}</p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}