export default function PainManagement() {
  const conditions = [
    "Tennis Elbow",
    "Golfer’s Elbow",
    "Shoulder Pain & Stiffness",
    "Chronic Joint Pain",
    "Muscle Pain",
    "Repetitive Strain Injuries",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Pain Management Applications
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {conditions.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">{item}</h3>
              <p className="text-gray-600 mt-2">
                Effective non-invasive therapy designed to reduce pain and
                improve mobility.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}