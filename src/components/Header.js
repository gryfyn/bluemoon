"use client";
import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Handle scroll for header transparency
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Set home as active when near top of page
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // IntersectionObserver to detect active section
    const sections = ['home', 'wash-categories', 'services', 'about', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisibleSection = activeSection;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });

        if (maxRatio > 0) {
          setActiveSection(mostVisibleSection);
        }
      },
      {
        threshold: [0.1, 0.3, 0.5], // Multiple thresholds to detect partial visibility
        rootMargin: '-100px 0px -100px 0px', // Adjusted for fixed header and large sections
      }
    );

    // Observe each section
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) observer.unobserve(element);
      });
    };
  }, [activeSection]);

  // Smooth scroll handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu on click
    }
  };

  // Navigation items with section IDs - Updated to include bookings
  const navigationItems = [
    { name: 'HOME', sectionId: 'home' },
    { name: 'BOOKINGS', sectionId: 'wash-categories' },
    { name: 'SERVICES', sectionId: 'services' },
    { name: 'ABOUT', sectionId: 'about' },
    { name: 'CONTACT', sectionId: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black/95 backdrop-blur-lg border-b border-blue-900/50 shadow-lg ${
      isScrolled ? 'bg-black/95' : 'bg-black/80'
    }`}>
      {/* Main Navigation */}
      <div className="bg-blue-900/30 backdrop-blur-sm border-b border-blue-800/40">
        <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 px-4 sm:px-6 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}>
          {/* Logo and Title */}
          <div className="flex items-center group">
            <Image
              src="/assets/bluemoonlogo2.png"
              alt="Blue Moon Logo"
              width={40}
              height={40}
              className="w-10 h-10 sm:w-12 sm:h-12 mr-3 group-hover:scale-105 transition-transform duration-300"
              priority
            />
            <div className="flex flex-col">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                <span className="text-white">BLUE</span>
                <span className="text-blue-400">MOON</span>
              </div>
              <div className="hidden md:block text-xs text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                CAR WASH & AUTO DETAILING
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 ml-auto">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.sectionId);
                }}
                className={`relative px-3 py-2 font-light text-base tracking-wide transition-all duration-300 group ${
                  activeSection === item.sectionId
                    ? 'text-blue-400'
                    : 'text-gray-100 hover:text-blue-300'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ${
                  activeSection === item.sectionId ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 rounded-full hover:bg-blue-900/50 transition-all duration-300 hover:scale-110 ml-auto"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
        isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-blue-900/40 backdrop-blur-sm border-t border-blue-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="py-6 space-y-5">
              {navigationItems.map((item, index) => (
                <a
                  key={item.name}
                  href={`#${item.sectionId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.sectionId);
                  }}
                  className={`block font-light text-base py-3 border-b border-blue-700/30 transition-all duration-300 transform hover:translate-x-2 ${
                    activeSection === item.sectionId
                      ? 'text-blue-400'
                      : 'text-gray-100 hover:text-blue-300'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span>{item.name}</span>
                  <div className={`mt-1 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ${
                    activeSection === item.sectionId ? 'w-1/3' : 'w-0 hover:w-1/3'
                  }`}></div>
                </a>
              ))}
            </nav>
            
            {/* Mobile Contact Info */}
            <div className="border-t border-blue-800/40 pt-6 pb-6">
              <div className="flex items-center gap-3 mb-4 text-sm text-gray-200">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Mobile Service - We Come to You!</span>
              </div>
              <div className="flex items-center gap-3 mb-4 text-sm text-gray-200">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+971508586444" className="hover:text-blue-400 transition-colors duration-300">
                  +971 50 858 6444
                </a>
              </div>
              <div className="flex items-center gap-3 mb-4 text-sm text-gray-200">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <a href="https://wa.me/971508586444" className="hover:text-blue-400 transition-colors duration-300">
                  WhatsApp: +971 50 858 6444
                </a>
              </div>
              <div className="text-center mt-4">
                <span className="text-blue-400 text-sm font-medium">@bluemoon.carwash</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}