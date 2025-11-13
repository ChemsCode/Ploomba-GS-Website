"use client";

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { 
  Brain, 
  MapPin, 
  Camera, 
  Wifi, 
  Battery, 
  Shield,
  Gauge,
  Cloud,
  Zap,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const InteractiveFeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  // Generate stable random positions for particles
  const [particlePositions] = useState(() => 
    Array.from({ length: 6 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative h-full rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 sm:p-8 hover:border-primary/40 transition-all duration-500 overflow-hidden"
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isHovered
              ? 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1) 0%, transparent 70%)'
              : 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 70%)',
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Floating particles on hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {particlePositions.map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/40 rounded-full"
                initial={{ 
                  x: `${pos.x}%`, 
                  y: `${pos.y}%`,
                  scale: 0 
                }}
                animate={{ 
                  y: '-100%',
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}

        <div className="relative z-10">
          {/* Icon with 3D effect */}
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotateZ: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-primary/20 to-primary/5 mb-6 relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Icon className="w-8 h-8 text-primary" strokeWidth={2.5} />
            {/* 3D depth layer */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl"
              animate={{
                scale: isHovered ? 1.5 : 1,
                opacity: isHovered ? 0.5 : 0,
              }}
            />
          </motion.div>

          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.1), transparent)',
            transform: 'translateX(-100%)',
          }}
          animate={{
            transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
          }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </motion.div>
  );
};

const FeaturesShowcase: React.FC<{ className?: string }> = ({ className = '' }) => {
  const allFeatures = [
    {
      icon: Battery,
      title: "Electric Powered",
      description: "Eco-friendly electric motors with 12+ hours of battery life for all-day operation."
    },
    {
      icon: Shield,
      title: "All-Weather Design",
      description: "Built tough to handle any conditions your farm throws at it."
    },
    {
      icon: Wifi,
      title: "Connected System",
      description: "Real-time data transmission and remote monitoring from anywhere."
    },
    {
      icon: Gauge,
      title: "Smart Navigation",
      description: "Advanced sensors and GPS for precise autonomous navigation."
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Machine learning models that continuously improve yield predictions."
    },
    {
      icon: Camera,
      title: "Computer Vision",
      description: "Detect diseases, pests, and anomalies before they become problems."
    },
    {
      icon: Cloud,
      title: "Cloud Analytics",
      description: "Process massive amounts of field data for actionable insights."
    },
    {
      icon: MapPin,
      title: "Field Mapping",
      description: "Precise GPS mapping and zone management for optimal coverage."
    },
  ];

  const highlights = [
    { value: "12+hrs", label: "Battery Life" },
    { value: "24/7", label: "Monitoring" },
    { value: "95%", label: "AI Accuracy" },
  ];

  return (
    <section className={`relative py-24 sm:py-32 overflow-hidden ${className}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-linear-to-b from-muted/30 via-background to-muted/30" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Hardware & Software.</span>
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
              Perfectly Integrated.
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Experience the synergy of robust hardware and intelligent software working together seamlessly
          </p>
        </motion.div>

        {/* Interactive Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {allFeatures.map((feature, idx) => (
            <InteractiveFeatureCard key={idx} {...feature} index={idx} />
          ))}
        </div>

        {/* Highlights Section with Animated Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
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
              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12">
                {highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-6 rounded-2xl bg-background/50 border border-border/50"
                  >
                    <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                      {highlight.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {highlight.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Experience the Future of Farming
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Discover how our integrated hardware and software solutions can transform your agricultural operations
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="/technology/hardware">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg shadow-xl cursor-pointer relative overflow-hidden"
                    >
                      <span className="relative z-10">View Hardware</span>
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
                  
                  <Link href="/technology/software">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-card border-2 border-primary/30 text-foreground rounded-full font-bold text-lg hover:bg-primary/5 hover:border-primary transition-all duration-300 cursor-pointer"
                    >
                      <span>View Software</span>
                      <Zap className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
