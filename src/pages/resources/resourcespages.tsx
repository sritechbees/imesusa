"use client";

import App_layout from "@/component/layout/app_layout";
import Image from "next/image";

export default function ResourcesPage() {
  return (
    <App_layout>
      <section className="relative py-28 bg-gradient-to-br from-white via-blue-50 to-slate-100 font-[Poppins] overflow-hidden">

        {/* Soft Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 blur-3xl rounded-full opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 blur-3xl rounded-full opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-6 space-y-24">

          {/* ================= HEADER ================= */}
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950">
              Resources
            </h1>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Access product catalogs, live demonstration videos,
              and regulatory compliance information for our medical technologies.
            </p>
          </div>

          {/* ================= CATALOG & BROCHURES ================= */}
          <div data-aos="fade-up" className="space-y-10">
            <h2 className="text-2xl font-semibold text-gray-900 text-center">
              Catalog & Brochures
            </h2>

            <div className="grid md:grid-cols-2 gap-10">

              {/* TMS Brochure */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition">
                <h3 className="text-xl font-semibold text-blue-900">
                  TMS
                </h3>
                <p className="mt-4 text-gray-600">
                  Download detailed product catalog and clinical information
                  about our Transcranial Magnetic Stimulation systems.
                </p>
                <button className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-xl hover:bg-blue-700 transition">
                  Download Brochure
                </button>
              </div>

              {/* EMS Brochure */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition">
                <h3 className="text-xl font-semibold text-blue-900">
                  Electro Magnetic Stimulation
                </h3>
                <p className="mt-4 text-gray-600">
                  Access technical specifications and therapeutic
                  applications for our premium electromagnetic systems.
                </p>
                <button className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-xl hover:bg-blue-700 transition">
                  Download Brochure
                </button>
              </div>

            </div>
          </div>

          {/* ================= VIDEOS SECTION ================= */}
          <div data-aos="fade-up" className="space-y-10">
            <h2 className="text-2xl font-semibold text-gray-900 text-center">
              Videos (Live Demo)
            </h2>

            <div className="grid md:grid-cols-2 gap-10">

              {/* EMS Video */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100">
                <Image
                  src="/video-ems.jpg"
                  alt="Electromagnetic Stimulation Demo"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-blue-900">
                    Electro Magnetic Stimulation
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Watch live clinical demonstration and patient applications.
                  </p>
                </div>
              </div>

              {/* TMS Video */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100">
                <Image
                  src="/video-tms.jpg"
                  alt="TMS Live Demo"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-blue-900">
                    TMS
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Explore how TMS is integrated into modern wellness practices.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= FDA & COMPLIANCE ================= */}
          <div data-aos="fade-up" className="text-center">
            <div className="bg-white rounded-3xl shadow-xl p-12 border border-blue-100 max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900">
                FDA & Compliance
              </h2>
              <p className="mt-6 text-gray-600">
                Our products meet regulatory standards and compliance
                requirements within U.S. healthcare environments.
                Documentation and certification details are available upon request.
              </p>

              <button className="mt-8 px-8 py-3 bg-blue-900 text-white rounded-xl hover:bg-blue-700 transition">
                Request Compliance Documents
              </button>
            </div>
          </div>

        </div>
      </section>
    </App_layout>
  );
}