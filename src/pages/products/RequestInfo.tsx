export default function RequestInfo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Request More Information
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          If you would like to learn more about our medical technologies,
          clinical applications, or distribution opportunities, please feel
          free to reach out to our team.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="font-semibold text-lg mb-2">Email Us</h3>
            <p className="text-gray-600">support@medicaltech.com</p>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="font-semibold text-lg mb-2">Call Us</h3>
            <p className="text-gray-600">+1 (000) 123-4567</p>
          </div>

          {/* Location */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="font-semibold text-lg mb-2">Office Location</h3>
            <p className="text-gray-600">California, United States</p>
          </div>

        </div>
      </div>
    </section>
  );
}