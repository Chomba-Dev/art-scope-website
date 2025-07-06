import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us - Art Scope Enterprises Limited",
  description: "Get in touch with Art Scope Enterprises Limited. We'd love to hear from you and discuss how we can help with your creative and business needs.",
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-yellow max-w-3xl mx-auto font-semibold">
            Ready to collaborate or learn more about our services? We're here to help you unleash your creative potential.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-navy rounded-lg shadow-lg p-8 border-4 border-yellow">
                <h2 className="text-3xl font-bold text-yellow mb-6">Get In Touch</h2>
                <p className="text-yellow mb-8 font-medium">
                  We're always excited to connect with creative professionals, potential partners, and organizations 
                  looking to make a positive impact. Reach out to us through any of these channels.
                </p>

                <div className="space-y-6">
                  {/* Office Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-yellow mb-1">Our Office</h3>
                      <p className="text-yellow font-medium">
                        Jambo Drive Riverside<br />
                        Kitwe, Zambia<br />
                        P.O. Box 12345
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-yellow mb-1">Phone</h3>
                      <p className="text-yellow font-medium">
                        <a href="tel:+260973577060" className="hover:text-white transition-colors">
                          +260 97 3577060
                        </a><br />
                        <a href="tel:+260987654321" className="hover:text-white transition-colors">
                          +260 987 654 321
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-yellow mb-1">Email</h3>
                      <p className="text-yellow font-medium">
                        <a href="mailto:info@artscope.co.zm" className="hover:text-white transition-colors">
                          info@artscope.co.zm
                        </a><br />
                        <a href="mailto:partnerships@artscope.co.zm" className="hover:text-white transition-colors">
                          partnerships@artscope.co.zm
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-yellow mb-1">Business Hours</h3>
                      <p className="text-yellow font-medium">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-navy text-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-yellow mb-6">Quick Links</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a 
                    href="/about" 
                    className="flex items-center space-x-2 text-yellow hover:text-white transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>About Us</span>
                  </a>
                  <a 
                    href="/operations" 
                    className="flex items-center space-x-2 text-yellow hover:text-white transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Our Services</span>
                  </a>
                  <a 
                    href="/events" 
                    className="flex items-center space-x-2 text-yellow hover:text-white transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Events & News</span>
                  </a>
                  <a 
                    href="/partners" 
                    className="flex items-center space-x-2 text-yellow hover:text-white transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Partners</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow text-center mb-12">Find Us</h2>
          
          {/* Map placeholder */}
          <div className="w-full h-96 bg-yellow rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Interactive Map</h3>
              <p className="text-navy font-medium">
                Map integration coming soon.<br />
                Located in the heart of Kitwe's business district.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
