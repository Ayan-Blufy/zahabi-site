
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

const BorrowerFAQ = () => {
  const faqs = [
    {
      question: "What types of gold items can I use as collateral?",
      answer: "You can use gold jewelry, coins, and bars as collateral. The gold must be at least 18 karats, and the loan amount will be determined based on the purity, weight, and current market value of your gold."
    },
    {
      question: "How is the loan amount calculated?",
      answer: "The loan amount is typically 70-80% of the gold's current market value. Factors such as gold purity, weight, and current market rates determine the final loan amount offered."
    },
    {
      question: "What happens to my gold during the loan term?",
      answer: "Your gold is stored in secure, insured vaults maintained by our partner lenders. You'll receive a detailed receipt and can track it through our app. Upon repayment of the loan, your gold will be returned in the same condition."
    },
    {
      question: "What happens if I can't repay the loan?",
      answer: "If you're unable to repay the loan by the end of the term, the lender may extend the loan period with additional interest, or after proper notification, liquidate the gold to recover their funds. Any excess amount after liquidation will be returned to you."
    },
    {
      question: "How quickly can I get my loan approved?",
      answer: "Most loans are processed within 24 hours after gold verification. Once approved, the funds are transferred directly to your bank account."
    }
  ];

  return (
    <section className="py-16 bg-zahabi-cream/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Common questions about gold-backed loans</p>
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

export default BorrowerFAQ;
