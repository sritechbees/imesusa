import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">

      <h2 className="text-4xl font-bold mb-6">
        Interested in Our Medical Technologies?
      </h2>

      <p className="max-w-2xl mx-auto mb-8">
        If you would like more information about our devices,
        distribution opportunities, or clinical applications,
        please contact our team.
      </p>
<Link href="/contact/getintouch">
      <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold">
        Contact Us
      </button>
      </Link>

    </section>
  );
}