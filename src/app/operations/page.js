import Image from "next/image";
import HeroCarousel from "../../components/HeroCarousel";
import SubsidiaryCard from '../../components/SubsidiaryCard';

export const metadata = {
  title: "Our Operations - Art Scope Enterprises Limited",
  description: "Explore our diverse portfolio of 10 specialized subsidiaries spanning arts, technology, agriculture, and more. Delivering innovative solutions across multiple sectors.",
};

export default function Operations() {
  const subsidiaries = [
    {
      name: "Art Scope Arts",
      title: "Art Scope Arts",
      description: "Comprehensive creative services spanning music, dance, theater, fashion design, events management, modeling, literary arts, authorship, publishing, graphics, and animation.",
      features: ["Music, Dance & Theater", "Fashion & Design", "Events Management & Modeling", "Literary Arts & Publishing", "Graphics & Animation"],
      icon: "🎨",
      href: "/subsidiary/arts"
    },
    {
      name: "Art Scope Farms",
      title: "Art Scope Farms", 
      description: "Sustainable agriculture initiatives focusing on organic farming, smart farming technologies, and food security programs for communities.",
      features: ["Organic Agriculture", "Smart Farming Technologies", "Food Security Initiatives", "Sustainable Farming Practices"],
      icon: "🌱",
      href: "/subsidiary/farms"
    },
    {
      name: "Art Scope Supplies",
      title: "Art Scope Supplies",
      description: "Distribution network for essential goods, branding materials, and merchandising solutions for businesses and organizations.",
      features: ["Essential Goods Distribution", "Branding Materials", "Merchandising Solutions", "Supply Chain Management"],
      icon: "📦",
      href: "/subsidiary/supplies"
    },
    {
      name: "Art Scope Health & Supplies",
      title: "Art Scope Health & Supplies",
      description: "Health and wellness initiatives including health campaigns, wellness programs, and medical equipment supply services.",
      features: ["Health Campaigns", "Wellness Programs", "Medical Equipment Supply", "Health Program Coordination"],
      icon: "🏥",
      href: "/subsidiary/health"
    },
    {
      name: "Art Scope Tourism & Travel",
      title: "Art Scope Tourism & Travel",
      description: "Cultural tourism experiences, travel packages, and creative safaris showcasing the best of African culture and creativity.",
      features: ["Cultural Tourism", "Travel Packages", "Creative Safaris", "Heritage Experiences"],
      icon: "✈️",
      href: "/subsidiary/tourism"
    },
    {
      name: "Art Scope Transport & Logistics",
      title: "Art Scope Transport & Logistics",
      description: "Comprehensive cargo transport and logistics coordination services for events, enterprise operations, and business needs.",
      features: ["Cargo Transport", "Event Logistics Coordination", "Enterprise Logistics", "Supply Chain Optimization"],
      icon: "🚛",
      href: "/subsidiary/transport"
    },
    {
      name: "Art Scope Tech Innovations",
      title: "Art Scope Tech Innovations",
      description: "Cutting-edge technology solutions including AI-driven art applications, digital solutions, automation systems, and solar technology.",
      features: ["AI-driven Art Applications", "Digital Solutions", "Automation Systems", "Solar Technology"],
      icon: "💻",
      href: "/subsidiary/tech"
    },
    {
      name: "Art Scope Construction",
      title: "Art Scope Construction",
      description: "Specialized construction services for creative spaces, event venues, art centers, and community development projects.",
      features: ["Creative Spaces Construction", "Event Venues Development", "Art Centers Design & Build", "Community Projects"],
      icon: "🏗️",
      href: "/subsidiary/construction"
    },
    {
      name: "Art Scope Solid Waste Management",
      title: "Art Scope Solid Waste Management",
      description: "Environmental sustainability solutions including green innovations, waste management systems, and recycling programs.",
      features: ["Green Innovations", "Environmental Sustainability", "Waste Management Systems", "Recycling Programs"],
      icon: "♻️",
      href: "/subsidiary/waste-management"
    },
    {
      name: "Art Scope Schools",
      title: "Art Scope Schools",
      description: "Art-focused educational programs providing talent development, mentorship, and specialized creative education for all ages.",
      features: ["Art-focused Education", "Talent Development", "Creative Mentorship", "Skills Training Programs"],
      icon: "🎓",
      href: "/subsidiary/schools"
    }
  ];

  // Hero carousel images
  const heroImages = [
    {
      src: "/images/photos/IMG-20250714-WA0131.jpg",
      alt: "Operations Hub - Business Management Center"
    },
    {
      src: "/images/photos/IMG-20250714-WA0132.jpg", 
      alt: "Innovation and Technology Operations"
    },
    {
      src: "/images/photos/IMG-20250714-WA0133.jpg",
      alt: "Sustainable Business Practices"
    },
    {
      src: "/images/photos/IMG-20250714-WA0134.jpg",
      alt: "Creative Excellence and Operations"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Dynamic Hero Section */}
      <HeroCarousel 
        images={heroImages} 
        interval={3000}
        className="py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            {/* Company Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-navy/80 border border-yellow/50 rounded-full mb-8 backdrop-blur-md">
              <span className="text-yellow font-semibold text-sm tracking-wide uppercase">
                Business Operations
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-white drop-shadow-2xl leading-tight">
              Our Operations
            </h1>
            
            <p className="text-xl sm:text-2xl text-yellow mb-8 font-semibold max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Discover our diverse portfolio of subsidiaries and business units
            </p>
            
            <p className="text-lg font-medium max-w-4xl mx-auto text-white/95 leading-relaxed mb-12 drop-shadow-md">
              Art Scope Enterprises operates across multiple sectors, delivering 
              innovative solutions and exceptional value through our specialized subsidiaries.
            </p>
            
            <div className="flex justify-center">
              <a href="#subsidiaries" className="group inline-flex items-center px-8 py-4 bg-yellow/90 hover:bg-yellow text-navy font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className="mr-3">Explore Subsidiaries</span>
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </HeroCarousel>

      {/* Overview Section */}
      <section id="subsidiaries" className="py-20 bg-gradient-to-r from-yellow via-yellow to-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
              Diversified Excellence
            </h2>
            <p className="text-lg text-navy/90 leading-relaxed font-medium max-w-4xl mx-auto">
              Our operations span across multiple key sectors through our 10 specialized subsidiaries, 
              each led by industry experts and backed by our commitment to innovation, quality, and sustainable growth.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="card-primary bg-navy p-8 text-center card-hover group">
              <div className="text-5xl font-bold text-yellow mb-4 group-hover:scale-110 transition-transform duration-300">10</div>
              <div className="text-yellow font-semibold text-lg">Active Subsidiaries</div>
            </div>
            <div className="card-primary bg-navy p-8 text-center card-hover group">
              <div className="text-5xl font-bold text-yellow mb-4 group-hover:scale-110 transition-transform duration-300">2024</div>
              <div className="text-yellow font-semibold text-lg">Year Established</div>
            </div>
            <div className="card-primary bg-navy p-8 text-center card-hover group">
              <div className="text-5xl font-bold text-yellow mb-4 group-hover:scale-110 transition-transform duration-300">6</div>
              <div className="text-yellow font-semibold text-lg">Revenue Streams</div>
            </div>
            <div className="card-primary bg-navy p-8 text-center card-hover group">
              <div className="text-5xl font-bold text-yellow mb-4 group-hover:scale-110 transition-transform duration-300">5</div>
              <div className="text-yellow font-semibold text-lg">Strategic Objectives</div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidiaries Grid */}
      <section className="py-20 bg-white text-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
              Our Subsidiaries
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Each subsidiary represents excellence in its field, delivering specialized solutions and driving innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subsidiaries.map((subsidiary, index) => (
              <SubsidiaryCard 
                key={index}
                {...subsidiary}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-navy via-blue-900 to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative w-24 h-24 mx-auto mb-8 rounded-full overflow-hidden">
            <Image
              src="/images/photos/IMG-20250714-WA0162.jpg"
              alt="Partnership Opportunities - Collaboration and Growth"
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-yellow mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-yellow/90 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
            Explore how our diverse operations can support your business goals 
            and drive sustainable growth together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="btn-primary px-10 py-4 text-lg font-bold inline-flex items-center space-x-2 group">
              <span>Get In Touch</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
            <a href="/about" className="btn-secondary px-10 py-4 text-lg font-bold inline-flex items-center space-x-2 group">
              <span>Learn More</span>
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
