"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TMSTreatment() {

  const data = [
    {
      title: "Treatment Procedure",
      desc: "A magnetic coil is placed near the scalp to deliver painless pulses that stimulate brain cells.",
      img: "/product/tms procedure.jpg",
    },
    {
      title: "Clinical Applications",
      desc: "TMS is used in mental health and neurological wellness programs.",
      img: "/product/Clinical Applications.jpg",
    },
    {
      title: "Benefits",
      desc: "Non-invasive treatment with minimal recovery time and improved patient comfort.",
      img: "/product/benefits.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* 🔹 TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          TMS Treatment &{" "}
          <span className="text-[#fd5da2]">Applications</span>
        </motion.h1>

        {/* 🔸 IMAGE GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden"
            >

              {/* 🖼️ CURVED IMAGE */}
              <div className="relative w-full h-[350px] overflow-hidden 
                [clip-path:polygon(0%_0%,100%_5%,95%_100%,5%_95%)]">

                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* 🌈 OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition"></div>

                {/* 📝 CONTENT */}
                <div className="absolute bottom-6 left-6 right-6 text-white">

                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>

                  {/* HOVER DESCRIPTION */}
                  <p className="text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500">
                    {item.desc}
                  </p>

                </div>

                {/* 💖 HOVER COLOR LINE */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#fd5da2] group-hover:w-full transition-all duration-500"></div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}