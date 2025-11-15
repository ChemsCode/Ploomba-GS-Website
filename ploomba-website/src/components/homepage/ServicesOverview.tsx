"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Truck, Smartphone, BarChart3, ArrowRight } from 'lucide-react';

interface ServicesOverviewProps {
  className?: string;
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ className = '' }) => {
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
      badge: "Hardware",
      gradient: "from-blue-500/10 via-transparent to-transparent"
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
      badge: "Software",
      gradient: "from-primary/10 via-transparent to-transparent"
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
      badge: "Analytics",
      gradient: "from-purple-500/10 via-transparent to-transparent"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.19, 1, 0.22, 1] as const
      }
    }
  };

  return (
    <section className={`relative w-full py-16 md:py-24 lg:py-32 overflow-hidden ${className}`}>
      {/* Multi-layer background for smooth blending */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-muted/20 to-transparent opacity-60" />
      
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            <span className="text-foreground">Three Powerful Tools.</span>
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
              One Connected Platform.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Everything you need to modernize your farming operations
          </motion.p>
        </div>
        
        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-card via-card to-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-primary" strokeWidth={2} />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-3">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-base text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0 group-hover:scale-150 transition-transform duration-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <Link
                  href={service.href}
                  aria-label={`Learn more about our ${service.title}`}
                  className="inline-flex items-center gap-2 font-bold text-base text-primary hover:gap-3 transition-all duration-300 mt-auto"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              
              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary/0 group-hover:ring-primary/20 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="relative rounded-3xl border-2 border-border bg-card/50 backdrop-blur-sm p-8 sm:p-12 overflow-hidden shadow-2xl">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5" />
            
            {/* Floating decorative element */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-primary/20 to-transparent rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Farm?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get in touch with our team to learn how Ploomba can help you optimize your operations
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg shadow-xl cursor-pointer relative overflow-hidden"
                  >
                    <span className="relative z-10">Contact Us</span>
                    <motion.span
                      className="relative z-10"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
