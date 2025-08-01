import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import HeroCarousel from "@/components/HeroCarousel";

export const metadata = {
  title: "About Us - Art Scope Enterprises Limited",
  description: "Learn about our mission, vision, and commitment to empowering artists and creatives across Africa through innovation and sustainable entrepreneurship.",
};

export default function About() {
  const coreValues = [
    {
      name: "Creativity",
      description: "Fostering innovative thinking and artistic expression in all our endeavors.",
      icon: "🎨"
    },
    {
      name: "Integrity", 
      description: "Maintaining transparency, honesty, and ethical practices in all our operations.",
      icon: "🤝"
    },
    {
      name: "Innovation",
      description: "Embracing cutting-edge solutions and pioneering new approaches to creative industry challenges.",
      icon: "🚀"
    },
    {
      name: "Excellence",
      description: "Delivering exceptional quality and exceeding expectations in every project and partnership.",
      icon: "⭐"
    },
    {
      name: "Inclusiveness",
      description: "Creating opportunities for all, regardless of background, to participate in the creative economy.",
      icon: "🌍"
    },
    {
      name: "Community",
      description: "Building strong, supportive networks that empower collective growth and success.",
      icon: "👥"
    }
  ];

  // Hero carousel images
  const heroImages = [
    {
      src: "/images/photos/IMG-20250714-WA0130.jpg",
      alt: "Art Scope Enterprises - Company Identity and Leadership"
    },
    {
      src: "/images/photos/IMG-20250714-WA0131.jpg", 
      alt: "Our Mission - Empowering Creative Communities"
    },
    {
      src: "/images/photos/IMG-20250714-WA0132.jpg",
      alt: "Our Vision - Leading African Creative Innovation Hub"
    },
    {
      src: "/images/photos/IMG-20250714-WA0133.jpg",
      alt: "Our Values - Creativity, Integrity, and Excellence"
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
                About Art Scope Enterprises
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-white drop-shadow-2xl leading-tight">
              About Art Scope Enterprises Limited
            </h1>
            
            <p className="text-xl sm:text-2xl text-yellow max-w-4xl mx-auto leading-relaxed font-semibold drop-shadow-lg">
              Empowering Artists and Creatives across Africa through innovation, integration, and sustainable entrepreneurship.
            </p>
            
            <div className="mt-12 flex justify-center">
              <a href="#mission" className="group inline-flex items-center px-8 py-4 bg-yellow/90 hover:bg-yellow text-navy font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className="mr-3">Learn More</span>
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </HeroCarousel>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-24 bg-gradient-to-r from-yellow via-yellow to-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card-primary bg-navy p-10 border-4 border-yellow shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🎯</div>
              </div>
              <h2 className="text-3xl font-bold text-yellow mb-6 text-center">Our Mission</h2>
              <p className="text-yellow text-lg leading-relaxed font-medium">
                To unleash creative potential for sustainable development by promoting the integration of arts, culture, 
                technology, and business through inclusive platforms, strategic partnerships, and innovative enterprise.
              </p>
            </div>
            
            <div className="card-primary bg-white text-navy p-10 border-4 border-navy shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🌟</div>
              </div>
              <h2 className="text-3xl font-bold text-navy mb-6 text-center">Our Vision</h2>
              <p className="text-navy text-lg leading-relaxed font-medium">
                To be the leading African hub for creative innovation, youth empowerment, and sustainable entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Legal Information */}
      <section className="py-20 bg-white text-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy text-center mb-12">Legal Identity & Foundation</h2>
            
            <div className="space-y-8">
              <div className="bg-light-gray p-8 rounded-lg border-l-4 border-navy">
                <h3 className="text-2xl font-bold text-navy mb-4">Company Registration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      <strong className="text-navy">Company Name:</strong> Art Scope Enterprises Limited<br/>
                      <strong className="text-navy">Formerly Known As:</strong> Sword of Destiny Arts and Creativity Limited<br/>
                      <strong className="text-navy">Entity Number:</strong> 120241010707<br/>
                      <strong className="text-navy">Date of Incorporation:</strong> 3rd August 2024
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      <strong className="text-navy">Business Status:</strong> Active<br/>
                      <strong className="text-navy">Form of Entity:</strong> Local Company - Limited by Shares<br/>
                      <strong className="text-navy">Compliance:</strong> Fully compliant with PACRA, ZRA, and Companies Act No. 10 of 2017
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-light-gray p-8 rounded-lg border-l-4 border-yellow">
                <h3 className="text-2xl font-bold text-navy mb-4">Registered Address & Contact</h3>
                <p className="text-dark-gray leading-relaxed font-medium">
                  <strong className="text-navy">Address:</strong> Plot No. 1132, Olipa Banda, Kanyama Site and Service, Lusaka, Zambia<br/>
                  <strong className="text-navy">Email:</strong> prosperchilufya9@gmail.com<br/>
                  <strong className="text-navy">Phone:</strong> +260 973 577 060 / +260 958 528 660
                </p>
              </div>

              <div className="bg-light-gray p-8 rounded-lg border-l-4 border-navy">
                <h3 className="text-2xl font-bold text-navy mb-4">Leadership</h3>
                <p className="text-dark-gray leading-relaxed font-medium">
                  <strong className="text-navy">Chief Executive Officer:</strong> Marvelous Prosper Chilufya<br/>
                  <strong className="text-navy">Email:</strong> prosperchilufya9@gmail.com<br/>
                  <strong className="text-navy">Phone:</strong> +260 973 577 060 / +260 958 528 660
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-yellow mb-6">Our Core Values</h2>
              <p className="text-xl text-yellow max-w-3xl mx-auto">
                These fundamental principles guide our decisions, shape our culture, and drive our commitment to excellence.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <ScrollReveal key={index} animation="up" delay={Math.floor(index / 3) + 1}>
                <div className="card-primary bg-yellow p-8 text-center card-hover group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4">{value.name}</h3>
                  <p className="text-navy font-medium leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business Overview */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Our Business</h2>
            <p className="text-xl text-dark-gray max-w-4xl mx-auto">
              Art Scope Enterprises Limited operates through 10 specialized subsidiaries, creating a comprehensive 
              ecosystem that integrates arts, culture, technology, and business across multiple sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center card-primary bg-white p-8 shadow-lg border-l-4 border-yellow card-hover group">
              <div className="text-5xl font-bold text-navy mb-4 group-hover:text-yellow transition-colors duration-300">10</div>
              <div className="text-navy font-semibold text-lg">Active Subsidiaries</div>
            </div>
            <div className="text-center card-primary bg-white p-8 shadow-lg border-l-4 border-navy card-hover group">
              <div className="text-5xl font-bold text-navy mb-4 group-hover:text-yellow transition-colors duration-300">6</div>
              <div className="text-navy font-semibold text-lg">Revenue Streams</div>
            </div>
            <div className="text-center card-primary bg-white p-8 shadow-lg border-l-4 border-yellow card-hover group">
              <div className="text-5xl font-bold text-navy mb-4 group-hover:text-yellow transition-colors duration-300">5</div>
              <div className="text-navy font-semibold text-lg">Strategic Objectives</div>
            </div>
            <div className="text-center card-primary bg-white p-8 shadow-lg border-l-4 border-navy card-hover group">
              <div className="text-5xl font-bold text-navy mb-4 group-hover:text-yellow transition-colors duration-300">6</div>
              <div className="text-navy font-semibold text-lg">Target Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-20 bg-white text-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-6">Strategic Objectives (2025-2026)</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Our roadmap for transforming the creative landscape and empowering communities across Zambia and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-light-gray p-6 rounded-lg border-l-4 border-yellow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-navy mb-4">Establish Nationwide Creative Hubs</h3>
              <p className="text-gray-700 font-medium">
                Building creative centers across Zambia to support artistic and entrepreneurial development.
              </p>
            </div>
            <div className="bg-light-gray p-6 rounded-lg border-l-4 border-navy hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-navy mb-4">Launch ArtSphere Podcast and TV Show</h3>
              <p className="text-dark-gray font-medium">
                Media platform showcasing African creativity and innovation through engaging content.
              </p>
            </div>
            <div className="bg-light-gray p-6 rounded-lg border-l-4 border-yellow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-navy mb-4">Host National Creative Arts Expo & Awards</h3>
              <p className="text-dark-gray font-medium">
                Annual celebration recognizing and promoting creative excellence across Africa.
              </p>
            </div>
            <div className="bg-light-gray p-6 rounded-lg border-l-4 border-navy hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-navy mb-4">Youth Skills Development Programs</h3>
              <p className="text-dark-gray font-medium">
                Nationwide initiatives to equip young people with creative and entrepreneurial skills.
              </p>
            </div>
            <div className="bg-light-gray p-6 rounded-lg border-l-4 border-yellow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-navy mb-4">Secure Sustainable Investments</h3>
              <p className="text-dark-gray font-medium">
                Building strategic partnerships with donors and investors for long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Subsidiaries Overview */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow mb-6">Our 10 Active Subsidiaries</h2>
            <p className="text-xl text-yellow max-w-4xl mx-auto">
              Each subsidiary represents a key sector in our integrated approach to creative industry development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Art Scope Arts",
              "Art Scope Farms", 
              "Art Scope Supplies",
              "Art Scope Health & Supplies",
              "Art Scope Tourism & Travel",
              "Art Scope Transport & Logistics",
              "Art Scope Tech Innovations", 
              "Art Scope Construction",
              "Art Scope Solid Waste Management",
              "Art Scope Schools"
            ].map((subsidiary, index) => (
              <div key={index} className="bg-yellow p-4 rounded-lg text-center hover:bg-opacity-90 transition-colors">
                <h3 className="font-bold text-navy text-sm">{subsidiary}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Call to Action with Background */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/photos/IMG-20250714-WA0160.jpg"
            alt="Art Scope Enterprises - Ready to Learn More"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          {/* Professional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-blue-900/90"></div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border border-yellow rounded-full"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-yellow rounded-full"></div>
            <div className="absolute bottom-32 left-32 w-20 h-20 border border-yellow rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-28 h-28 border border-yellow rounded-full"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Professional Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-yellow to-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <svg className="w-10 h-10 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-yellow to-white bg-clip-text text-transparent">
            Ready to Learn More?
          </h2>
          
          <p className="text-xl sm:text-2xl text-yellow/90 mb-8 font-semibold leading-tight">
            Transform Your Creative Vision Into Reality
          </p>
          
          <p className="text-lg text-white/80 mb-16 max-w-4xl mx-auto leading-relaxed">
            Discover how Art Scope Enterprises Limited is transforming the creative landscape,
            empowering artists, and creating sustainable opportunities for growth and development across Africa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/operations" className="group relative inline-flex items-center px-10 py-4 bg-gradient-to-r from-yellow to-amber-400 text-navy font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-yellow/25 hover:-translate-y-1">
              <span className="mr-3">View Our Operations</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-300 to-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            
            <a href="/contact" className="group inline-flex items-center px-10 py-4 border-2 border-yellow text-yellow font-bold text-lg rounded-xl transition-all duration-300 hover:bg-yellow hover:text-navy">
              <span className="mr-3">Contact Us</span>
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-yellow/20">
            <p className="text-yellow/70 text-sm mb-4 uppercase tracking-wide font-semibold">Empowering Creativity Across Africa</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
              <span className="text-sm font-medium">Creative Innovation</span>
              <span className="w-1 h-1 bg-yellow/50 rounded-full"></span>
              <span className="text-sm font-medium">Youth Empowerment</span>
              <span className="w-1 h-1 bg-yellow/50 rounded-full"></span>
              <span className="text-sm font-medium">Sustainable Development</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
