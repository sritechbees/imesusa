"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function RequestInfo() {

  const contact = [
    {
      icon: Mail,
      title: "Email Us",
      desc: "sales@iMESusa.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      desc: "949.838.7924",
    },
    {
      icon: MapPin,
      title: "Office Location",
      desc: "California, United States",
    },
  ];

  return (
    <section className=" mb-20 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* 🔹 HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Request More{" "}
            <span className="text-[#fd5da2]">Information</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            If you would like to learn more about our medical technologies,
            clinical applications, or distribution opportunities, please feel
            free to reach out to our team.
          </p>
        </motion.div>

        {/* 🔸 CONTACT GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {contact.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-2xl border border-gray-200 text-center overflow-hidden"
              >

                {/* 🌈 Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#fd5da2]/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                {/* ICON */}
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#fd5da2]/10 mb-5 relative z-10 group-hover:scale-110 transition">
                  <Icon className="text-[#fd5da2] w-7 h-7" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 relative z-10 group-hover:text-[#fd5da2] transition">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 text-sm relative z-10">
                  {item.desc}
                </p>

                {/* BOTTOM LINE */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#fd5da2] group-hover:w-full transition-all duration-300"></div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}