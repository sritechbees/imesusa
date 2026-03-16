"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "About", href: "/about/aboutsection" },
    { name: "Products", href: "/products/twoproductsection" },
    { name: "Resources", href: "/resources/resouceshero" },
    { name: "Contact", href: "/contact/getintouch" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/about/logo2.png"
            alt="iMESUSA Logo"
            width={170}
            height={70}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-gray-700">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative transition duration-300
              ${
                pathname === link.href
                  ? "text-[#fd5da2] font-semibold"
                  : "hover:text-[#fd5da2]"
              }`}
            >
              {link.name}

              {/* Active underline */}
              {pathname === link.href && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#fd5da2]"></span>
              )}
            </Link>
          ))}

        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact/inquiryform"
            className="relative px-6 py-2.5 rounded-lg font-semibold text-white 
            bg-[#fd5da2] border border-[#fd5da2] overflow-hidden group 
            transition-all duration-500 hover:text-[#fd5da2]"
          >

            {/* Hover Background */}
            <span className="absolute inset-0 bg-white transform scale-x-0 origin-left 
            group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>

            <span className="relative z-10 tracking-wide">
              Inquiry
            </span>

          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="w-6 h-[2px] bg-gray-900"></span>
          <span className="w-6 h-[2px] bg-gray-900"></span>
          <span className="w-6 h-[2px] bg-gray-900"></span>
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >

        <div className="flex flex-col px-6 py-6 space-y-5 text-gray-700 font-medium">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`transition duration-300  ${
                pathname === link.href
                  ? "text-[#fd5da2] font-semibold"
                  : "hover:text-[#fd5da2]"
              }`}
            >
              {link.name}
            </Link>
           
          ))}

          <Link
            href="/contact/inquiryform"
            className="mt-3 inline-block text-center max-sm:mr-36 px-5 py-2.5 rounded-xl font-semibold text-white bg-[#fd5da2]"
          >
            Inquiry
          </Link>

        </div>

      </div>

    </header>
  );
}