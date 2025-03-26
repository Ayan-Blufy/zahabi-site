
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

const LenderFAQ = () => {
  const faqs = [
    {
      question: "What are the requirements to become a Zahabi lender partner?",
      answer: "To become a Zahabi lender partner, you need to be a registered financial institution or licensed gold retailer with secure storage facilities. You'll need to complete our verification process, which includes compliance checks, security assessment, and integration with our platform."
    },
    {
      question: "How does the gold verification process work?",
      answer: "The gold verification process involves testing the gold for purity using standard methods like XRF analysis or acid testing, weighing it on calibrated scales, and documenting the items with photos and detailed descriptions. Our platform provides tools to streamline this process."
    },
    {
      question: "What is the token minting process?",
      answer: "After verifying gold and approving a loan, you can mint tokens representing the collateralized gold through our platform. Each token corresponds to a specific weight of gold (e.g., 1 gram), and the total tokens minted equals the weight of gold held as collateral."
    },
    {
      question: "How are lender fees and revenue generated?",
      answer: "Lenders generate revenue through loan interest, verification fees, token minting fees, and a small percentage of transaction fees when tokens are traded between investors. The platform automatically calculates and distributes these revenues."
    },
    {
      question: "What happens if a borrower defaults on their loan?",
      answer: "If a borrower defaults, you'll be notified through the platform. After the grace period and following proper notification procedures, you can initiate the liquidation process. The platform will help manage token buybacks from investors and the sale of gold if necessary."
    }
  ];

  return (
    <section className="py-16 bg-zahabi-cream/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Lender FAQs</h2>
          <p className="text-muted-foreground">Common questions about the lending process</p>
        </div>
        
        <Card className="border border-zahabi-gold/10 max-w-3xl mx-auto shadow-sm animate-fade-in">
          <CardHeader>
            <CardTitle className="text-center">Have Questions?</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LenderFAQ;
