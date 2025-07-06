export const metadata = {
  title: "About Us - Art Scope Enterprises Limited",
  description: "Learn about our mission, vision, and commitment to empowering artists and creatives across Africa through innovation and sustainable entrepreneurship.",
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Art Scope Enterprises</h1>
            <p className="text-xl text-gray max-w-3xl mx-auto">
              Leading the creative revolution in Africa through innovation, empowerment, and sustainable business practices.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-navy p-8 rounded-lg border-4 border-yellow">
              <h2 className="text-3xl font-bold text-yellow mb-6">Our Mission</h2>
              <p className="text-yellow text-lg leading-relaxed font-medium">
                To unleash creative potential for sustainable development by promoting the integration of arts, culture, 
                technology, and business through inclusive platforms, strategic partnerships, and innovative enterprise.
              </p>
            </div>
            
            <div className="bg-yellow text-navy p-8 rounded-lg border-4 border-navy">
              <h2 className="text-3xl font-bold text-navy mb-6">Our Vision</h2>
              <p className="text-navy text-lg leading-relaxed font-medium">
                To be the leading African hub for creative innovation, youth empowerment, and sustainable entrepreneurship, 
                fostering a thriving ecosystem where creativity drives economic growth and social impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-yellow text-center mb-12">Our Story</h2>
            
            <div className="space-y-8">
              <div className="bg-yellow p-8 rounded-lg border-4 border-navy">
                <h3 className="text-2xl font-bold text-navy mb-4">The Beginning</h3>
                <p className="text-dark-gray leading-relaxed">
                  Art Scope Enterprises Limited was born from a vision to bridge the gap between creative talent and 
                  sustainable business opportunities across Africa. Founded by passionate entrepreneurs who recognized 
                  the untapped potential in Africa's creative industries, we set out to create an ecosystem where 
                  artists and innovators could thrive.
                </p>
              </div>

              <div className="bg-yellow p-8 rounded-lg border-4 border-navy">
                <h3 className="text-2xl font-bold text-navy mb-4">Our Growth</h3>
                <p className="text-dark-gray leading-relaxed">
                  Since our inception, we have grown from a small startup to a comprehensive enterprise with multiple 
                  business units. Our diversified approach allows us to serve various aspects of the creative economy, 
                  from direct creative services to technology solutions and business consulting.
                </p>
              </div>

              <div className="bg-yellow p-8 rounded-lg border-4 border-navy">
                <h3 className="text-2xl font-bold text-navy mb-4">Today and Beyond</h3>
                <p className="text-navy leading-relaxed font-medium">
                  Today, Art Scope Enterprises stands as a testament to what's possible when creativity meets strategic 
                  business thinking. We continue to expand our impact, forge new partnerships, and develop innovative 
                  solutions that empower the next generation of African creatives and entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-navy text-center mb-16">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-navy p-6 rounded-lg">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-yellow mb-3">Innovation</h3>
              <p className="text-yellow font-medium">
                We constantly seek new and creative solutions to drive progress and positive change.
              </p>
            </div>

            <div className="text-center bg-navy p-6 rounded-lg">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-yellow mb-3">Collaboration</h3>
              <p className="text-yellow font-medium">
                We believe in the power of partnerships and working together to achieve greater impact.
              </p>
            </div>

            <div className="text-center bg-navy p-6 rounded-lg">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-yellow mb-3">Empowerment</h3>
              <p className="text-yellow font-medium">
                We are committed to empowering individuals and communities to reach their full potential.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Excellence</h3>
              <p className="text-dark-gray">
                We strive for excellence in everything we do, delivering high-quality solutions and services.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Sustainability</h3>
              <p className="text-dark-gray">
                We are committed to sustainable practices that benefit both people and the planet.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Transparency</h3>
              <p className="text-dark-gray">
                We operate with transparency and integrity in all our business dealings and relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray mb-8 max-w-3xl mx-auto">
            Ready to be part of Africa's creative revolution? Let's work together to unleash potential and create sustainable impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="btn-primary">
              Get In Touch
            </a>
            <a href="/operations" className="btn-secondary">
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
