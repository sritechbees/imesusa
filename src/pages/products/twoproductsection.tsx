"use client";

import App_layout from "@/component/layout/app_layout";
import Image from "next/image";
import Link from "next/link";

export default function TwoProductHero() {
  return (
    <App_layout>
      <section className="w-full min-h-screen bg-white py-24 px-6 md:px-16 font-[Poppins]">
        <div className="max-w-7xl mx-auto space-y-24">

          {/* ====== TMS SECTION ====== */}
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}
            <div data-aos="fade-right">
              <Image
                src="/about/tms.jpg"
                alt="TMS Machine"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div data-aos="fade-left" className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                TMS (Transcranial Magnetic Stimulation)
              </h2>

              <p className="text-gray-600 leading-relaxed">
                REMED TMS is a next-generation brain wellness technology designed
                for modern MedSpa and healthcare environments. It is non-invasive,
                requires no medication, and involves no downtime.
              </p>

              <ul className="space-y-3 text-gray-600">
                <li>✓ Enhances Clarity & Focus</li>
                <li>✓ Supports Emotional Balance</li>
                <li>✓ Non-Invasive & Safe</li>
                <li>✓ Globally trusted system</li>
              </ul>
<Link href="/products/tms_product">
              <button className="mt-4 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition">
                Learn More
              </button>
              </Link>
            </div>
          </div>

          {/* ====== SECOND PRODUCT SECTION (ALTERNATE) ====== */}
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div data-aos="fade-right" className="space-y-6 order-2 md:order-1">
              <h2 className="text-4xl font-bold text-gray-900">
                SALUS TALENT PRO
              </h2>

              <p className="text-gray-600 leading-relaxed">
                A premium wellness enhancement device engineered to support
                total mind-body optimization in clinical and wellness centers.
              </p>

              <ul className="space-y-3 text-gray-600">
                <li>✓ Designed for high-end practices</li>
                <li>✓ Expands service offerings</li>
                <li>✓ Encourages recurring wellness programs</li>
                <li>✓ Premium patient experience</li>
              </ul>
<Link href="/products/salus_talentpro">
              <button className="mt-4 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition">
                Explore Product
              </button></Link>
            </div>

            {/* RIGHT IMAGE */}
            <div data-aos="fade-left" className="order-1 md:order-2">
              <Image
                src="/about/product2.png"
                alt="Salus Talent Pro"
                width={500}
                height={100}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

        </div>
      </section>
    </App_layout>
  );
}