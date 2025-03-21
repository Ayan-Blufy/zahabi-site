
import React from "react";
import { CustomButton } from "../ui/CustomButton";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-zahabi-cream/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-balance">
              Unlock the Value of Your <span className="text-gradient">Gold</span> <br />
              — Borrow, Invest, Grow
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Collateralize gold for instant loans or invest in gold-backed tokens with zero physical storage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <CustomButton size="lg" variant="gold" className="group">
                Get a Loan Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </CustomButton>
              <CustomButton size="lg" variant="outline">
                Start Investing
              </CustomButton>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative w-full max-w-md mx-auto lg:max-w-full">
            <div className="aspect-square w-full rounded-3xl overflow-hidden shadow-xl border border-zahabi-gold/10 bg-white p-6">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <div className="w-3/4 h-3/4 rounded-full border-8 border-zahabi-gold animate-pulse"></div>
                </div>
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-zahabi-gold/20 to-zahabi-orange/20 flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-zahabi-gold/30 to-zahabi-orange/30 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-zahabi-gold to-zahabi-orange flex items-center justify-center text-white text-4xl font-bold">
                      Au
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute w-20 h-20 -top-6 -right-6 rounded-full bg-white shadow-lg border border-zahabi-gold/10 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-zahabi-gold"></div>
            </div>
            <div className="absolute w-16 h-16 -bottom-6 -left-6 rounded-full bg-white shadow-lg border border-zahabi-gold/10 flex items-center justify-center">
              <span className="text-zahabi-gold text-xl font-semibold">24k</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
