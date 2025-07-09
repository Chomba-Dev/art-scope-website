import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us - Art Scope Enterprises Limited",
  description: "Get in touch with Art Scope Enterprises Limited. We'd love to hear from you and discuss how we can help with your creative and business needs.",
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-blue-900 to-navy text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">📞</div>
          <div className="absolute top-20 right-20 text-4xl">✉️</div>
          <div className="absolute bottom-20 left-20 text-5xl">🏢</div>
          <div className="absolute bottom-10 right-10 text-6xl">🗺️</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="image-placeholder w-32 h-32 mx-auto mb-8 rounded-full">
              <div className="text-center">
                <div className="text-6xl mb-2">💬</div>
                <p className="text-sm font-bold">Contact Hub</p>
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow to-white bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl sm:text-2xl text-yellow mb-8 font-semibold max-w-4xl mx-auto">
              Ready to collaborate or learn more about our services? We're here to help you unleash your creative potential.
            </p>
            <p className="text-lg font-medium max-w-3xl mx-auto text-white/90 leading-relaxed">
              Whether you're an artist, entrepreneur, investor, or partner, we'd love to hear from you and explore how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gradient-to-br from-yellow via-yellow to-amber-300 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-navy rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-navy rounded-full animate-float delay-500"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-navy rounded-full animate-float delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-left">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-right">
              <div className="card-primary bg-navy shadow-2xl overflow-hidden">
                <div className="p-8 relative">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-yellow/20 rounded-bl-full"></div>
                  
                  <div className="text-center mb-8">
                    <div className="text-5xl mb-4">🏢</div>
                  </div>
                  <h2 className="text-3xl font-bold text-yellow mb-6 text-center">Get In Touch</h2>
                  <p className="text-yellow/90 mb-8 font-medium leading-relaxed text-center">
                    We're always excited to connect with creative professionals, potential partners, and organizations 
                    looking to make a positive impact. Reach out to us through any of these channels.
                  </p>

                  <div className="space-y-6">
                    {/* Office Address */}
                    <div className="flex items-start space-x-4 p-4 bg-yellow/10 rounded-xl hover:bg-yellow/20 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-yellow mb-2 text-lg flex items-center">
                          <span className="mr-2">📍</span> Our Office
                        </h3>
                        <p className="text-yellow font-medium leading-relaxed">
                          Plot No. 1132, Olipa Banda<br />
                          Kanyama Site and Service<br />
                          Lusaka, Zambia
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-4 p-4 bg-yellow/10 rounded-xl hover:bg-yellow/20 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-yellow mb-2 text-lg flex items-center">
                          <span className="mr-2">📞</span> Phone
                        </h3>
                        <p className="text-yellow font-medium">
                          <a href="tel:+260973577060" className="hover:text-white transition-colors flex items-center space-x-2">
                            <span>+260 973 577 060</span>
                          </a>
                          <a href="tel:+260958528660" className="hover:text-white transition-colors flex items-center space-x-2 mt-1">
                            <span>+260 958 528 660</span>
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-4 p-4 bg-yellow/10 rounded-xl hover:bg-yellow/20 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-yellow mb-2 text-lg flex items-center">
                          <span className="mr-2">✉️</span> Email
                        </h3>
                        <p className="text-yellow font-medium">
                          <a href="mailto:prosperchilufya9@gmail.com" className="hover:text-white transition-colors block">
                            prosperchilufya9@gmail.com
                          </a>
                          <a href="mailto:info@artscope.co.zm" className="hover:text-white transition-colors block mt-1">
                            info@artscope.co.zm
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="flex items-start space-x-4 p-4 bg-yellow/10 rounded-xl hover:bg-yellow/20 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-yellow rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-yellow mb-2 text-lg flex items-center">
                          <span className="mr-2">🕒</span> Business Hours
                        </h3>
                        <p className="text-yellow font-medium">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="card-primary bg-navy text-white shadow-2xl overflow-hidden">
                <div className="p-8 relative">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-yellow/20 rounded-bl-full"></div>
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">🔗</div>
                  </div>
                  <h3 className="text-2xl font-bold text-yellow mb-8 text-center">Quick Links</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a 
                      href="/about" 
                      className="flex items-center space-x-3 text-yellow hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-yellow/10 group"
                    >
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="font-semibold">About Us</span>
                    </a>
                    <a 
                      href="/operations" 
                      className="flex items-center space-x-3 text-yellow hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-yellow/10 group"
                    >
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="font-semibold">Our Services</span>
                    </a>
                    <a 
                      href="/events" 
                      className="flex items-center space-x-3 text-yellow hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-yellow/10 group"
                    >
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="font-semibold">Events & News</span>
                    </a>
                    <a 
                      href="/partners" 
                      className="flex items-center space-x-3 text-yellow hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-yellow/10 group"
                    >
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="font-semibold">Partners</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white text-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">🗺️ Find Us</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Located in the heart of Lusaka, we're easily accessible and ready to welcome you.
            </p>
          </div>
          
          {/* Map placeholder */}
          <div className="image-placeholder h-96 rounded-2xl shadow-2xl">
            <div className="text-center">
              <div className="text-6xl mb-6">🗺️</div>
              <h3 className="text-2xl font-bold mb-4">Interactive Map</h3>
              <p className="text-lg mb-6">Map integration coming soon</p>
              <p className="font-medium">
                📍 Plot No. 1132, Olipa Banda, Kanyama Site and Service<br />
                Lusaka, Zambia
              </p>
              <div className="mt-8">
                <button className="btn-primary px-8 py-3 text-lg font-bold inline-flex items-center space-x-2">
                  <span>Get Directions</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
