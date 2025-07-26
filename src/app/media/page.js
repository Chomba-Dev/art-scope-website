import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";

export const metadata = {
  title: "Media Gallery - Art Scope Enterprises Limited",
  description: "Explore our media gallery featuring videos, images, and press releases from Art Scope Enterprises Limited and our subsidiaries.",
};

export default function Media() {
  const mediaItems = [
    {
      type: "video",
      title: "Art Scope: Empowering Artists and Creatives",
      description: "CEO Marvelous Prosper Chilufya discusses our mission to transform the creative landscape.",
      thumbnail: "/images/media/ceo-interview.jpg",
      duration: "12:30",
      date: "January 2025"
    },
    {
      type: "video",
      title: "ArtSphere Podcast & TV Show Preview",
      description: "Preview of our upcoming media platform showcasing African creativity and innovation.",
      thumbnail: "/images/media/artsphere-preview.jpg",
      duration: "8:45",
      date: "December 2024"
    },
    {
      type: "video",
      title: "Our 10 Subsidiaries: Integrated Impact",
      description: "Overview of how our subsidiaries work together to create sustainable impact.",
      thumbnail: "/images/media/subsidiaries-overview.jpg",
      duration: "15:20",
      date: "November 2024"
    },
    {
      type: "video",
      title: "Art Scope Farms: Sustainable Agriculture",
      description: "Documentary showcasing our organic farming and food security initiatives.",
      thumbnail: "/images/media/farms-documentary.jpg",
      duration: "18:15",
      date: "October 2024"
    }
  ];

  const galleryImages = [
    { src: "/images/photos/IMG-20250714-WA0171.jpg", alt: "Lusaka Office", caption: "Our headquarters in Lusaka, Zambia" },
    { src: "/images/photos/IMG-20250714-WA0172.jpg", alt: "Creative Hub", caption: "Creative hub concept design" },
    { src: "/images/photos/IMG-20250714-WA0173.jpg", alt: "Youth Program", caption: "Youth skills development program" },
    { src: "/images/photos/IMG-20250714-WA0174.jpg", alt: "Organic Farm", caption: "Art Scope Farms organic agriculture" },
    { src: "/images/photos/IMG-20250714-WA0175.jpg", alt: "Technology", caption: "AI-driven art applications" },
    { src: "/images/photos/IMG-20250714-WA0176.jpg", alt: "Construction", caption: "Creative space construction project" },
    { src: "/images/photos/IMG-20250714-WA0177.jpg", alt: "Health Initiative", caption: "Health & wellness program" },
    { src: "/images/photos/IMG-20250714-WA0178.jpg", alt: "Cultural Tourism", caption: "Creative safari experience" }
  ];

  const pressReleases = [
    {
      title: "Art Scope Enterprises Limited Officially Incorporated",
      date: "August 3, 2024",
      excerpt: "Art Scope Enterprises Limited (formerly Sword of Destiny Arts and Creativity Limited) officially incorporated with 10 active subsidiaries."
    },
    {
      title: "Strategic Objectives for 2025-2026 Announced",
      date: "January 2025",
      excerpt: "Five key strategic objectives announced including nationwide creative hubs and ArtSphere media platform launch."
    },
    {
      title: "Investment Focus Areas Identified for 2025-2026",
      date: "December 2024",
      excerpt: "Key areas for strategic investment identified including ArtSphere production and creative hub infrastructure."
    },
    {
      title: "10 Active Subsidiaries Now Operational",
      date: "November 2024",
      excerpt: "All subsidiaries spanning arts, agriculture, technology, health, tourism, education, and sustainable development now active."
    }
  ];

  // Hero carousel images with correct paths
  const heroImages = [
    {
      src: "/images/photos/IMG-20250714-WA0135.jpg",
      alt: "Media Center - Content and Communications"
    },
    {
      src: "/images/photos/IMG-20250714-WA0136.jpg", 
      alt: "Creative Content Production and Media"
    },
    {
      src: "/images/photos/IMG-20250714-WA0137.jpg",
      alt: "Professional Media Services and Broadcasting"
    },
    {
      src: "/images/photos/IMG-20250714-WA0166.jpg",
      alt: "Digital Media Innovation and Storytelling"
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
                Media & Content
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-white drop-shadow-2xl leading-tight">
              Media Center
            </h1>
            
            <p className="text-xl sm:text-2xl text-yellow mb-8 font-semibold max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Explore our multimedia content, press releases, and visual stories
            </p>
            
            <p className="text-lg font-medium max-w-3xl mx-auto text-white/95 leading-relaxed mb-12 drop-shadow-md">
              Discover our journey through videos, images, and press materials that showcase our impact in transforming the creative landscape.
            </p>
            
            <div className="flex justify-center">
              <a href="#media-gallery" className="group inline-flex items-center px-8 py-4 bg-yellow/90 hover:bg-yellow text-navy font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <span className="mr-3">View Media Gallery</span>
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </HeroCarousel>

      {/* Media Navigation */}
      <section id="media-gallery" className="py-12 bg-gradient-to-r from-yellow via-yellow to-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            <button className="btn-primary px-8 py-3 text-lg font-bold">
              🎥 All Media
            </button>
            <button className="btn-secondary px-8 py-3 text-lg font-bold">
              📹 Videos
            </button>
            <button className="btn-secondary px-8 py-3 text-lg font-bold">
              📸 Photos
            </button>
            <button className="btn-secondary px-8 py-3 text-lg font-bold">
              📰 Press Releases
            </button>
            <button className="btn-secondary px-8 py-3 text-lg font-bold">
              📁 Downloads
            </button>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-20 bg-white text-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
              🎬 Featured Videos
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Watch our latest videos showcasing our work, impact, and vision for the creative industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {mediaItems.slice(0, 2).map((item, index) => (
              <div key={index} className="card-primary card-hover group">
                <div className="relative overflow-hidden rounded-t-xl">
                  <div className="relative h-64">
                    <Image
                      src="/images/photos/IMG-20250714-WA0136.jpg"
                      alt={`Video: ${item.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-navy" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-navy/80 text-yellow px-3 py-1 rounded-lg text-sm font-bold">
                    {item.duration}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-yellow mb-3 font-semibold bg-yellow/10 px-3 py-1 rounded-full inline-block">{item.date}</div>
                  <h3 className="font-bold text-xl mb-3 text-navy group-hover:text-yellow transition-colors duration-300">{item.title}</h3>
                  <p className="text-navy/80 mb-6 leading-relaxed">{item.description}</p>
                  <button className="btn-primary inline-flex items-center space-x-2">
                    <span>Watch Video</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-7H3a2 2 0 00-2 2v9a2 2 0 002 2h18a2 2 0 002-2V9a2 2 0 00-2-2z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* All Videos Grid */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-navy text-center mb-12">All Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mediaItems.slice(2).map((item, index) => (
                <div key={index} className="card-primary card-hover group">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <div className="relative h-40">
                      <Image
                        src="/images/photos/IMG-20250714-WA0137.jpg"
                        alt={`Video: ${item.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/40 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 text-navy" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-navy/80 text-yellow px-2 py-1 rounded text-xs font-bold">
                      {item.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-yellow mb-2 font-semibold">{item.date}</div>
                    <h4 className="font-bold text-sm mb-2 text-navy line-clamp-2">{item.title}</h4>
                    <p className="text-navy/70 text-xs line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
              📸 Photo Gallery
            </h2>
            <p className="text-xl text-navy/80 max-w-3xl mx-auto">
              Visual stories from our operations, events, and community impact initiatives.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all card-hover">
                <div className="relative h-48">
                  <Image
                    src={`/images/photos/IMG-20250714-WA0${138 + index}.jpg`}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-bold">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-4 text-lg font-bold inline-flex items-center space-x-2">
              <span>View Full Gallery</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-gradient-to-r from-navy via-blue-900 to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-yellow mb-6">
              📰 Latest Press Releases
            </h2>
            <p className="text-xl text-yellow/90 max-w-3xl mx-auto">
              Stay informed with our official announcements and company news.
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            {pressReleases.map((release, index) => (
              <div key={index} className="card-primary bg-white card-hover group">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between p-8">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-3xl">📄</div>
                      <div>
                        <h3 className="font-bold text-xl text-navy group-hover:text-yellow transition-colors duration-300">{release.title}</h3>
                        <div className="text-sm text-navy/60 font-medium">{release.date}</div>
                      </div>
                    </div>
                    <p className="text-navy/80 mb-4 leading-relaxed">{release.excerpt}</p>
                    <button className="text-yellow font-bold hover:text-navy transition-colors inline-flex items-center space-x-2">
                      <span>Read Full Release</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="lg:ml-8 mt-4 lg:mt-0">
                    <button className="btn-secondary px-6 py-3 font-bold inline-flex items-center space-x-2">
                      <span>Download PDF</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit Download */}
      <section className="py-20 bg-gradient-to-r from-yellow via-yellow to-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="relative w-24 h-24 mx-auto mb-8 rounded-full overflow-hidden">
              <Image
                src="/images/photos/IMG-20250714-WA0166.jpg"
                alt="Media Kit Resources - Brand Assets and Downloads"
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
              Media Kit & Resources
            </h2>
            <p className="text-xl text-navy/90 mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
              Download our comprehensive media kit including logos, brand guidelines, 
              executive photos, and company fact sheets for media professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card-primary bg-navy p-8 text-center card-hover group">
              <div className="text-5xl mb-4 text-yellow group-hover:scale-110 transition-transform duration-300">🎨</div>
              <h3 className="font-bold text-yellow text-xl mb-4">Brand Assets</h3>
              <p className="text-yellow/90 mb-6 leading-relaxed">Logos, colors, typography, and comprehensive brand guidelines</p>
              <button className="btn-primary bg-yellow text-navy font-bold px-6 py-3">
                Download Assets
              </button>
            </div>
            <div className="card-primary bg-navy p-8 text-center card-hover group">
              <div className="text-5xl mb-4 text-yellow group-hover:scale-110 transition-transform duration-300">👨‍💼</div>
              <h3 className="font-bold text-yellow text-xl mb-4">Executive Photos</h3>
              <p className="text-yellow/90 mb-6 leading-relaxed">High-resolution professional photos of leadership team</p>
              <button className="btn-primary bg-yellow text-navy font-bold px-6 py-3">
                Download Photos
              </button>
            </div>
            <div className="card-primary bg-navy p-8 text-center card-hover group">
              <div className="text-5xl mb-4 text-yellow group-hover:scale-110 transition-transform duration-300">📊</div>
              <h3 className="font-bold text-yellow text-xl mb-4">Company Facts</h3>
              <p className="text-yellow/90 mb-6 leading-relaxed">Key statistics, milestones, and company information sheets</p>
              <button className="btn-primary bg-yellow text-navy font-bold px-6 py-3">
                Download Facts
              </button>
            </div>
          </div>

          <div className="text-center">
            <button className="btn-primary bg-navy text-yellow px-12 py-4 text-xl font-bold inline-flex items-center space-x-3 shadow-2xl">
              <span>Download Complete Media Kit</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
