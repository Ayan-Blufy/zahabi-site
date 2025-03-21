
import React from "react";
import { CustomButton } from "../ui/CustomButton";
import { DollarSign, Clock, ShieldCheck, Percent } from "lucide-react";

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
                  icon: <DollarSign className="h-6 w-6 text-zahabi-gold" />,
                  title: "Competitive Rates",
                  description: "Get loans at rates lower than traditional banks and credit cards."
                },
                {
                  icon: <Clock className="h-6 w-6 text-zahabi-gold" />,
                  title: "Quick Processing",
                  description: "Receive funds within 24 hours of gold verification."
                },
                {
                  icon: <ShieldCheck className="h-6 w-6 text-zahabi-gold" />,
                  title: "Secure Storage",
                  description: "Your gold is stored in insured, high-security vaults."
                },
                {
                  icon: <Percent className="h-6 w-6 text-zahabi-gold" />,
                  title: "Flexible Terms",
                  description: "Choose repayment terms that suit your financial situation."
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 rounded-xl border border-zahabi-gold/10 bg-white hover:shadow-md transition-all duration-300">
                  <div className="p-3 bg-zahabi-cream rounded-full inline-block mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <CustomButton variant="gold">
                Apply for a Loan
              </CustomButton>
            </div>
          </div>
          
          {/* Loan Calculator */}
          <div className="bg-white rounded-2xl border border-zahabi-gold/10 shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Loan Calculator</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Gold Weight (grams)</label>
                <input 
                  type="range" 
                  min="1" 
                  max="1000" 
                  defaultValue="100"
                  className="w-full h-2 bg-zahabi-cream rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-1">
                  <span className="text-xs">1g</span>
                  <span className="text-sm font-medium">100g</span>
                  <span className="text-xs">1000g</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Gold Purity</label>
                <div className="grid grid-cols-3 gap-2">
                  {["18K", "22K", "24K"].map((purity) => (
                    <button 
                      key={purity}
                      className={`py-2 rounded-md text-sm font-medium ${
                        purity === "24K" 
                          ? "bg-zahabi-gold text-white" 
                          : "bg-zahabi-cream/50 text-zahabi-dark hover:bg-zahabi-cream"
                      }`}
                    >
                      {purity}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Loan Term</label>
                <div className="grid grid-cols-4 gap-2">
                  {["3 months", "6 months", "1 year", "2 years"].map((term, i) => (
                    <button 
                      key={term}
                      className={`py-2 rounded-md text-sm font-medium ${
                        i === 2
                          ? "bg-zahabi-gold text-white" 
                          : "bg-zahabi-cream/50 text-zahabi-dark hover:bg-zahabi-cream"
                      }`}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="pt-6 border-t border-zahabi-gold/10">
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Estimated Gold Value:</span>
                  <span className="font-semibold">$6,352.00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Maximum Loan Amount:</span>
                  <span className="font-semibold">$5,081.60</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Interest Rate:</span>
                  <span className="font-semibold">8.5% APR</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-zahabi-gold/10">
                  <span className="text-sm font-semibold">Monthly Payment:</span>
                  <span className="font-bold text-xl text-zahabi-gold">$458.65</span>
                </div>
              </div>
              
              <CustomButton variant="gold" className="w-full">
                Get Your Loan Now
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBorrowers;
