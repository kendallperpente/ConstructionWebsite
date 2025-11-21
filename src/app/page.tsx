import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-slate-800">
      {/* Modern Fullscreen Hero with Glassmorphism */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-teal-600/30 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-4">
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white drop-shadow-2xl tracking-tight text-center leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">MorningWood</span>
              <br className="sm:hidden" />
              <span className="text-white"> Construction</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 text-center mt-6 font-light leading-relaxed">Crafting Excellence, One Project at a Time</p>
          </div>
        </div>
      </section>

      {/* Modern Main Content Section */}
      <section className="w-full flex flex-col items-center justify-center py-24 px-4 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-delayed" />
        </div>
        <div className="max-w-6xl mx-auto text-center z-10">
          <h2 className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent leading-tight mb-8">
            Your remodeling experience will always be good,
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">when they start with MORNINGWOOD</span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto mb-12 font-light">
            Morningwood Construction is a small full service remodeling/renovation general construction company. We offer quality professional services including general carpentry, fine woodworking, plumbing, electrical, tiling, drywalling, painting, and handyman services.
          </p>
          <Link href="/contact" className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-teal-600 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative">Get a Free Consultation</span>
          </Link>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"></div>
              <span className="text-xl font-semibold text-slate-700">Owner Operated</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"></div>
              <span className="text-xl font-semibold text-slate-700">Full Service Construction</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"></div>
              <span className="text-xl font-semibold text-slate-700">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Project Showcase */}
      <section className="w-full py-24 px-4 bg-gradient-to-b from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Featured</span>
              <span className="text-white"> Projects</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">Discover our latest transformations that showcase our commitment to quality craftsmanship and innovative design</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 transition-all duration-500 transform hover:scale-105">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center">
                <div className="text-white text-6xl opacity-30">🏠</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-2xl font-bold mb-3 leading-tight">Modern Kitchen Remodel</h3>
                <p className="text-slate-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">A stunning transformation with custom cabinetry, quartz countertops, and smart lighting systems.</p>
              </div>
            </div>
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 transition-all duration-500 transform hover:scale-105">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <div className="text-white text-6xl opacity-30">🛁</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-2xl font-bold mb-3 leading-tight">Luxury Bathroom Renovation</h3>
                <p className="text-slate-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Complete bathroom overhaul with premium fixtures, natural stone, and spa-like finishes.</p>
              </div>
            </div>
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 transition-all duration-500 transform hover:scale-105">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <div className="text-white text-6xl opacity-30">🛋️</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-2xl font-bold mb-3 leading-tight">Open Concept Living Space</h3>
                <p className="text-slate-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Transformed traditional layout into a modern, flowing open-concept design perfect for entertaining.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Call to Action Section */}
      <section className="w-full py-24 px-4 bg-gradient-to-br from-slate-100 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-delayed" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-black mb-8">
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Ready to Transform</span>
            <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> Your Space?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let Todd and the Morningwood Construction team bring your renovation vision to life with quality craftsmanship and professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-teal-600 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Get Free Estimate</span>
            </Link>
            <Link href="/about" className="group inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-slate-700 bg-white/80 backdrop-blur-sm border-2 border-slate-300 rounded-full shadow-lg hover:shadow-xl hover:bg-white hover:border-slate-400 transform hover:scale-105 transition-all duration-300">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <footer className="w-full py-12 text-center bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Morningwood</span>
              <span className="text-white"> Construction</span>
            </h3>
            <p className="text-slate-300">Quality craftsmanship, professional service</p>
          </div>
          <div className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Morningwood Construction. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
