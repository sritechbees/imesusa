"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type VideoType = {
  id: number;
  title: string;
  thumbnail: string;
  video: string;
};

export default function ProductVideos() {

  const [mounted, setMounted] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const videos: VideoType[] = [
    {
      id: 1,
      title: "Electromagnetic Stimulation",
      thumbnail: "/about/product2.png",
      video: "/videos/SALUS_TALENT_PRO.mp4",
    },
    {
      id: 2,
      title: "TMS Technology",
      thumbnail: "/about/tms.jpg",
      video: "/videos/ALTMS.mp4",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0b0f19]">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Product <span className="text-[#fd5da2]">Videos</span>
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Watch real demonstrations of our advanced medical technologies.
        </p>
      </div>

      {/* Grid (Responsive) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {videos.map((item) => (

          <motion.div
            key={item.id}
            whileHover={{ scale: 1.04 }}
            className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
          >

            {/* Image */}
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={800}
              height={500}
              className="w-full h-[250px] sm:h-[300px] md:h-[320px] object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300"></div>

            {/* Pink Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#fd5da2]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setActiveVideo(item.video)}
                className="w-16 h-16 rounded-full bg-[#fd5da2] text-white text-2xl flex items-center justify-center shadow-lg 
                hover:scale-110 hover:bg-pink-600 transition"
              >
                ▶
              </button>
            </div>

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm">

              <h3 className="text-white text-lg font-semibold transition text-center duration-300 group-hover:text-[#fd5da2]">
                {item.title}
              </h3>

            </div>

            {/* Top Glow Border */}
            <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#fd5da2] group-hover:w-full transition-all duration-500"></div>

          </motion.div>

        ))}

      </div>

      {/* Video Modal */}
      {activeVideo && (

        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">

          <div className="relative w-full max-w-4xl">

            {/* Close */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-[#fd5da2]"
            >
              ✕
            </button>

            {/* Video */}
            <video
              controls
              autoPlay
              className="w-full rounded-xl shadow-2xl border border-[#fd5da2]/40"
            >
              <source src={activeVideo} type="video/mp4" />
            </video>

          </div>

        </div>

      )}

    </div>
  );
}