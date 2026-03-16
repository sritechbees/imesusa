"use client";

import Image from "next/image";

export default function RemedOverview() {
  return (
    <section className="bg-white py-24 px-6 md:px-16 font-[Poppins]">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
            REMED NMS
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            Electromagnetic Stimulation System designed to provide deep,
            clinically meaningful pain relief through non-invasive therapy.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-2 border rounded-full text-purple-600 text-sm">
              Non-Invasive
            </span>
            <span className="px-4 py-2 border rounded-full text-purple-600 text-sm">
              No Medication
            </span>
            <span className="px-4 py-2 border rounded-full text-purple-600 text-sm">
              No Downtime
            </span>
          </div>

          {/* Conditions */}
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Created for Chronic and Acute Pain Specialists
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>✔ Musculoskeletal pain</li>
            <li>✔ Spine & joint disorders</li>
            <li>✔ Sports injuries</li>
            <li>✔ Post-procedural rehabilitation pain</li>
            <li>✔ Pelvic pain & neuromuscular conditions</li>
          </ul>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/about/technology_evaluation.jpg"
              alt="REMED NMS Device"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>

      {/* Bottom Feature Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mt-20 text-center">

        <div className="bg-gray-50 p-8 rounded-2xl shadow">
          <h4 className="text-lg font-semibold mb-2">Quick Results</h4>
          <p className="text-gray-600 text-sm">
            Patients often experience meaningful relief rapidly after treatment.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl shadow">
          <h4 className="text-lg font-semibold mb-2">Deep Penetration</h4>
          <p className="text-gray-600 text-sm">
            Electromagnetic therapy reaches deep tissue for effective pain relief.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl shadow">
          <h4 className="text-lg font-semibold mb-2">Seamless Integration</h4>
          <p className="text-gray-600 text-sm">
            Fits perfectly into modern pain practice workflows.
          </p>
        </div>

      </div>

    </section>
  );
}