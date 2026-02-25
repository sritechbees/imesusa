export default function WhyIMES() {
  return (
    <section className="relative py-28 bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-100 overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-rose-400/30 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Why <span className="text-pink-600">iMESUSA</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We are not just a distributor of machines. 
            We are curators of meaningful medical technology that truly benefits lives.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white/70 backdrop-blur-xl border border-pink-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-pink-600">
              Clinically Meaningful
            </h3>
            <p className="text-gray-600">
              Every device we introduce is selected based on real clinical value, 
              patient safety, and measurable outcomes.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/70 backdrop-blur-xl border border-pink-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-pink-600">
              Practical & Compliant
            </h3>
            <p className="text-gray-600">
              Designed for real-world usability within U.S. clinics, 
              wellness centers, and healthcare environments — with regulatory awareness.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/70 backdrop-blur-xl border border-pink-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-pink-600">
              People First Technology
            </h3>
            <p className="text-gray-600">
              Technology should serve people — not the other way around. 
              If it does not improve lives, we do not introduce it.
            </p>
          </div>

        </div>

        {/* Bottom Statement */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <p className="text-xl font-medium text-gray-700">
            Bridging advanced Korean medical innovation with the evolving needs 
            of U.S. healthcare providers.
          </p>
        </div>

      </div>
    </section>
  );
}