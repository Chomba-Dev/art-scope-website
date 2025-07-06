export default function Media() {
  const mediaItems = [
    {
      type: "video",
      title: "Art Scope: Transforming Africa's Business Landscape",
      description: "Our CEO discusses the company's vision and impact across African markets.",
      thumbnail: "/images/ceo-interview.jpg",
      duration: "15:30",
      date: "February 2024"
    },
    {
      type: "video",
      title: "Sustainable Energy Projects in West Africa",
      description: "Documentary showcasing our renewable energy initiatives.",
      thumbnail: "/images/energy-documentary.jpg",
      duration: "22:45",
      date: "January 2024"
    },
    {
      type: "video",
      title: "Digital Transformation Success Stories",
      description: "Client testimonials and case studies from our technology solutions.",
      thumbnail: "/images/digital-transformation.jpg",
      duration: "12:15",
      date: "December 2023"
    }
  ];

  const galleryImages = [
    { src: "/images/gallery/office-lagos.jpg", alt: "Lagos Office", caption: "Our headquarters in Lagos, Nigeria" },
    { src: "/images/gallery/team-meeting.jpg", alt: "Team Meeting", caption: "Executive team strategic planning session" },
    { src: "/images/gallery/construction-site.jpg", alt: "Construction Site", caption: "Solar farm construction in Ghana" },
    { src: "/images/gallery/tech-team.jpg", alt: "Technology Team", caption: "Our software development team" },
    { src: "/images/gallery/logistics-warehouse.jpg", alt: "Warehouse", caption: "State-of-the-art logistics facility" },
    { src: "/images/gallery/conference.jpg", alt: "Conference", caption: "Annual investment summit 2023" },
    { src: "/images/gallery/award-ceremony.jpg", alt: "Award Ceremony", caption: "Sustainability excellence award" },
    { src: "/images/gallery/partnership-signing.jpg", alt: "Partnership", caption: "Strategic partnership signing ceremony" }
  ];

  const pressReleases = [
    {
      title: "Art Scope Announces $100M Investment in African Infrastructure",
      date: "March 1, 2024",
      excerpt: "Major investment initiative focuses on sustainable infrastructure development across sub-Saharan Africa."
    },
    {
      title: "Partnership with European Development Bank",
      date: "February 15, 2024",
      excerpt: "Strategic partnership to accelerate renewable energy projects and promote economic development."
    },
    {
      title: "Art Scope Technology Wins Innovation Award",
      date: "January 30, 2024",
      excerpt: "Recognition for groundbreaking supply chain management platform serving emerging markets."
    }
  ];

  return (
    <div className="min-h-screen bg-navy">
      {/* Hero Section */}
      <div className="bg-yellow text-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Media Center
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-semibold">
              Explore our multimedia content, press releases, and visual stories
            </p>
          </div>
        </div>
      </div>

      {/* Media Navigation */}
      <div className="py-8 bg-navy border-b border-yellow">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-yellow text-navy rounded-lg font-medium">
              All Media
            </button>
            <button className="px-6 py-2 bg-navy border-2 border-yellow text-yellow rounded-lg font-medium hover:bg-yellow hover:text-navy">
              Videos
            </button>
            <button className="px-6 py-2 bg-navy border-2 border-yellow text-yellow rounded-lg font-medium hover:bg-yellow hover:text-navy">
              Photos
            </button>
            <button className="px-6 py-2 bg-navy border-2 border-yellow text-yellow rounded-lg font-medium hover:bg-yellow hover:text-navy">
              Press Releases
            </button>
            <button className="px-6 py-2 bg-navy border-2 border-yellow text-yellow rounded-lg font-medium hover:bg-yellow hover:text-navy">
              Downloads
            </button>
          </div>
        </div>
      </div>

      {/* Featured Videos */}
      <div className="py-16 bg-yellow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
            Featured Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaItems.map((item, index) => (
              <div key={index} className="bg-navy rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-yellow">
                <div className="relative">
                  <div className="h-48 bg-yellow flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-8 h-8 text-yellow" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <span className="text-navy text-sm font-medium">Video Thumbnail</span>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-navy text-yellow px-2 py-1 rounded text-sm font-medium">
                    {item.duration}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-yellow mb-2 font-medium">{item.date}</div>
                  <h3 className="font-bold text-lg mb-3 text-yellow">{item.title}</h3>
                  <p className="text-yellow mb-4 font-medium">{item.description}</p>
                  <button className="text-yellow font-bold hover:text-white transition-colors">
                    Watch Video →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow text-center mb-16">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all border-2 border-yellow">
                <div className="h-64 bg-yellow flex items-center justify-center">
                  <span className="text-navy font-medium">Gallery Image</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 text-yellow">
                    <p className="text-sm font-bold">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-yellow text-navy px-8 py-3 rounded-lg font-bold hover:bg-yellow/90 transition-colors">View Full Gallery</button>
          </div>
        </div>
      </div>

      {/* Press Releases */}
      <div className="py-16 bg-yellow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
            Latest Press Releases
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-navy rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-yellow">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 text-yellow">{release.title}</h3>
                    <p className="text-yellow mb-4 font-medium">{release.excerpt}</p>
                  </div>
                  <div className="md:ml-6 md:text-right">
                    <div className="text-sm text-yellow mb-2 font-medium">{release.date}</div>
                    <button className="bg-yellow text-navy px-4 py-2 rounded font-medium hover:bg-yellow/90 transition-colors text-sm">Download PDF</button>
                  </div>
                </div>
                <div className="border-t border-yellow pt-4">
                  <button className="text-yellow font-bold hover:text-white transition-colors">
                    Read Full Release →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Media Kit Download */}
      <div className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow mb-6">
              Media Kit
            </h2>
            <p className="text-xl text-yellow mb-8 font-medium">
              Download our comprehensive media kit including logos, brand guidelines, 
              executive photos, and company fact sheets.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-yellow rounded-lg p-6 border-2 border-navy">
                <h3 className="font-bold text-navy mb-2">Brand Assets</h3>
                <p className="text-navy text-sm mb-4 font-medium">Logos, colors, and brand guidelines</p>
                <button className="bg-navy text-yellow px-4 py-2 rounded font-bold hover:bg-navy/90 transition-colors">
                  Download
                </button>
              </div>
              <div className="bg-yellow rounded-lg p-6 border-2 border-navy">
                <h3 className="font-bold text-navy mb-2">Executive Photos</h3>
                <p className="text-navy text-sm mb-4 font-medium">High-resolution leadership photos</p>
                <button className="bg-navy text-yellow px-4 py-2 rounded font-bold hover:bg-navy/90 transition-colors">
                  Download
                </button>
              </div>
              <div className="bg-yellow rounded-lg p-6 border-2 border-navy">
                <h3 className="font-bold text-navy mb-2">Company Facts</h3>
                <p className="text-navy text-sm mb-4 font-medium">Key statistics and information</p>
                <button className="bg-navy text-yellow px-4 py-2 rounded font-bold hover:bg-navy/90 transition-colors">
                  Download
                </button>
              </div>
            </div>
            <button className="btn-primary bg-yellow text-navy hover:bg-yellow/90">
              Download Complete Media Kit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
