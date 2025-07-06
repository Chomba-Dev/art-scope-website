import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/operations', label: 'Operations' },
    { href: '/contact', label: 'Contact' },
  ];

  const subsidiaries = [
    { href: '/operations/creative-studio', label: 'Creative Studio' },
    { href: '/operations/youth-programs', label: 'Youth Programs' },
    { href: '/operations/technology-hub', label: 'Technology Hub' },
    { href: '/operations/consulting', label: 'Business Consulting' },
  ];

  const socialLinks = [
    { href: 'https://facebook.com', label: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { href: 'https://twitter.com', label: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { href: 'https://instagram.com', label: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-16 h-12">
                <Image
                  src="/images/logo.jpg"
                  alt="Art Scope Enterprises Limited"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Art Scope Enterprises Limited</h3>
                <p className="text-yellow text-sm">Empowering Artists and Creatives</p>
              </div>
            </div>
            <p className="text-gray mb-6 max-w-md">
              Leading African hub for creative innovation, youth empowerment, and sustainable entrepreneurship. 
              Unleashing creative potential for sustainable development through arts, culture, technology, and business integration.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-yellow/10 hover:bg-yellow/20 rounded-lg flex items-center justify-center group transition-colors duration-200"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 text-yellow" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray hover:text-yellow transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subsidiaries */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow">Our Operations</h4>
            <ul className="space-y-2">
              {subsidiaries.map((subsidiary) => (
                <li key={subsidiary.href}>
                  <Link
                    href={subsidiary.href}
                    className="text-gray hover:text-yellow transition-colors duration-200"
                  >
                    {subsidiary.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center md:text-left">
              <h5 className="font-semibold text-yellow mb-2">Email</h5>
              <a href="mailto:info@artscope.co.zm" className="text-gray hover:text-yellow transition-colors duration-200">
                info@artscope.co.zm
              </a>
            </div>
            <div className="text-center md:text-left">
              <h5 className="font-semibold text-yellow mb-2">Phone</h5>
              <a href="tel:+260973577060" className="text-gray hover:text-yellow transition-colors duration-200">
                +260 97 3577060
              </a>
            </div>
            <div className="text-center md:text-left">
              <h5 className="font-semibold text-yellow mb-2">Location</h5>
              <p className="text-gray">Jambo Drive Riverside, Kitwe, Zambia</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-white/10">
            <p className="text-gray text-sm mb-2">
              © {currentYear} Art Scope Enterprises Limited. All rights reserved.
            </p>
            <p className="text-gray text-xs">
              Developed by{' '}
              <a 
                href="https://gershom-chomba-portfolio.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow hover:text-white transition-colors duration-200"
              >
                Gershom Chomba
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
