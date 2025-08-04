"use client"

import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail, Instagram, Facebook, Twitter, Star, Droplets, Sparkles } from 'lucide-react';

export default function Footer() {
  const services = [
    'Premium Car Wash',
    'Auto Detailing',
    'Interior Cleaning',
    'Wax & Polish',
    'Steam Cleaning',
    'Paint Protection'
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Book Now', href: '#booking' },
    { name: 'FAQ', href: '#faq' }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black border-t border-gray-800/50 relative overflow-hidden">
      {/* Animated Background with Water Droplets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* SVG Definitions for Gradients */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="dropletGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="dropletGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="dropletGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
            </linearGradient>
            <radialGradient id="dropletRadial" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
            </radialGradient>
          </defs>
        </svg>

        {/* Water Droplet 1 */}
        <div className="absolute" 
             style={{
               top: '10%',
               left: '5%',
               animation: 'float1 8s infinite ease-in-out'
             }}>
          <svg width="20" height="24" viewBox="0 0 20 24">
            <path d="M10 0C10 0 0 8 0 16C0 20.4 4.5 24 10 24C15.5 24 20 20.4 20 16C20 8 10 0 10 0Z" 
                  fill="url(#dropletGradient1)"/>
          </svg>
        </div>

        {/* Water Droplet 2 */}
        <div className="absolute" 
             style={{
               top: '25%',
               right: '10%',
               animation: 'float2 12s infinite ease-in-out'
             }}>
          <svg width="16" height="20" viewBox="0 0 16 20">
            <path d="M8 0C8 0 0 6 0 12C0 16.4 3.6 20 8 20C12.4 20 16 16.4 16 12C16 6 8 0 8 0Z" 
                  fill="url(#dropletGradient2)"/>
          </svg>
        </div>

        {/* Water Droplet 3 */}
        <div className="absolute" 
             style={{
               top: '60%',
               left: '15%',
               animation: 'float3 10s infinite ease-in-out'
             }}>
          <svg width="24" height="28" viewBox="0 0 24 28">
            <path d="M12 0C12 0 0 10 0 18C0 23.5 5.4 28 12 28C18.6 28 24 23.5 24 18C24 10 12 0 12 0Z" 
                  fill="url(#dropletGradient3)"/>
          </svg>
        </div>

        {/* Water Droplet 4 */}
        <div className="absolute" 
             style={{
               top: '40%',
               right: '25%',
               animation: 'float4 9s infinite ease-in-out'
             }}>
          <svg width="12" height="16" viewBox="0 0 12 16">
            <path d="M6 0C6 0 0 5 0 10C0 13.3 2.7 16 6 16C9.3 16 12 13.3 12 10C12 5 6 0 6 0Z" 
                  fill="url(#dropletRadial)"/>
          </svg>
        </div>

        {/* Water Droplet 5 */}
        <div className="absolute" 
             style={{
               top: '80%',
               left: '70%',
               animation: 'float5 11s infinite ease-in-out'
             }}>
          <svg width="18" height="22" viewBox="0 0 18 22">
            <path d="M9 0C9 0 0 7 0 14C0 18.4 4 22 9 22C14 22 18 18.4 18 14C18 7 9 0 9 0Z" 
                  fill="url(#dropletGradient1)"/>
          </svg>
        </div>

        {/* Water Droplet 6 */}
        <div className="absolute" 
             style={{
               top: '15%',
               left: '80%',
               animation: 'float6 7s infinite ease-in-out'
             }}>
          <svg width="14" height="18" viewBox="0 0 14 18">
            <path d="M7 0C7 0 0 6 0 11C0 15.4 3.1 18 7 18C10.9 18 14 15.4 14 11C14 6 7 0 7 0Z" 
                  fill="url(#dropletGradient2)"/>
          </svg>
        </div>

        {/* Water Droplet 7 */}
        <div className="absolute" 
             style={{
               top: '70%',
               right: '5%',
               animation: 'float7 13s infinite ease-in-out'
             }}>
          <svg width="10" height="14" viewBox="0 0 10 14">
            <path d="M5 0C5 0 0 4 0 8C0 11.3 2.2 14 5 14C7.8 14 10 11.3 10 8C10 4 5 0 5 0Z" 
                  fill="url(#dropletGradient3)"/>
          </svg>
        </div>

        {/* Water Droplet 8 */}
        <div className="absolute" 
             style={{
               top: '35%',
               left: '45%',
               animation: 'float8 6s infinite ease-in-out'
             }}>
          <svg width="22" height="26" viewBox="0 0 22 26">
            <path d="M11 0C11 0 0 9 0 17C0 21.9 4.9 26 11 26C17.1 26 22 21.9 22 17C22 9 11 0 11 0Z" 
                  fill="url(#dropletRadial)"/>
          </svg>
        </div>

        {/* Additional Water Droplets */}
        <div className="absolute" 
             style={{
               top: '5%',
               left: '30%',
               animation: 'float2 14s infinite ease-in-out'
             }}>
          <svg width="8" height="12" viewBox="0 0 8 12">
            <path d="M4 0C4 0 0 3 0 7C0 9.8 1.8 12 4 12C6.2 12 8 9.8 8 7C8 3 4 0 4 0Z" 
                  fill="url(#dropletGradient1)"/>
          </svg>
        </div>

        <div className="absolute" 
             style={{
               top: '90%',
               left: '20%',
               animation: 'float5 16s infinite ease-in-out'
             }}>
          <svg width="13" height="17" viewBox="0 0 13 17">
            <path d="M6.5 0C6.5 0 0 5.5 0 10.5C0 14.1 2.9 17 6.5 17C10.1 17 13 14.1 13 10.5C13 5.5 6.5 0 6.5 0Z" 
                  fill="url(#dropletGradient2)"/>
          </svg>
        </div>

        <div className="absolute" 
             style={{
               top: '45%',
               left: '85%',
               animation: 'float3 15s infinite ease-in-out'
             }}>
          <svg width="15" height="19" viewBox="0 0 15 19">
            <path d="M7.5 0C7.5 0 0 6.5 0 12.5C0 16.1 3.4 19 7.5 19C11.6 19 15 16.1 15 12.5C15 6.5 7.5 0 7.5 0Z" 
                  fill="url(#dropletRadial)"/>
          </svg>
        </div>

        <div className="absolute" 
             style={{
               top: '55%',
               right: '15%',
               animation: 'float7 8s infinite ease-in-out'
             }}>
          <svg width="11" height="15" viewBox="0 0 11 15">
            <path d="M5.5 0C5.5 0 0 4.5 0 9C0 12.3 2.5 15 5.5 15C8.5 15 11 12.3 11 9C11 4.5 5.5 0 5.5 0Z" 
                  fill="url(#dropletGradient3)"/>
          </svg>
        </div>

        <div className="absolute" 
             style={{
               top: '75%',
               left: '40%',
               animation: 'float1 10s infinite ease-in-out'
             }}>
          <svg width="17" height="21" viewBox="0 0 17 21">
            <path d="M8.5 0C8.5 0 0 7.5 0 13.5C0 17.6 3.8 21 8.5 21C13.2 21 17 17.6 17 13.5C17 7.5 8.5 0 8.5 0Z" 
                  fill="url(#dropletGradient1)"/>
          </svg>
        </div>

        <div className="absolute" 
             style={{
               top: '30%',
               left: '10%',
               animation: 'float4 12s infinite ease-in-out'
             }}>
          <svg width="9" height="13" viewBox="0 0 9 13">
            <path d="M4.5 0C4.5 0 0 3.5 0 7.5C0 10.5 2 13 4.5 13C7 13 9 10.5 9 7.5C9 3.5 4.5 0 4.5 0Z" 
                  fill="url(#dropletGradient2)"/>
          </svg>
        </div>

        <div className="absolute" 
             style={{
               top: '85%',
               right: '30%',
               animation: 'float6 9s infinite ease-in-out'
             }}>
          <svg width="19" height="23" viewBox="0 0 19 23">
            <path d="M9.5 0C9.5 0 0 8.5 0 15.5C0 19.9 4.3 23 9.5 23C14.7 23 19 19.9 19 15.5C19 8.5 9.5 0 9.5 0Z" 
                  fill="url(#dropletRadial)"/>
          </svg>
        </div>

        <div className="absolute" 
             style={{
               top: '12%',
               left: '60%',
               animation: 'float3 11s infinite ease-in-out'
             }}>
          <svg width="6" height="10" viewBox="0 0 6 10">
            <path d="M3 0C3 0 0 2.5 0 5.5C0 7.4 1.3 10 3 10C4.7 10 6 7.4 6 5.5C6 2.5 3 0 3 0Z" 
                  fill="url(#dropletGradient1)"/>
          </svg>
        </div>

        <div className="absolute" 
             style={{
               top: '65%',
               left: '55%',
               animation: 'float8 7s infinite ease-in-out'
             }}>
          <svg width="21" height="25" viewBox="0 0 21 25">
            <path d="M10.5 0C10.5 0 0 8.5 0 16.5C0 20.6 4.7 25 10.5 25C16.3 25 21 20.6 21 16.5C21 8.5 10.5 0 10.5 0Z" 
                  fill="url(#dropletGradient3)"/>
          </svg>
        </div>

        <div className="absolute" 
             style={{
               top: '50%',
               left: '2%',
               animation: 'float1 13s infinite ease-in-out'
             }}>
          <svg width="16" height="20" viewBox="0 0 16 20">
            <path d="M8 0C8 0 0 6 0 12C0 16.4 3.6 20 8 20C12.4 20 16 16.4 16 12C16 6 8 0 8 0Z" 
                  fill="url(#dropletRadial)"/>
          </svg>
        </div>

        <div className="absolute" 
             style={{
               top: '22%',
               right: '35%',
               animation: 'float5 14s infinite ease-in-out'
             }}>
          <svg width="7" height="11" viewBox="0 0 7 11">
            <path d="M3.5 0C3.5 0 0 3 0 6C0 8.8 1.6 11 3.5 11C5.4 11 7 8.8 7 6C7 3 3.5 0 3.5 0Z" 
                  fill="url(#dropletGradient2)"/>
          </svg>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes float1 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
            25% { transform: translate(30px, -20px) scale(1.2); opacity: 0.6; }
            50% { transform: translate(60px, 10px) scale(0.8); opacity: 0.4; }
            75% { transform: translate(20px, 25px) scale(1.1); opacity: 0.7; }
          }
          
          @keyframes float2 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
            33% { transform: translate(-40px, 30px) scale(1.3); opacity: 0.5; }
            66% { transform: translate(-20px, -15px) scale(0.9); opacity: 0.3; }
          }
          
          @keyframes float3 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.25; }
            50% { transform: translate(45px, -35px) scale(1.4); opacity: 0.6; }
          }
          
          @keyframes float4 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
            25% { transform: translate(-25px, 20px) scale(0.7); opacity: 0.5; }
            50% { transform: translate(15px, -10px) scale(1.2); opacity: 0.4; }
            75% { transform: translate(-10px, 30px) scale(0.9); opacity: 0.6; }
          }
          
          @keyframes float5 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
            40% { transform: translate(-35px, -25px) scale(1.1); opacity: 0.7; }
            80% { transform: translate(25px, 15px) scale(0.8); opacity: 0.4; }
          }
          
          @keyframes float6 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.25; }
            30% { transform: translate(20px, 35px) scale(1.3); opacity: 0.6; }
            70% { transform: translate(-15px, -20px) scale(0.9); opacity: 0.3; }
          }
          
          @keyframes float7 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
            20% { transform: translate(-30px, -40px) scale(1.2); opacity: 0.5; }
            60% { transform: translate(10px, 25px) scale(0.8); opacity: 0.7; }
          }
          
          @keyframes float8 {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.15; }
            25% { transform: translate(40px, 20px) scale(1.4); opacity: 0.6; }
            50% { transform: translate(-20px, -30px) scale(0.7); opacity: 0.4; }
          }
        `}</style>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Top Section with Brand Highlight */}
        <div className="py-16 text-center border-b border-gray-800/50">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">BLUE</span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent ml-2">MOON</span>
            </div>
          </div>
          <div className="text-blue-400 font-medium tracking-widest text-sm mb-4">
            CAR WASH & AUTO DETAILING
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Premium mobile car wash and detailing services in Dubai. We bring professional car care directly to your location with eco-friendly products and expert techniques.
          </p>
          <div className="flex items-center justify-center gap-1 text-yellow-400 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
            <span className="text-gray-300 text-lg ml-3 font-medium">5.0 Rating</span>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Services */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl">Our Services</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <a href="#services" className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-blue-500/30">
                    <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">
                      {service}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl">Quick Links</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <div key={index} className="group">
                  <a href={link.href} className="flex items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-cyan-500/30">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">
                      {link.name}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl">Get in Touch</h3>
            </div>
            
            <div className="space-y-4">
              <div className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-blue-500/30">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-gray-300 group-hover:text-white transition-colors">
                    <div className="font-medium">Mobile Service</div>
                    <div className="text-sm text-gray-400">Dubai, UAE</div>
                  </div>
                </div>
              </div>
              
              <div className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-blue-500/30">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <a href="tel:+971508586444" className="text-gray-300 group-hover:text-white transition-colors font-medium">
                    +971 50 858 6444
                  </a>
                </div>
              </div>
              
              <div className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-blue-500/30">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <a href="mailto:info@bluemooncarwash.ae" className="text-gray-300 group-hover:text-white transition-colors font-medium text-sm">
                    info@bluemooncarwash.ae
                  </a>
                </div>
              </div>
              
              <div className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-blue-500/30">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors font-medium">Available 24/7</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span>Follow Us</span>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
              </h4>
              <div className="flex items-center gap-4 mb-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-blue-600 hover:to-blue-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 group"
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
              <div className="text-blue-400 font-medium">@bluemoon.carwash</div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="border-t border-gray-800/50 py-12">
          <div className="text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-2xl"></div>
            <div className="relative z-10 p-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-blue-400" />
                <h3 className="text-white text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Ready for a Premium Car Wash?
                </h3>
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-gray-300 mb-8 text-lg">Book your mobile car wash service today and experience the difference</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="tel:+971508586444"
                  className="group relative flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-white hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <Phone className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Call Now: +971 50 858 6444</span>
                </a>
                <a
                  href="https://wa.me/971508586444"
                  className="group relative flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-white hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <MessageCircle className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">WhatsApp Booking</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">©</span>
              </div>
              <span className="font-medium">2024 Blue Moon Car Wash. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#privacy" className="hover:text-blue-400 transition-colors font-medium relative group">
                Privacy Policy
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#terms" className="hover:text-blue-400 transition-colors font-medium relative group">
                Terms of Service
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#sitemap" className="hover:text-blue-400 transition-colors font-medium relative group">
                Sitemap
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}