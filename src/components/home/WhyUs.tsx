import Icon from "../../../public/ice-cube.png";

const WhyUs = () => {
  const P0 = { x: 0, y: 50 };
  const P1 = { x: 50, y: 0 };
  const P2 = { x: 100, y: 50 };

  const getPointOnCurve = (t: number) => {
    const x = (1 - t) ** 2 * P0.x + 2 * (1 - t) * t * P1.x + t ** 2 * P2.x;
    const y = (1 - t) ** 2 * P0.y + 2 * (1 - t) * t * P1.y + t ** 2 * P2.y;
    return { x, y };
  };

  const tValues = [0, 1 / 3, 2 / 3, 1];
  const positions = tValues.map(getPointOnCurve);

  const offsets = [
    { x: 1, y: -3 },
    { x: 1, y: -0.2 },
    { x: 7, y: 3 },
    { x: -3.8, y: -1 },
  ];

  const cardOffsets = [
    { x: 45, y: -85 },
    { x: 25, y: -30 },
    { x: -20, y: 40 },
    { x: -44, y: -12 },
  ];

  const cardContents = [
  {
    title: "Proven Expertise Across Sectors",
    desc: "From gold-backed financing to digital investments, we provide robust, adaptable solutions for both borrowers and investors.",
  },
  {
    title: "Innovative Solutions",
    desc: "Cutting-edge technology and processes to enable instant loans, gold token investments, and seamless user experience.",
  },
  {
    title: "Reliable Partnerships",
    desc: "Strong collaborations with verified lenders and trusted platforms to ensure safety, efficiency, and transparency.",
  },
  {
    title: "Customer-Centric Approach",
    desc: "Tailored solutions that prioritize your gold ownership goals, maximize returns, and simplify gold-backed financing.",
  },
];


  const svgWidth = 600;
  const svgHeight = 300;
  const viewBoxHeight = 55;

  return (
    <div className="w-full">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-center h-screen p-8 gap-x-2">
        {/* Left Heading */}
        <div className="w-1/3">
          <h2 className="text-4xl font-bold">
            Why Choose <span className="font-bold text-gold-dark">Zahabi?</span>
          </h2>
        </div>

        {/* Right Curve with Dots, Icons, and Cards */}
        <div className="relative w-[650px] h-[300px]">
          <svg
            className="w-[600px] h-[300px] rotate-90"
            viewBox="0 0 100 55"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient
                id="goldGradient"
                cx="50%"
                cy="50%"
                r="50%"
                fx="30%"
                fy="30%"
              >
                <stop offset="0%" stopColor="#fff7d1" />
                <stop offset="50%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="#d4af36" />
              </radialGradient>
            </defs>

            <path
              d="M0,50 Q50,0 100,50"
              fill="none"
              stroke="#d4af36"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {positions.map((pos, idx) => (
              <circle
                key={idx}
                cx={pos.x + offsets[idx].x}
                cy={pos.y + offsets[idx].y}
                r={6}
                fill="url(#goldGradient)"
                className="transition-all duration-300 hover:scale-125"
              />
            ))}

            {positions.map((pos, idx) => (
              <image
                key={idx}
                href={Icon}
                x={pos.x + offsets[idx].x - 5}
                y={pos.y + offsets[idx].y - 5}
                width={9}
                height={9}
              />
            ))}
          </svg>

          {positions.map((pos, idx) => {
            const left = (pos.x + cardOffsets[idx].x) * (svgWidth / 100);
            const top =
              (pos.y + cardOffsets[idx].y) * (svgHeight / viewBoxHeight);
            return (
              <div
                key={idx}
                className="absolute bg-white p-4 rounded-3xl shadow-lg border border-zahabi-gold w-80 hover:shadow-[0_0_15px_#d4af36]"
                style={{ left: `${left}px`, top: `${top}px` }}
              >
                <h3 className="font-bold text-gold-dark text-xl">{cardContents[idx].title}</h3>
                <p className="text-muted-foreground text-sm">{cardContents[idx].desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center min-h-screen p-6 relative">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Why Choose</h2>
          <h2 className="text-4xl font-bold text-gold-dark">Zahabi?</h2>
        </div>

        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-32 bottom-8 w-1 bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 rounded"></div>

        {/* Dots + Cards */}
        <div className="flex flex-col gap-16 w-full">
          {cardContents.map((card, idx) => (
            <div key={idx} className="flex items-start gap-6 relative z-10 max-w-md mx-auto">
              {/* Dot */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 flex items-center justify-center mt-1 transition-transform duration-300 hover:scale-125">
                <img src={Icon} className="w-5 h-5" alt="icon" />
              </div>

              {/* Card */}
              <div className="flex-1 bg-white p-4 rounded-3xl shadow-lg border border-zahabi-gold hover:shadow-[0_0_15px_#d4af36]">
                <h3 className="font-bold text-gold-dark text-xl">{card.title}</h3>
                <p className="text-muted-foreground text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
