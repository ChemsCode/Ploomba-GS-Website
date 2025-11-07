"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Truck, Smartphone, BarChart3, ArrowRight, Zap } from 'lucide-react';

interface ServicesOverviewProps {
  className?: string;
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ticking = useRef(false);

  const services = [
    {
      icon: Truck,
      title: "Autonomous Wagon",
      description: "Electric-powered autonomous transport that works as hard as you do.",
      features: [
        "300kg load capacity for heavy field work",
        "Real-time field analysis as it moves",
        "Autonomous navigation and obstacle avoidance",
        "Customizable for your specific needs"
      ],
      href: "/technology/hardware",
      badge: "Hardware"
    },
    {
      icon: Smartphone,
      title: "Agro App",
      description: "Your entire farm operation, accessible from anywhere.",
      features: [
        "Monitor all equipment in real-time",
        "Production modeling and forecasting",
        "Field management from a single dashboard",
        "Farmer-first design, built for the field"
      ],
      href: "/technology/software",
      badge: "Software"
    },
    {
      icon: BarChart3,
      title: "Analysis Platform",
      description: "AI-powered insights that help you make better decisions, faster.",
      features: [
        "Accurate yield estimation with AI models",
        "Early disease and pest detection",
        "Graphical data visualization",
        "Actionable insights from your field data"
      ],
      href: "/technology/software",
      badge: "Analytics"
    },
  ];

  const cardStyle = {
    height: '55vh',
    maxHeight: '550px',
    minHeight: '450px',
    borderRadius: '24px',
    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
    willChange: 'transform, opacity'
  };

  useEffect(() => {
    const currentSection = sectionRef.current;
    
    // Intersection observer to detect when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }
    
    // Optimized scroll handler using requestAnimationFrame
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          
          const sectionRect = sectionRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const totalScrollDistance = viewportHeight * 2;
          
          // Calculate scroll progress
          let progress = 0;
          if (sectionRect.top <= 0) {
            progress = Math.min(1, Math.max(0, Math.abs(sectionRect.top) / totalScrollDistance));
          }
          
          // Determine which card should be visible
          if (progress >= 0.66) {
            setActiveCardIndex(2);
          } else if (progress >= 0.33) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(0);
          }
          
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // Card visibility based on active index
  const isFirstCardVisible = isIntersecting;
  const isSecondCardVisible = activeCardIndex >= 1;
  const isThirdCardVisible = activeCardIndex >= 2;

  return (
    <div 
      ref={sectionRef} 
      className={`relative ${className}`}
      style={{ height: '300vh' }}
    >
      <section className="w-full h-screen py-10 md:py-16 sticky top-0 overflow-hidden bg-background">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto h-full flex flex-col">
          {/* Header */}
          <div className="mb-4 md:mb-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-4 mb-4 pt-8 sm:pt-6 md:pt-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">Complete Ag-Tech Solution</span>
              </div>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
            >
              <span className="text-foreground">Three Powerful Tools.</span>
              <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
                One Connected Platform.
              </span>
            </motion.h2>
          </div>
          
          {/* Stacking Cards Container */}
          <div className="relative flex-1 perspective-1000">
            {/* First Card - Autonomous Wagon */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-2xl ${isFirstCardVisible ? 'animate-fade-in' : ''}`}
              style={{
                ...cardStyle,
                zIndex: 10,
                transform: `translateY(${isFirstCardVisible ? '90px' : '200px'}) scale(0.9)`,
                opacity: isFirstCardVisible ? 0.9 : 0
              }}
            >
              {/* Background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-muted/50 backdrop-blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30">
                  <span className="text-sm font-semibold text-foreground">{services[0].badge}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-6">
                    <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-primary" strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                    {services[0].title}
                  </h3>
                  
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-6">
                    {services[0].description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {services[0].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-base sm:text-lg text-muted-foreground">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href={services[0].href}
                  className="inline-flex items-center gap-2 font-bold text-lg text-primary hover:gap-3 transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            {/* Second Card - Agro App */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-2xl ${isSecondCardVisible ? 'animate-fade-in' : ''}`}
              style={{
                ...cardStyle,
                zIndex: 20,
                transform: `translateY(${isSecondCardVisible ? activeCardIndex === 1 ? '55px' : '45px' : '200px'}) scale(0.95)`,
                opacity: isSecondCardVisible ? 1 : 0,
                pointerEvents: isSecondCardVisible ? 'auto' : 'none'
              }}
            >
              {/* Background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-muted/50 backdrop-blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 via-transparent to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30">
                  <span className="text-sm font-semibold text-foreground">{services[1].badge}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-6">
                    <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-primary" strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                    {services[1].title}
                  </h3>
                  
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-6">
                    {services[1].description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {services[1].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-base sm:text-lg text-muted-foreground">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href={services[1].href}
                  className="inline-flex items-center gap-2 font-bold text-lg text-primary hover:gap-3 transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            {/* Third Card - Analysis Platform */}
            <div 
              className={`absolute inset-0 overflow-hidden shadow-2xl ${isThirdCardVisible ? 'animate-fade-in' : ''}`}
              style={{
                ...cardStyle,
                zIndex: 30,
                transform: `translateY(${isThirdCardVisible ? activeCardIndex === 2 ? '15px' : '0' : '200px'}) scale(1)`,
                opacity: isThirdCardVisible ? 1 : 0,
                pointerEvents: isThirdCardVisible ? 'auto' : 'none'
              }}
            >
              {/* Background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-muted/50 backdrop-blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30">
                  <span className="text-sm font-semibold text-foreground">{services[2].badge}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-6">
                    <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 text-primary" strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                    {services[2].title}
                  </h3>
                  
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-6">
                    {services[2].description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {services[2].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-base sm:text-lg text-muted-foreground">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href={services[2].href}
                  className="inline-flex items-center gap-2 font-bold text-lg text-primary hover:gap-3 transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;
