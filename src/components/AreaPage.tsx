import React, { useMemo } from 'react';
import Link from 'next/link';

interface AreaPageProps {
  area: string;
  description: string;
  image?: string;
}


const SLOGANS = [
  "We rise to every occasion",
  "We work hard for you",
  "MorningWood: Built to last all day",
  "No job too stiff, no wood too hard",
  "Nailed it, every time",
  "We bring the wood, you bring the dreams",
  "Raising standards, one project at a time",
  "Solid work, solid wood, solid results",
  "MorningWood: The best way to start your day",
  "We hammer out the details",
];

const AreaPage: React.FC<AreaPageProps> = ({ area, description, image }) => {
  // Pick a random slogan on each render
  const slogan = useMemo(() => SLOGANS[Math.floor(Math.random() * SLOGANS.length)], []);
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e5e7eb] to-[#f1f5f9] text-[#1e293b] flex flex-col items-center justify-center px-4 py-8">
      <div className="relative max-w-2xl w-full rounded-3xl shadow-2xl p-0 overflow-hidden flex flex-col items-center backdrop-blur-md bg-white/90 border-2 border-[#1e3a8a]/20">
        <div className="w-full h-56 sm:h-72 bg-gradient-to-tr from-[#1e3a8a]/10 to-[#64748b]/10 flex items-center justify-center">
          <div className="w-4/5 h-44 sm:h-60 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl shadow-lg border-4 border-[#1e3a8a] flex items-center justify-center">
            <div className="text-white text-6xl opacity-50">
              {area === 'Kitchen' && '🍳'}
              {area === 'Bathroom' && '🛁'}
              {area === 'Living Room' && '🛋️'}
              {area === 'Bedroom' && '🛏️'}
              {area === 'Outdoor' && '🌳'}
            </div>
          </div>
        </div>
        <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#1e3a8a]/10 rounded-full blur-2xl z-0" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#64748b]/10 rounded-full blur-2xl z-0" />
        <div className="w-full flex flex-col items-center px-8 py-8 z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-block w-10 h-10 rounded-full bg-[#1e3a8a] flex items-center justify-center shadow-lg">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4" stroke="#fff" strokeWidth="2"/></svg>
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1e3a8a] drop-shadow-lg tracking-tight">{area}</h1>
          </div>
          <p className="text-accent text-lg font-semibold mb-2 text-center">{slogan}</p>
          <p className="text-lg sm:text-xl mb-6 text-grey text-center max-w-lg">{description}</p>
          <Link href="/" className="mt-2 px-8 py-3 bg-[#1e3a8a] text-white font-bold rounded-full shadow-md hover:bg-[#64748b] hover:text-white border-2 border-[#1e3a8a] hover:border-[#64748b] transition-all duration-200">Back to Home</Link>
        </div>
      </div>
    </main>
  );
};

export default AreaPage;
