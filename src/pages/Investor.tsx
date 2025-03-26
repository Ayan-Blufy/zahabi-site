
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InvestorDashboard from "@/components/investor/InvestorDashboard";
import InvestorProcessSteps from "@/components/investor/InvestorProcessSteps";
import InvestorFAQ from "@/components/investor/InvestorFAQ";

const Investor = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Investor Dashboard</h1>
          <p className="text-center text-muted-foreground mb-12">
            Invest in gold-backed tokens and earn passive returns
          </p>
        </div>
        <InvestorDashboard />
        <InvestorProcessSteps />
        <InvestorFAQ />
      </div>
      <Footer />
    </div>
  );
};

export default Investor;
