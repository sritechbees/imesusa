import App_layout from "@/component/layout/app_layout";
import TMSTechnology from "./TMSTechnology";
import TMSTreatment from "./TMSTreatment";
import TMSSafety from "./TMSSafety";
import RequestInfo from "./RequestInfo";


export default function TMSOverview() {
  return (
    <App_layout>
    <main>

      {/* Hero Section */}
      <section className="relative mt-20 h-[90vh] flex items-center justify-center text-center text-white">
        <img
          src="/product/tmshero.jpg"
          className="absolute w-full h-[525px]"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Transcranial Magnetic Stimulation
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Non-invasive brain wellness technology designed for modern
            MedSpa environments.
          </p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Brain & Mental Wellness Program
            </h2>

            <p className="text-gray-600">
              Transcranial Magnetic Stimulation (TMS) is introduced as a
              non-invasive brain wellness technology that allows MedSpas
              to expand beyond aesthetics into mental and emotional wellness.
            </p>

            <ul className="mt-6 space-y-3">
              <li>✔ Mental clarity</li>
              <li>✔ Emotional balance</li>
              <li>✔ Stress resilience</li>
              <li>✔ Focus wellness</li>
            </ul>
          </div>

          <img
            src="/tms/device.jpg"
            className="rounded-xl shadow-lg"
          />

        </div>
      </section>

    </main>
    <TMSTechnology/>
    <TMSTreatment/>
   <TMSSafety/>
  <RequestInfo/>
</App_layout>
  );

}