"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function About() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="bg-slate-950 text-gray-300 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative py-28 px-6 overflow-hidden">

        {/* background glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">

          <h1
            data-aos="fade-up"
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            About iMESUSA
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-400"
          >
            International Medical Equipment Solution introduces medical
            technologies that truly make a difference. Our goal is to bring
            clinically validated and high-quality medical innovations into
            modern healthcare and wellness environments across the United
            States.
          </p>

        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div data-aos="fade-right">

            <h2 className="text-4xl font-bold text-white mb-6">
              Our Mission
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Our mission is to carefully select and introduce clinically
              validated, high-quality medical devices that enhance quality of
              life.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Every device we introduce is evaluated based on clinical value,
              safety, regulatory awareness, and real-world usability within
              healthcare and wellness environments.
            </p>

          </div>

          <div
            data-aos="fade-left"
            className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-xl"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              We believe medical technology should always serve people and
              improve lives through meaningful innovation, safety, and
              practical usability in real healthcare settings.
            </p>
          </div>

        </div>

      </section>

      {/* CORE PRINCIPLES */}
      <section className="py-24 px-6 bg-slate-900/40">

        <div className="max-w-7xl mx-auto text-center">

          <h2
            data-aos="fade-up"
            className="text-4xl font-bold text-white mb-16"
          >
            Our Core Principles
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                title: "Meaningful",
                desc: "Delivering real clinical value and measurable patient benefit."
              },
              {
                title: "Practical",
                desc: "Easy to implement in real healthcare environments."
              },
              {
                title: "Safe",
                desc: "Meeting strict regulatory and medical safety standards."
              },
              {
                title: "Life Improving",
                desc: "Helping people live healthier and better lives."
              },
            ].map((item, index) => (

              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 200}
                className="p-8 bg-slate-900 border border-white/10 rounded-xl hover:border-cyan-400 transition"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* KOREA INNOVATION */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div
            data-aos="fade-right"
            className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-10 rounded-2xl border border-white/10"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Korean Medical Innovation
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Korea is one of the most advanced medical technology ecosystems
              in the world. iMESUSA aims to bridge Korean medical innovation
              with the practical needs of healthcare providers in the United
              States.
            </p>
          </div>

          <div data-aos="fade-left">

            <h3 className="text-3xl font-bold text-white mb-6">
              Bridging Technology & Healthcare
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Our goal is to connect proven medical technologies with clinics,
              wellness centers, and healthcare providers that are looking for
              safe, innovative, and practical solutions.
            </p>

          </div>

        </div>

      </section>

      {/* COMMITMENT */}
      <section className="py-28 px-6 bg-slate-900/40">

        <div className="max-w-5xl mx-auto text-center">

          <h2
            data-aos="fade-up"
            className="text-4xl font-bold text-white mb-10"
          >
            Our Commitment
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg text-gray-400 leading-relaxed mb-10"
          >
            We are not simply distributors of machines. We act as curators of
            meaningful medical solutions designed to improve lives and support
            healthcare professionals.
          </p>

          <div className="space-y-4">

            <p data-aos="fade-up" className="text-gray-300">
              If a technology does not help people — we do not introduce it.
            </p>

            <p data-aos="fade-up" className="text-gray-300">
              If it truly benefits lives — we proudly stand behind it.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}