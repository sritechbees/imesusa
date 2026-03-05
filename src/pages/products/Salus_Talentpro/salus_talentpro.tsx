"use client";

import App_layout from "@/component/layout/app_layout";
import Image from "next/image";

export default function SalusTalentPro() {
  return (
    <App_layout>
      <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 px-6 md:px-16 font-[Poppins] overflow-hidden">

        {/* Soft AI Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20"></div>

        <div className="relative max-w-7xl mx-auto space-y-20">

          {/* ===== Header Section ===== */}
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              SALUS TALENT PRO
            </h1>
            <p className="mt-4 text-lg text-blue-700 font-medium">
              Premium Electromagnetic Field Stimulator
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-gray-600">
              The premium version of the Talent series delivers pro-level performance 
              with precise pain relief through stimulation of both overall and localized 
              treatment areas using dual applicator technology.
            </p>
          </div>

          {/* ===== Main Section (Image Right / Content Left) ===== */}
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-8" data-aos="fade-right">

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Advanced Pain Management Solution
                </h2>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600">
                  <li>✓ Tennis Elbow</li>
                  <li>✓ Golfer’s Elbow</li>
                  <li>✓ Shoulder Pain & Stiffness</li>
                  <li>✓ Chronic Joint & Muscle Pain</li>
                  <li>✓ Overuse & Repetitive Strain Injuries</li>
                </ul>

                <p className="mt-6 text-gray-600 leading-relaxed">
                  These are conditions where patients seek relief beyond medication 
                  or injections — where simple, repeatable, non-invasive therapy 
                  delivers effective results.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-6 border border-blue-100">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Recommended For
                </h3>
                <p className="text-gray-600">
                  Physicians specializing in pain management and healthcare providers 
                  looking to enhance patient outcomes through safe, non-invasive therapy.
                </p>
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div data-aos="fade-left">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/about/product2.png"
                  alt="SALUS Talent Pro Device"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* ===== Secondary Benefits Section ===== */}
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* IMAGE LEFT */}
            <div data-aos="fade-right">
              <Image
                src="/about/picture1.png"
                alt="Pain Therapy"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>

            {/* CONTENT RIGHT */}
            <div data-aos="fade-left" className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Ideal for Senior Care & HMO Settings
              </h2>

              <p className="text-gray-600 leading-relaxed">
                SALUS TALENT PRO can be used as a practical care device to help 
                reduce pain in senior patients. In IPA- and PCP-led HMO environments, 
                improved patient comfort and faster healing can lead to higher 
                patient satisfaction and stronger clinical outcomes.
              </p>

              <p className="text-gray-600">
                We are confident you will see highly satisfactory results 
                in both clinical performance and patient experience.
              </p>

              <button className="mt-4 px-8 py-3 bg-blue-900 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
                Request Product Information
              </button>
            </div>

          </div>

        </div>
      </section>
    </App_layout>
  );
}