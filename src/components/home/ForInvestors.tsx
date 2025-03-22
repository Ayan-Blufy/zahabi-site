
import React from "react";
import { CustomButton } from "../ui/CustomButton";
import { TrendingUp, BarChart, Shield, Coins } from "lucide-react";
import InvestorPhoneModel from "./InvestorPhoneModel";

const ForInvestors = () => {
  return (
    <section id="for-investors" className="py-24 bg-zahabi-cream/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">For Investors</h2>
          <p className="text-muted-foreground">
            Invest in 100% gold-backed tokens with zero storage hassle
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Investment Performance */}
          <div className="order-2 lg:order-1 flex items-center justify-center h-[650px] relative animate-float">
            <InvestorPhoneModel />
          </div>
          
          
          {/* Features */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <TrendingUp className="h-6 w-6 text-white" />,
                  title: "Steady Returns",
                  description: "Gold has historically provided strong returns and protection against inflation."
                },
                {
                  icon: <BarChart className="h-6 w-6 text-white" />,
                  title: "Portfolio Diversification",
                  description: "Balance your investment portfolio with a stable, physical asset."
                },
                {
                  icon: <Shield className="h-6 w-6 text-white" />,
                  title: "Fully Backed",
                  description: "Every token is backed 1:1 with physical gold stored in secure vaults."
                },
                {
                  icon: <Coins className="h-6 w-6 text-white" />,
                  title: "Instant Liquidity",
                  description: "Buy and sell gold tokens instantly without physical handling."
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 rounded-xl border border-zahabi-gold/10 bg-white hover:shadow-md transition-all duration-300">
                  <div className="p-3 bg-zahabi-cream rounded-full inline-block mb-4 bg-zahabi-gold">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="p-6 border border-zahabi-gold/10 bg-white rounded-xl">
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="p-3 bg-zahabi-cream rounded-full">
                  <div className="w-10 h-10 rounded-full bg-zahabi-gold flex items-center justify-center text-white font-semibold">
                    %
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Earn Passive Income</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Stake your gold tokens to earn additional passive income. Current staking APY is <span className="font-semibold text-white">5.2%</span>.
                  </p>
                  <CustomButton variant="outline" size="sm" className="border-white-200 hover:bg-white-50 hover:text-white-700">
                    Learn About Staking
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForInvestors;
