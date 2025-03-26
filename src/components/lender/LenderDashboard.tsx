
import React from "react";
import { CustomButton } from "../ui/CustomButton";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, TrendingUp, Users, ArrowRight, CreditCard } from "lucide-react";
import LenderPhoneModel from "./LenderPhoneModel";

const LenderDashboard = () => {
  const loanRequests = [
    { id: "REQ-001", goldWeight: "25g", goldPurity: "22K", estimatedValue: "₹200,000", requestedAmount: "₹150,000", status: "Pending Verification" },
    { id: "REQ-002", goldWeight: "18g", goldPurity: "24K", estimatedValue: "₹160,000", requestedAmount: "₹120,000", status: "Awaiting Approval" },
    { id: "REQ-003", goldWeight: "32g", goldPurity: "18K", estimatedValue: "₹230,000", requestedAmount: "₹175,000", status: "Ready for Tokenization" }
  ];
  
  return (
    <section className="py-12 bg-zahabi-cream/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <Card className="border border-zahabi-gold/20 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl">Loan Requests Dashboard</CardTitle>
                <CardDescription>Review and manage gold loan requests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {loanRequests.map((request, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-lg border border-zahabi-gold/10 hover:border-zahabi-gold/30 transition-all duration-300"
                  >
                    <div className="flex justify-between mb-3">
                      <span className="font-semibold">Request #{request.id}</span>
                      <span className="text-sm px-2 py-1 bg-zahabi-gold/20 rounded-full">{request.status}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Gold Weight</p>
                        <p className="font-medium">{request.goldWeight}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Gold Purity</p>
                        <p className="font-medium">{request.goldPurity}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Estimated Value</p>
                        <p className="font-medium">{request.estimatedValue}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Requested Amount</p>
                        <p className="font-medium">{request.requestedAmount}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end space-x-2">
                      <CustomButton variant="outline" size="sm">Details</CustomButton>
                      <CustomButton variant="gold" size="sm">Process</CustomButton>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <CustomButton className="w-full">
                  View All Loan Requests <ArrowRight className="w-4 h-4 ml-2" />
                </CustomButton>
              </CardFooter>
            </Card>
          </div>
          
          <div className="flex items-center justify-center h-[650px] animate-float">
            <LenderPhoneModel />
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: <CreditCard className="h-6 w-6 text-white" />,
              title: "Simplified Loan Management",
              description: "Streamlined process for verifying gold and approving loan requests."
            },
            {
              icon: <TrendingUp className="h-6 w-6 text-white" />,
              title: "Increased Revenue",
              description: "Generate additional income through token issuance and transaction fees."
            },
            {
              icon: <Shield className="h-6 w-6 text-white" />,
              title: "Risk Mitigation",
              description: "Distribute risk through tokenization while maintaining collateral security."
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

export default LenderDashboard;
