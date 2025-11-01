"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Truck, Smartphone, BarChart3 } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServicesOverviewProps {
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group block rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/50"
    >
      {/* Icon */}
      <div className="h-10 w-10 text-primary">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mt-4 text-xl font-semibold text-foreground">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-muted-foreground">
        {description}
      </p>

      {/* Learn More Link */}
      <Link
        href="/technology"
        className="mt-4 inline-block font-medium text-primary transition-all group-hover:pl-1"
      >
        Learn More &rarr;
      </Link>
    </motion.div>
  );
};

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ className = '' }) => {
  const services = [
    {
      icon: <Truck size={40} />,
      title: "Autonomous Wagon",
      description: "Our customizable electric wagon transports loads up to 300kg and analyzes fields as it passes.",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Agro App",
      description: "Monitor equipment, model production, and manage your fields from one central, farmer-first app.",
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Analysis Platform",
      description: "Access AI models and graphical data to accurately estimate yields and detect issues before they spread.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  return (
    <section className={`py-16 sm:py-24 bg-background ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A Complete Ag-Tech Solution
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From autonomous hardware to AI-powered analytics, our platform works together to optimize your entire operation.
          </p>
        </div>

        {/* Animated Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
