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
    icon: "💻",
    image: "/images/technology-hero.jpg",
    services: [
      {
        title: "Software Development",
        description: "Custom software solutions tailored for emerging market challenges.",
        icon: "⚡",
        features: ["Web Applications", "Mobile Apps", "API Development", "Cloud Solutions"]
      },
      {
        title: "Digital Transformation",
        description: "End-to-end digital transformation consulting and implementation.",
        icon: "🔄",
        features: ["Strategy Development", "Process Automation", "Data Analytics", "Change Management"]
      },
      {
        title: "Infrastructure Solutions",
        description: "Scalable cloud infrastructure and IT consulting services.",
        icon: "☁️",
        features: ["Cloud Migration", "System Integration", "Security Solutions", "DevOps"]
      }
    ],
    projects: [
      {
        title: "Supply Chain Management Platform",
        client: "Regional Logistics Company",
        description: "Developed a comprehensive supply chain management platform serving 20+ countries.",
        impact: "40% reduction in logistics costs, 60% improvement in delivery times",
        year: "2023",
        icon: "📦"
      },
      {
        title: "Digital Banking Solution",
        client: "Pan-African Bank",
        description: "Built a mobile-first banking platform for underserved markets.",
        impact: "2M+ users onboarded, 300% increase in digital transactions",
        year: "2022",
        icon: "🏦"
      },
      {
        title: "E-Government Platform",
        client: "West African Government",
        description: "Digitized government services for improved citizen engagement.",
        impact: "80% reduction in processing time, 95% citizen satisfaction",
        year: "2023",
        icon: "🏛️"
      }
    ],
    leadership: [
      {
        name: "Dr. Sarah Johnson",
        position: "Managing Director",
        bio: "Former Microsoft Africa executive with 15+ years in technology leadership.",
        image: "/images/leadership/sarah-johnson.jpg",
        icon: "👩‍💼"
      },
      {
        name: "Michael Chen",
        position: "Chief Technology Officer", 
        bio: "Software architect with expertise in scalable systems for emerging markets.",
        image: "/images/leadership/michael-chen.jpg",
        icon: "👨‍💻"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-blue-900 to-navy text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">💻</div>
          <div className="absolute top-20 right-20 text-4xl">⚡</div>
          <div className="absolute bottom-20 left-20 text-5xl">🚀</div>
          <div className="absolute bottom-10 right-10 text-6xl">🔧</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-yellow font-semibold text-lg bg-yellow/20 px-4 py-2 rounded-full">
                Art Scope Enterprises
              </span>
            </div>
            <div className="text-8xl mb-6">{subsidiary.icon}</div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow to-white bg-clip-text text-transparent">
              {subsidiary.name}
            </h1>
            <p className="text-xl sm:text-2xl text-yellow mb-8 font-semibold max-w-4xl mx-auto">
              {subsidiary.tagline}
            </p>
            <p className="text-lg font-medium max-w-4xl mx-auto text-white/90 leading-relaxed">
              {subsidiary.description}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-gradient-to-r from-yellow via-yellow to-amber-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="card-primary bg-navy p-8 text-center card-hover group">
              <div className="text-5xl font-bold text-yellow mb-4 group-hover:scale-110 transition-transform duration-300">
                {subsidiary.established}
              </div>
              <div className="text-yellow font-semibold text-lg">Established</div>
            </div>
            <div className="card-primary bg-navy p-8 text-center card-hover group">
              <div className="text-5xl font-bold text-yellow mb-4 group-hover:scale-110 transition-transform duration-300">
                {subsidiary.employees}
              </div>
              <div className="text-yellow font-semibold text-lg">Employees</div>
            </div>
            <div className="card-primary bg-navy p-8 text-center card-hover group">
              <div className="text-5xl font-bold text-yellow mb-4 group-hover:scale-110 transition-transform duration-300">
                {subsidiary.revenue}
              </div>
              <div className="text-yellow font-semibold text-lg">Annual Revenue</div>
            </div>
            <div className="card-primary bg-navy p-8 text-center card-hover group">
              <div className="text-5xl font-bold text-yellow mb-4 group-hover:scale-110 transition-transform duration-300">
                20+
              </div>
              <div className="text-yellow font-semibold text-lg">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white text-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
              🛠️ Our Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive growth and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subsidiary.services.map((service, index) => (
              <div key={index} className="card-primary card-hover group">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-yellow transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-navy/80 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-navy font-medium">
                      <span className="w-2 h-2 bg-yellow rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
              🎯 Featured Projects
            </h2>
            <p className="text-xl text-navy/80 max-w-3xl mx-auto">
              Real-world solutions that have transformed businesses and communities.
            </p>
          </div>
          <div className="space-y-8">
            {subsidiary.projects.map((project, index) => (
              <div key={index} className="card-primary card-hover group">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center p-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-6">
                      <div className="text-3xl mr-4">{project.icon}</div>
                      <div>
                        <span className="text-yellow font-semibold text-sm bg-yellow/20 px-3 py-1 rounded-full">
                          {project.year}
                        </span>
                        <span className="mx-3 text-navy/40">•</span>
                        <span className="text-navy/80 text-sm font-medium">{project.client}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-yellow transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-navy/80 mb-6 leading-relaxed">{project.description}</p>
                    <div className="bg-gradient-to-r from-yellow/20 to-amber-200/20 rounded-xl p-6 border-l-4 border-yellow">
                      <h4 className="font-bold text-navy mb-2 text-lg">🎉 Impact Achieved:</h4>
                      <p className="text-navy font-semibold text-lg">{project.impact}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="image-placeholder h-64 rounded-xl">
                      <div className="text-center">
                        <div className="text-4xl mb-4">{project.icon}</div>
                        <h4 className="text-lg font-bold mb-2">Project Image</h4>
                        <p className="text-sm opacity-80">{project.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-r from-navy via-blue-900 to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-yellow mb-6">
              👥 Leadership Team
            </h2>
            <p className="text-xl text-yellow/90 max-w-3xl mx-auto">
              Experienced leaders driving innovation and excellence in technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {subsidiary.leadership.map((leader, index) => (
              <div key={index} className="card-primary bg-yellow text-navy card-hover group">
                <div className="text-center p-8">
                  <div className="image-placeholder w-32 h-32 mx-auto mb-6 rounded-full">
                    <div className="text-center">
                      <div className="text-4xl mb-2">{leader.icon}</div>
                      <p className="text-xs font-bold">Photo</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-900 transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <div className="bg-navy text-yellow px-4 py-2 rounded-xl font-bold mb-4 inline-block">
                    {leader.position}
                  </div>
                  <p className="leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-r from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="image-placeholder w-24 h-24 mx-auto mb-8 rounded-full">
              <div className="text-center">
                <div className="text-4xl mb-1">🚀</div>
                <p className="text-xs font-bold">Launch</p>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-navy/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology solutions? 
              Our team is here to help you succeed and drive meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/contact" className="btn-primary px-10 py-4 text-lg font-bold inline-flex items-center space-x-2 group">
                <span>Start a Project</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </a>
              <a href="/contact" className="btn-secondary px-10 py-4 text-lg font-bold inline-flex items-center space-x-2 group">
                <span>Schedule Consultation</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
