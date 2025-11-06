"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Book, BarChart, DollarSign, Check } from 'lucide-react';

export default function SoftwarePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Book,
      title: "Farm Journal",
      points: [
        "Keep track of all your fields and production areas in one centralized location",
        "Keep everything organized with notes, photos, and data for each field",
        "Track planting dates, harvest schedules, and seasonal patterns",
        "Access your journal from anywhere, on any device"
      ]
    },
    {
      icon: BarChart,
      title: "Yield Prediction",
      points: [
        "Store pictures of the produce at various growth stages throughout the season",
        "Search these pictures by date, field, or crop type for easy reference",
        "Use AI-powered analysis to predict yields weeks before harvest",
        "Get accurate forecasts to plan logistics and secure contracts"
      ]
    },
    {
      icon: DollarSign,
      title: "Revenue Forecasting",
      points: [
        "Forecast your revenue based on predicted yields and current market prices",
        "See average expenses per field to understand true profitability",
        "Track historical data to identify trends and optimize operations",
        "Make data-driven decisions about resource allocation"
      ]
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
        "Mobile app access",
        "Community support"
      ],
      cta: "Get Started",
      href: "/contact",
      highlighted: false
    },
    {
      name: "Premium",
      price: "$49",
      period: "/month",
      description: "For growing operations ready to leverage AI insights",
      features: [
        "Unlimited fields",
        "Advanced farm journal",
        "Photo storage (50GB)",
        "AI yield prediction",
        "Revenue forecasting",
        "Priority support",
        "Export data & reports"
      ],
      cta: "Start Free Trial",
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
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      href: "/contact",
      highlighted: false
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-muted pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center py-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ploomba Software
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your farm operations with intelligent software designed for modern agriculture
            </p>
          </motion.div>
        </div>
      </section>

      {/* Software Blurb */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our software platform puts the power of data-driven decision making in your hands. 
              From tracking daily operations to forecasting revenue, Ploomba gives you the tools 
              you need to optimize every aspect of your farm. Built by farmers, for farmers—
              with the simplicity you need and the sophistication you deserve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-20 px-4 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-32">
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
                <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="flex items-center justify-center p-12 bg-card border border-border rounded-2xl shadow-sm">
                    <Icon className="w-32 h-32 text-primary" />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    {feature.title}
                  </h2>
                  <ul className="space-y-4">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                        <span className="text-lg text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Get Started with Ploomba Software
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Start your free trial today or explore our pricing options to find the perfect plan for your farm.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-4 rounded-lg text-lg font-bold transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Try the Free Version
              </Link>
              <Link
                href="#pricing"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-200 hover:shadow-lg"
              >
                View Billing Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section id="pricing" className="py-20 px-4 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your farm's needs. All plans include our core features, 
              with premium tiers unlocking advanced AI capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-card border rounded-lg p-8 ${
                  tier.highlighted 
                    ? 'border-primary shadow-xl scale-105' 
                    : 'border-border'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    {tier.period && (
                      <span className="text-muted-foreground">{tier.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.href}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    tier.highlighted
                      ? 'bg-primary text-primary-foreground hover:bg-primary-hover hover:shadow-lg'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground">
              All plans include a 30-day money-back guarantee. No credit card required for the free tier.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

