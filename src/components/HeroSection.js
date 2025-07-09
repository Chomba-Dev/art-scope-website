import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-primary text-white relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow rounded-full -translate-x-48 -translate-y-48 animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-yellow rounded-full translate-x-60 -translate-y-60 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-yellow rounded-full translate-y-40 animate-pulse delay-500"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-yellow rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-yellow rounded-full animate-bounce"></div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 text-yellow text-4xl animate-float">🎨</div>
        <div className="absolute top-40 right-20 text-yellow text-3xl animate-float delay-300">🎭</div>
        <div className="absolute bottom-40 left-20 text-yellow text-3xl animate-float delay-700">🎪</div>
        <div className="absolute bottom-20 right-10 text-yellow text-4xl animate-float delay-1000">🌟</div>
        <div className="absolute top-1/2 left-1/2 text-yellow text-2xl animate-float delay-500">✨</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center space-y-8">
          {/* Main Heading with enhanced styling */}
          <div className="space-y-4">
            <h1 className="hero-title hero-text">
              <span className="block text-white">Empowering</span>
              <span className="block text-yellow font-bold">Artists & Creatives</span>
            </h1>
            
            {/* Creative icons around title */}
            <div className="flex justify-center items-center space-x-8 text-yellow opacity-80">
              <div className="text-3xl animate-bounce">🎨</div>
              <div className="text-3xl animate-bounce delay-200">🎭</div>
              <div className="text-3xl animate-bounce delay-400">🎪</div>
              <div className="text-3xl animate-bounce delay-600">🌟</div>
            </div>
          </div>

          {/* Enhanced Tagline */}
          <div className="max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl text-yellow font-bold mb-4 leading-relaxed">
              Leading African hub for creative innovation, youth empowerment, and sustainable entrepreneurship
            </p>
            <div className="w-32 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
          </div>

          {/* Mission Statement with better styling */}
          <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow/20">
            <p className="text-lg text-white leading-relaxed font-medium">
              We unleash creative potential for sustainable development by promoting the integration of 
              arts, culture, technology, and business through inclusive platforms, strategic partnerships, 
              and innovative enterprise.
            </p>
          </div>

          {/* Enhanced Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link
              href="/contact"
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get Started</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/about"
              className="btn-secondary group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Learn More</span>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Enhanced Stats Section with icons */}
          <div className="pt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-primary text-center group">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 3v18M5 21l14-14" />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold text-navy mb-2">10</div>
                  <div className="text-dark-gray font-semibold">Active Subsidiaries</div>
                </div>
              </div>
              
              <div className="card-primary text-center group">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold text-navy mb-2">2024</div>
                  <div className="text-dark-gray font-semibold">Year Established</div>
                </div>
              </div>
              
              <div className="card-primary text-center group">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold text-navy mb-2">6</div>
                  <div className="text-dark-gray font-semibold">Revenue Streams</div>
                </div>
              </div>
              
              <div className="card-primary text-center group">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-4xl font-bold text-navy mb-2">6</div>
                  <div className="text-dark-gray font-semibold">Target Partnerships</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-yellow text-sm font-medium animate-pulse">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-yellow rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-yellow rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
