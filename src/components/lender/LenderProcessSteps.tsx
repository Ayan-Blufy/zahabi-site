
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomButton } from "../ui/CustomButton";
import { Coins, FileCheck, BadgeCheck, Coins as CoinsIcon, ArrowRight } from "lucide-react";

const LenderProcessSteps = () => {
  const steps = [
    {
      icon: <Coins className="h-6 w-6 text-white" />,
      title: "Verify Gold Assets",
      description: "Assess and authenticate gold items brought by borrowers for purity and weight.",
    },
    {
      icon: <FileCheck className="h-6 w-6 text-white" />,
      title: "Approve Loan Terms",
      description: "Review loan applications and set competitive interest rates and terms.",
    },
    {
      icon: <BadgeCheck className="h-6 w-6 text-white" />,
      title: "Secure Storage",
      description: "Store gold securely in authorized vaults with proper documentation and tracking.",
    },
    {
      icon: <CoinsIcon className="h-6 w-6 text-white" />,
      title: "Issue Gold Tokens",
      description: "Mint and distribute gold-backed tokens for investor purchase in the marketplace.",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Lender Process Flow</h2>
          <p className="text-muted-foreground">How to manage gold verification, loan issuance, and tokenization</p>
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
            Become a Lender Partner <ArrowRight className="ml-2 h-4 w-4" />
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default LenderProcessSteps;
