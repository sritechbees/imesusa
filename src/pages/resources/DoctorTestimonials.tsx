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
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* 🔹 TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Trusted by{" "}
          <span className="text-[#fd5da2]">Medical Professionals</span>
        </motion.h2>

        {/* 🔸 GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200"
            >

              {/* 🖼️ IMAGE */}
              <div className="relative h-[320px]">
                <img
                  src={item.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* 🌈 OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition"></div>

                {/* 👤 NAME */}
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm opacity-80">{item.hospital}</p>
                </div>

                {/* 💬 HOVER CONTENT */}
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white opacity-0 group-hover:opacity-100 transition duration-500">

                  <div>
                    <p className="text-sm leading-relaxed mb-4">
                      {item.feedback}
                    </p>

                    {/* ⭐ RATING */}
                    <div className="text-[#fd5da2] text-lg">
                      ★★★★★
                    </div>
                  </div>

                </div>

                {/* 💖 BOTTOM LINE */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#fd5da2] group-hover:w-full transition-all duration-300"></div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}