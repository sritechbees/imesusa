"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import App_layout from "@/component/layout/app_layout";
import ResourcesHeroSection from "./resouceshero";
import DownloadBrochures from "./downloadbrochures";
import FDACompliance from "./fda";
import TechnologyTimeline from "./TechnologyTimeline";
import DoctorTestimonials from "./DoctorTestimonials";

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
   
   


    <div className="space-y-14">

      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Product Demonstration Videos
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Watch demonstration videos of our advanced medical technologies,
          including electromagnetic stimulation and TMS systems.
        </p>
      </div>

      {/* Video Cards */}
      <div className="flex justify-center gap-10">

        {videos.map((item) => (

          <motion.div
            key={item.id}
            whileHover={{ scale: 1.04 }}
            className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
          >

            {/* Product Image */}
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={800}
              height={500}
              className="w-[500px] h-[380px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

              {/* Play Button */}
              <button
                onClick={() => setActiveVideo(item.video)}
                className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-2xl hover:scale-110 transition"
              >
                ▶
              </button>

            </div>

            {/* Product Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center p-4 text-lg font-semibold">
              {item.title}
            </div>

          </motion.div>

        ))}

      </div>

      {/* Video Modal */}
      {activeVideo && (

        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">

          <div className="relative w-full max-w-4xl">

            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ✕
            </button>

            {/* Video Player */}
            <video
              controls
              autoPlay
              className="w-full rounded-xl shadow-2xl"
            >
              <source src={activeVideo} type="video/mp4" />
            </video>

          </div>

        </div>

      )}

    </div>
 
    

  );
}