export default function TMSTreatment() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-16">
          TMS Treatment & Applications
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-3">
              Treatment Procedure
            </h3>
            <p className="text-gray-600">
              A magnetic coil is placed near the scalp to deliver
              painless pulses that stimulate brain cells.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-3">
              Clinical Applications
            </h3>
            <p className="text-gray-600">
              TMS is used in mental health and neurological
              wellness programs.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-3">
              Benefits
            </h3>
            <p className="text-gray-600">
              Non-invasive treatment with minimal recovery time
              and improved patient comfort.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}