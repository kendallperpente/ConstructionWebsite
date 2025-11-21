import React from 'react';

const AboutPage: React.FC = () => (
  <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4 py-12">
    <div className="relative max-w-5xl w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-teal-400/20 rounded-3xl blur-xl" />
      <div className="relative bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-8 sm:p-12 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-teal-400/30 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-2xl animate-pulse" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">About</span>
            <span className="text-white"> Morningwood Construction</span>
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="space-y-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Owner-Operated Excellence</h3>
                <p className="text-slate-200 leading-relaxed">
                  Morningwood Construction is a small full service remodeling/renovation company owned by Todd Slack, who serves as both owner-operator and lead construction mechanic on-site every day of your project.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Services</h3>
                <p className="text-slate-200 leading-relaxed mb-4">
                  We offer a wide range of in-house services, minimizing subcontractors and ensuring your home sees minimal traffic from multiple workers throughout your project duration.
                </p>
                <p className="text-slate-200 leading-relaxed">
                  Our internal services include general carpentry, fine woodworking, plumbing, electrical, tiling, drywalling, painting, and comprehensive handyman services.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-3xl font-bold text-white mb-4 text-center">New Division</h3>
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-teal-300 mb-3">Cretescapes</h4>
                  <p className="text-slate-200 leading-relaxed">Decorative Concrete and Masonry</p>
                </div>
              </div>
              
              <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <p className="text-lg text-slate-200 font-light leading-relaxed italic">
                  "We look forward to the opportunity to work with you to make your remodeling visions a rewarding reality."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default AboutPage;
