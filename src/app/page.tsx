import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#0a1833] via-[#162447] to-[#2563eb] text-[#1e293b]">
      {/* Fullscreen Hero Image with Overlay Title */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img src="/hero.jpg" alt="MorningWood Construction Hero" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
        <div className="absolute inset-0 bg-[#0a1833]/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-[#2563eb] drop-shadow-2xl tracking-tight text-center bg-white/70 px-8 py-4 rounded-xl shadow-lg">MorningWood Construction</h1>
        </div>
      </section>

      {/* Main Content Below Hero */}
      <section className="w-full flex flex-col items-center justify-center py-20 px-4 bg-white/90 border-b-2 border-[#e5e7eb] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#1e3a8a]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#64748b]/10 rounded-full blur-3xl" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1e3a8a] drop-shadow-lg tracking-tight text-center z-10 mt-4">Building Your Vision.<br className="hidden sm:block" /> Raising the Standard.</h2>
        <p className="mt-8 text-xl text-grey text-center max-w-2xl z-10">Modern, high-quality construction and renovation services for kitchens, bathrooms, living rooms, bedrooms, and outdoor spaces. Built for comfort, style, and durability.</p>
        <Link href="/contact" className="mt-8 px-10 py-4 bg-[#1e3a8a] text-white font-bold rounded-full shadow-lg hover:bg-[#ffd700] hover:text-[#1e3a8a] border-2 border-[#1e3a8a] hover:border-[#ffd700] transition-all duration-200 z-10 text-lg">Get a Free Consultation</Link>
      </section>

      {/* Animated Stats Section */}
      <section className="w-full flex flex-col sm:flex-row items-center justify-center gap-12 py-12 px-4">
        <div className="flex flex-col items-center">
          <span className="text-4xl sm:text-5xl font-extrabold text-[#1e3a8a]">25+</span>
          <span className="text-grey text-lg">Years Experience</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl sm:text-5xl font-extrabold text-[#1e3a8a]">500+</span>
          <span className="text-grey text-lg">Projects Completed</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl sm:text-5xl font-extrabold text-[#1e3a8a]">100%</span>
          <span className="text-grey text-lg">Client Satisfaction</span>
        </div>
      </section>

      {/* Project Highlights Grid */}
      <section className="w-full max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative group rounded-2xl overflow-hidden shadow-lg bg-[#e5e7eb]">
            <img src="/kitchen.jpg" alt="Modern Kitchen Remodel" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-[#1e3a8a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-2">Modern Kitchen Remodel</h3>
              <p className="text-white text-sm">A stunning transformation with custom cabinetry and smart lighting.</p>
            </div>
          </div>
          <div className="relative group rounded-2xl overflow-hidden shadow-lg bg-[#e5e7eb]">
            <img src="/bathroom.jpg" alt="Luxury Bathroom Upgrade" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-[#1e3a8a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-2">Luxury Bathroom Upgrade</h3>
              <p className="text-white text-sm">Spa-like features and elegant tile work for a relaxing retreat.</p>
            </div>
          </div>
          <div className="relative group rounded-2xl overflow-hidden shadow-lg bg-[#e5e7eb]">
            <img src="/outdoor.jpg" alt="Outdoor Living Space" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-[#1e3a8a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-2xl font-bold mb-2">Outdoor Living Space</h3>
              <p className="text-white text-sm">Beautiful patio and landscaping for year-round enjoyment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-[#e5e7eb] flex flex-col justify-between">
            <p className="italic text-grey mb-4">"MorningWood exceeded our expectations! The team was professional, fast, and the results are beautiful."</p>
            <span className="font-semibold text-[#1e3a8a]">— Alex P.</span>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-[#e5e7eb] flex flex-col justify-between">
            <p className="italic text-grey mb-4">"We love our new kitchen and bathroom. Highly recommend MorningWood for any renovation!"</p>
            <span className="font-semibold text-[#1e3a8a]">— Jamie L.</span>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full flex flex-col items-center py-16">
        <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Ready to Start Your Project?</h2>
        <Link href="/contact" className="px-10 py-4 bg-[#1e3a8a] text-white font-bold rounded-full shadow-lg hover:bg-[#64748b] hover:text-white border-2 border-[#1e3a8a] hover:border-[#64748b] transition-all duration-200 text-lg">Contact Us</Link>
      </section>

      <footer className="w-full py-8 text-xs text-grey text-center bg-white/80 border-t border-[#e5e7eb] mt-8">
        &copy; {new Date().getFullYear()} MorningWood Construction. All rights reserved.
      </footer>
    </main>
  );
}
// ...existing code ends after the Home component above...
