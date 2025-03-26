
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

const InvestorFAQ = () => {
  const faqs = [
    {
      question: "What exactly are gold-backed tokens?",
      answer: "Gold-backed tokens are digital assets that represent ownership of a specific amount of physical gold (usually 1 token = 1 gram). The gold is stored in secure vaults by our partner lenders, and tokens can be bought, sold, or redeemed through our platform."
    },
    {
      question: "How are returns generated for investors?",
      answer: "Returns come from two sources: interest payments from gold-backed loans (typically 5-8% annually) and potential appreciation in gold value over time. The interest portion is distributed monthly to token holders."
    },
    {
      question: "Is there a minimum investment amount?",
      answer: "The minimum investment is typically Rs.10,000, which allows you to purchase gold tokens based on the current gold rate. There is no upper limit to the amount you can invest."
    },
    {
      question: "How liquid is this investment?",
      answer: "Gold tokens are highly liquid. You can sell them on our marketplace at any time, with transactions typically settling within minutes. For larger amounts, you can also redeem tokens directly with the lender with 2-3 business days processing time."
    },
    {
      question: "What are the risks involved?",
      answer: "The main risks include gold price fluctuations (though historically gold has maintained value over time), borrower defaults (mitigated by the gold collateral), and operational risks (which we address through insurance, security protocols, and regular audits)."
    }
  ];

  return (
    <section className="py-16 bg-zahabi-cream/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Investor FAQs</h2>
          <p className="text-muted-foreground">Common questions about gold token investments</p>
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

export default InvestorFAQ;
