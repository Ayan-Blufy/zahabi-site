import React from "react";
import { Filter, ArrowRight } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const PhoneModel = () => {
  const lenders = [
    {
      name: "Aditya Birla Capital",
      ratePerGram: "RS.8,035",
      interestRate: "8.5%",
      loanAvailable: "RS.10,000 - RS.200,000"
    },
    {
      name: "Bajaj Finance Limited",
      ratePerGram: "RS.7,980",
      interestRate: "8.3%",
      loanAvailable: "RS.15,000 - RS.250,000"
    },
    {
      name: "HDFC Financial Services",
      ratePerGram: "RS.8,100",
      interestRate: "7.9%",
      loanAvailable: "RS.20,000 - RS.300,000"
    },
    {
      name: "Shriram Financial Services",
      ratePerGram: "RS.8,000",
      interestRate: "8.0%",
      loanAvailable: "RS.5,000 - RS.150,000"
    }
  ];
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative max-w-[300px]">
        {/* Phone frame */}
        <div className="relative rounded-[40px] bg-black overflow-hidden shadow-2xl border-8 border-black">
          {/* Notch */}
          <div className="absolute top-0 left-0 right-0 flex justify-center z-10">
            <div className="w-[120px] h-[30px] bg-black rounded-b-[20px]"></div>
          </div>
          
          {/* Phone screen */}
          <div className="phone-screen bg-white w-[270px] h-[570px] overflow-y-auto text-black p-4 font-sans pt-10">
            {/* Status bar */}
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">9:41</span>
              <div className="flex space-x-2">
                <span>●●●</span>
                <span>📶</span>
                <span>🔋</span>
              </div>
            </div>

            {/* App title and profile */}
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold">Gold Token</h1>
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gray-100"></div>
                </div>
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                  J
                </div>
              </div>
            </div>

            {/* Current gold assets card */}
            <div className="bg-gray-200 rounded-lg p-4 mb-6">
              <p className="text-sm mb-1">Current Gold Assets</p>
              <p className="text-2xl font-bold mb-3">XX .gms</p>
              <div className="flex space-x-3">
                <button className="bg-white rounded-full px-4 py-1 text-sm">Buy</button>
                <button className="bg-white rounded-full px-4 py-1 text-sm">Sell</button>
              </div>
            </div>

            {/* Available Lenders section */}
            <div className="mb-4 flex justify-between items-center">
              <p className="font-medium">Available Lenders Nearby</p>
              <button className="bg-white border border-gray-300 rounded-md px-2 py-1 text-xs flex items-center">
                <Filter className="h-3 w-3 mr-1" /> Filter
              </button>
            </div>

            {/* Lender entries */}
            {lenders.map((ele, index) => (
              <div key={index} className="border-b border-gray-200 py-3">
                <div className="flex justify-between items-start mb-2">
                  <p className="font-medium">{ele.name}</p>
                  <button className="bg-white border border-gray-300 rounded-full px-3 py-1 text-xs">
                    Apply
                  </button>
                </div>
                <div className="flex justify-between text-xs mb-2">
                  <div>
                    <p className="text-gray-600">Rate per Gram</p>
                    <p>{ele.ratePerGram}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">Interest Rate</p>
                    <p>{ele.interestRate}</p>
                  </div>
                </div>
                <div className="flex justify-between text-xs">
                  <div>
                    <p className="text-gray-600">Loan Available</p>
                    <p>{ele.loanAvailable}</p>
                  </div>
                  <div className="flex items-center text-xs text-blue-600">
                    View Details <ArrowRight className="h-3 w-3 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        
          {/* Bottom navigation bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white flex justify-around py-3 text-xs z-10">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-white rounded-full mb-1"></div>
              <span>Home</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-white rounded-full mb-1"></div>
              <span>Marketplace</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-white rounded-full mb-1"></div>
              <span>Wallet</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-white rounded-full mb-1"/>
              <span>Profile</span>
            </div>
          </div>
        </div>
        
        {/* Add subtle shadow for a floating effect */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] h-6 bg-black opacity-10 blur-xl rounded-full"></div>
      </div>
    </div>
  );
};

export default PhoneModel;
