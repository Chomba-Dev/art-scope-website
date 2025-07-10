import HeroSection from "@/components/HeroSection";
import SubsidiaryCard from "@/components/SubsidiaryCard";
import EventCard from "@/components/EventCard";
import ScrollReveal from "@/components/ScrollReveal";

function Home() {
  const subsidiaries = [
    {
      title: "Art Scope Arts",
      description: "Music, Dance, Theater, Fashion & Design, Events Management, Modeling, Literary Arts, Authorship & Publishing, Graphics & Animation.",
      icon: "AA",
      href: "/subsidiary/art-scope-arts",
      features: [
        "Music & Dance Productions",
        "Theater & Fashion Design", 
        "Events Management & Modeling",
        "Publishing & Animation"
      ]
    },
    {
      title: "Art Scope Farms",
      description: "Organic agriculture, smart farming, and food security initiatives promoting sustainable agricultural practices.",
      icon: "AF",
      href: "/subsidiary/art-scope-farms",
      features: [
        "Organic agriculture",
        "Smart farming techniques",
        "Food security initiatives",
        "Sustainable farming practices"
      ]
    },
    {
      title: "Art Scope Tech Innovations",
      description: "AI-driven art, digital solutions, automation systems, and solar technology for creative and sustainable innovation.",
      icon: "TI",
      href: "/subsidiary/art-scope-tech",
      features: [
        "AI-driven art solutions",
        "Digital transformation",
        "Automation systems",
        "Solar technology"
      ]
    },
    {
      title: "Art Scope Schools",
      description: "Art-focused education, talent development, and mentorship programs for creative skill development.",
      icon: "AS",
      href: "/subsidiary/art-scope-schools",
      features: [
        "Art-focused education",
        "Talent development",
        "Mentorship programs",
        "Creative skill training"
      ]
    },
    {
      title: "Art Scope Supplies",
      description: "Distribution of essential goods, branding materials, and merchandising for creative and business needs.",
      icon: "SP",
      href: "/subsidiary/art-scope-supplies",
      features: [
        "Essential goods distribution",
        "Branding materials",
        "Creative merchandising",
        "Supply chain management"
      ]
    },
    {
      title: "Art Scope Tourism & Travel",
      description: "Cultural tourism, travel packages, and creative safaris showcasing Zambian heritage and creative destinations.",
      icon: "TT",
      href: "/subsidiary/art-scope-tourism",
      features: [
        "Cultural tourism packages",
        "Creative safaris",
        "Heritage tours",
        "Travel coordination"
      ]
    }
  ];

  const recentEvents = [
    {
      title: "Annual National Creative Arts Expo 2025",
      description: "Join the premier showcase of Zambian creative talent featuring music, dance, theater, fashion, and visual arts from across the nation.",
      date: "2025-08-15",
      time: "9:00 AM - 8:00 PM",
      location: "Lusaka International Conference Centre",
      category: "Expo",
      href: "/events/national-creative-arts-expo-2025"
    },
    {
      title: "ArtSphere Podcast Launch Event",
      description: "Celebrate the official launch of ArtSphere Podcast, featuring discussions with leading creative professionals and innovators.",
      date: "2025-03-20",
      time: "6:00 PM - 9:00 PM", 
      location: "Art Scope Creative Hub, Lusaka",
      category: "Launch",
      href: "/events/artsphere-podcast-launch"
    },
    {
      title: "Youth Skills Development Workshop",
      description: "Comprehensive skills training program for young creatives focusing on entrepreneurship, digital literacy, and creative business development.",
      date: "2025-02-10",
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
          <ScrollReveal animation="up">
            <div className="text-center mb-16">
              <h2 className="section-title text-navy mb-6">🏢 Our Operations</h2>
              <div className="w-24 h-1 bg-navy mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-navy max-w-4xl mx-auto font-medium leading-relaxed">
                Discover our diverse business units working together to create sustainable impact 
                through innovation, creativity, and strategic partnerships across multiple sectors.
              </p>
            </div>
          </ScrollReveal>

          {/* Operations Image Placeholder */}
          <ScrollReveal animation="scale" delay={1}>
            <div className="mb-16">
              <div className="image-placeholder h-64 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <div className="text-5xl mb-4">🏭</div>
                  <h3 className="text-xl font-bold mb-2">Our Operations Overview</h3>
                  <p className="text-sm">Visual representation of our 10 active subsidiaries and their integration</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subsidiaries.map((subsidiary, index) => (
              <ScrollReveal key={index} animation="up" delay={Math.floor(index / 3) + 1}>
                <SubsidiaryCard {...subsidiary} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade" delay={2}>
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
          </ScrollReveal>
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
          <ScrollReveal animation="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-yellow mb-4">🎭 Latest Events & News</h2>
              <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-yellow max-w-3xl mx-auto font-semibold leading-relaxed">
                Stay updated with our latest events, workshops, and company news. 
                Join our community and be part of the creative revolution.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentEvents.map((event, index) => (
              <ScrollReveal key={index} animation="up" delay={index + 1}>
                <EventCard {...event} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade" delay={2}>
            <div className="text-center mt-12">
              <a href="/events" className="btn-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-300 inline-flex items-center space-x-2 group">
                <span>View All Events & News</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
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
          <ScrollReveal animation="up">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-white mb-6">Ready to Unleash Your Creative Potential?</h2>
              <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-8"></div>
              <p className="text-xl text-yellow leading-relaxed font-medium mb-12">
                Whether you're an artist, entrepreneur, or organization looking to innovate, 
                we're here to help you achieve your creative and business goals through strategic partnerships and innovative solutions.
              </p>
            </div>
          </ScrollReveal>
          
          {/* CTA Image Placeholder */}
          <ScrollReveal animation="scale" delay={1}>
            <div className="mb-12">
              <div className="image-placeholder h-48 rounded-2xl bg-white/10 backdrop-blur-sm border border-yellow/20">
                <div className="text-center">
                  <div className="text-5xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-white mb-2">Launch Your Creative Journey</h3>
                  <p className="text-sm text-yellow">Success stories from our community</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade" delay={2}>
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
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default Home;
