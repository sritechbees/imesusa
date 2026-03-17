"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-slate-950 text-gray-700 dark:text-gray-300 pt-16 pb-8 overflow-hidden transition-colors duration-500">

      {/* AI Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#fd5da2]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#fd5da2]/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* LOGO SECTION */}
           <Link href="/">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
           
            <Image
              src="/about/logo2.png" // 👉 replace with your logo path
              alt="iMESUSA Logo"
              width={140}
              height={40}
              className="object-contain"
            />

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Advanced medical technologies designed to improve healthcare outcomes
              and support modern wellness environments.
            </p>
          </motion.div></Link>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">

              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about/aboutsection" },
                { name: "Products", link: "/products/twoproductsection" },
                { name: "Resources", link: "/resources/resouceshero" },
                { name: "Contact", link: "/contact/getintouch" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className="relative inline-block transition duration-300 hover:text-[#fd5da2]"
                  >
                    {item.name}

                    {/* underline animation */}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#fd5da2] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}

            </ul>
          </motion.div>

          {/* RESOURCES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Resources
            </h3>

            <ul className="space-y-3 text-sm">

              {[
                { name: "Catalog & Brochures", link: "/resources/downloadcatalog" },
                { name: "Product Videos", link: "/resources/viewresourse" },
                { name: "FDA & Compliance", link: "/resources/fdafooter" },
                { name: "Technology Overview", link: "/resources/techoverview" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className="transition duration-300 hover:text-[#fd5da2]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>

            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">

              <li className="hover:text-[#fd5da2] transition">
                Email: sales@iMESusa.com
              </li>

              <li className="hover:text-[#fd5da2] transition">
                Phone: 949.838.7924
              </li>

              <li>
                United States
              </li>

            </ul>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">

          <p>
            © {new Date().getFullYear()} iMESUSA. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <span className="cursor-pointer hover:text-[#fd5da2] transition">
              Privacy Policy
            </span>

            <span className="cursor-pointer hover:text-[#fd5da2] transition">
              Terms of Service
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}