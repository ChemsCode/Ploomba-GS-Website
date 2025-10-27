"use client";

import React from 'react';
import { Truck, Smartphone, BarChart3 } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onLearnMore?: () => void;
}

interface ServicesOverviewProps {
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  onLearnMore 
}) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow duration-200">
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
        <div className="text-primary">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      {/* Learn More Link */}
      <button
        onClick={onLearnMore}
        className="text-primary hover:text-primary-hover font-medium transition-colors duration-200 hover:underline"
      >
        Learn More
      </button>
    </div>
  );
};

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ className = '' }) => {
  const services = [
    {
      icon: <Truck size={32} />,
      title: "Autonomous Wagon",
      description: "Customizable electric wagon transports loads up to 300kg and analyzes fields as it passes.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Agro App",
      description: "Monitor your equipment, model production, and manage your fields from one central app.",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Analysis Platform",
      description: "Access powerful AI models and graphical data visualization to accurately estimate yields and detect issues.",
    },
  ];

  const handleLearnMore = (serviceTitle: string) => {
    // TODO: Implement navigation or modal functionality
    console.log(`Learn more about ${serviceTitle}`);
  };

  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            A Complete Ag-Tech Solution
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              onLearnMore={() => handleLearnMore(service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
