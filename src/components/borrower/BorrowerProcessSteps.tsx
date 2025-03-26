
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomButton } from "../ui/CustomButton";
import { Coins, Search, FileCheck, CreditCard, ArrowRight } from "lucide-react";

const BorrowerProcessSteps = () => {
  const steps = [
    {
      icon: <Coins className="h-6 w-6 text-white" />,
      title: "Assess Your Gold",
      description: "Bring your gold items to be assessed for purity and weight at our partner locations.",
    },
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "Compare Lenders",
      description: "View loan offers from multiple lenders and select the best terms for your needs.",
    },
    {
      icon: <FileCheck className="h-6 w-6 text-white" />,
      title: "Complete Verification",
      description: "Submit necessary documents and complete KYC verification process.",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-white" />,
      title: "Receive Funds",
      description: "After approval, receive loan amount directly in your bank account.",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">How to Get a Gold-Backed Loan</h2>
          <p className="text-muted-foreground">Follow these simple steps to unlock the value of your gold</p>
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
            Apply for a Loan <ArrowRight className="ml-2 h-4 w-4" />
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default BorrowerProcessSteps;
