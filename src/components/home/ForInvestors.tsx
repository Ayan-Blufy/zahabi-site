
import React from "react";
import { CustomButton } from "../ui/CustomButton";
import { TrendingUp, BarChart, Shield, Coins } from "lucide-react";

const ForInvestors = () => {
  return (
    <section id="for-investors" className="py-24 bg-zahabi-cream/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">For Investors</h2>
          <p className="text-muted-foreground">
            Invest in 100% gold-backed tokens with zero storage hassle
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Investment Performance */}
          <div className="bg-white rounded-2xl border border-zahabi-gold/10 shadow-lg p-8 order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6 text-center">Investment Performance</h3>
            
            <div className="space-y-6">
              <div className="h-64 bg-zahabi-cream/30 rounded-xl flex items-center justify-center">
                <div className="w-full h-full p-4 flex flex-col">
                  <div className="text-sm mb-4 flex justify-between">
                    <span>Gold Performance vs USD</span>
                    <div className="space-x-2">
                      <span className="inline-block w-3 h-3 bg-zahabi-gold rounded-full"></span>
                      <span className="text-xs">Gold</span>
                      <span className="inline-block w-3 h-3 bg-gray-300 rounded-full ml-2"></span>
                      <span className="text-xs">USD</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 relative">
                    {/* Mock Chart - in production this would use Recharts */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
                    <div className="absolute top-0 bottom-0 left-0 w-px bg-gray-200"></div>
                    
                    <svg viewBox="0 0 100 50" className="w-full h-full">
                      <path 
                        d="M0,50 L10,45 L20,42 L30,40 L40,35 L50,30 L60,25 L70,20 L80,15 L90,5 L100,0" 
                        fill="none" 
                        stroke="#D4AF37" 
                        strokeWidth="2"
                      />
                      <path 
                        d="M0,50 L10,49 L20,48 L30,47 L40,46 L50,47 L60,48 L70,47 L80,46 L90,45 L100,44" 
                        fill="none" 
                        stroke="#9CA3AF" 
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zahabi-cream/30 p-4 rounded-xl">
                  <div className="text-sm text-muted-foreground mb-1">Annual Return</div>
                  <div className="text-2xl font-bold text-zahabi-gold">+12.4%</div>
                </div>
                <div className="bg-zahabi-cream/30 p-4 rounded-xl">
                  <div className="text-sm text-muted-foreground mb-1">5-Year Return</div>
                  <div className="text-2xl font-bold text-zahabi-gold">+68.7%</div>
                </div>
              </div>
              
              <CustomButton variant="gold" className="w-full">
                Start Investing Now
              </CustomButton>
            </div>
          </div>
          
          {/* Features */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <TrendingUp className="h-6 w-6 text-purple" />,
                  title: "Steady Returns",
                  description: "Gold has historically provided strong returns and protection against inflation."
                },
                {
                  icon: <BarChart className="h-6 w-6 text-purple" />,
                  title: "Portfolio Diversification",
                  description: "Balance your investment portfolio with a stable, physical asset."
                },
                {
                  icon: <Shield className="h-6 w-6 text-purple" />,
                  title: "Fully Backed",
                  description: "Every token is backed 1:1 with physical gold stored in secure vaults."
                },
                {
                  icon: <Coins className="h-6 w-6 text-purple" />,
                  title: "Instant Liquidity",
                  description: "Buy and sell gold tokens instantly without physical handling."
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
            
            <div className="p-6 border border-zahabi-gold/10 bg-white rounded-xl">
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="p-3 bg-zahabi-cream rounded-full">
                  <div className="w-10 h-10 rounded-full bg-purple flex items-center justify-center text-white font-semibold">
                    %
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Earn Passive Income</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Stake your gold tokens to earn additional passive income. Current staking APY is <span className="font-semibold text-purple">5.2%</span>.
                  </p>
                  <CustomButton variant="outline" size="sm" className="border-purple-200 hover:bg-purple-50 hover:text-purple-700">
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
