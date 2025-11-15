"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Book, BarChart, DollarSign, Check, Layers, Image as ImageIcon, TrendingUp, Link2 } from 'lucide-react';
import FeaturesShowcase from '../../../src/components/homepage/FeaturesShowcase';

export default function SoftwarePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Book,
      title: "Farm Journal",
      description: "Your complete farm management hub in one place",
      points: [
        "Keep track of all your fields, equipment, and Ploomba wagons in a simple and fluid UI",
        "Keep everything organized — tag and link fields, logs, and equipment to see how they all fit together",
        "Generate comprehensive logs and reports for all your farm operations",
        "Access your journal from anywhere, on any device, whenever you need it"
      ]
    },
    {
      icon: BarChart,
      title: "Yield Prediction",
      description: "AI-powered insights for smarter harvest planning",
      points: [
        "Store pictures of the produce in your fields and let our AI analysis tool predict the number of ready-to-harvest produce per field",
        "Search these pictures for rotten or unripe produce to get a better understanding of quality",
        "Understand how your fertilizer, soil, and weather conditions affect your yield",
        "Get accurate forecasts weeks before harvest to plan logistics and secure contracts"
      ]
    },
    {
      icon: DollarSign,
      title: "Revenue Forecasting",
      description: "Make confident financial decisions with data-driven insights",
      points: [
        "Forecast your revenue with our Retail Price Analysis tool, dependent on your yield, season, and market",
        "See average expenses in your area and get insights to help you predict future costs",
        "Track historical data to identify profitable trends and optimize operations",
        "Make data-driven decisions about resource allocation and crop planning"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Layers,
      title: "Unified Management",
      description: "Track fields, equipment, and Ploomba wagons all in one place with intuitive tagging and linking"
    },
    {
      icon: ImageIcon,
      title: "Visual Analytics",
      description: "Store and analyze produce photos to identify quality issues and patterns throughout the season"
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Stay ahead with real-time market pricing, seasonal trends, and regional expense benchmarks"
    },
    {
      icon: Link2,
      title: "Seamless Integration",
      description: "Works perfectly with Ploomba's autonomous hardware for a complete farm management solution"
    }
  ];

  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for small farms getting started with digital tools",
      features: [
        "Up to 5 fields",
        "Basic farm journal",
        "Photo storage (1GB)",
        "Basic yield tracking",
        "Mobile app access",
        "Community support"
      ],
      cta: "Contact Us",
      href: "/contact",
      highlighted: false
    },
    {
      name: "Premium",
      price: "TBD",
      period: "",
      description: "For growing operations ready to leverage AI insights",
      features: [
        "Unlimited fields & equipment",
        "Advanced farm journal with tagging",
        "Photo storage (50GB)",
        "AI yield prediction",
        "Revenue forecasting & market analysis",
        "Retail price analysis tool",
        "Priority support",
        "Export data & reports"
      ],
      cta: "Contact Us",
      href: "/contact",
      highlighted: true
    },
    {
      name: "Ultra",
      price: "Custom",
      description: "For large-scale enterprises with custom requirements",
      features: [
        "Everything in Premium",
        "Unlimited storage",
        "Custom integrations",
        "Dedicated account manager",
        "On-site training",
        "API access",
        "Multi-farm management",
        "SLA guarantees"
      ],
      cta: "Contact Us",
      href: "/contact",
      highlighted: false
    }
  ];

  return (
    <main>
      {/* Enhanced Hero Section */}
      <section className="relative bg-linear-to-b from-muted/50 via-background to-background pt-28 pb-12 overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-foreground">Ploomba </span>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
              Software
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            An all-in-one solution to analyze and forecast your farm, built for farmers and agronomists
          </motion.p>
        </div>
      </section>

      {/* Software Philosophy Section */}
      <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
            >
              <span className="text-foreground">Ploomba&apos;s software is built with </span>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
                farmers and agronomists
              </span>
              <span className="text-foreground"> in mind</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg sm:text-xl text-muted-foreground leading-relaxed"
            >
              <p>
                We want to provide a tool that not only{" "}
                <span className="text-foreground font-semibold">works seamlessly with our autonomous hardware</span>, but acts as an{" "}
                <span className="text-foreground font-semibold">all-in-one solution</span> to analyze and forecast your farm.
              </p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-foreground/90 font-medium pt-2"
              >
                From field management to AI-driven insights, everything you need in one powerful platform—designed by people who understand agriculture.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Features - Main 3 */}
      <section className="py-20 sm:py-32 bg-muted/30 relative overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Three Powerful Tools for </span>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
                Complete Farm Management
              </span>
            </h2>
          </motion.div>

          <div className="space-y-32">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Icon/Visual Side */}
                  <motion.div 
                    className={`${isEven ? 'md:order-1' : 'md:order-2'}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative flex items-center justify-center p-12 bg-card border-2 border-border rounded-3xl shadow-lg overflow-hidden group">
                      {/* Hover gradient */}
                      <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-500" />
                      
                      <div className="relative w-32 h-32 rounded-2xl bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <Icon className="w-20 h-20 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Side */}
                  <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-4">
                      {feature.points.map((point, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          className="flex items-start gap-3"
                        >
                          <div className="shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                            <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                          </div>
                          <span className="text-base text-muted-foreground leading-relaxed">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Everything You Need in </span>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
                One Platform
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-card border-2 border-border rounded-3xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center justify-center w-14 h-14 bg-linear-to-br from-primary/20 to-primary/5 rounded-xl mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300"
                  >
                    <feature.icon className="w-7 h-7 text-primary" strokeWidth={2} />
                  </motion.div>
                  <h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <FeaturesShowcase />

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-muted/30 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to Transform
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60"> Your Farm?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Start with our free version or explore our pricing plans to find the perfect solution for your operation.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold transition-all duration-200 shadow-xl hover:shadow-2xl cursor-pointer"
                >
                  Try the Free Version
                </motion.div>
              </Link>
              <Link href="#pricing">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-card border-2 border-primary/30 text-foreground px-8 py-4 rounded-full text-lg font-bold backdrop-blur-sm hover:bg-primary/10 hover:border-primary transition-all duration-300 shadow-lg cursor-pointer"
                >
                  View Billing Plans
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section id="pricing" className="py-20 sm:py-32 bg-background relative overflow-hidden">
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Choose Your
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60"> Perfect Plan</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From small farms to large enterprises, we have a solution that fits your needs and grows with you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: tier.highlighted ? 0 : -8 }}
                className={`relative bg-card border-2 rounded-3xl p-8 transition-all duration-300 ${
                  tier.highlighted 
                    ? 'border-primary shadow-2xl scale-105 z-10' 
                    : 'border-border shadow-lg hover:border-primary/50'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="flex flex-col h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-foreground">{tier.price}</span>
                      {tier.period && (
                        <span className="text-muted-foreground text-lg">{tier.period}</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tier.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8 grow">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={tier.href} className="mt-auto">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`block w-full text-center px-6 py-4 rounded-xl font-bold transition-all duration-200 cursor-pointer ${
                        tier.highlighted
                          ? 'bg-primary text-primary-foreground shadow-lg hover:shadow-xl'
                          : 'bg-muted text-foreground hover:bg-muted/80'
                      }`}
                    >
                      {tier.cta}
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
