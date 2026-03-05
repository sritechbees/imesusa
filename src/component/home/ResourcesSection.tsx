export default function ResourcesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-10">
          Resources
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Catalog & Brochures
            </h3>
            <p className="text-gray-600">
              Download detailed product catalogs and brochures.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Videos (Live Demo)
            </h3>
            <p className="text-gray-600">
              Watch real clinical demonstrations of our technology.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              FDA & Compliance
            </h3>
            <p className="text-gray-600">
              Information regarding regulatory compliance and approvals.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}