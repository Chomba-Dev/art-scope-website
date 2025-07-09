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

          {/* Mobile Menu Button - Fixed Animation */}
          <button
            className="lg:hidden w-12 h-12 flex flex-col justify-center items-center bg-yellow/20 rounded-xl hover:bg-yellow/30 transition-all duration-200 flex-shrink-0 relative focus:outline-none focus:ring-2 focus:ring-yellow/50 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-5 flex flex-col justify-center space-y-1">
              <span className={`block w-6 h-0.5 bg-yellow transition-all duration-300 ease-in-out transform origin-center ${
                isMenuOpen ? 'rotate-45 translate-y-2' : 'rotate-0 translate-y-0'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-yellow transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-yellow transition-all duration-300 ease-in-out transform origin-center ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : 'rotate-0 translate-y-0'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`lg:hidden absolute top-full left-0 right-0 z-50 transition-all duration-500 ease-in-out overflow-hidden bg-navy shadow-2xl ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col space-y-1 border-t border-yellow/30 pt-6 pb-6 px-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-yellow hover:bg-yellow/10 transition-all duration-300 font-medium py-4 px-6 rounded-xl mx-2 flex items-center space-x-3 group animate-fade-in-up"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-2 h-2 bg-yellow rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span>{link.label}</span>
                <svg className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
