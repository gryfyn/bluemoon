"use client";

import React, { useEffect, useRef, useState} from "react";
import Image from "next/image";
import Head from "next/head";
import { Phone, Zap, Shield, Send, User, Mail, MessageCircle, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  const [focusedField, setFocusedField] = useState(null);
  const features = [
    {
      icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Mobile Service",
      description: "We come to you - anywhere, anytime. Professional car washing at your doorstep.",
      bgColor: "bg-gradient-to-br from-blue-900/70 to-blue-600/70",
      borderColor: "border-blue-400/50",
      iconColor: "text-blue-300"
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Eco-Friendly Solutions",
      description: "Environmentally safe products that protect your car and the planet.",
      bgColor: "bg-gradient-to-br from-green-900/70 to-green-600/70",
      borderColor: "border-green-400/50",
      iconColor: "text-green-300"
    },
    {
      icon: <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Premium Products from Koch & Adams",
      description: "Professional-grade detailing materials from industry-leading brands.",
      bgColor: "bg-gradient-to-br from-purple-900/70 to-purple-600/70",
      borderColor: "border-purple-400/50",
      iconColor: "text-purple-300"
    },
  ];

  const services = [
    {
      title: "Ceramic Coating",
      description:
        "Indulge your vehicle in the ultimate form of exterior protection. Our ceramic coating service goes beyond traditional detailing, bonding with your car's paint to create a glass-like shield that resists scratches, UV rays, and environmental contaminants. The result? A radiant, mirror-like finish that stays gleaming for years—not weeks. It's not just protection; it's preservation—engineered for those who expect their car to look flawless, always.",
      image: "/assets/services/ceramic-coating.avif",
      layout: "overlay",
    },
    {
      title: "Exterior Wash & Wax",
      description:
        "This isn't just a wash—it's a rejuvenation ritual for your car. Each session begins with a meticulous hand wash, followed by the application of a high-quality wax that enhances the body's gloss while forming a smooth, protective barrier. The result is a silky, light-reflecting shine and water-repellent finish that defies dust and dullness. Delivered directly to your doorstep, it's effortless luxury in motion.",
      image: "/assets/services/exterior-wash.webp",
      layout: "beside",
      layoutDirection: "left",
    },
    {
      title: "Deep Interior Vacuum",
      description:
        "Experience the quiet luxury of a pristine cabin. Our deep vacuuming process doesn't just target the obvious—it reaches into every fold, corner, and crevice, removing debris, dust, and allergens from seats, floor mats, and hidden areas. Whether you shuttle children, pets, or simply crave a spotless space, this service restores a sense of order and cleanliness that you can see—and feel—with every drive.",
      image: "/assets/services/interior-vacuum.jpg",
      layout: "overlay",
    },
    {
      title: "Undercarriage Wash",
      description:
        "Beneath every elegant exterior lies a hidden foundation that deserves equal care. Our undercarriage wash thoroughly flushes away built-up grime, salt, and residue that could silently corrode vital components. Designed for those who value longevity as much as aesthetics, this treatment is your car's unseen armor—discreet, yet essential.",
      image: "/assets/services/undercarriage-wash.png",
      layout: "beside",
      layoutDirection: "right",
    },
    {
      title: "Tire Shine",
      description:
        "Like polished shoes beneath a tailored suit, your tires complete the visual statement of your vehicle. Our tire shine treatment revives them to a rich, satin-black finish while infusing each sidewall with conditioners that protect against aging and UV damage. It's that subtle brilliance that says everything without a word.",
      image: "/assets/services/tire-shine.jpg",
      layout: "overlay",
    },
    {
      title: "Tire & Rim Detailing",
      description:
        "Wheels are where luxury meets performance—and our rim and tire detailing gives them the distinction they deserve. Every bolt, spoke, and groove is expertly cleaned and conditioned to restore metallic brilliance while eliminating brake dust and embedded grime. This precision treatment transforms the overlooked into the unforgettable.",
      image: "/assets/services/tire-rim-detailing.jpg",
      layout: "beside",
      layoutDirection: "left",
    },
    {
      title: "Leather & Fabric Upholstery Detailing",
      description:
        "Upholstery is where comfort meets craftsmanship—and this treatment is designed to honor both. For leather interiors, we gently cleanse and condition using pH-balanced products that restore suppleness, prevent cracking, and enhance natural sheen. For fabric seats, our deep-cleaning process lifts embedded stains, refreshes fibers, and eliminates lingering odors, leaving the cabin looking and feeling rejuvenated. Whether you drive in business attire or barefoot luxury, your seats deserve nothing less than this deep renewal.",
      image: "/assets/services/leather-seats.jpg",
      layout: "overlay",
    },
    {
      title: "Air Freshener",
      description:
        "Fragrance is memory, and every service is finished with a carefully selected scent to enrich your driving experience. Whether it's the crisp allure of leather, the warmth of vanilla, or the classic 'new car' scent, our curated air freshener options linger gently in the air—leaving a trail of refinement wherever you go.",
      image: "/assets/services/air-freshener.png",
      layout: "beside",
      layoutDirection: "right",
    },
    {
      title: "Interior Steam Cleaning",
      description:
        "Redefine cleanliness with a service that feels as fresh as it looks. Using high-temperature steam, we safely lift stains, sanitize surfaces, and dissolve buildup—all without harsh chemicals. Ideal for deep-cleaning fabrics, killing bacteria, and revitalizing your cabin, this treatment is both therapeutic and transformative.",
      image: "/assets/services/steam-cleaning.jpg",
      layout: "beside",
      layoutDirection: "left",
    },
    {
      title: "Engine Bay Wash",
      description:
        "Even the most elegant performance machines deserve to shine under the hood. Our engine bay wash clears away years of dust, grease, and buildup with a gentle yet effective process that enhances visual appeal and supports easier maintenance. It's a clean you'll notice every time the hood is up—and even when it's not.",
      image: "/assets/services/engine-bay-wash.jpg",
      layout: "overlay",
    },
    {
      title: "Ceramic Sealant Spray",
      description:
        "Enjoy the benefits of ceramic protection—without the wait. Our advanced ceramic sealant spray enhances gloss, repels water, and creates a silky-smooth surface in minutes. Ideal for in-between services, this express luxury is tailored for those who want to maintain brilliance on the go.",
      image: "/assets/services/ceramic-sealant.jpg",
      layout: "beside",
      layoutDirection: "right",
    },
    {
      title: "Ozone Generator Sanitization",
      description:
        "Odors are silent intruders, but our ozone generator eliminates them at the molecular level. This advanced sanitization service uses pure ozone to neutralize bacteria, allergens, and stubborn smells from smoke, mildew, or pets. The result is a purified, breathable interior atmosphere that feels as refined as it smells.",
      image: "/assets/services/ozone-sanitization.png",
      layout: "overlay",
    },
    {
      title: "Bakhor Scent Treatment",
      description:
        "Immerse your car in the essence of Arabian luxury with our signature bakhoor treatment. The soft tendrils of aromatic incense fill your cabin with warmth, depth, and tradition—turning your vehicle into a moving sanctuary of culture and comfort. It's more than a fragrance; it's an experience.",
      image: "/assets/services/bakhor-scent.png",
      layout: "beside",
      layoutDirection: "left",
    },
    {
      title: "Polishing & Waxing",
      description:
        "Bring tired paintwork back to life with our dual-phase polish and wax service. Light imperfections and swirl marks are gently polished away, revealing depth and clarity, then sealed in with rich, protective wax. This is paint rejuvenation at its finest—a celebration of shine, texture, and timeless style.",
      image: "/assets/services/polishing-waxing.jpg",
      layout: "overlay",
    },
    {
      title: "Headlight Restoration",
      description:
        "Faded headlights dull your car's presence and compromise safety. Our restoration service removes oxidation and yellowing, reviving clarity and restoring your lights to a crystal-clear finish. The difference is instant—brighter beams, sharper aesthetics, and renewed confidence on every night drive.",
      image: "/assets/services/gif2.gif",
      layout: "beside",
      layoutDirection: "right",
    },
    {
      title: "Dashboard & Console Cleaning",
      description:
        "Your dashboard is where touch meets sight, and every detail matters. We delicately remove dust, fingerprints, and buildup using premium interior cleaners, followed by UV protectants that prevent cracking and fading. The result is a clean, matte-smooth finish that feels as luxurious as it looks.",
      image: "/assets/services/dashboard-cleaning.png",
      layout: "overlay",
    },
  ];

  const washCategories = [
    {
      title: "Express Wash",
      description:
        "Perfect for regular maintenance, our Basic Wash includes an Exterior Wash & Wax, Tire Shine, and Dashboard Cleaning to keep your car looking fresh and protected.",
      services: [
        { name: "Exterior Wash & Wax", icon: "fas fa-car-wash" },
        { name: "Tire Shine", icon: "fas fa-circle" },
        { name: "Dashboard Cleaning", icon: "fas fa-tachometer-alt" },
      ],
    },
    {
      title: "Diamond Detail",
      description:
        "Elevate your car's cleanliness with our Premium Wash, featuring a Deep Interior Vacuum, Interior Steam Cleaning, and Tire and Rim Detailing for a thorough refresh.",
      services: [
        { name: "Exterior Wash & Wax", icon: "fas fa-car-wash" },
        { name: "Tire Shine", icon: "fas fa-circle" },
        { name: "Dashboard Cleaning", icon: "fas fa-tachometer-alt" },
        { name: "Deep Interior Vacuum", icon: "fas fa-wind" },
        { name: "Interior Steam Cleaning", icon: "fas fa-cloud-showers-heavy" },
        { name: "Tire and Rim Detailing", icon: "fas fa-car" },
      ],
    },
    {
      title: "Royal Treatment",
      description:
        "The ultimate care package, including Ceramic Coating, Ozone Generator Sanitization, and Headlight Restoration, plus all Premium Wash services for a showroom finish.",
      services: [
        { name: "Exterior Wash & Wax", icon: "fas fa-car-wash" },
        { name: "Tire Shine", icon: "fas fa-circle" },
        { name: "Dashboard Cleaning", icon: "fas fa-tachometer-alt" },
        { name: "Deep Interior Vacuum", icon: "fas fa-wind" },
        { name: "Interior Steam Cleaning", icon: "fas fa-cloud-showers-heavy" },
        { name: "Tire and Rim Detailing", icon: "fas fa-car" },
        { name: "Ceramic Coating", icon: "fas fa-shield-alt" },
        { name: "Ozone Generator Sanitization", icon: "fas fa-wind" },
        { name: "Headlight Restoration", icon: "fas fa-lightbulb" },
      ],
    },
  ];

  // Individual Intersection Observer for each service
const serviceRefs = useRef([]);
useEffect(() => {
  const currentServiceRefs = serviceRefs.current; // Capture ref value
  const observers = currentServiceRefs.map((ref, index) => {
    if (!ref) return null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -20% 0px', // Delay until element is more in viewport
      }
    );

    observer.observe(ref);
    return observer;
  }).filter(Boolean);

  return () => {
    observers.forEach((observer, index) => {
      if (currentServiceRefs[index]) {
        observer.unobserve(currentServiceRefs[index]);
      }
    });
  };
}, []); // Empty dependency array as refs are stable

