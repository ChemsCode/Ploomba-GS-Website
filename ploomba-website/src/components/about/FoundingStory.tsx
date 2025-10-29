"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface FoundingStoryProps {
  className?: string;
}

interface Milestone {
  id: number;
  date: string;
  title: string;
  description: string;
}

const FoundingStory: React.FC<FoundingStoryProps> = ({ className = '' }) => {
  const milestones: Milestone[] = [
    {
      id: 1,
      date: "2023",
      title: "The Concept",
      description: "The Ploomba concept was born from recognizing the critical need for sustainable agricultural solutions that reduce soil compaction while improving farm efficiency."
    },
    {
      id: 2,
      date: "2024",
      title: "Development Begins",
      description: "Our team began developing the autonomous wagon prototype and agricultural management software, focusing on creating practical solutions for modern farmers."
    },
    {
      id: 3,
      date: "2024",
      title: "Technology Integration",
      description: "Integration of AI-driven analytics and robotic systems, bringing together cutting-edge technology with real-world agricultural expertise."
    },
    {
      id: 4,
      date: "2025",
      title: "Seeking Partnerships",
      description: "Actively partnering with forward-thinking organizations to bring our agricultural technology solutions to farms worldwide."
    }
  ];

  return (
    <section className={`py-16 sm:py-24 bg-muted ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          Our Journey: From Idea to Innovation
        </h2>

        {/* Timeline Container */}
        <div className="relative mt-12">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border hidden md:block" />

          {/* Mobile Vertical Line */}
          <div className="absolute left-4 w-0.5 h-full bg-border md:hidden" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="relative"
              >
                {/* Desktop Layout - Alternating sides */}
                <div className={`hidden md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 0 ? '' : 'md:grid-flow-dense'}`}>
                  {/* Content Card */}
                  <div className={index % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:col-start-2'}>
                    <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <div className={`inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-3 ${index % 2 === 0 ? 'md:float-right' : ''}`}>
                        {milestone.date}
                      </div>
                      <div className="clear-both">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Empty column for spacing */}
                  <div className={index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'} />
                </div>

                {/* Timeline Dot - Desktop */}
                <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />

                {/* Mobile Layout - All on right side */}
                <div className="md:hidden pl-12">
                  <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-3">
                      {milestone.date}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot - Mobile */}
                <div className="md:hidden absolute left-4 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-muted shadow-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingStory;

