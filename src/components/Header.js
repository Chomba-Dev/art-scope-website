'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target) &&
          hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

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

          {/* Mobile Menu Button - Super Visible */}
          <button
            ref={hamburgerRef}
            className="lg:hidden hamburger-button w-12 h-12 bg-yellow border-2 border-navy rounded-xl hover:bg-yellow/90 hover:scale-105 transition-all duration-200 flex-shrink-0 relative focus:outline-none focus:ring-2 focus:ring-yellow shadow-lg z-50 cursor-pointer flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            {/* Hamburger Icon - Thick, Visible Lines */}
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span className={`hamburger-line block w-5 h-0.5 bg-navy rounded transition-all duration-300 ease-in-out transform ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`hamburger-line block w-5 h-0.5 bg-navy rounded transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`hamburger-line block w-5 h-0.5 bg-navy rounded transition-all duration-300 ease-in-out transform ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation with Backdrop */}
        {isMenuOpen && (
          <>
            {/* Backdrop - Click to close menu */}
            <div 
              className="lg:hidden fixed inset-0 bg-black/50 z-40 mobile-menu-backdrop"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            
            {/* Mobile Menu */}
            <div 
              ref={menuRef}
              className="lg:hidden fixed top-16 left-0 right-0 z-50 bg-navy shadow-2xl border-t border-yellow/30 max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <nav className="flex flex-col py-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-yellow hover:bg-yellow/10 transition-all duration-300 font-medium py-4 px-6 mx-4 my-1 rounded-xl flex items-center justify-between group border-b border-navy/20 hover:border-yellow/30 mobile-menu-item"
                    onClick={() => setIsMenuOpen(false)}
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <span className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span>{link.label}</span>
                    </span>
                    <svg className="w-4 h-4 text-yellow group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
