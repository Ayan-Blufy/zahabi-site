
import React from "react";
import { CustomButton } from "../ui/CustomButton";
import { DollarSign, Clock, ShieldCheck, Percent } from "lucide-react";
import PhoneModel from "./PhoneModel";

const ForBorrowers = () => {
  return (
    <section id="for-borrowers" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">For Borrowers</h2>
          <p className="text-muted-foreground">
            Unlock the value of your gold without selling it
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Features */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <DollarSign className="h-6 w-6 text-white " />,
                  title: "Competitive Rates",
                  description: "Get loans at rates lower than traditional banks and credit cards."
                },
                {
                  icon: <Clock className="h-6 w-6 text-white" />,
                  title: "Quick Processing",
                  description: "Receive funds within 24 hours of gold verification."
                },
                {
                  icon: <ShieldCheck className="h-6 w-6 text-white" />,
                  title: "Secure Storage",
                  description: "Your gold is stored in insured, high-security vaults."
                },
                {
                  icon: <Percent className="h-6 w-6 text-white" />,
                  title: "Flexible Terms",
                  description: "Choose repayment terms that suit your financial situation."
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 rounded-xl border border-zahabi-gold/10 bg-white hover:shadow-md transition-all duration-300">
                  <div className="p-3  rounded-full inline-block mb-4 bg-zahabi-gold">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
                <CustomButton className="bg-white hover:bg-white-600">
                Apply for a Loan
              </CustomButton>
            </div>
          </div>
          
          {/* Loan Calculator */}
      
          
          <div className="order-2 lg:order-1 flex items-center justify-center h-[650px] relative animate-float">
            <PhoneModel />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ForBorrowers;
