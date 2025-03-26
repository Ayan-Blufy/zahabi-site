
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomButton } from "../ui/CustomButton";
import { Coins, BadgeCheck, TrendingUp, ArrowRight, Repeat } from "lucide-react";

const InvestorProcessSteps = () => {
  const steps = [
    {
      icon: <Coins className="h-6 w-6 text-white" />,
      title: "Purchase Gold Tokens",
      description: "Buy tokens that represent fractional ownership of gold held in secure vaults.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      title: "Earn Interest",
      description: "Receive interest payments from the underlying gold-backed loans.",
    },
    {
      icon: <BadgeCheck className="h-6 w-6 text-white" />,
      title: "Track Performance",
      description: "Monitor your investment growth through our real-time dashboard.",
    },
    {
      icon: <Repeat className="h-6 w-6 text-white" />,
      title: "Trade or Redeem",
      description: "Sell your tokens on the marketplace or redeem them for cash at any time.",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">How Gold Token Investment Works</h2>
          <p className="text-muted-foreground">A simple process to start investing in gold-backed tokens</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="border border-zahabi-gold/10 hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-zahabi-gold rounded-full flex items-center justify-center mr-3">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-zahabi-gold/10 flex items-center justify-center text-zahabi-gold font-bold">
                    {index + 1}
                  </div>
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <CustomButton variant="gold">
            Start Investing <ArrowRight className="ml-2 h-4 w-4" />
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default InvestorProcessSteps;
