"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DownloadBrochures() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const brochures = [
    {
      title: "TMS Device Brochure",
      desc: "Learn more about Transcranial Magnetic Stimulation technology and its role in modern brain and mental wellness programs.",
      file: "/about/tms_brochure.jpg",
    },
    {
      title: "Electromagnetic Stimulation",
      desc: "Explore how electromagnetic stimulation devices support pain management and therapeutic recovery.",
      file: "/about/ems_brochure.jpg",
    },
    {
      title: "Product Catalog",
      desc: "Download the complete iMESUSA product catalog including device details and technical specifications.",
      file: "/about/product_catalog.png",
    },
  ];

  return (
    <section className="relative bg-[#0b0f19] py-20 px-4 sm:px-6 overflow-hidden">

      {/* 🔥 Gradient Glow Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#fd5da2]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title */}
        <div className="text-center mb-16">

          <p
            data-aos="fade-up"
            className="text-[#fd5da2] uppercase tracking-widest text-sm mb-3"
          >
            Resources
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Catalog & <span className="text-[#fd5da2]">Brochures</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="max-w-2xl mx-auto text-gray-400"
          >
            Access detailed brochures and product catalogs to explore our
            advanced medical technologies and solutions.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {brochures.map((item, index) => (

            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 
              hover:border-[#fd5da2] transition duration-300 overflow-hidden hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* 🔥 Pink Glow Hover */}
              {/* <div className="absolute inset-0 bg-[#fd5da2]/70 opacity-0 group-hover:opacity-100 transition duration-500"></div> */}

              {/* Top Border Animation */}
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#fd5da2] group-hover:w-full transition-all duration-500"></div>

              <div className="relative z-10">

                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-[#fd5da2] transition">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {item.desc}
                </p>

                {/* Button */}
                <a
                  href={item.file}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#fd5da2] text-white text-sm font-medium rounded-lg 
                  hover:bg-pink-600 transition shadow-lg hover:shadow-pink-500/30"
                >
                  Download
                  <span className="text-lg">↓</span>
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}