"use client";

import { useState } from "react";
import Image from "next/image";
import App_layout from "@/component/layout/app_layout";

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setSubmitted(true);
};
  return (
    <App_layout>
      <section className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 px-6 md:px-16 font-[Poppins]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE SECTION */}
          <div data-aos="fade-right" className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/about/inquiryform.jpg"   // Add image in public folder
                alt="Medical Consultation"
                width={600}
                height={700}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Soft Overlay Card */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-xs">
              <h3 className="font-semibold text-blue-900">
                Professional Support
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Our team is ready to assist clinics, physicians, and healthcare
                providers with personalized solutions.
              </p>
            </div>
          </div>

          {/* RIGHT FORM SECTION */}
          <div data-aos="fade-left">
            <div className="bg-white shadow-2xl rounded-3xl p-10 border border-blue-100">

              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">
                  Contact / Inquiry
                </h1>
                <p className="mt-3 text-gray-600">
                  Please complete the form and our team will respond promptly.
                </p>
              </div>

              {/* SUCCESS MESSAGE */}
              {submitted ? (
                <div className="bg-green-50 border border-green-300 text-green-800 p-6 rounded-xl shadow-md">
                  <h3 className="font-semibold mb-2">
                    Thank you for your submission.
                  </h3>
                  <p>
                    We have received your information successfully. A member of
                    our team will contact you shortly.
                  </p>
                  <p className="mt-2">
                    For urgent matters, please contact us directly.
                  </p>
                  <p className="mt-2 font-medium">
                    Thank you for your interest.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Full Name */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Clinic / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="Hospital, Clinic, MedSpa, IPA, Health Planner..."
                      required
                      className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                    />
                  </div>

                  {/* Role */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Your Role
                    </label>
                    <select
                      required
                      className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                    >
                      <option value="">Select Role</option>
                      <option>Physician (MD / DO)</option>
                      <option>Nurse Practitioner / PA</option>
                      <option>Clinic Administrator</option>
                      <option>MedSpa Owner</option>
                      <option>IPA / Health Planner</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#fea8c5] text-white rounded-xl font-medium shadow-md hover:bg-[#df6294] transition duration-300"
                  >
                    Submit Inquiry
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>
    </App_layout>
  );
}