"use client";

import App_layout from "@/component/layout/app_layout";
import Image from "next/image";

export default function TMSProduct() {
  return (
    <App_layout>
    <section className="w-full bg-gradient-to-b from-white to-pink-50 py-24 px-6 md:px-16 font-[Poppins]">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Hero Section */}
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            REMED TMS
          </h1>
          <p className="mt-4 text-lg text-pink-600 font-medium">
            Next-Generation Wellness Technology
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-gray-600">
            Transcranial Magnetic Stimulation (TMS) re-imagined for modern wellness. 
            A globally trusted system operating in 50+ countries with 90% market share in Korea.
          </p>
        </div>

        {/* Image + Highlights */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div data-aos="fade-right">
            <Image
              src="/about/image.png" // Replace with your actual image
              alt="REMED TMS Machine"
              width={600}
              height={400}
              className="rounded-3xl w-[400px] h-[450px] shadow-2xl"
            />
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <h2 className="text-3xl font-semibold text-gray-900">
              Reimagining Brain Wellness
            </h2>

            <ul className="space-y-4 text-gray-600">
              <li>✓ Non-Invasive</li>
              <li>✓ No Medication</li>
              <li>✓ No Downtime</li>
              <li>✓ Calm, Premium MedSpa Environment</li>
              <li>✓ Designed for Clarity, Calm, Focus & Emotional Balance</li>
            </ul>

            <p className="text-sm text-gray-500 italic">
              This is not psychiatry. This is next-generation wellness technology.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-3xl shadow-xl p-10" data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900">
            Why Forward-Thinking MedSpas Choose TMS
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-600">
            <div className="space-y-3">
              <p>✓ Differentiate from traditional aesthetic services</p>
              <p>✓ Attract high-value, wellness-focused patients</p>
            </div>

            <div className="space-y-3">
              <p>✓ Build recurring, membership-based programs</p>
              <p>✓ Expand beyond skin into total mind-body optimization</p>
            </div>
          </div>
        </div>

        {/* Global Trust Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div data-aos="fade-right">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Globally Trusted System
            </h2>
            <p className="text-gray-600 mb-4">
              REMED TMS is operating in more than 50 countries worldwide and holds
              90% market share in Korea’s wellness technology sector.
            </p>
            <p className="text-gray-600">
              High-end practices are integrating TMS as a Brain Wellness Program,
              creating a new category in MedSpa wellness.
            </p>
          </div>

          <div data-aos="fade-left">
            <Image
              src="/about/image1.png" // Replace with real image
              alt="Brain Wellness"
              width={600}
              height={500}
              className="rounded-3xl w-[400px] h-[450px] shadow-2xl"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-500 text-white rounded-3xl p-12 text-center shadow-xl" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-4">
            Explore a New Category in MedSpa Wellness
          </h2>
          <p className="mb-6">
            Interested in learning more? Contact us for additional details and program options.
          </p>

          <div className="space-y-2">
            <p>📧 sales@iMESusa.com</p>
            <p>📞 949.838.7924</p>
            <p>🌐 iMESusa.com</p>
          </div>
        </div>

      </div>
    </section>
    </App_layout>
  );
}