
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenderDashboard from "@/components/lender/LenderDashboard";
import LenderProcessSteps from "@/components/lender/LenderProcessSteps";
import LenderFAQ from "@/components/lender/LenderFAQ";

const Lender = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Lender Dashboard</h1>
          <p className="text-center text-muted-foreground mb-12">
            Manage loan offerings, verify gold assets, and mint tokens
          </p>
        </div>
        <LenderDashboard />
        <LenderProcessSteps />
        <LenderFAQ />
      </div>
      <Footer />
    </div>
  );
};

export default Lender;
