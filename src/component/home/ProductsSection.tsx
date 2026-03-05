import Link from "next/link";

export default function ProductsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Medical Devices
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <img
              src="/products/tms.jpg"
              className="rounded-lg mb-4"
            />

            <h3 className="text-2xl font-semibold mb-3">
              TMS – Brain Wellness Technology
            </h3>

            <p className="text-gray-600 mb-4">
              Transcranial Magnetic Stimulation (TMS) is a non-invasive
              brain wellness technology designed to support mental clarity,
              emotional balance, and stress resilience.
            </p>
<Link href="/products/TMSOverview">
            <button className="text-blue-600 font-semibold">
              Explore Technology →
            </button>
            </Link>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <img
              src="/products/salus.jpg"
              className="rounded-lg mb-4"
            />

            <h3 className="text-2xl font-semibold mb-3">
              SALUS Talent Pro
            </h3>

            <p className="text-gray-600 mb-4">
              Premium electromagnetic field stimulator designed for
              non-invasive pain management and rehabilitation therapy.
            </p>
<Link href="/products/Salus_Talentpro/herosection">
            <button className="text-blue-600 font-semibold">
              View Product →
            </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}