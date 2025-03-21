
import React from "react";
import { Check, Coins, ArrowRight, ShieldCheck, Users, BanknoteIcon, TrendingUp, Repeat, Shield } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const KeyFeatures = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Key Features</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Discover the benefits of using Zahabi for both borrowers and investors
          </p>
        </div>
      </div>

      <Tabs defaultValue="borrowers" className="mt-8">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="borrowers">For Borrowers</TabsTrigger>
          <TabsTrigger value="investors">For Investors</TabsTrigger>
        </TabsList>

        <TabsContent value="borrowers" className="mt-6">
          <div className="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-3">
            <div className="flex flex-col space-y-3 rounded-lg border bg-white p-6 shadow-sm">
              <BanknoteIcon className="h-10 w-10 text-purple-600" />
              <h3 className="text-xl font-bold">Instant Liquidity</h3>
              <p className="text-muted-foreground">Access cash without selling your precious gold assets.</p>
            </div>
            <div className="flex flex-col space-y-3 rounded-lg border bg-white p-6 shadow-sm">
              <TrendingUp className="h-10 w-10 text-purple-600" />
              <h3 className="text-xl font-bold">Competitive Rates</h3>
              <p className="text-muted-foreground">
                Transparent fees and interest rates lower than traditional gold loans.
              </p>
            </div>
            <div className="flex flex-col space-y-3 rounded-lg border bg-white p-6 shadow-sm">
              <Shield className="h-10 w-10 text-purple-600" />
              <h3 className="text-xl font-bold">Secure Storage</h3>
              <p className="text-muted-foreground">
                Your gold is stored in insured vaults with 24/7 security monitoring.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="investors" className="mt-6">
          <div className="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-3">
            <div className="flex flex-col space-y-3 rounded-lg border bg-white p-6 shadow-sm">
              <Coins className="h-10 w-10 text-purple-600" />
              <h3 className="text-xl font-bold">Fractional Ownership</h3>
              <p className="text-muted-foreground">
                Own portions of physical gold without the hassle of storage or security concerns.
              </p>
            </div>
            <div className="flex flex-col space-y-3 rounded-lg border bg-white p-6 shadow-sm">
              <TrendingUp className="h-10 w-10 text-purple-600" />
              <h3 className="text-xl font-bold">Passive Income</h3>
              <p className="text-muted-foreground">
                Earn regular returns from borrower interest payments on your gold-backed tokens.
              </p>
            </div>
            <div className="flex flex-col space-y-3 rounded-lg border bg-white p-6 shadow-sm">
              <Repeat className="h-10 w-10 text-purple-600" />
              <h3 className="text-xl font-bold">24/7 Trading</h3>
              <p className="text-muted-foreground">
                Buy and sell tokens anytime on our secondary marketplace for potential profits.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </section>

  );
};

export default KeyFeatures;
