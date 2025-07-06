import Link from 'next/link';

export default function SubsidiaryCard({ 
  title, 
  description, 
  icon, 
  href, 
  features = [], 
  className = "" 
}) {
  return (
    <div className={`bg-navy rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-4 border-yellow ${className}`}>
      {/* Card Header */}
      <div className="bg-yellow text-navy p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-navy rounded-lg flex items-center justify-center">
            {icon && typeof icon === 'string' ? (
              <span className="text-yellow font-bold text-2xl">{icon}</span>
            ) : (
              icon || (
                <svg className="w-8 h-8 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              )
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-navy">{title}</h3>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <p className="text-yellow mb-6 leading-relaxed font-medium">
          {description}
        </p>

        {/* Features List */}
        {features.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-yellow mb-3">Key Features:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-yellow mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-yellow text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Button */}
        {href && (
          <Link
            href={href}
            className="inline-flex items-center space-x-2 bg-yellow text-navy px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition-all duration-200 group"
          >
            <span>Learn More</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
