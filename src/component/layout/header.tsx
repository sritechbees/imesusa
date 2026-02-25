import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur-md bg-white/70 border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
            iMESUSA
          </h1>
          <p className="text-xs text-gray-500">
            International Medical Equipment Solution
          </p>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link href="#about" className="hover:text-pink-600 transition">
            About
          </Link>
          <Link href="#products" className="hover:text-pink-600 transition">
            Products
          </Link>
          <Link href="#resources" className="hover:text-pink-600 transition">
            Resources
          </Link>
          <Link href="#contact" className="hover:text-pink-600 transition">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="hidden md:inline-block bg-gradient-to-r from-pink-600 to-rose-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:scale-105 transition duration-300"
        >
          Inquiry
        </Link>
      </div>
    </header>
  );
}