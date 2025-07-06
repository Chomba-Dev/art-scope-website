export default function Partners() {
  const strategicPartners = [
    {
      name: "African Development Bank",
      logo: "/logos/adb.png",
      description: "Strategic financial partner supporting infrastructure development across Africa.",
      partnership: "Financial Services"
    },
    {
      name: "European Investment Bank",
      logo: "/logos/eib.png",
      description: "Long-term partnership for sustainable development projects.",
      partnership: "Development Finance"
    },
    {
      name: "Microsoft Africa",
      logo: "/logos/microsoft.png",
      description: "Technology partnership for digital transformation initiatives.",
      partnership: "Technology Solutions"
    },
    {
      name: "Siemens Energy",
      logo: "/logos/siemens.png",
      description: "Collaboration on renewable energy and infrastructure projects.",
      partnership: "Energy Solutions"
    }
  ];

  const keyInvestors = [
    {
      name: "Global Infrastructure Fund",
      type: "Private Equity",
      investment: "$150M",
      focus: "Infrastructure & Energy"
    },
    {
      name: "African Growth Capital",
      type: "Growth Capital",
      investment: "$75M",
      focus: "Technology & Innovation"
    },
    {
      name: "Sustainable Development Partners",
      type: "Impact Investment",
      investment: "$100M",
      focus: "ESG & Sustainability"
    },
    {
      name: "Regional Development Corporation",
      type: "Government Entity",
      investment: "$200M",
      focus: "Regional Development"
    }
  ];

  const partnershipOpportunities = [
    {
      title: "Strategic Alliances",
      description: "Joint ventures and strategic partnerships to expand market reach and capabilities.",
      benefits: ["Market Access", "Resource Sharing", "Risk Mitigation", "Innovation"]
    },
    {
      title: "Investment Opportunities",
      description: "Equity and debt investment opportunities across our portfolio companies.",
      benefits: ["High Returns", "Diversified Portfolio", "Emerging Markets", "ESG Focus"]
    },
    {
      title: "Technology Partnerships",
      description: "Collaborate on digital transformation and technology innovation projects.",
      benefits: ["Innovation", "Market Expansion", "Technical Expertise", "Scalability"]
    }
  ];

  return (
    <div className="min-h-screen bg-navy">
      {/* Hero Section */}
      <div className="bg-gradient-navy-yellow text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Partners & Investors
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Building strategic relationships that drive sustainable growth
            </p>
            <p className="text-lg opacity-80 max-w-3xl mx-auto">
              We collaborate with leading organizations and investors who share our 
              commitment to transforming Africa's business landscape through innovation 
              and sustainable development.
            </p>
          </div>
        </div>
      </div>

      {/* Partnership Value Proposition */}
      <div className="py-16 bg-yellow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Why Partner With Us
            </h2>
            <p className="text-lg text-navy font-medium leading-relaxed">
              Our partnerships are built on mutual trust, shared vision, and proven 
              track record of delivering exceptional results across diverse markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Market Leadership</h3>
              <p className="text-navy font-medium">
                Established market presence with deep understanding of African business environments.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Proven Track Record</h3>
              <p className="text-navy font-medium">
                15+ years of successful project delivery and sustainable business growth.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">Strategic Value</h3>
              <p className="text-navy font-medium">
                Comprehensive solutions that create long-term value and competitive advantages.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Partners */}
      <div className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow text-center mb-16">
            Strategic Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategicPartners.map((partner, index) => (
              <div key={index} className="bg-yellow rounded-lg p-8 hover:shadow-lg transition-shadow border-2 border-navy">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-navy rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-yellow text-xs text-center font-medium">Logo</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-navy mb-2">{partner.name}</h3>
                    <div className="text-sm text-navy font-bold mb-3 bg-navy text-yellow px-2 py-1 rounded inline-block">{partner.partnership}</div>
                    <p className="text-navy font-medium">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Investors */}
      <div className="py-16 bg-yellow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
            Key Investors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyInvestors.map((investor, index) => (
              <div key={index} className="bg-navy rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-yellow">
                <h3 className="text-lg font-bold text-yellow mb-2">{investor.name}</h3>
                <div className="text-sm text-yellow mb-3 opacity-80">{investor.type}</div>
                <div className="text-2xl font-bold text-yellow mb-3">{investor.investment}</div>
                <div className="text-sm text-yellow font-medium">{investor.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Opportunities */}
      <div className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow text-center mb-16">
            Partnership Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipOpportunities.map((opportunity, index) => (
              <div key={index} className="bg-yellow rounded-lg p-8 hover:shadow-lg transition-shadow border-2 border-navy">
                <h3 className="text-xl font-bold text-navy mb-4">{opportunity.title}</h3>
                <p className="text-navy font-medium mb-6">{opportunity.description}</p>
                <div className="space-y-2">
                  <h4 className="font-bold text-navy">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {opportunity.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-navy font-medium flex items-center">
                        <div className="w-2 h-2 bg-navy rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Investment Performance */}
      <div className="py-16 bg-yellow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
            Investment Performance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">$500M+</div>
              <div className="text-navy font-medium">Total Investment Raised</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">25%</div>
              <div className="text-navy font-medium">Average Annual Returns</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">50+</div>
              <div className="text-navy font-medium">Investment Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy mb-2">15</div>
              <div className="text-navy font-medium">Years Track Record</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Explore partnership and investment opportunities that align with your 
              strategic objectives and sustainability goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a href="/contact" className="btn-primary bg-yellow text-navy hover:bg-yellow/90 px-8 py-3 rounded-lg font-bold text-center transition-colors">
                Partner Inquiry
              </a>
              <a href="/contact" className="btn-secondary bg-yellow text-navy hover:bg-yellow/90 px-8 py-3 rounded-lg font-bold text-center transition-colors border-2 border-yellow">
                Investment Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
