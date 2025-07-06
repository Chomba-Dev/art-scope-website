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

  return (
    <div className={`bg-yellow rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-4 border-navy ${className}`}>
      {/* Image/Visual */}
      <div className="relative h-48 bg-navy overflow-hidden flex items-center justify-center">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-navy to-navy/80 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-2">
                {type === "news" ? (
                  <svg className="w-8 h-8 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )}
              </div>
              <span className="text-yellow text-sm font-medium">
                {type === "news" ? "News Article" : "Event"}
              </span>
            </div>
          </div>
        )}
        
        {/* Category Badge */}
        {category && (
          <div className="absolute top-4 left-4">
            <span className="bg-yellow text-navy px-3 py-1 rounded-full text-xs font-semibold">
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date/Time Info */}
        <div className="flex items-center space-x-4 text-sm text-navy mb-3 font-medium">
          {date && (
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatDate(date)}</span>
            </div>
          )}
          
          {time && (
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{time}</span>
            </div>
          )}
          
          {author && type === "news" && (
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{author}</span>
            </div>
          )}
        </div>

        {/* Location (for events) */}
        {location && type === "event" && (
          <div className="flex items-center space-x-1 text-sm text-navy mb-3 font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-navy mb-4 line-clamp-3 leading-relaxed font-medium">
          {description}
        </p>

        {/* Action Link */}
        {href && (
          <Link
            href={href}
            className="inline-flex items-center space-x-2 text-navy hover:text-yellow font-semibold transition-colors duration-200 group"
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
