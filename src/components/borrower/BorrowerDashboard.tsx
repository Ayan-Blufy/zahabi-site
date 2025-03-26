
import React, { useState } from "react";
import { CustomButton } from "../ui/CustomButton";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Calculator, ArrowRight, TrendingUp, Shield, Clock } from "lucide-react";
import PhoneModel from "../home/PhoneModel";

const BorrowerDashboard = () => {
  const [goldAmount, setGoldAmount] = useState(10);
  const [loanTerm, setLoanTerm] = useState(6);
  
  // Gold rate is set at Rs.8,000 per gram
  const goldRate = 8000;
  const maxLoanAmount = goldAmount * goldRate * 0.75; // 75% of gold value
  const interestRate = 8.5;
  const monthlyPayment = maxLoanAmount * (interestRate/100/12) * Math.pow(1 + interestRate/100/12, loanTerm) / (Math.pow(1 + interestRate/100/12, loanTerm) - 1);
  
  return (
    <section className="py-12 bg-zahabi-cream/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8 animate-fade-in">
            <Card className="border border-zahabi-gold/20 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl">Gold Loan Calculator</CardTitle>
                <CardDescription>Calculate how much you can borrow based on your gold</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Gold Amount (grams)</span>
                    <span className="text-sm font-semibold">{goldAmount} gm</span>
                  </div>
                  <Slider
                    value={[goldAmount]} 
                    min={1}
                    max={100}
                    step={1}
                    onValueChange={(value) => setGoldAmount(value[0])}
                    className="bg-zahabi-gold/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Loan Term (months)</span>
                    <span className="text-sm font-semibold">{loanTerm} months</span>
                  </div>
                  <Slider 
                    value={[loanTerm]} 
                    min={3}
                    max={36}
                    step={3}
                    onValueChange={(value) => setLoanTerm(value[0])}
                    className="bg-zahabi-gold/20"
                  />
                </div>
                
                <div className="pt-4 space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-dashed border-zahabi-gold/20">
                    <span className="font-medium">Current Gold Rate</span>
                    <span className="font-bold">₹{goldRate.toLocaleString()} / gram</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-dashed border-zahabi-gold/20">
                    <span className="font-medium">Gold Value</span>
                    <span className="font-bold">₹{(goldAmount * goldRate).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-dashed border-zahabi-gold/20">
                    <span className="font-medium">Max Loan Amount (75%)</span>
                    <span className="font-bold">₹{maxLoanAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-dashed border-zahabi-gold/20">
                    <span className="font-medium">Interest Rate</span>
                    <span className="font-bold">{interestRate}% pa</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium">Est. Monthly Payment</span>
                    <span className="font-bold">₹{Math.round(monthlyPayment).toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <CustomButton className="w-full" variant="gold">
                  Find Lenders Near You <ArrowRight className="w-4 h-4 ml-2" />
                </CustomButton>
              </CardFooter>
            </Card>
          </div>
          
          <div className="order-1 lg:order-2 flex items-center justify-center h-[650px] animate-float">
            <PhoneModel />
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: <Calculator className="h-6 w-6 text-white" />,
              title: "Competitive Rates",
              description: "Access loans at lower interest rates than traditional financial institutions."
            },
            {
              icon: <Clock className="h-6 w-6 text-white" />,
              title: "Quick Processing",
              description: "Complete verification and receive funds within 24 hours."
            },
            {
              icon: <Shield className="h-6 w-6 text-white" />,
              title: "Secure Storage",
              description: "Your gold is stored in insured, high-security vaults throughout the loan term."
            }
          ].map((feature, index) => (
            <Card key={index} className="border border-zahabi-gold/20 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <div className="p-3 rounded-full inline-block mb-2 bg-zahabi-gold">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BorrowerDashboard;
