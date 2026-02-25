import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="pt-40 pb-24 bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-100 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-rose-400/30 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-800">
            Meaningful Medical <br />
            <span className="text-pink-600">
              Technology That Makes a Difference
            </span>
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            We introduce clinically validated, high-quality medical devices
            designed to enhance quality of life across U.S. healthcare and
            wellness environments.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#products"
              className="bg-pink-600 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-700 transition"
            >
              Explore Products
            </Link>

            <Link
              href="#contact"
              className="border border-pink-600 text-pink-600 px-6 py-3 rounded-full font-medium hover:bg-pink-600 hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-pink-100">
          <h3 className="text-2xl font-semibold mb-6 text-pink-600">
            Our Commitment
          </h3>

          <ul className="space-y-4 text-gray-600">
            <li>✔ Clinically Validated Technology</li>
            <li>✔ Regulatory Awareness (FDA & Compliance)</li>
            <li>✔ Practical for Clinics & Wellness Centers</li>
            <li>✔ Safe & People-Centered Solutions</li>
          </ul>

          <p className="mt-6 text-sm text-gray-500">
            Bridging Korean medical innovation with U.S. healthcare needs.
          </p>
        </div>

      </div>
    </section>
  );
}