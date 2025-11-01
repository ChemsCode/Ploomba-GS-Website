'use client';

import { motion } from 'framer-motion';

export default function UseCases() {
  const useCases = [
    {
      title: 'Harvest Transport',
      description: 'Transports fruits and vegetables for the picker.',
      imageText: 'Harvest+Transport',
    },
    {
      title: 'Precision Spraying',
      description: 'Precisely sprays phytosanitary products.',
      imageText: 'Precision+Spraying',
    },
    {
      title: 'Field Analysis',
      description: 'Analyzes fields as it passes to detect issues.',
      imageText: 'Field+Analysis',
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

  const itemVariants = {
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Real-World Applications
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="overflow-hidden rounded-lg shadow-lg bg-card"
            >
              <img
                src={`https://placehold.co/400x300/2B3036/FFFFFF?text=${useCase.imageText}`}
                alt={useCase.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">{useCase.title}</h4>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

