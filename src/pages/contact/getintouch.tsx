"use client";

import App_layout from "@/component/layout/app_layout";
import Image from "next/image";

export default function ContactSection() {
  return (
    <App_layout>
      <section className="relative py-28 bg-gradient-to-br from-white via-blue-50 to-slate-100 overflow-hidden font-[Poppins]">

        {/* Soft AI Glow Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 blur-3xl rounded-full opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 blur-3xl rounded-full opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT INFO SECTION */}
          <div data-aos="fade-right" className="space-y-8">

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950">
                Let’s Connect
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                We welcome inquiries from physicians, clinics, MedSpas,
                and healthcare organizations seeking advanced,
                meaningful medical technologies.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">

              <div className="bg-white shadow-lg rounded-2xl p-6 border border-blue-100">
                <h4 className="font-semibold text-blue-900">
                  📍 Professional Consultation
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  Personalized guidance tailored to your clinical or
                  wellness practice.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-6 border border-blue-100">
                <h4 className="font-semibold text-blue-900">
                  ⚡ Fast Response
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  Our team reviews inquiries promptly and responds
                  with detailed information.
                </p>
              </div>

            </div>

            {/* Optional Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/about/contact.jpg"
                alt="Medical Consultation"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

          </div>

          {/* RIGHT FORM SECTION */}
          <div data-aos="fade-left">
            <div className="bg-white shadow-2xl rounded-3xl p-10 border border-blue-100">

              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact / Inquiry
              </h3>

              <form className="space-y-6">

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Clinic / Organization
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                    placeholder="Hospital, Clinic, MedSpa..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Role
                  </label>
                  <select className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition">
                    <option>Select Role</option>
                    <option>Physician (MD / DO)</option>
                    <option>Nurse Practitioner / PA</option>
                    <option>Clinic Administrator</option>
                    <option>MedSpa Owner</option>
                    <option>IPA / Health Planner</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                    placeholder="Write your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-900 text-white rounded-xl font-medium shadow-md hover:bg-blue-700 transition duration-300"
                >
                  Submit Inquiry
                </button>

              </form>

            </div>
          </div>

        </div>
      </section>
    </App_layout>
  );
}