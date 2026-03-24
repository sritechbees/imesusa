"use client";

import Image from "next/image";

export default function RemedOverview() {
  return (
    <section className="bg-white dark:bg-slate-950 py-16 mt-20 md:py-2 px-4 sm:px-6 md:px-16">

      {/* 🔥 TOP CENTER TITLE */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          <span className="text-gray-900 dark:text-white">
            REMED
          </span>{" "}
          <span className="bg-gradient-to-r from-[#fd5da2] to-pink-400 bg-clip-text text-transparent">
            NMS
          </span>
        </h2>

        <p className="mt-6 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
          Electromagnetic Stimulation System designed to provide deep,
          clinically meaningful pain relief through non-invasive therapy.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8 justify-start">
            {["Non-Invasive", "No Medication", "No Downtime"].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 border border-[#fd5da2] rounded-full text-[#fd5da2] text-xs sm:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Conditions */}
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Created for Chronic and Acute Pain Specialists
          </h3>

          <ul className="space-y-2 sm:space-y-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            <li>✔ Musculoskeletal pain</li>
            <li>✔ Spine & joint disorders</li>
            <li>✔ Sports injuries</li>
            <li>✔ Post-procedural rehabilitation pain</li>
            <li>✔ Pelvic pain & neuromuscular conditions</li>
          </ul>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/product/benefits.jpeg"
              alt="REMED NMS Device"
              width={600}
              height={600}
              className="w-full h-[260px] sm:h-[350px] md:h-full object-cover"
            />
          </div>
        </div>

      </div>

      {/* 🔥 Bottom Feature Section */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-16 md:mt-20">

        {[
          {
            title: "Quick Results",
            desc: "Patients often experience meaningful relief rapidly after treatment.",
          },
          {
            title: "Deep Penetration",
            desc: "Electromagnetic therapy reaches deep tissue for effective pain relief.",
          },
          {
            title: "Seamless Integration",
            desc: "Fits perfectly into modern pain practice workflows.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden group border border-gray-200 dark:border-gray-700"
          >

            {/* Background */}
            <div className="absolute inset-0 bg-white dark:bg-slate-900"></div>

            {/* Gradient Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#fd5da2] via-[#ff7eb3] to-white
              transform scale-x-0 group-hover:scale-x-100 origin-left
              transition-transform duration-500 ease-out z-0"
            />

            {/* Content */}
            <div className="relative z-10 p-6 md:p-8 transition-colors duration-500
              text-gray-800 dark:text-white group-hover:text-white"
            >

              <h4 className="text-lg md:text-xl font-semibold mb-2">
                {item.title}
              </h4>

              <p className="text-sm md:text-base opacity-90">
                {item.desc}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}