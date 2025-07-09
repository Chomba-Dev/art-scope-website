import EventCard from '../../components/EventCard';

export const metadata = {
  title: "Events & News - Art Scope Enterprises Limited",
  description: "Stay updated with the latest events, news, and announcements from Art Scope Enterprises Limited and our subsidiaries.",
};

export default function Events() {
  const events = [
    {
      title: "National Creative Arts Expo & Awards 2025",
      date: "December 2025",
      category: "Annual Event",
      image: "/images/events/arts-expo.jpg",
      excerpt: "Annual celebration recognizing and promoting creative excellence across Africa. Showcase your talents and connect with industry leaders.",
      location: "Lusaka, Zambia"
    },
    {
      title: "ArtSphere Podcast & TV Show Launch",
      date: "Mid 2025",
      category: "Media Launch", 
      image: "/images/events/artsphere-launch.jpg",
      excerpt: "Media platform showcasing African creativity and innovation through engaging content and storytelling.",
      location: "Multi-platform Release"
    },
    {
      title: "Youth Skills Development Program Rollout",
      date: "Early 2025",
      category: "Educational Initiative",
      image: "/images/events/youth-program.jpg",
      excerpt: "Nationwide initiative to equip young people with creative and entrepreneurial skills for sustainable development.",
      location: "Multiple Locations, Zambia"
    },
    {
      title: "Creative Hubs Network Establishment",
      date: "2025-2026",
      category: "Infrastructure",
      image: "/images/events/creative-hubs.jpg",
      excerpt: "Building creative centers across Zambia to support artistic and entrepreneurial development in communities.",
      location: "Nationwide, Zambia"
    },
    {
      title: "Art Scope Technology Innovation Showcase",
      date: "Q2 2025",
      category: "Technology",
      image: "/images/events/tech-showcase.jpg",
      excerpt: "Demonstrating AI-driven art applications, digital solutions, and automation systems for the creative industry.",
      location: "Lusaka, Zambia"
    },
    {
      title: "Sustainable Agriculture & Food Security Summit",
      date: "Q1 2025",
      category: "Agriculture",
      image: "/images/events/agriculture-summit.jpg",
      excerpt: "Exploring organic farming, smart farming technologies, and food security initiatives through Art Scope Farms.",
      location: "Lusaka, Zambia"
    }
  ];

  const news = [
    {
      title: "Art Scope Enterprises Limited Officially Incorporated",
      date: "August 3, 2024",
      category: "Company News",
      image: "/images/news/incorporation.jpg",
      excerpt: "Art Scope Enterprises Limited (formerly Sword of Destiny Arts and Creativity Limited) officially incorporated with 10 active subsidiaries."
    },
    {
      title: "Strategic Objectives for 2025-2026 Announced",
      date: "January 2025",
      category: "Strategic Planning",
      image: "/images/news/strategic-objectives.jpg",
      excerpt: "Five key strategic objectives announced including nationwide creative hubs, ArtSphere media platform, and youth development programs."
    },
    {
      title: "10 Active Subsidiaries Now Operational",
      date: "December 2024",
      category: "Business Development",
      image: "/images/news/subsidiaries.jpg",
      excerpt: "All 10 subsidiaries now active, spanning arts, agriculture, technology, health, tourism, education, and sustainable development."
    },
    {
      title: "Investment Focus Areas Identified for 2025-2026",
      date: "December 2024",
      category: "Investment",
      image: "/images/news/investment-focus.jpg",
      excerpt: "Key areas for strategic investment identified including ArtSphere production, creative hub infrastructure, and digital content studios."
    },
    {
      title: "Partnership Opportunities Opened",
      date: "November 2024",
      category: "Partnerships",
      image: "/images/news/partnerships.jpg",
      excerpt: "Seeking strategic partnerships with government institutions, educational organizations, private companies, and international NGOs."
    },
    {
      title: "CEO Marvelous Prosper Chilufya Appointed",
      date: "August 2024",
      category: "Leadership",
      image: "/images/news/ceo-appointment.jpg",
      excerpt: "Marvelous Prosper Chilufya appointed as Chief Executive Officer, bringing vision for creative industry transformation."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-blue-900 to-navy text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">🎉</div>
          <div className="absolute top-20 right-20 text-4xl">📅</div>
          <div className="absolute bottom-20 left-20 text-5xl">📰</div>
          <div className="absolute bottom-10 right-10 text-6xl">🎪</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="image-placeholder w-32 h-32 mx-auto mb-8 rounded-full">
              <div className="text-center">
                <div className="text-6xl mb-2">🎭</div>
                <p className="text-sm font-bold">Events Hub</p>
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow to-white bg-clip-text text-transparent">
              Events & News
            </h1>
            <p className="text-xl sm:text-2xl text-yellow mb-8 font-semibold max-w-4xl mx-auto">
              Stay updated with our latest events, announcements, and industry insights
            </p>
            <p className="text-lg font-medium max-w-3xl mx-auto text-white/90 leading-relaxed">
              Discover upcoming events, celebrate achievements, and stay informed about our journey in transforming the creative landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-gradient-to-r from-yellow via-yellow to-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            <button className="btn-primary px-8 py-3 text-lg font-bold">
              All
            </button>
            <button className="btn-secondary px-8 py-3 text-lg font-bold">
              Events
            </button>
            <button className="btn-secondary px-8 py-3 text-lg font-bold">
              News
            </button>
            <button className="btn-secondary px-8 py-3 text-lg font-bold">
              Announcements
            </button>
          </div>
        </div>
      </section>

      {/* Featured/Upcoming Events Section */}
      <section className="py-20 bg-white text-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
              🎯 Upcoming Events
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join us for exciting events that celebrate creativity, innovation, and community development.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.slice(0, 2).map((event, index) => (
              <EventCard key={index} {...event} type="event" />
            ))}
          </div>
        </div>
      </section>

      {/* All Events Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
              🎪 All Events & Programs
            </h2>
            <p className="text-xl text-navy/80 max-w-3xl mx-auto">
              Explore our comprehensive calendar of events, workshops, and initiatives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.slice(2).map((event, index) => (
              <EventCard key={index} {...event} type="event" />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-gradient-to-r from-navy via-blue-900 to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-yellow mb-6">
              📰 Latest News
            </h2>
            <p className="text-xl text-yellow/90 max-w-3xl mx-auto">
              Stay informed with the latest developments, achievements, and announcements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <EventCard 
                key={index} 
                title={article.title}
                date={article.date}
                category={article.category}
                description={article.excerpt}
                excerpt={article.excerpt}
                image={article.image}
                type="news"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-yellow via-yellow to-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="image-placeholder w-24 h-24 mx-auto mb-8 rounded-full">
              <div className="text-center">
                <div className="text-4xl mb-1">📧</div>
                <p className="text-xs font-bold">Newsletter</p>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-navy/90 mb-12 font-medium leading-relaxed">
              Subscribe to our newsletter for the latest updates on events, news, insights, and opportunities in the creative industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-navy text-navy font-medium focus:ring-2 focus:ring-navy bg-white placeholder:text-navy/60 text-lg"
              />
              <button className="btn-primary px-8 py-4 text-lg font-bold whitespace-nowrap inline-flex items-center space-x-2">
                <span>Subscribe</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-navy/70 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
