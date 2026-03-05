"use client";

import App_layout from "@/component/layout/app_layout";
import Image from "next/image";
import { motion } from "framer-motion";
import DoctorTestimonials from "./DoctorTestimonials";
import TechnologyTimeline from "./TechnologyTimeline";
import ClinicalStats from "./ClinicalStats";

export default function ResourcesPage() {
  return (
    <App_layout>
      <section className="relative py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-white font-[Poppins] overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-300 blur-[140px] opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-300 blur-[140px] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-6 space-y-24">

          {/* HEADER */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Medical Technology Resources
            </h1>

            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Access catalogs, product demonstrations, and regulatory
              documentation related to our advanced medical technologies.
            </p>
          </motion.div>

          {/* ================= CATALOG ================= */}
          <div className="space-y-10">

            <motion.h2
              initial={{ opacity:0 }}
              whileInView={{ opacity:1 }}
              className="text-3xl font-semibold text-center"
            >
              Catalog & Brochures
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10">

              {/* TMS */}
              <motion.div
                whileHover={{ y:-10 }}
                className="group bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden border border-gray-100"
              >

                <div className="overflow-hidden">
                  <Image
                    src="/resources/tms-brochure.jpg"
                    alt="TMS Brochure"
                    width={600}
                    height={400}
                    className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900">
                    TMS Technology
                  </h3>

                  <p className="mt-3 text-gray-600">
                    Download detailed product catalog including clinical
                    information and system specifications.
                  </p>

                  <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl shadow hover:scale-105 transition">
                    Download Brochure
                  </button>
                </div>

              </motion.div>


              {/* EMS */}
              <motion.div
                whileHover={{ y:-10 }}
                className="group bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden border border-gray-100"
              >

                <div className="overflow-hidden">
                  <Image
                    src="/resources/ems-brochure.jpg"
                    alt="EMS Brochure"
                    width={600}
                    height={400}
                    className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Electromagnetic Stimulation
                  </h3>

                  <p className="mt-3 text-gray-600">
                    Explore therapeutic applications and technical
                    specifications of our electromagnetic stimulation systems.
                  </p>

                  <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl shadow hover:scale-105 transition">
                    Download Brochure
                  </button>
                </div>

              </motion.div>

            </div>
          </div>

          {/* ================= VIDEOS ================= */}
          <div className="space-y-10">

            <h2 className="text-3xl font-semibold text-center">
              Product Demonstration Videos
            </h2>

            <div className="grid md:grid-cols-2 gap-10">

              {/* EMS VIDEO */}
              <motion.div
          whileHover={{ scale: 1.03 }}
          className="rounded-3xl overflow-hidden shadow-xl"
        >
          <video
            controls
            className="w-full h-[400px] object-cover"
          >
            <source src="/videos/SALUS_TALENT_PRO.mp4" type="video/mp4" />
          </video>
        </motion.div>


              {/* TMS VIDEO */}
             <motion.div
          whileHover={{ scale: 1.03 }}
          className="rounded-3xl overflow-hidden shadow-xl"
        >
          <video
            controls
            className="w-full h-[400px] object-cover"
          >
            <source src="/videos/ALTMS.mp4" type="video/mp4" />
          </video>
        </motion.div>
            </div>
          </div>


          {/* ================= FDA ================= */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
            className="text-center"
          >

            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-3xl p-14 shadow-xl max-w-4xl mx-auto">

              <h2 className="text-3xl font-semibold">
                FDA & Regulatory Compliance
              </h2>

              <p className="mt-6 text-blue-100">
                Our technologies meet strict regulatory requirements
                and compliance standards within the U.S. healthcare system.
                Documentation is available upon request.
              </p>

              <button className="mt-8 px-8 py-3 bg-white text-blue-900 rounded-xl font-semibold hover:scale-105 transition">
                Request Compliance Documents
              </button>

            </div>

          </motion.div>

        </div>
      </section>
      <DoctorTestimonials/>
      <TechnologyTimeline/>
      <ClinicalStats/>
    </App_layout>
  );
}