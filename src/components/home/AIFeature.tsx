import {
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaBullseye,
  FaCogs,
  FaNetworkWired,
} from "react-icons/fa";
import GoldCoin from "../../../public/GoldCoin.png";

export default function AIFeature() {
  return (
    <section className="min-h-screen md:min-h-[auto] md:px-6 md:py-20 flex px-6 py-8 bg-zahabi-cream/50">
      <div className="flex w-full gap-x-12 items-start  lg:items-center flex-col md:flex-col md:gap-20 lg:flex-row">
        {/* LEFT CONTENT */}
        <div className="max-w-xl space-y-3 flex-shrink-0 ml-0 md:m-auto text-center md:text-center lg:text-left">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight leading-snug">
            <span>AI Powered Intelligence for </span>
            <span className="text-gold-dark">Gold-Backed Finance</span>
          </h1>
          <p className="text-muted-foreground md:text-xl text-sm">
            Watch how our platform revolutionizes gold-backed financing and
            investing
          </p>
        </div>

        {/* RIGHT CONTENT */}

        <div className="flex-1 flex justify-center md:m-auto mt-8 md:mt-6 md:w-full lg:mt-auto">
          <div className="relative w-full max-w-[580px] md:h-[460px] flex flex-col items-end md:block md:items-end">
            {/* Lenders Card */}
            <div
              className="w-64 h-56 mb-6 md:mb-0 md:absolute md:top-0 md:left-1 z-10
                            translate-x-6 md:translate-x-0 translate-y-0 md:translate-y-0"
            >
              <div className="relative w-full h-full bg-white p-6 rounded-3xl shadow-lg border border-zahabi-gold hover:shadow-[0_0_15px_#d4af36] flex flex-col justify-between overflow-hidden">
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-zahabi-gold/20 shadow-inner">
                      <FaUsers
                        style={{ color: "#d4af36" }}
                        className="w-4 h-4"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gold-dark">
                      For Lenders
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-xs mb-2">
                    AI helps in:
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-3 flex-1 justify-between">
                    {[
                      { icon: FaChartLine, text: "Valuation" },
                      { icon: FaShieldAlt, text: "Risk Scoring" },
                      { icon: FaBullseye, text: "Fraud Detection" },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-zahabi-gold/10 shadow-sm">
                          <item.icon
                            style={{ color: "#d4af36" }}
                            className="w-3 h-3"
                          />
                        </div>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-zahabi-gold/50 to-zahabi-gold/20 rounded mt-2 opacity-40"></div>
                <img
                  src={GoldCoin}
                  alt="Gold Coin"
                  className="absolute bottom-0 right-0 w-32 h-32 object-cover pointer-events-none"
                  style={{ transform: "translate(30%, 30%)" }}
                />
              </div>
            </div>

            {/* Investors Card */}
            <div
              className="w-64 h-80 mb-6 md:mb-0 md:absolute md:top-0 md:left-[18.5rem] z-20
                            translate-x-12 -translate-y-10 md:translate-x-0 md:translate-y-0"
            >
              <div className="relative w-full h-full bg-white p-6 rounded-3xl shadow-lg border border-zahabi-gold hover:shadow-[0_0_15px_#d4af36] flex flex-col justify-between overflow-hidden">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-zahabi-gold/20 shadow-inner">
                    <FaUsers style={{ color: "#d4af36" }} className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-gold-dark">
                    For Investors
                  </h3>
                </div>
                <p className="text-muted-foreground text-xs mb-2">
                  AI helps in:
                </p>
                <ul className="text-muted-foreground text-sm space-y-3 flex-1 justify-between">
                  {[
                    { icon: FaChartLine, text: "Forecasts" },
                    { icon: FaBullseye, text: "Recommendations" },
                    { icon: FaCogs, text: "Personalized Strategies" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-zahabi-gold/10 shadow-sm">
                        <item.icon
                          style={{ color: "#d4af36" }}
                          className="w-3 h-3"
                        />
                      </div>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="h-1 w-full bg-gradient-to-r from-zahabi-gold/50 to-zahabi-gold/20 rounded mt-2 opacity-40"></div>
                <img
                  src={GoldCoin}
                  alt="Gold Coin"
                  className="absolute bottom-0 right-0 w-32 h-32 object-cover pointer-events-none"
                  style={{ transform: "translate(30%, 30%)" }}
                />
              </div>
            </div>

            {/* Platform Card */}
            <div
              className="w-64 h-52 md:absolute md:top-[17rem] md:left-20 z-30
                            -translate-x-2 -translate-y-20 md:translate-x-0 md:translate-y-0"
            >
              <div className="relative w-full h-full bg-white p-6 rounded-3xl shadow-lg border border-zahabi-gold hover:shadow-[0_0_15px_#d4af36] flex flex-col justify-between overflow-hidden">
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-zahabi-gold/20 shadow-inner">
                      <FaNetworkWired
                        style={{ color: "#d4af36" }}
                        className="w-4 h-4"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gold-dark">
                      For the Platform
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-xs mb-2">
                    AI boosts:
                  </p>
                  <ul className="text-muted-foreground text-sm space-y-3 flex-1 justify-between">
                    {[
                      { icon: FaShieldAlt, text: "Compliance" },
                      { icon: FaChartLine, text: "Market Intelligence" },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-zahabi-gold/10 shadow-sm">
                          <item.icon
                            style={{ color: "#d4af36" }}
                            className="w-3 h-3"
                          />
                        </div>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-zahabi-gold/50 to-zahabi-gold/20 rounded mt-2 opacity-40"></div>
                <img
                  src={GoldCoin}
                  alt="Gold Coin"
                  className="absolute bottom-0 right-0 w-32 h-32 object-cover pointer-events-none"
                  style={{ transform: "translate(30%, 30%)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
