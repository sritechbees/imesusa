
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/component/layout/header";

import HeroSection from "@/component/home/herosection";
import WhyIMES from "@/component/home/why_imesusa";
import Footer from "@/component/layout/footer";
import MissionSection from "@/component/home/MissionSection";
import InnovationSection from "@/component/home/InnovationSection";
import ProductsSection from "@/component/home/ProductsSection";
import ResourcesSection from "@/component/home/ResourcesSection";
import ContactCTA from "@/component/home/ContactCTA";

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
  <MissionSection/>
  <InnovationSection/>
  <ProductsSection/>
  <ResourcesSection/>
  <ContactCTA/>
 
  <Footer/>
    </div>
  );
}
