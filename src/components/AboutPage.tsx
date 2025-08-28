import React from 'react';

const AboutPage: React.FC = () => (
  <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e5e7eb] to-[#f1f5f9] text-[#1e293b] flex flex-col items-center justify-center px-4 py-8">
    <div className="relative max-w-2xl w-full bg-white/90 rounded-3xl shadow-2xl border-2 border-[#1e3a8a]/20 p-10 flex flex-col items-center overflow-hidden">
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#1e3a8a]/10 rounded-full blur-2xl z-0" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#64748b]/10 rounded-full blur-2xl z-0" />
      <h1 className="text-4xl font-extrabold mb-4 text-[#1e3a8a] z-10">About MorningWood</h1>
      <p className="text-lg mb-6 text-grey text-center z-10">
        MorningWood is your trusted partner for modern, high-quality construction and renovation services. We specialize in kitchens, bathrooms, living rooms, bedrooms, and outdoor spaces. Our team is dedicated to delivering exceptional craftsmanship and customer satisfaction.
      </p>
      <p className="text-md text-[#64748b] text-center z-10">
        Contact us today to start your next project!
      </p>
    </div>
  </main>
);

export default AboutPage;
