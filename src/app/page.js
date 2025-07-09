import HeroSection from "@/components/HeroSection";
import SubsidiaryCard from "@/components/SubsidiaryCard";
import EventCard from "@/components/EventCard";

function Home() {
  const subsidiaries = [
    {
      title: "Creative Studio",
      description: "Professional creative services including graphic design, branding, digital marketing, and content creation for businesses and organizations.",
      icon: "CS",
      href: "/operations/creative-studio",
      features: [
        "Brand identity development",
        "Digital marketing campaigns", 
        "Content creation and strategy",
        "Website design and development"
      ]
    },
    {
      title: "Youth Empowerment Programs",
      description: "Comprehensive training and mentorship programs designed to equip young people with creative and entrepreneurial skills.",
      icon: "YE",
      href: "/operations/youth-programs",
      features: [
        "Skills training workshops",
        "Mentorship programs",
        "Entrepreneurship bootcamps",
        "Creative leadership development"
      ]
    },
    {
      title: "Technology Innovation Hub",
      description: "Cutting-edge technology solutions and digital transformation services to help businesses leverage modern technology.",
      icon: "TH",
      href: "/operations/technology-hub",
      features: [
        "Software development",
        "Digital transformation consulting",
        "Tech training programs",
        "Innovation incubation"
      ]
    },
    {
      title: "Business Consulting",
      description: "Strategic business consulting services to help organizations grow, innovate, and achieve sustainable success.",
      icon: "BC",
      href: "/operations/consulting",
      features: [
        "Strategic planning",
        "Market research and analysis",
        "Financial consulting",
        "Operational optimization"
      ]
    }
  ];

  const recentEvents = [
    {
      title: "Creative Innovation Summit 2025",
      description: "Join leading artists, entrepreneurs, and innovators for a day of inspiration, networking, and learning about the future of creative industries in Africa.",
      date: "2025-02-15",
      time: "9:00 AM - 6:00 PM",
      location: "Dar es Salaam Convention Centre",
      category: "Conference",
      href: "/events/creative-innovation-summit-2025"
    },
    {
      title: "Youth Entrepreneurship Workshop",
      description: "A hands-on workshop designed to teach young people the fundamentals of starting and running a successful creative business.",
      date: "2025-01-25",
      time: "2:00 PM - 5:00 PM", 
      location: "Art Scope Innovation Hub",
      category: "Workshop",
      href: "/events/youth-entrepreneurship-workshop"
    },
    {
      title: "Art Scope Launches New Partnership Program",
      description: "We're excited to announce our new strategic partnership initiative aimed at fostering collaboration between creative professionals and technology companies.",
      date: "2025-01-10",
      author: "Art Scope Team",
      category: "News",
      type: "news",
      href: "/news/new-partnership-program"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Our Operations Section - Enhanced */}
      <section className="section-padding bg-gradient-to-br from-yellow via-yellow to-amber-300 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-navy rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-navy rounded-full animate-float delay-500"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-navy rounded-full animate-float delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title text-navy mb-6">🏢 Our Operations</h2>
            <div className="w-24 h-1 bg-navy mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-navy max-w-4xl mx-auto font-medium leading-relaxed">
              Discover our diverse business units working together to create sustainable impact 
              through innovation, creativity, and strategic partnerships across multiple sectors.
            </p>
          </div>

          {/* Operations Image Placeholder */}
          <div className="mb-16">
            <div className="image-placeholder h-64 rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="text-5xl mb-4">🏭</div>
                <h3 className="text-xl font-bold mb-2">Our Operations Overview</h3>
                <p className="text-sm">Visual representation of our 10 active subsidiaries and their integration</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subsidiaries.map((subsidiary, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <SubsidiaryCard {...subsidiary} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/operations" className="btn-tertiary group">
              <span className="flex items-center space-x-2">
                <span>View All Operations</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Recent Events & News Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-6xl animate-float">🎉</div>
          <div className="absolute top-20 right-20 text-4xl animate-float delay-300">📅</div>
          <div className="absolute bottom-20 left-20 text-5xl animate-float delay-700">📰</div>
          <div className="absolute bottom-10 right-10 text-6xl animate-float delay-1000">🎪</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow mb-4">🎭 Latest Events & News</h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-yellow max-w-3xl mx-auto font-semibold leading-relaxed">
              Stay updated with our latest events, workshops, and company news. 
              Join our community and be part of the creative revolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentEvents.map((event, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <EventCard {...event} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/events" className="btn-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-300 inline-flex items-center space-x-2 group">
              <span>View All Events & News</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="section-padding bg-gradient-primary relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow rounded-full translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow rounded-full -translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-white mb-6">Ready to Unleash Your Creative Potential?</h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-8"></div>
            <p className="text-xl text-yellow leading-relaxed font-medium mb-12">
              Whether you're an artist, entrepreneur, or organization looking to innovate, 
              we're here to help you achieve your creative and business goals through strategic partnerships and innovative solutions.
            </p>
          </div>
          
          {/* CTA Image Placeholder */}
          <div className="mb-12">
            <div className="image-placeholder h-48 rounded-2xl bg-white/10 backdrop-blur-sm border border-yellow/20">
              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-2">Launch Your Creative Journey</h3>
                <p className="text-sm text-yellow">Success stories from our community</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/contact" className="btn-primary group min-w-[200px]">
              <span className="flex items-center space-x-2">
                <span>Get Started Today</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a href="/about" className="btn-secondary group min-w-[200px]">
              <span className="flex items-center space-x-2">
                <span>Learn More About Us</span>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
