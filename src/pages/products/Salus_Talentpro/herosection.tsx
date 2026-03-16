"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import App_layout from "@/component/layout/app_layout";
import SalusTalentPro from "./salus_talentpro";
import PainManagement from "./PainManagement";
import TechnologyFeatures from "./TechnologyFeatures";
import ClinicalBenefits from "./ClinicalBenefits";
import HealthcareSettings from "./HealthcareSettings";
import Link from "next/link";

export default function HeroSection() {
  return (
    <App_layout>
    <section className="bg-gradient-to-r from-blue-50 to-white py-20 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            SALUS TALENT PRO
          </h1>

          <p className="mt-4 text-xl text-blue-600 font-semibold">
            Premium Electromagnetic Field Stimulator
          </p>

          <p className="mt-6 text-gray-600 leading-relaxed">
            SALUS Talent Pro is a professional-grade therapeutic device
            designed to deliver precise pain relief through advanced
            electromagnetic stimulation technology.
          </p>

          <p className="mt-4 text-gray-600">
            The device uses two specialized applicators that enable treatment
            of both localized and overall body areas, making it highly
            effective for modern pain management and wellness programs.
          </p>

          <div className="flex gap-4 mt-8">
           
<Link href="/resources/downloadcatalog">
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              View Brochures
            </button></Link>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/about/product2.png"
            alt="SALUS Talent Pro Device"
            width={500}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </motion.div>

      </div>
     
    </section>
     <PainManagement/>
<TechnologyFeatures/>
<ClinicalBenefits/>
<HealthcareSettings/>

    <SalusTalentPro/>
    </App_layout>
  );
}