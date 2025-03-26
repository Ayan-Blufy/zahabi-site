
import React from "react";
import { Check, ArrowRight } from "lucide-react";

const LenderPhoneModel = () => {
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
              <h1 className="text-xl font-bold">Lender Portal</h1>
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gray-100"></div>
                </div>
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                  K
                </div>
              </div>
            </div>

            {/* Dashboard summary */}
            <div className="bg-zahabi-gold/20 rounded-lg p-4 mb-6">
              <p className="text-sm mb-1">Total Gold Assets</p>
              <p className="text-2xl font-bold mb-2">1,250 gms</p>
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-gray-600">Active Loans</p>
                  <p className="font-medium">42</p>
                </div>
                <div>
                  <p className="text-gray-600">Tokens Issued</p>
                  <p className="font-medium">3,850</p>
                </div>
                <div>
                  <p className="text-gray-600">Total Value</p>
                  <p className="font-medium">₹10.1M</p>
                </div>
              </div>
            </div>

            {/* New loan requests section */}
            <div className="mb-4 flex justify-between items-center">
              <p className="font-medium">New Loan Requests</p>
              <button className="text-zahabi-gold text-xs flex items-center">
                View All <ArrowRight className="h-3 w-3 ml-1" />
              </button>
            </div>

            {/* Loan request entries */}
            {[
              { id: "REQ-001", borrower: "Aditya M.", goldWeight: "25g", purity: "22K", amount: "₹150,000" },
              { id: "REQ-002", borrower: "Priya S.", goldWeight: "18g", purity: "24K", amount: "₹120,000" },
              { id: "REQ-003", borrower: "Rahul K.", goldWeight: "32g", purity: "18K", amount: "₹175,000" }
            ].map((request, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-3 mb-3">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-sm">#{request.id}</span>
                  <span className="text-xs px-1.5 py-0.5 bg-zahabi-gold/20 rounded-full">New</span>
                </div>
                <div className="text-xs text-gray-600 mb-1">
                  <span>Borrower: {request.borrower}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <div>
                    <p className="text-gray-600">Gold</p>
                    <p>{request.goldWeight} ({request.purity})</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Requested</p>
                    <p>{request.amount}</p>
                  </div>
                </div>
                <div className="mt-2 flex justify-end space-x-2">
                  <button className="text-xs px-2 py-1 border border-gray-300 rounded">Verify</button>
                  <button className="text-xs px-2 py-1 bg-zahabi-gold text-white rounded">Approve</button>
                </div>
              </div>
            ))}

            {/* Token management section */}
            <div className="mb-4 flex justify-between items-center mt-6">
              <p className="font-medium">Token Management</p>
              <button className="text-zahabi-gold text-xs flex items-center">
                Details <ArrowRight className="h-3 w-3 ml-1" />
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-3">
              <p className="font-medium text-sm mb-2">Recent Tokens Issued</p>
              <div className="flex justify-between text-xs mb-3">
                <div>
                  <p className="text-gray-600">Last 7 Days</p>
                  <p className="font-medium">520 tokens</p>
                </div>
                <div>
                  <p className="text-gray-600">Value</p>
                  <p className="font-medium">₹1.35M</p>
                </div>
              </div>
              <button className="w-full text-xs px-2 py-1.5 bg-zahabi-gold text-white rounded">
                Issue New Tokens
              </button>
            </div>
          </div>
          
          {/* Bottom navigation bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white flex justify-around py-3 text-xs z-10">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-zahabi-gold rounded-full mb-1"></div>
              <span>Dashboard</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-white rounded-full mb-1"></div>
              <span>Requests</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-white rounded-full mb-1"></div>
              <span>Tokens</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-white rounded-full mb-1"></div>
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

export default LenderPhoneModel;
