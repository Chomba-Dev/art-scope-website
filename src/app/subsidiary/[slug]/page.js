export default function SubsidiaryDetail() {
  // This would typically receive params from the route to determine which subsidiary
  const subsidiary = {
    name: "Art Scope Technology",
    tagline: "Driving Digital Transformation Across Africa",
    description: "Art Scope Technology is our innovation hub, developing cutting-edge software solutions and digital platforms that empower businesses across emerging markets. We specialize in scalable technology solutions that address the unique challenges of African markets.",
    established: "2015",
    headquarters: "Lagos, Nigeria",
    employees: "150+",
    revenue: "$25M+",
    image: "/images/technology-hero.jpg",
    services: [
      {
        title: "Software Development",
        description: "Custom software solutions tailored for emerging market challenges.",
        features: ["Web Applications", "Mobile Apps", "API Development", "Cloud Solutions"]
      },
      {
        title: "Digital Transformation",
        description: "End-to-end digital transformation consulting and implementation.",
        features: ["Strategy Development", "Process Automation", "Data Analytics", "Change Management"]
      },
      {
        title: "Infrastructure Solutions",
        description: "Scalable cloud infrastructure and IT consulting services.",
        features: ["Cloud Migration", "System Integration", "Security Solutions", "DevOps"]
      }
    ],
    projects: [
      {
        title: "Supply Chain Management Platform",
        client: "Regional Logistics Company",
        description: "Developed a comprehensive supply chain management platform serving 20+ countries.",
        impact: "40% reduction in logistics costs, 60% improvement in delivery times",
        year: "2023"
      },
      {
        title: "Digital Banking Solution",
        client: "Pan-African Bank",
        description: "Built a mobile-first banking platform for underserved markets.",
        impact: "2M+ users onboarded, 300% increase in digital transactions",
        year: "2022"
      },
      {
        title: "E-Government Platform",
        client: "West African Government",
        description: "Digitized government services for improved citizen engagement.",
        impact: "80% reduction in processing time, 95% citizen satisfaction",
        year: "2023"
      }
    ],
    leadership: [
      {
        name: "Dr. Sarah Johnson",
        position: "Managing Director",
        bio: "Former Microsoft Africa executive with 15+ years in technology leadership.",
        image: "/images/leadership/sarah-johnson.jpg"
      },
      {
        name: "Michael Chen",
        position: "Chief Technology Officer",
        bio: "Software architect with expertise in scalable systems for emerging markets.",
        image: "/images/leadership/michael-chen.jpg"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-navy">
      {/* Hero Section */}
      <div className="bg-gradient-navy-yellow text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="text-yellow font-medium">Art Scope Enterprises</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {subsidiary.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {subsidiary.tagline}
            </p>
            <p className="text-lg opacity-80 max-w-3xl leading-relaxed">
              {subsidiary.description}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-16 bg-yellow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-navy mb-2">Est. {subsidiary.established}</div>
              <div className="text-navy font-medium">Established</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy mb-2">{subsidiary.employees}</div>
              <div className="text-navy font-medium">Employees</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy mb-2">{subsidiary.revenue}</div>
              <div className="text-navy font-medium">Annual Revenue</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-navy mb-2">20+</div>
              <div className="text-navy font-medium">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow text-center mb-16">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subsidiary.services.map((service, index) => (
              <div key={index} className="bg-yellow rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-navy">
                <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>
                <p className="text-navy mb-6 font-medium">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-navy font-medium">
                      <div className="w-2 h-2 bg-navy rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="py-16 bg-yellow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-16">
            Featured Projects
          </h2>
          <div className="space-y-8">
            {subsidiary.projects.map((project, index) => (
              <div key={index} className="bg-navy rounded-lg p-8 md:p-12 border-2 border-yellow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <span className="text-yellow font-medium text-sm">{project.year}</span>
                      <span className="mx-3 text-yellow">•</span>
                      <span className="text-yellow text-sm font-medium">{project.client}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-yellow mb-4">{project.title}</h3>
                    <p className="text-yellow mb-6 font-medium">{project.description}</p>
                    <div className="bg-yellow rounded-lg p-4">
                      <h4 className="font-bold text-navy mb-2">Impact:</h4>
                      <p className="text-navy font-bold">{project.impact}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="h-64 bg-yellow rounded-lg flex items-center justify-center border-2 border-navy">
                      <span className="text-navy font-medium">Project Image</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow text-center mb-16">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {subsidiary.leadership.map((leader, index) => (
              <div key={index} className="bg-yellow rounded-lg p-8 shadow-lg text-center border-2 border-navy">
                <div className="w-32 h-32 bg-navy rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-yellow font-medium">Photo</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{leader.name}</h3>
                <div className="text-navy font-bold mb-4 bg-navy text-yellow px-3 py-1 rounded inline-block">{leader.position}</div>
                <p className="text-navy font-medium">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-yellow mb-8 font-medium">
              Ready to transform your business with cutting-edge technology solutions? 
              Our team is here to help you succeed.
            </p>
            <div className="space-x-4">
              <a href="/contact" className="bg-yellow text-navy px-8 py-3 rounded-lg font-bold hover:bg-yellow/90 transition-colors inline-block">
                Start a Project
              </a>
              <a href="/contact" className="bg-yellow text-navy px-8 py-3 rounded-lg font-bold hover:bg-yellow/90 transition-colors inline-block border-2 border-yellow">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
