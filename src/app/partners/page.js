export const metadata = {
  title: "Partners & Investors - Art Scope Enterprises Limited",
  description: "Explore partnership opportunities with Art Scope Enterprises Limited. Join us in creating sustainable impact through strategic collaborations and investments.",
};

export default function Partners() {
  const targetPartners = [
    {
      category: "Government Institutions",
      description: "Collaborate with government agencies to implement youth development and creative economy initiatives.",
      icon: "🏛️",
      opportunities: [
        "Youth skills development programs",
        "Creative economy policy implementation",
        "Community development projects",
        "Cultural tourism initiatives"
      ]
    },
    {
      category: "Educational Institutions", 
      description: "Partner with schools and universities to enhance creative education and talent development.",
      icon: "🎓",
      opportunities: [
        "Art-focused curriculum development",
        "Student mentorship programs",
        "Creative skills training",
        "Educational resource development"
      ]
    },
    {
      category: "Private Companies",
      description: "Strategic business partnerships for mutual growth and community impact.",
      icon: "🏢",
      opportunities: [
        "Corporate social responsibility",
        "Employee training programs",
        "Brand partnership campaigns",
        "Technology integration projects"
      ]
    },
    {
      category: "NGOs & Civil Society",
      description: "Collaborate with non-profits to amplify social impact and community development.",
      icon: "🤝",
      opportunities: [
        "Community empowerment projects",
        "Social impact initiatives",
        "Capacity building programs",
        "Advocacy and awareness campaigns"
      ]
    },
    {
      category: "International Organizations",
      description: "Global partnerships for knowledge exchange and sustainable development.",
      icon: "🌍",
      opportunities: [
        "Cultural exchange programs",
        "International best practices",
        "Global market access",
        "Cross-border collaborations"
      ]
    },
    {
      category: "Financial Institutions",
      description: "Investment partnerships to scale operations and maximize impact.",
      icon: "💰",
      opportunities: [
        "Infrastructure development",
        "Technology advancement",
        "Program expansion",
        "Financial inclusion initiatives"
      ]
    }
  ];

  const revenueStreams = [
    {
      stream: "Creative Services & Production",
      description: "Revenue from music, dance, theater, fashion, events, and multimedia content creation.",
      icon: "🎭"
    },
    {
      stream: "Education & Training Programs",
      description: "Income from art-focused education, skills development, and mentorship programs.",
      icon: "🎓"
    },
    {
      stream: "Tourism & Cultural Experiences",
      description: "Revenue from cultural tourism, creative safaris, and heritage experience packages.",
      icon: "🌍"
    },
    {
      stream: "Technology Solutions",
      description: "Income from AI-driven applications, digital solutions, and automation systems.",
      icon: "💻"
    },
    {
      stream: "Agriculture & Food Security",
      description: "Revenue from sustainable farming, organic produce, and food security initiatives.",
      icon: "🌱"
    },
    {
      stream: "Construction & Infrastructure",
      description: "Income from creative space construction, event venues, and community projects.",
      icon: "🏗️"
    }
  ];

  const investmentFocus = [
    "ArtSphere Production (TV, Podcast)",
    "Creative Hub Infrastructure", 
    "ArtScope Farm Expansion",
    "Digital Content Studios",
    "Branding and Public Engagement Campaigns"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-blue-900 to-navy text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">🤝</div>
          <div className="absolute top-20 right-20 text-4xl">💼</div>
          <div className="absolute bottom-20 left-20 text-5xl">🌟</div>
          <div className="absolute bottom-10 right-10 text-6xl">💰</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="image-placeholder w-32 h-32 mx-auto mb-8 rounded-full">
              <div className="text-center">
                <div className="text-6xl mb-2">🏆</div>
                <p className="text-sm font-bold">Partnerships</p>
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow to-white bg-clip-text text-transparent">
              Partners & Investors
            </h1>
            <p className="text-xl sm:text-2xl text-yellow mb-8 font-semibold max-w-4xl mx-auto">
              Join us in creating sustainable impact through strategic partnerships and innovative investments 
              in the creative economy.
            </p>
            <p className="text-lg font-medium max-w-3xl mx-auto text-white/90 leading-relaxed">
              Together, we can transform the creative landscape and build a sustainable future for artists and communities across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Target Partnership Categories */}
      <section className="py-20 bg-white text-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">Partnership Categories</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We're actively seeking strategic partnerships across these key sectors to maximize our impact 
              and create sustainable value for communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetPartners.map((partner, index) => (
              <div key={index} className="card-primary card-hover group">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {partner.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-yellow transition-colors duration-300">
                  {partner.category}
                </h3>
                <p className="text-navy/80 mb-6 leading-relaxed">{partner.description}</p>
                <div>
                  <h4 className="font-semibold text-navy mb-4 text-sm uppercase tracking-wide">Partnership Opportunities:</h4>
                  <ul className="space-y-3">
                    {partner.opportunities.map((opportunity, idx) => (
                      <li key={idx} className="text-navy/80 text-sm flex items-start">
                        <span className="text-yellow mr-3 font-bold">✓</span>
                        {opportunity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Streams */}
      <section className="py-20 bg-gradient-to-r from-yellow via-yellow to-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">Our Revenue Streams</h2>
            <p className="text-xl text-navy/90 max-w-4xl mx-auto leading-relaxed">
              Diversified income sources ensure sustainable growth and long-term viability of our operations 
              while maximizing social and economic impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {revenueStreams.map((stream, index) => (
              <div key={index} className="card-primary bg-navy text-yellow p-8 text-center card-hover group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{stream.icon}</div>
                <h3 className="text-lg font-bold mb-4 group-hover:text-white transition-colors duration-300">{stream.stream}</h3>
                <p className="text-yellow/90 leading-relaxed">{stream.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Focus Areas */}
      <section className="py-20 bg-gradient-to-r from-navy via-blue-900 to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-yellow mb-6">💡 Investment Focus (2025/26)</h2>
            <p className="text-xl text-yellow/90 max-w-4xl mx-auto leading-relaxed">
              Key areas where we're seeking strategic investments to accelerate our growth 
              and maximize our impact across the creative industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentFocus.map((focus, index) => (
              <div key={index} className="card-primary bg-yellow text-navy p-6 text-center card-hover group">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-bold group-hover:text-blue-900 transition-colors duration-300">{focus}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">Why Partner With Us?</h2>
            <p className="text-xl text-navy/80 max-w-4xl mx-auto leading-relaxed">
              Art Scope Enterprises Limited offers unique value propositions that create mutual benefits 
              for all stakeholders while driving positive social impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="card-primary bg-white p-8 text-center card-hover group">
              <div className="text-5xl font-bold text-navy mb-4 group-hover:text-yellow transition-colors duration-300">10</div>
              <div className="text-navy font-semibold text-lg">Diverse Subsidiaries</div>
            </div>
            <div className="card-primary bg-white p-8 text-center card-hover group">
              <div className="text-5xl font-bold text-navy mb-4 group-hover:text-yellow transition-colors duration-300">6</div>
              <div className="text-navy font-semibold text-lg">Revenue Streams</div>
            </div>
            <div className="card-primary bg-white p-8 text-center card-hover group">
              <div className="text-5xl font-bold text-navy mb-4 group-hover:text-yellow transition-colors duration-300">5</div>
              <div className="text-navy font-semibold text-lg">Strategic Objectives</div>
            </div>
            <div className="card-primary bg-white p-8 text-center card-hover group">
              <div className="text-5xl font-bold text-navy mb-4 group-hover:text-yellow transition-colors duration-300">6</div>
              <div className="text-navy font-semibold text-lg">Partnership Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="image-placeholder w-24 h-24 mx-auto mb-8 rounded-full">
            <div className="text-center">
              <div className="text-4xl mb-1">📞</div>
              <p className="text-xs font-bold">Contact</p>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-navy/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Whether you're looking to invest, collaborate, or create meaningful partnerships, 
            we're here to explore how we can work together for mutual success and social impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="btn-primary px-10 py-4 text-lg font-bold inline-flex items-center space-x-2 group">
              <span>Contact Us Today</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
            <a href="/about" className="btn-secondary px-10 py-4 text-lg font-bold inline-flex items-center space-x-2 group">
              <span>Learn More About Us</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
