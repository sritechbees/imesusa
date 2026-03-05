export default function InnovationSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Bridging Korean Medical Innovation
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          Korea is one of the most advanced medical technology ecosystems
          in the world. Our goal is to bridge proven Korean medical
          innovation with the practical needs of clinics, wellness centers,
          and healthcare providers in the United States.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">Clinically Validated</h3>
            <p className="text-gray-600">
              Technologies supported by clinical research and medical studies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">Safe & Practical</h3>
            <p className="text-gray-600">
              Designed for real-world clinical use and patient safety.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">Life Improving</h3>
            <p className="text-gray-600">
              Focused on improving patient wellbeing and outcomes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}