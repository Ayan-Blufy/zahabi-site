
import React from "react";
import { CustomButton } from "../ui/CustomButton";
import { ArrowRight } from "lucide-react";
import GoldCoin from "./GoldCoin";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-zahabi-cream/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock the Value of Your <span className="text-gold-dark"> Gold</span> – Borrow, Invest, Grow
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Collateralize gold for instant loans or invest in gold-backed tokens with zero physical storage.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/borrower">
                    <CustomButton className="bg-zahabi-gold hover:bg-zahabi-cream-600">
                      Get a Loan Now <ArrowRight className="w-4 h-4 ml-2" />
                    </CustomButton>
                  </Link>
                  <Link to="/investor">
                    <CustomButton variant="outline" className="border-zahabi-cream-200 hover:bg-zahabi-cream-50 hover:text-zahabi-cream-700">
                      Start Investing <ArrowRight className="w-4 h-4 ml-2" />
                    </CustomButton>
                  </Link>
                </div>
              </div>
          
          {/* Image */}
          <div className="relative w-full h-[400px] mx-auto">
            <GoldCoin />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
