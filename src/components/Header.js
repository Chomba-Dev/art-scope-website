'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/operations', label: 'Operations' },
    { href: '/events', label: 'Events & News' },
    { href: '/media', label: 'Media' },
    { href: '/partners', label: 'Partners & Investors' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-gradient-to-r from-navy via-navy to-blue-900 text-white shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4 min-h-[64px]">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group min-w-0 flex-1 lg:flex-initial">
            <div className="relative w-14 h-10 sm:w-16 sm:h-12 md:w-20 md:h-14 transition-transform duration-200 group-hover:scale-105 flex-shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Art Scope Enterprises Limited"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 56px, (max-width: 768px) 64px, 80px"
              />
            </div>
            <div className="hidden sm:block min-w-0">
              <h1 className="text-lg sm:text-xl font-bold text-white leading-tight truncate">Art Scope Enterprises</h1>
              <p className="text-xs sm:text-sm text-yellow font-medium truncate">Empowering Artists and Creatives</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-yellow transition-all duration-200 font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow transition-all duration-200 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200 flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 my-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <nav className="flex flex-col space-y-2 border-t border-white/20 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-yellow hover:bg-white/10 transition-all duration-200 font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
