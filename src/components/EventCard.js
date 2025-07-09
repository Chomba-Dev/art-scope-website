import Link from 'next/link';

export default function EventCard({ 
  title, 
  description, 
  date, 
  time, 
  location, 
  image, 
  href, 
  type = "event",
  author,
  category,
  excerpt,
  className = "" 
}) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getTypeIcon = () => {
    if (type === "news") return "📰";
    if (category === "Conference") return "🎤";
    if (category === "Workshop") return "🛠️";
    if (category === "Launch") return "🚀";
    if (category === "Partnership") return "🤝";
    return "📅";
  };

  return (
    <div className={`card-primary card-hover group relative overflow-hidden ${className}`}>
      {/* Category Badge */}
      {category && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-yellow text-navy px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
            {category}
          </span>
        </div>
      )}

      {/* Enhanced Image/Visual */}
      <div className="relative h-56 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="image-placeholder h-full">
            <div className="text-center">
              <div className="text-5xl mb-3">{getTypeIcon()}</div>
              <h4 className="text-lg font-bold mb-2">{type === "news" ? "News Image" : "Event Photo"}</h4>
              <p className="text-sm opacity-80">Visual content for {title}</p>
            </div>
          </div>
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date/Time Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-navy/80 mb-3 font-medium">
          {date && (
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(date)}</span>
            </div>
          )}
          
          {time && (
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{time}</span>
            </div>
          )}
          
          {author && type === "news" && (
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{author}</span>
            </div>
          )}
        </div>

        {/* Location (for events) */}
        {location && type === "event" && (
          <div className="flex items-center space-x-1 text-sm text-navy/80 mb-3 font-medium">
            <svg className="w-4 h-4 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2 group-hover:text-yellow transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-navy/90 mb-6 line-clamp-3 leading-relaxed">
          {description || excerpt}
        </p>

        {/* Action Link */}
        {href && (
          <Link
            href={href}
            className="btn-primary inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold"
          >
            <span>{type === "news" ? "Read Article" : "Learn More"}</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
