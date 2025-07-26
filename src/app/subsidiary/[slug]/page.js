import Image from "next/image";

export default function SubsidiaryDetail() {
  // This would typically receive params from the route to determine which subsidiary
  const subsidiary = {
    name: "Art Scope Technology",
    tagline: "Driving Digital Transformation Across Africa",
    description: "Art Scope Technology is our innovation hub, developing cutting-edge software solutions and digital platforms that empower businesses across emerging markets. We specialize in scalable technology solutions that address the unique challenges of African markets.",
    established: "2024",
    headquarters: "Lusaka, Zambia", 
    employees: "25+",
    revenue: "ZMW 500K+",
    countries: "20+",
    projects: "50+",
    icon: "💻",
    services: [
      {
        title: "Software Development",
        description: "Custom software solutions tailored for emerging market challenges and scalable growth.",
        icon: "⚡",
        features: ["Web Applications", "Mobile Apps", "API Development", "Cloud Solutions"]
      },
      {
        title: "Digital Transformation",
        description: "End-to-end digital transformation consulting and implementation services.",
        icon: "🔄",
        features: ["Strategy Development", "Process Automation", "Data Analytics", "Change Management"]
      },
      {
        title: "Infrastructure Solutions",
        description: "Scalable cloud infrastructure and comprehensive IT consulting services.",
        icon: "☁️",
        features: ["Cloud Migration", "System Integration", "Security Solutions", "DevOps"]
      }
    ],
    projects: [
      {
        title: "Supply Chain Management Platform",
        client: "Regional Logistics Company",
        description: "Developed a comprehensive supply chain management platform serving 20+ countries across Africa.",
        impact: "40% reduction in logistics costs, 60% improvement in delivery times",
        year: "2023",
        icon: "📦",
        technologies: ["React", "Node.js", "MongoDB", "AWS"]
      },
      {
        title: "Digital Banking Solution",
        client: "Pan-African Bank",
        description: "Built a mobile-first banking platform for underserved markets with advanced security features.",
        impact: "2M+ users onboarded, 300% increase in digital transactions",
        year: "2022",
        icon: "🏦",
        technologies: ["Flutter", "Microservices", "PostgreSQL", "Azure"]
      },
      {
        title: "E-Government Platform",
        client: "West African Government",
        description: "Digitized government services for improved citizen engagement and administrative efficiency.",
        impact: "80% reduction in processing time, 95% citizen satisfaction",
        year: "2023",
        icon: "🏛️",
        technologies: ["Vue.js", "Python", "Redis", "Docker"]
      }
    ],
    leadership: [
      {
        name: "Dr. Sarah Johnson",
        position: "Managing Director",
        bio: "Former Microsoft Africa executive with 15+ years in technology leadership and digital transformation.",
        expertise: ["Digital Strategy", "Team Leadership", "Business Development"],
        icon: "👩‍💼"
      },
      {
        name: "Michael Chen",
        position: "Chief Technology Officer", 
        bio: "Software architect with expertise in scalable systems for emerging markets and enterprise solutions.",
        expertise: ["System Architecture", "Cloud Computing", "Software Engineering"],
        icon: "👨‍💻"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-blue-900 to-navy text-white py-32 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-yellow rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-yellow rounded-full"></div>
          <div className="absolute bottom-32 left-32 w-20 h-20 border border-yellow rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border border-yellow rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Company Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-yellow/10 border border-yellow/20 rounded-full mb-8">
              <span className="text-yellow font-semibold text-sm tracking-wide uppercase">
                Art Scope Enterprises
              </span>
            </div>
            
            {/* Professional Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-yellow to-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <span className="text-3xl">{subsidiary.icon}</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-yellow to-white bg-clip-text text-transparent leading-tight">
              {subsidiary.name}
            </h1>
            
            <p className="text-2xl sm:text-3xl text-yellow mb-8 font-semibold leading-tight">
              {subsidiary.tagline}
            </p>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
              {subsidiary.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <button className="btn-primary px-8 py-4 text-lg font-bold inline-flex items-center space-x-3 group">
                <span>Start a Project</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="btn-secondary px-8 py-4 text-lg font-bold inline-flex items-center space-x-3 group">
                <span>View Portfolio</span>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Key Metrics */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Company Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key metrics and achievements that demonstrate our impact and growth trajectory.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="card-primary text-center bg-white border-l-4 border-yellow card-hover group">
              <div className="text-4xl font-bold text-navy mb-3 group-hover:text-yellow transition-colors duration-300">
                {subsidiary.established}
              </div>
              <div className="text-gray-600 font-semibold text-sm uppercase tracking-wide">Established</div>
            </div>
            
            <div className="card-primary text-center bg-white border-l-4 border-navy card-hover group">
              <div className="text-4xl font-bold text-navy mb-3 group-hover:text-yellow transition-colors duration-300">
                {subsidiary.employees}
              </div>
              <div className="text-gray-600 font-semibold text-sm uppercase tracking-wide">Team Members</div>
            </div>
            
            <div className="card-primary text-center bg-white border-l-4 border-yellow card-hover group">
              <div className="text-4xl font-bold text-navy mb-3 group-hover:text-yellow transition-colors duration-300">
                {subsidiary.countries}
              </div>
              <div className="text-gray-600 font-semibold text-sm uppercase tracking-wide">Countries Served</div>
            </div>
            
            <div className="card-primary text-center bg-white border-l-4 border-navy card-hover group">
              <div className="text-4xl font-bold text-navy mb-3 group-hover:text-yellow transition-colors duration-300">
                {subsidiary.projects}
              </div>
              <div className="text-gray-600 font-semibold text-sm uppercase tracking-wide">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to drive growth, innovation, and digital transformation for enterprises across Africa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {subsidiary.services.map((service, index) => (
              <div key={index} className="card-primary card-hover group relative overflow-hidden">
                {/* Service Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow to-amber-400 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-yellow transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>
                
                {/* Feature List */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-navy text-sm uppercase tracking-wide mb-4">Key Capabilities</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-yellow rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Hover Effect */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects & Case Studies */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real-world solutions that have transformed businesses and communities across Africa, delivering measurable impact and sustainable growth.
            </p>
          </div>
          
          <div className="space-y-12">
            {subsidiary.projects.map((project, index) => (
              <div key={index} className="card-primary card-hover group bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Project Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    {/* Project Header */}
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow to-amber-400 rounded-xl mr-4">
                        <span className="text-xl">{project.icon}</span>
                      </div>
                      <div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-yellow/20 text-navy">
                          {project.year}
                        </span>
                        <p className="text-gray-600 text-sm mt-1">{project.client}</p>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-navy mb-4 group-hover:text-yellow transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    
                    {/* Technology Stack */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-navy text-sm uppercase tracking-wide mb-3">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-navy/5 text-navy text-sm font-medium rounded-lg">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Impact Metrics */}
                    <div className="bg-gradient-to-r from-yellow/10 to-amber-100/50 rounded-2xl p-6 border-l-4 border-yellow">
                      <h4 className="font-bold text-navy mb-3 text-lg flex items-center">
                        <span className="mr-2">📈</span>
                        Impact Achieved
                      </h4>
                      <p className="text-navy font-semibold text-lg leading-relaxed">{project.impact}</p>
                    </div>
                  </div>
                  
                  {/* Project Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src="/images/photos/IMG-20250714-WA0167.jpg"
                        alt={`Project: ${project.title}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent">
                        <div className="absolute bottom-6 left-6 right-6 text-white">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-xl font-bold mb-1">{project.title}</h4>
                              <p className="text-yellow text-sm font-medium">{project.client}</p>
                            </div>
                            <div className="text-3xl opacity-80">{project.icon}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experienced leaders driving innovation and excellence in technology, with proven track records in scaling businesses across emerging markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {subsidiary.leadership.map((leader, index) => (
              <div key={index} className="card-primary card-hover group bg-gradient-to-br from-white to-gray-50 border-2 border-transparent hover:border-yellow/20">
                <div className="text-center">
                  {/* Professional Photo */}
                  <div className="relative w-32 h-32 mx-auto mb-8">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src="/images/photos/IMG-20250714-WA0168.jpg"
                        alt={`Leadership: ${leader.name}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="128px"
                      />
                    </div>
                    {/* Decorative Border */}
                    <div className="absolute -inset-2 border-2 border-yellow/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy mb-2 group-hover:text-yellow transition-colors duration-300">
                    {leader.name}
                  </h3>
                  
                  <div className="inline-flex items-center px-4 py-2 bg-navy text-yellow rounded-full font-semibold mb-6">
                    {leader.position}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {leader.bio}
                  </p>
                  
                  {/* Expertise Areas */}
                  <div>
                    <h4 className="font-semibold text-navy text-sm uppercase tracking-wide mb-3">Areas of Expertise</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-yellow/10 text-navy text-sm font-medium rounded-lg border border-yellow/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-navy via-blue-900 to-navy text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border border-yellow/30 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-yellow/20 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Professional Icon */}
            <div className="relative w-20 h-20 mx-auto mb-8">
              <div className="w-full h-full bg-gradient-to-br from-yellow to-amber-400 rounded-2xl flex items-center justify-center shadow-2xl">
                <Image
                  src="/images/photos/IMG-20250714-WA0169.jpg"
                  alt="Partnership Opportunities - Let's Work Together"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="80px"
                />
              </div>
              <div className="absolute -inset-2 border-2 border-yellow/30 rounded-3xl animate-pulse"></div>
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-yellow to-white bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-xl sm:text-2xl text-yellow/90 mb-8 font-semibold leading-tight">
              Partner with Africa's Leading Technology Innovation Hub
            </p>
            
            <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our cutting-edge technology solutions can drive your business forward, 
              increase efficiency, and create sustainable competitive advantages in your market.
            </p>
            
            {/* Professional CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/contact" className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow to-amber-400 text-navy font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-yellow/25 hover:-translate-y-1">
                <span className="mr-3">Start Your Project</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-300 to-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              
              <a href="/contact" className="group inline-flex items-center px-8 py-4 border-2 border-yellow text-yellow font-bold text-lg rounded-xl transition-all duration-300 hover:bg-yellow hover:text-navy">
                <span className="mr-3">Schedule Consultation</span>
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 pt-8 border-t border-yellow/20">
              <p className="text-yellow/70 text-sm mb-4 uppercase tracking-wide font-semibold">Trusted by Leading Organizations</p>
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
                <span className="text-sm font-medium">Enterprise Clients</span>
                <span className="w-1 h-1 bg-yellow/50 rounded-full"></span>
                <span className="text-sm font-medium">Government Partners</span>
                <span className="w-1 h-1 bg-yellow/50 rounded-full"></span>
                <span className="text-sm font-medium">International NGOs</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
