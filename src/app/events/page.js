import EventCard from '../../components/EventCard';

export default function Events() {
  const events = [
    {
      title: "Annual Investment Summit 2024",
      date: "March 15, 2024",
      category: "Conference",
      image: "/images/summit-2024.jpg",
      excerpt: "Join industry leaders and investors for our flagship annual summit focusing on emerging market opportunities and sustainable investment strategies.",
      location: "Lagos, Nigeria"
    },
    {
      title: "Art Scope Technology Launch",
      date: "February 28, 2024",
      category: "Product Launch",
      image: "/images/tech-launch.jpg",
      excerpt: "Introducing our latest digital platform that revolutionizes supply chain management across Africa.",
      location: "Virtual Event"
    },
    {
      title: "Sustainable Energy Initiative",
      date: "January 20, 2024",
      category: "Initiative",
      image: "/images/energy-initiative.jpg",
      excerpt: "Announcing our $50M commitment to renewable energy projects across West Africa.",
      location: "Accra, Ghana"
    },
    {
      title: "Partnership with Global Tech Giants",
      date: "December 15, 2023",
      category: "Partnership",
      image: "/images/partnership.jpg",
      excerpt: "Strategic partnerships announced with leading technology companies to accelerate digital transformation in emerging markets.",
      location: "Dubai, UAE"
    }
  ];

  const news = [
    {
      title: "Art Scope Expands Operations to East Africa",
      date: "February 10, 2024",
      category: "Expansion",
      image: "/images/expansion.jpg",
      excerpt: "New offices opened in Kenya and Tanzania to serve the growing East African market with enhanced logistics and consulting services."
    },
    {
      title: "Q4 2023 Financial Results",
      date: "January 25, 2024",
      category: "Financial",
      image: "/images/financial-results.jpg",
      excerpt: "Record-breaking performance with 35% revenue growth and successful completion of major infrastructure projects."
    },
    {
      title: "Sustainability Award Recognition",
      date: "December 5, 2023",
      category: "Award",
      image: "/images/sustainability-award.jpg",
      excerpt: "Art Scope receives the African Sustainability Excellence Award for outstanding commitment to environmental responsibility."
    },
    {
      title: "New Leadership Appointments",
      date: "November 18, 2023",
      category: "Leadership",
      image: "/images/leadership.jpg",
      excerpt: "Welcoming new executive team members to drive innovation and growth across our subsidiaries."
    }
  ];

  return (
    <div className="min-h-screen bg-navy">
      {/* Hero Section */}
      <div className="bg-yellow text-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Events & News
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-semibold">
              Stay updated with our latest events, announcements, and industry insights
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="py-8 bg-navy border-b border-yellow">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-yellow text-navy rounded-lg font-medium">
              All
            </button>
            <button className="px-6 py-2 bg-navy border-2 border-yellow text-yellow rounded-lg font-medium hover:bg-yellow hover:text-navy">
              Events
            </button>
            <button className="px-6 py-2 bg-navy border-2 border-yellow text-yellow rounded-lg font-medium hover:bg-yellow hover:text-navy">
              News
            </button>
            <button className="px-6 py-2 bg-navy border-2 border-yellow text-yellow rounded-lg font-medium hover:bg-yellow hover:text-navy">
              Announcements
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="py-16 bg-yellow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.slice(0, 2).map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>

      {/* Recent Events */}
      <div className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow text-center mb-16">
            Recent Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.slice(2).map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="py-16 bg-yellow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
            Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {news.map((article, index) => (
              <div key={index} className="bg-navy rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-yellow">
                <div className="h-48 bg-yellow flex items-center justify-center">
                  <span className="text-navy font-medium">Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-yellow text-navy text-sm font-bold rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-yellow font-medium">{article.date}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-yellow">{article.title}</h3>
                  <p className="text-yellow mb-4 text-sm font-medium">{article.excerpt}</p>
                  <a href="#" className="text-yellow font-bold hover:text-white transition-colors">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-yellow mb-8 font-medium">
              Subscribe to our newsletter for the latest updates on events, news, and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-yellow text-navy font-medium focus:ring-2 focus:ring-yellow bg-yellow placeholder:text-navy"
              />
              <button className="bg-yellow text-navy px-6 py-3 rounded-lg font-bold hover:bg-yellow/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
