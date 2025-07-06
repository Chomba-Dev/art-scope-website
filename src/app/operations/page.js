import SubsidiaryCard from '../../components/SubsidiaryCard';

export default function Operations() {
  const subsidiaries = [
    {
      name: "Art Scope Consulting",
      title: "Art Scope Consulting",
      description: "Strategic business consulting and advisory services for emerging markets.",
      features: ["Business Strategy", "Market Analysis", "Financial Advisory", "Risk Management"],
      icon: "AC",
      href: "/subsidiary/art-scope-consulting"
    },
    {
      name: "Art Scope Technology",
      title: "Art Scope Technology", 
      description: "Innovative technology solutions and digital transformation services.",
      features: ["Software Development", "Cloud Solutions", "Digital Strategy", "IT Consulting"],
      icon: "AT",
      href: "/subsidiary/art-scope-technology"
    },
    {
      name: "Art Scope Logistics",
      title: "Art Scope Logistics",
      description: "Comprehensive supply chain and logistics management solutions.",
      features: ["Supply Chain", "Freight Management", "Warehousing", "Distribution"],
      icon: "AL",
      href: "/subsidiary/art-scope-logistics"
    },
    {
      name: "Art Scope Energy",
      title: "Art Scope Energy",
      description: "Sustainable energy solutions and renewable energy project development.",
      features: ["Solar Solutions", "Energy Consulting", "Project Development", "Sustainability"],
      icon: "AE",
      href: "/subsidiary/art-scope-energy"
    },
    {
      name: "Art Scope Real Estate",
      title: "Art Scope Real Estate",
      description: "Property development and real estate investment services.",
      features: ["Property Development", "Investment Advisory", "Property Management", "Construction"],
      icon: "AR",
      href: "/subsidiary/art-scope-real-estate"
    },
    {
      name: "Art Scope Finance",
      title: "Art Scope Finance",
      description: "Financial services and investment management solutions.",
      features: ["Investment Management", "Financial Planning", "Capital Markets", "Asset Management"],
      icon: "AF",
      href: "/subsidiary/art-scope-finance"
    }
  ];

  return (
    <div className="min-h-screen bg-navy">
      {/* Hero Section */}
      <div className="bg-yellow text-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Operations
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-semibold">
              Discover our diverse portfolio of subsidiaries and business units
            </p>
            <p className="text-lg font-medium max-w-3xl mx-auto">
              Art Scope Enterprises operates across multiple sectors, delivering 
              innovative solutions and exceptional value through our specialized subsidiaries.
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow mb-6">
              Diversified Excellence
            </h2>
            <p className="text-lg text-yellow leading-relaxed font-medium">
              Our operations span across six key sectors, each led by industry experts 
              and backed by our commitment to innovation, quality, and sustainable growth. 
              From consulting and technology to energy and real estate, we deliver 
              comprehensive solutions that drive success.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-yellow p-6 rounded-lg">
              <div className="text-4xl font-bold text-navy mb-2">6</div>
              <div className="text-navy font-semibold">Business Units</div>
            </div>
            <div className="text-center bg-yellow p-6 rounded-lg">
              <div className="text-4xl font-bold text-navy mb-2">500+</div>
              <div className="text-navy font-semibold">Projects Completed</div>
            </div>
            <div className="text-center bg-yellow p-6 rounded-lg">
              <div className="text-4xl font-bold text-navy mb-2">50+</div>
              <div className="text-navy font-semibold">Countries Served</div>
            </div>
            <div className="text-center bg-yellow p-6 rounded-lg">
              <div className="text-4xl font-bold text-navy mb-2">15</div>
              <div className="text-navy font-semibold">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subsidiaries Grid */}
      <div className="py-16 bg-yellow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
            Our Subsidiaries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subsidiaries.map((subsidiary, index) => (
              <SubsidiaryCard 
                key={index}
                {...subsidiary}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-yellow mb-8 max-w-2xl mx-auto font-medium">
            Explore how our diverse operations can support your business goals 
            and drive sustainable growth.
          </p>
          <div className="space-x-4">
            <a href="/contact" className="bg-yellow text-navy px-8 py-3 rounded-lg font-bold hover:bg-yellow/90 transition-colors inline-block">
              Get In Touch
            </a>
            <a href="/about" className="bg-yellow text-navy px-8 py-3 rounded-lg font-bold hover:bg-yellow/90 transition-colors inline-block border-2 border-yellow">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
