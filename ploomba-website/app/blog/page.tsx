'use client';

import { useEffect } from 'react';
import PostCard from '../../src/components/blog/PostCard';
import { allPosts } from '../../src/data/mock-posts';
import { motion } from 'framer-motion';

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main>
      <section className="bg-muted pt-20">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          From the Field: Ploomba Blog
        </motion.h1>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {allPosts.map((post) => (
              <motion.div key={post.slug} variants={cardVariants}>
                <PostCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

