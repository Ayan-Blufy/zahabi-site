import React from "react";

const InvestorPhoneModel = () => {
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
              <div>
                <h1 className="text-xl font-bold">Token Marketplace</h1>
                <p className="text-xs text-gray-500">Invest in Gold Token</p>
              </div>
              <div className="flex space-x-2">
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gray-100"></div>
                </div>
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                  J
                </div>
              </div>
            </div>

            {/* Token listings */}
            {[
              { name: "Kalyan Jewellers", goldWeight: "X", price: "Rs.XXXX", available: "XXX" },
              { name: "Png Jewellers", goldWeight: "X", price: "Rs.XXXX", available: "XXX" },
              { name: "Tanishq Jewellers", goldWeight: "X", price: "Rs.XXXX", available: "XXX" },
              { name: "Waman hari pethe Jewellers", goldWeight: "X", price: "Rs.XXXX", available: "XXX" }
            ].map((seller, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                <p className="font-semibold mb-2">{seller.name}</p>
                <div className="grid grid-cols-2 gap-1 text-sm mb-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gold Weight</span>
                  </div>
                  <div className="text-right">
                    <span>{seller.goldWeight} gm</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price per Token</span>
                  </div>
                  <div className="text-right">
                    <span>{seller.price}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Available Token</span>
                  </div>
                  <div className="text-right">
                    <span>{seller.available}</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="bg-white border border-gray-300 rounded-full px-4 py-1 text-sm hover:bg-zahabi-cream">
                    Buy Token
                  </button>
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
              <div className="w-4 h-4 bg-zahabi-gold rounded-full mb-1"></div>
              <span>Marketplace</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-white rounded-full mb-1"></div>
              <span>Wallet</span>
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

export default InvestorPhoneModel;