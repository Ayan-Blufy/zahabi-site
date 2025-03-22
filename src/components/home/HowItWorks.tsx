
import React, { useState } from "react";
import { Check, Coins, ArrowRight, ShieldCheck, Users, BanknoteIcon, TrendingUp, Repeat } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('borrowers');
  return (
    <section id="how-it-works" className="w-full bg-zahabi-cream/50 py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl 
          font-bold tracking-tighter md:text-4xl/tight">How It Works</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            A simple 3-step process for both borrowers and investors
          </p>
        </div>
      </div>

      <Tabs defaultValue="borrowers" className="mt-8">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 gap-4">
        <TabsTrigger
        value="borrowers"
        data-state={activeTab === 'borrowers' ? 'active' : undefined}
        onClick={() => setActiveTab('borrowers')}
        className="data-[state=active]:bg-gold-dark data-[state=active]:text-white duration-300 ease-in-out cursor-pointer rounded-full"
      >
        For Borrowers
      </TabsTrigger>
      <TabsTrigger
        value="investors"
        data-state={activeTab === 'investors' ? 'active' : undefined}
        onClick={() => setActiveTab('investors')}
        className="data-[state=active]:bg-gold-dark data-[state=active]:text-white duration-300 ease-in-out cursor-pointer rounded-full"
      >
        For Investors
      </TabsTrigger>
        </TabsList>

        <TabsContent value="borrowers" className="mt-6">
          <div className="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-zahabi-gold p-4">
                <Coins className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Pledge Your Gold</h3>
              <p className="text-center text-muted-foreground">
                Bring your gold to one of our verified lender partners for evaluation and secure storage.
              </p>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zahabi-gold text-white font-bold">
                1
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-zahabi-gold p-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Choose a Lender</h3>
              <p className="text-center text-muted-foreground">
                Compare loan offers from multiple lenders to find the best rates and terms for your needs.
              </p>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zahabi-gold text-white font-bold">
                2
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-zahabi-gold p-4">
                <BanknoteIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Receive Funds Instantly</h3>
              <p className="text-center text-muted-foreground">
                Get your loan amount transferred directly to your bank account within minutes.
              </p>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zahabi-gold text-white font-bold">
                3
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="investors" className="mt-6">
          <div className="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-zahabi-gold p-4">
                <Coins className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Buy Gold-Backed Tokens</h3>
              <p className="text-center text-muted-foreground">
                Purchase tokens that represent fractional ownership of physical gold held in secure vaults.
              </p>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zahabi-gold text-white font-bold">
                1
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-zahabi-gold p-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Earn Interest</h3>
              <p className="text-center text-muted-foreground">
                Receive a portion of the interest paid by borrowers, creating passive income from your investment.
              </p>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zahabi-gold text-white font-bold">
                2
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-zahabi-gold p-4">
                <Repeat className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Trade Tokens for Profit</h3>
              <p className="text-center text-muted-foreground">
                Sell your tokens on our marketplace at any time to realize gains from gold price appreciation.
              </p>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zahabi-gold text-white font-bold">
                3
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </section>
  );
};

export default HowItWorks;
