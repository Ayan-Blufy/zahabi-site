
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import ForBorrowers from "@/components/home/ForBorrowers";
import ForInvestors from "@/components/home/ForInvestors";
import HowItWorks from "@/components/home/HowItWorks";
import Footer from "@/components/layout/Footer";
import KeyFeatures from "@/components/home/KeyFeatures";
import AppVideo from "@/components/home/AppVideo";

const Index = () => {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = target.getAttribute("href")?.replace("#", "");
        const element = document.getElementById(id || "");
        
        if (element) {
          const yOffset = -80; // Header offset
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AppVideo />
      <HowItWorks />
      <ForBorrowers />
      <ForInvestors />
      <KeyFeatures/>
      <Footer />
    </div>
  );
};

export default Index;
