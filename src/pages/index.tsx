import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/component/layout/header";
import HeaderHero from "@/component/layout/header";
import HeroSection from "@/component/home/herosection";
import WhyIMES from "@/component/home/why_imesusa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
  <Header/>
  <HeroSection/>
  <WhyIMES/>
    </div>
  );
}
