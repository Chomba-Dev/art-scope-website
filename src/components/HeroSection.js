import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow rounded-full -translate-x-36 -translate-y-36"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-yellow rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-yellow rounded-full translate-y-32"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block">Empowering</span>
            <span className="block text-yellow">Artists & Creatives</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-gray mb-8 max-w-3xl mx-auto">
            Leading African hub for creative innovation, youth empowerment, and sustainable entrepreneurship
          </p>

          {/* Mission Statement */}
          <p className="text-lg text-gray mb-12 max-w-4xl mx-auto">
            We unleash creative potential for sustainable development by promoting the integration of 
            arts, culture, technology, and business through inclusive platforms, strategic partnerships, 
            and innovative enterprise.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="btn-primary inline-block text-center min-w-[200px] px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="btn-secondary inline-block text-center min-w-[200px] px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow mb-2">500+</div>
              <div className="text-gray">Artists Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow mb-2">50+</div>
              <div className="text-gray">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow mb-2">10+</div>
              <div className="text-gray">Strategic Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-yellow mb-2">5</div>
              <div className="text-gray">Business Units</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
