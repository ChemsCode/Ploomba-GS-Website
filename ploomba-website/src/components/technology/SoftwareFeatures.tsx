'use client';

import { motion } from 'framer-motion';
import { Smartphone, BarChart3, Brain } from 'lucide-react';

export default function SoftwareFeatures() {
  const features = [
    {
      icon: Smartphone,
      title: 'Agro App',
      description:
        'Monitor equipment, model production, and manage your fields from one central, farmer-first app.',
    },
    {
      icon: BarChart3,
      title: 'Analysis Platform',
      description:
        'Access multiple analysis tools and graphical data visualization to consult with professionals.',
    },
    {
      icon: Brain,
      title: 'AI Tool',
      description:
        'Accurately estimate yields and use a model library to recognize signs of pests and diseases.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 sm:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            One Platform. Total Control.
          </h2>
          <p className="text-muted-foreground text-lg">
            From field management to AI-driven insights, our software provides a
            complete solution.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <Icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

