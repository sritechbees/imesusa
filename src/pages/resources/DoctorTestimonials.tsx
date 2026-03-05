"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Michael Carter",
    hospital: "New York Medical Center",
    image: "/about/testimonial.jpg",
    feedback:
      "This technology has significantly improved patient recovery rates and treatment precision.",
  },
  {
    name: "Dr. Emily Watson",
    hospital: "California Neuro Institute",
    image: "/about/testimonial.jpg",
    feedback:
      "One of the most reliable and innovative medical devices we have used in our clinic.",
  },
  {
    name: "Dr. Daniel Lee",
    hospital: "Boston Wellness Hospital",
    image: "/about/testimonial.jpg",
    feedback:
      "Highly effective technology that enhances patient care and treatment outcomes.",
  },
];

export default function DoctorTestimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Trusted by Medical Professionals
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <img
                src={item.image}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />

              <h3 className="font-semibold text-xl">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.hospital}</p>

              <p className="mt-4 text-gray-600">{item.feedback}</p>

              <div className="mt-4 text-yellow-400 text-lg">★★★★★</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}