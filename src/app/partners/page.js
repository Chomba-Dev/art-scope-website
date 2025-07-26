import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";

export const metadata = {
  title: "Partners & Investors - Art Scope Enterprises Limited",
  description: "Explore partnership opportunities with Art Scope Enterprises Limited. Join us in creating sustainable impact through strategic collaborations and investments.",
};

export default function Partners() {
  const targetPartners = [
    {
      category: "Government Ministries",
      description: "Strategic partnerships with key government ministries to implement national creative economy initiatives.",
      icon: "🏛️",
      opportunities: [
        "Ministry of Youth, Sport and Arts",
        "Ministry of Tourism and Arts", 
        "Ministry of Education",
        "Ministry of Agriculture and Livestock"
      ]
    },
    {
      category: "Bank of Zambia & Commercial Banks", 
      description: "Financial partnerships for investment facilitation and economic development programs.",
      icon: "�",
      opportunities: [
        "Creative economy financing",
        "Youth entrepreneurship funding",
        "SME development programs",
        "Financial inclusion initiatives"
      ]
    },
    {
      category: "National Arts Council",
      description: "Collaboration with the National Arts Council for arts development and cultural promotion.",
      icon: "�",
      opportunities: [
        "Arts policy development",
        "Creative talent development",
        "Cultural events coordination",
        "Artist support programs"
      ]
    },
    {
      category: "Civil Society & NGOs",
      description: "Partnerships with NGOs and civil society organizations for community impact and development.",
      icon: "🤝",
      opportunities: [
        "Community development projects",
        "Youth empowerment programs",
        "Social impact initiatives",
        "Capacity building programs"
      ]
    },
    {
      category: "Media & Broadcasting Companies",
      description: "Strategic media partnerships for content production and broadcast distribution.",
      icon: "📺",
      opportunities: [
        "ArtSphere TV Show production",
        "Podcast distribution",
        "Digital content creation",
        "Media awareness campaigns"
      ]
    },
    {
      category: "Educational Institutions",
      description: "Academic partnerships for research, education, and talent development initiatives.",
      icon: "🎓",
      opportunities: [
        "Art-focused curriculum development",
        "Student mentorship programs",
        "Research collaborations",
        "Skills training partnerships"
      ]
    }
  ];

  const revenueStreams = [
    {
      stream: "Event & Ticket Sales",
      description: "Revenue from creative events, performances, exhibitions, and ticketed experiences.",
      icon: "🎭"
    },
    {
      stream: "Digital Media Monetization",
      description: "Income from ArtSphere Podcast, TV shows, online content, and digital platform monetization.",
      icon: "📱"
    },
    {
      stream: "Merchandise & Art Sales",
      description: "Revenue from art sales, creative merchandise, branded materials, and artistic products.",
      icon: "🛍️"
    },
    {
      stream: "Service Fees",
      description: "Income from design services, marketing, production, consulting, and professional services.",
      icon: "�"
    },
    {
      stream: "Brand Sponsorships",
      description: "Revenue from corporate sponsorships, brand partnerships, and collaborative marketing initiatives.",
      icon: "🤝"
    },
    {
      stream: "Government Grants & Private Investments",
      description: "Funding from government grants, donor partnerships, and private investment opportunities.",
      icon: "💰"
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

  // Hero carousel images with correct paths
  const heroImages = [
    {
      src: "/images/photos/IMG-20250714-WA0134.jpg",
      alt: "Partnerships - Strategic Business Collaborations"
    },
    {
      src: "/images/photos/IMG-20250714-WA0165.jpg", 
      alt: "Investment Opportunities and Growth"
    },
    {
      src: "/images/photos/IMG-20250714-WA0166.jpg",
      alt: "Sustainable Development Partnerships"
    },
    {
      src: "/images/photos/IMG-20250714-WA0167.jpg",
      alt: "Creative Innovation and Collaboration"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Dynamic Hero Section */}
      <HeroCarousel 
        images={heroImages} 
        interval={3500}
        className="py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            {/* Company Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-navy/80 border border-yellow/50 rounded-full mb-8 backdrop-blur-md">
              <span className="text-yellow font-semibold text-sm tracking-wide uppercase">
                Partnerships & Investment
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-white drop-shadow-2xl leading-tight">
              Partners & Investors
            </h1>
            
            <p className="text-xl sm:text-2xl text-yellow mb-8 font-semibold max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Join us in creating sustainable impact through strategic partnerships and innovative investments 
              in the creative economy.
            </p>
            
            <p className="text-lg font-medium max-w-3xl mx-auto text-white/95 leading-relaxed mb-12 drop-shadow-md">
              Together, we can transform the creative landscape and build a sustainable future for artists and communities across Africa.
            </p>
            
            <div className="flex justify-center">
              <a href="#partnerships" className="group inline-flex items-center px-8 py-4 bg-yellow/90 hover:bg-yellow text-navy font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className="mr-3">Explore Opportunities</span>
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </HeroCarousel>

      {/* Target Partnership Categories */}
      <section id="partnerships" className="py-20 bg-white text-navy">
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
      <section className="py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/photos/IMG-20250714-WA0166.jpg"
            alt="Partnership Background - Collaborative Success"
            fill
            className="object-cover opacity-80"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="relative w-24 h-24 mx-auto mb-8 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/images/photos/IMG-20250714-WA0165.jpg"
              alt="Contact Partnership Team - Ready to Connect"
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">Ready to Partner With Us?</h2>
          <p className="text-xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
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
