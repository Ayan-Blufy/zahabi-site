
import React from "react";
import { Check, Coins, ArrowRight, ShieldCheck } from "lucide-react";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-muted-foreground">
            A simple 3-step process for both borrowers and investors
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <Coins className="h-12 w-12 text-zahabi-gold" />,
              title: "Deposit Gold",
              description: "Deposit your physical gold at our secure facilities or tokenize existing gold certificates.",
              step: "01"
            },
            {
              icon: <Check className="h-12 w-12 text-zahabi-gold" />,
              title: "Verify & Evaluate",
              description: "Our experts verify authenticity and evaluate the current market value of your gold.",
              step: "02"
            },
            {
              icon: <ArrowRight className="h-12 w-12 text-zahabi-gold" />,
              title: "Borrow or Invest",
              description: "Choose to take a loan against your gold or invest in gold-backed tokens.",
              step: "03"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-2xl border border-zahabi-gold/10 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute -right-3 -top-3 bg-white w-10 h-10 rounded-full border border-zahabi-gold/10 flex items-center justify-center">
                <span className="text-sm font-semibold text-zahabi-gold">{item.step}</span>
              </div>
              <div className="mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 rounded-2xl border border-zahabi-gold/10 bg-zahabi-cream/30 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-16 flex-shrink-0 flex justify-center">
              <ShieldCheck className="h-12 w-12 text-zahabi-gold" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">100% Secure & Insured</h3>
              <p className="text-muted-foreground">
                All gold deposits are stored in high-security vaults and fully insured. Our gold-backed tokens are audited by independent parties and secured on a transparent blockchain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
