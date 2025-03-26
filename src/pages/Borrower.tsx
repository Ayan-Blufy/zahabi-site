
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BorrowerDashboard from "@/components/borrower/BorrowerDashboard";
import BorrowerProcessSteps from "@/components/borrower/BorrowerProcessSteps";
import BorrowerFAQ from "@/components/borrower/BorrowerFAQ";

const Borrower = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Borrower Dashboard</h1>
          <p className="text-center text-muted-foreground mb-12">
            Access loans by collateralizing your gold with trusted lenders
          </p>
        </div>
        <BorrowerDashboard />
        <BorrowerProcessSteps />
        <BorrowerFAQ />
      </div>
      <Footer />
    </div>
  );
};

export default Borrower;
