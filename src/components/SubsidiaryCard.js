import Link from 'next/link';

export default function SubsidiaryCard({ 
  title, 
  description, 
  icon, 
  href, 
  features = [], 
  className = "" 
}) {
  // Icon mapping for better visual representation
  const getIcon = (iconText) => {
    const iconMap = {
      'AA': '🎨', // Arts
      'AF': '🌱', // Farms
      'AS': '📦', // Supplies
      'AH': '🏥', // Health
      'AT': '🌍', // Tourism
      'AL': '🚛', // Logistics
      'TI': '💻', // Tech
      'AC': '🏗️', // Construction
      'SW': '♻️', // Waste Management
      'ED': '🎓'  // Education
    };
    return iconMap[iconText] || iconText;
  };

  return (
    <div className={`card-primary card-hover group relative overflow-hidden ${className}`}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow/5 to-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Card Header */}
      <div className="relative">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 bg-gradient-secondary rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-4xl">{getIcon(icon)}</span>
          </div>
          <div className="flex-1">
            <h3 className="card-title text-navy group-hover:text-yellow transition-colors duration-300">{title}</h3>
            <div className="w-12 h-1 bg-gradient-secondary rounded-full mt-2 group-hover:w-20 transition-all duration-300"></div>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="relative space-y-6">
        <p className="text-dark-gray leading-relaxed font-medium group-hover:text-navy transition-colors duration-300">
          {description}
        </p>

        {/* Features List with enhanced styling */}
        {features.length > 0 && (
          <div>
            <h4 className="font-bold text-navy mb-4 flex items-center">
              <svg className="w-5 h-5 text-yellow mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Key Features:
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray/10 rounded-lg group-hover:bg-yellow/10 transition-colors duration-300">
                  <div className="w-2 h-2 bg-yellow rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-dark-gray text-sm font-medium leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Button */}
        {href && (
          <div className="pt-4">
            <Link
              href={href}
              className="btn-primary w-full group/btn relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Learn More</span>
                <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        )}
      </div>

      {/* Decorative corner element */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-secondary opacity-10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
    </div>
  );
}