// Intersection Observer for About section image scaling
const aboutSectionRef = useRef(null);
const aboutImageRef = useRef(null);

useEffect(() => {
  const currentAboutSectionRef = aboutSectionRef.current; // Capture ref value
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (aboutImageRef.current) {
        if (entry.isIntersecting) {
          aboutImageRef.current.style.transform = 'scale(1)';
          aboutImageRef.current.style.opacity = '1';
        } else {
          aboutImageRef.current.style.transform = 'scale(0.7)';
          aboutImageRef.current.style.opacity = '0.7';
        }
      }
    },
    {
      threshold: 0.5, // Trigger when 50% of section is visible
      rootMargin: '0px 0px -10% 0px', // Adjust for smooth detection
    }
  );

  if (currentAboutSectionRef) {
    observer.observe(currentAboutSectionRef);
  }

  return () => {
    if (currentAboutSectionRef) {
      observer.unobserve(currentAboutSectionRef);
    }
  };
}, []); // Empty dependency array as refs are stable

  return (
    <div className="min-h-screen bg-black text-white font-sans" style={{ scrollBehavior: 'smooth' }}>
      {/* Font Awesome Script */}
      <Head>
        <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous" async></script>
      </Head>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-32 h-32 sm:w-40 sm:h-40 bg-blue-600 rounded-full opacity-20 blur-2xl animate-float1 top-[10%] left-[5%]" />
        <div className="absolute w-32 h-32 bg-blue-500 rounded-full opacity-15 blur-xl animate-float2 top-[65%] right-[15%]" />
        <div className="absolute w-28 h-28 bg-blue-400 rounded-full opacity-25 blur-lg animate-float3 bottom-[15%] left-[25%]" />
        <div className="absolute w-24 h-24 bg-blue-300 rounded-full opacity-20 blur-md animate-float4 top-[35%] right-[5%]" />
      </div>

      {/* Header */}
      <header className="relative z-50">
        <Header />
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section - Landing Page */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-8 pb-8 sm:pt-12 sm:pb-16">
          <div className="max-w-5xl mx-auto text-center">
            {/* Car GIF with Heading Overlay */}
            <div className="relative mb-8">
              <Image
                src="/assets/cargif2.gif"
                alt="Car Wash Animation"
                width={720}
                height={360}
                className="w-full max-w-2xl sm:max-w-3xl h-auto object-contain rounded-xl shadow-2xl mx-auto"
                style={{ objectFit: "contain" }}
                priority
              />
              {/* Brand Name Overlay - positioned in lower section of gif */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 sm:pb-12 md:pb-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 tracking-tight drop-shadow-2xl">
                  <span className="text-white">BLUE</span>{" "}
                  <span className="text-blue-400">MOON</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-blue-400 font-semibold mb-1 drop-shadow-lg">
                  Car Wash and Detailing Service
                </p>
                <p className="text-sm sm:text-base md:text-lg text-blue-200 font-light drop-shadow-lg">
                  Come and Get Your Shine
                </p>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
              <a
                href="tel:+971508586444"
                className="group relative flex items-center gap-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 hover:from-blue-700 hover:via-blue-800 hover:to-blue-700 px-6 py-4 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-2xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto overflow-hidden"
                aria-label="Call Blue Moon at +971 50 858 6444"
              >
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                
                <div className="relative flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Call Now</div>
                    <div className="font-bold">+971 50 858 6444</div>
                  </div>
                </div>
              </a>
              
              <a
                href="https://wa.me/971508586444"
                className="group relative flex items-center gap-3 bg-gradient-to-r from-green-600 via-green-700 to-green-600 hover:from-green-700 hover:via-green-800 hover:to-green-700 px-6 py-4 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-2xl text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-green-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-auto overflow-hidden"
                aria-label="Book via WhatsApp"
              >
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                
                <div className="relative flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-80">WhatsApp</div>
                    <div className="font-bold">Quick Booking</div>
                  </div>
                </div>
              </a>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group relative"
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  <div className={`relative ${feature.bgColor} backdrop-blur-xl p-6 sm:p-8 rounded-2xl border ${feature.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 group`}>
                    {/* Feature Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {i + 1}
                    </div>
                    
                    {/* Icon Container */}
                    <div className={`${feature.iconColor} mb-6 flex justify-center group-hover:scale-125 transition-transform duration-500`}>
                      <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                        {feature.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center group-hover:text-blue-100 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base text-center leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {feature.description}
                    </p>
                    
                    {/* Bottom Accent */}
                    <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
              </div>
              <p className="text-blue-400 text-xs mt-2 opacity-70">Scroll Down</p>
            </div>
          </div>
        </section>

                {/* Enhanced Wash Categories & Booking Section */}
        <section id="wash-categories" className="py-16 px-4 sm:py-24 bg-gradient-to-b from-black via-blue-900/20 to-gray-800 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
                <span className="text-blue-400 font-medium uppercase tracking-wider text-sm">Premium Packages</span>
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></div>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent tracking-tight mb-4">
                Our Wash Packages
              </h2>
              <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Choose from our tailored wash packages to keep your vehicle in pristine condition, delivered right to you.
              </p>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {washCategories.map((category, i) => (
                <div
                  key={i}
                  className="group relative bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 shadow-2xl hover:border-blue-500/70 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Package Badge */}
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {i === 0 ? 'BASIC' : i === 1 ? 'POPULAR' : 'PREMIUM'}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 group-hover:text-blue-100 transition-colors duration-300">
                      {category.title}
                    </h3>
                    
                    {/* Service Icons */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {category.services.map((service, j) => (
                        <div key={j} className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                          <i className={`${service.icon} text-blue-400 text-sm group-hover:text-blue-300 transition-colors duration-300`} title={service.name}></i>
                        </div>
                      ))}
                    </div>
                    
                    {/* Services List */}
                    <div className="text-gray-300 text-sm mb-8 leading-relaxed">
                      {category.services.map((service, j) => service.name).join(' • ')}
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* CTA Button */}
                    <button
                      onClick={() => {
                        // Scroll to booking form
                        document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
                        // Pre-select this package
                        document.querySelector(`input[value="${category.title}"]`).checked = true;
                      }}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-4 rounded-2xl text-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 group-hover:scale-105"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Select Package
                        <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Booking Form Section */}
            <div id="booking-form" className="relative">
              {/* Form Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
                  <span className="text-cyan-400 font-medium uppercase tracking-wider text-sm">Book Your Service</span>
                  <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyan-400"></div>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent tracking-tight mb-4">
                  Schedule Your Appointment
                </h3>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Fill out the form below to book your preferred wash package and any additional services.
                </p>
              </div>

              {/* Booking Form */}
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-gray-900/95 to-gray-950/95 backdrop-blur-xl p-8 lg:p-12 rounded-3xl border border-gray-700/50 shadow-2xl">
                  <form className="space-y-8">
                    {/* Package Selection */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                        <i className="fas fa-car-wash text-blue-400"></i>
                        Select Your Package
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {washCategories.map((category, i) => (
                          <label key={i} className="relative cursor-pointer group">
                            <input
                              type="radio"
                              name="package"
                              value={category.title}
                              className="sr-only peer"
                            />
                            <div className="bg-gray-800/50 border-2 border-gray-600 peer-checked:border-blue-500 peer-checked:bg-blue-500/10 rounded-xl p-4 transition-all duration-300 group-hover:border-gray-500">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-white">{category.title}</span>
                                <div className="w-5 h-5 border-2 border-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-500 rounded-full flex items-center justify-center">
                                  <div className="w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
                                </div>
                              </div>
                              <p className="text-gray-400 text-sm">
                                {category.services.length} services included
                              </p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Date and Time Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-white font-medium flex items-center gap-2">
                          <i className="fas fa-calendar-alt text-cyan-400"></i>
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-white font-medium flex items-center gap-2">
                          <i className="fas fa-clock text-cyan-400"></i>
                          Preferred Time
                        </label>
                        <select className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300">
                          <option value="">Select Time</option>
                          <option value="09:00">9:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                          <option value="17:00">5:00 PM</option>
                        </select>
                      </div>
                    </div>

                    {/* Extra Services */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                        <i className="fas fa-plus-circle text-green-400"></i>
                        Additional Services
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { name: 'Ozone Generator Sanitization', price: '+$25', icon: 'fas fa-wind' },
                          { name: 'Paint Protection Film', price: '+$50', icon: 'fas fa-shield-alt' },
                          { name: 'Interior Fabric Protection', price: '+$30', icon: 'fas fa-couch' },
                          { name: 'Chrome Polish & Detail', price: '+$20', icon: 'fas fa-gem' },
                          { name: 'Windshield Rain Repellent', price: '+$15', icon: 'fas fa-tint' },
                          { name: 'Air Vent Deep Cleaning', price: '+$18', icon: 'fas fa-fan' },
                        ].map((service, i) => (
                          <label key={i} className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                            />
                            <div className="w-5 h-5 border-2 border-gray-400 peer-checked:border-green-500 peer-checked:bg-green-500 rounded flex items-center justify-center transition-all duration-300">
                              <i className="fas fa-check text-white text-xs opacity-0 peer-checked:opacity-100"></i>
                            </div>
                            <div className="flex-1 bg-gray-800/30 peer-checked:bg-green-500/10 border border-gray-600 peer-checked:border-green-500/50 rounded-lg p-3 transition-all duration-300">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <i className={`${service.icon} text-green-400 text-sm`}></i>
                                  <span className="text-white text-sm font-medium">{service.name}</span>
                                </div>
                                <span className="text-green-400 text-sm font-semibold">{service.price}</span>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="text-white font-medium flex items-center gap-2">
                          <i className="fas fa-user text-blue-400"></i>
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-white font-medium flex items-center gap-2">
                          <i className="fas fa-phone text-blue-400"></i>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+971 XX XXX XXXX"
                          className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Address */}
                    <div className="space-y-3">
                      <label className="text-white font-medium flex items-center gap-2">
                        <i className="fas fa-map-marker-alt text-purple-400"></i>
                        Service Address
                      </label>
                      <textarea
                        rows="3"
                        placeholder="Enter your complete address where you'd like the service..."
                        className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300 resize-none"
                      ></textarea>
                    </div>

                    {/* Special Instructions */}
                    <div className="space-y-3">
                      <label className="text-white font-medium flex items-center gap-2">
                        <i className="fas fa-comment-alt text-yellow-400"></i>
                        Special Instructions (Optional)
                      </label>
                      <textarea
                        rows="3"
                        placeholder="Any special requests or instructions for our team..."
                        className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none transition-all duration-300 resize-none"
                      ></textarea>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-2xl text-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <i className="fas fa-calendar-check"></i>
                          Book Appointment
                        </span>
                      </button>
                      <a
                        href="https://wa.me/971508586444?text=Hi! I'd like to get a quote for car wash services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8 py-4 rounded-2xl text-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-green-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 text-center"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <i className="fab fa-whatsapp"></i>
                          Get Quote via WhatsApp
                        </span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Particles Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-1000"></div>
            <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-2000"></div>
            <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-3000"></div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 sm:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight text-center mb-12">
              Our Services
            </h2>
            {services.map((service, i) => (
              <div
                key={i}
                ref={(el) => (serviceRefs.current[i] = el)}
                className={`mb-16 service-item ${service.layout === "overlay" ? "relative" : ""}`}
              >
                {service.layout === "overlay" ? (
                  <div className="relative rounded overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={1280}
                      height={720}
                      className="w-full h-[450px] object-cover opacity-40"
                      priority={i < 3}
                    />
                    <div className="absolute bottom-0 left-0 p-6 pt-12">
                      <h3 className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-4 service-animate slideInFromBottom">
                        {service.title}
                      </h3>
                      <p className="text-gray-200 max-w-2xl service-animate slideInFromBottom delay-200">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className={`flex flex-col lg:flex-row gap-8 items-center ${service.layoutDirection === "right" ? "lg:flex-row-reverse" : ""}`}>
                    <div className="w-full lg:w-2/5 service-animate slideInFromLeft">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={800}
                        height={1000}
                        className="w-[550px] mx-auto h-[270px] object-cover shadow-lg"
                        priority={i < 3}
                      />
                    </div>
                    <div className={`w-full lg:w-3/5 service-animate ${service.layoutDirection === "right" ? "slideInFromRight" : "slideInFromLeft"}`}>
                      <h3 className="text-2xl sm:text-3xl font-semibold text-blue-400 mb-4 text-center lg:text-left">
                        {service.title}
                      </h3>
                      <p className="text-gray-200 text-center lg:text-left leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutSectionRef} className="py-16 px-4 sm:py-24 bg-gradient-to-b from-black to-blue-900/30">
          <div className="max-w-5xl mx-auto text-center">
            {/* Image Above Title */}
            <div className="mb-8">
              <Image
                ref={aboutImageRef}
                src="/assets/homepic.jpg"
                alt="Blue Moon About"
                width={700}
                height={500}
                className="mx-auto rounded-2xl shadow-2xl transition-all duration-700 ease-in-out hover:shadow-blue-500/50"
                style={{ transform: 'scale(0.7)', opacity: 0.7 }}
                priority
              />
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 animate-fadeIn">
              About Blue Moon
            </h2>

            {/* Decorative Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-10 rounded-full"></div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed font-light animate-fadeIn delay-100">
              At Blue Moon Car Wash and Detailing, we believe your vehicle is more than just a mode of transport—it is an extension of your style and personality. Founded with a passion for automotive excellence, we bring professional-grade detailing services directly to your doorstep. Using eco-friendly products and premium materials from industry leaders like Koch & Adams, we ensure every service delivers a flawless finish while protecting your car and the environment. Our mission is simple: to elevate car care into an art form, providing convenience, quality, and a shine that turns heads.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-gray-950/60 backdrop-blur-xl p-6 rounded-3xl border border-gray-700/50 shadow-xl hover:border-blue-500/70 hover:shadow-blue-500/30 transition-all duration-300 animate-fadeIn delay-200">
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">Our Commitment</h3>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light">
                  We are dedicated to delivering unparalleled service, combining cutting-edge techniques with a customer-first approach to ensure your vehicle always looks its best.
                </p>
              </div>
              <div className="bg-gray-950/60 backdrop-blur-xl p-6 rounded-3xl border border-gray-700/50 shadow-xl hover:border-blue-500/70 hover:shadow-blue-500/30 transition-all duration-300 animate-fadeIn delay-300">
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">Our Values</h3>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light">
                  Quality, sustainability, and convenience define us. We strive to exceed expectations while maintaining eco-conscious practices and unmatched attention to detail.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content with Car Image */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-blue-400" />
                <span className="text-blue-400 font-medium uppercase tracking-wider text-sm">Get in Touch</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
                Ready for Your Next
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Car Detail?
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Have questions or ready to book your next detailing service? Reach out to us via phone, WhatsApp, or email, and let us bring the shine to you.
              </p>
            </div>

            {/* Car Image with Overlay Effect */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm">
                <Image
                  src="/assets/car2.jpg" 
                  alt="Blue Moon Car Wash - Professional Car Detailing" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">Blue Moon Car Wash</p>
                  <p className="text-blue-300 text-sm">Professional Mobile Detailing</p>
                </div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-1 gap-4">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Call or WhatsApp</h4>
                    <div className="space-y-1">
                      <a href="tel:+971508586444" className="block text-blue-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                        +971 50 858 6444
                      </a>
                      <a href="https://wa.me/971508586444" className="block text-green-300 hover:text-green-400 transition-colors duration-300 text-sm">
                        WhatsApp Available
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email Us</h4>
                    <a href="mailto:info@bluemooncarwash.com" className="text-blue-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                      info@bluemooncarwash.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Contact Form */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
            
            <div className="relative bg-white/5 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border border-white/10 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Send Us a Message</h3>
              </div>
              
              <div className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <label htmlFor="name" className="block text-gray-200 text-sm font-medium mb-3 flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-400" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full p-4 rounded-xl bg-white/5 border transition-all duration-300 text-white placeholder-gray-400 focus:outline-none focus:scale-105 ${
                      focusedField === 'name' 
                        ? 'border-blue-400 shadow-lg shadow-blue-500/25 bg-white/10' 
                        : 'border-white/20 hover:border-white/30'
                    }`}
                    placeholder="Your Name"
                  />
                  {focusedField === 'name' && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 -z-10 blur-md"></div>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label htmlFor="email" className="block text-gray-200 text-sm font-medium mb-3 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full p-4 rounded-xl bg-white/5 border transition-all duration-300 text-white placeholder-gray-400 focus:outline-none focus:scale-105 ${
                      focusedField === 'email' 
                        ? 'border-cyan-400 shadow-lg shadow-cyan-500/25 bg-white/10' 
                        : 'border-white/20 hover:border-white/30'
                    }`}
                    placeholder="Your Email"
                  />
                  {focusedField === 'email' && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 -z-10 blur-md"></div>
                  )}
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label htmlFor="message" className="block text-gray-200 text-sm font-medium mb-3 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-blue-300" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full p-4 rounded-xl bg-white/5 border transition-all duration-300 text-white placeholder-gray-400 resize-none focus:outline-none focus:scale-105 ${
                      focusedField === 'message' 
                        ? 'border-blue-300 shadow-lg shadow-blue-500/25 bg-white/10' 
                        : 'border-white/20 hover:border-white/30'
                    }`}
                    placeholder="Your Message"
                  ></textarea>
                  {focusedField === 'message' && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 -z-10 blur-md"></div>
                  )}
                </div>

                {/* Enhanced Submit Button */}
                <button className="group relative w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 hover:from-blue-700 hover:via-cyan-700 hover:to-blue-700 px-8 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent overflow-hidden">
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  
                  <span className="relative flex items-center justify-center gap-3">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                </button>
              </div>

              {/* Success Message Placeholder */}
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl opacity-0 transition-opacity duration-300">
                <p className="text-green-400 text-sm text-center">Message sent successfully! We will get back to you soon.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping delay-3000"></div>
      </div>
    </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-auto">
        <Footer />
      </footer>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(15px, -15px) rotate(120deg); }
          66% { transform: translate(-10px, 10px) rotate(240deg); }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(-20px, 15px) rotate(-120deg); }
          66% { transform: translate(10px, -10px) rotate(-240deg); }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(10px, -20px) rotate(60deg); }
          66% { transform: translate(-15px, 15px) rotate(300deg); }
        }

        @keyframes float4 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          33% { transform: translate(-10px, -10px) rotate(-60deg); }
          66% { transform: translate(20px, 5px) rotate(-300deg); }
        }

        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromRight {
          0% {
            transform: translateX(50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromBottom {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-item.is-visible .service-animate.slideInFromLeft {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }

        .service-item.is-visible .service-animate.slideInFromRight {
          animation: slideInFromRight 0.8s ease-out forwards;
        }

        .service-item.is-visible .service-animate.slideInFromBottom {
          animation: slideInFromBottom 0.8s ease-out forwards;
        }

        .service-item.is-visible .service-animate.delay-200 {
          animation-delay: 0.2s;
        }

        .service-item:not(.is-visible) .service-animate {
          opacity: 0;
        }

        .service-item:not(.is-visible) .service-animate.slideInFromLeft {
          transform: translateX(-50px);
        }

        .service-item:not(.is-visible) .service-animate.slideInFromRight {
          transform: translateX(50px);
        }

        .service-item:not(.is-visible) .service-animate.slideInFromBottom {
          transform: translateY(50px);
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .animate-float1 {
          animation: float1 20s ease-in-out infinite;
        }

        .animate-float2 {
          animation: float2 25s ease-in-out infinite;
        }

        .animate-float3 {
          animation: float3 30s ease-in-out infinite;
        }

        .animate-float4 {
          animation: float4 22s ease-in-out infinite;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}