'use client';

import { useEffect } from 'react';
import PostCard from '../../src/components/blog/PostCard';
import { allPosts } from '../../src/data/mock-posts';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles } from 'lucide-react';

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
      {/* Enhanced Header Section */}
      <section className="relative bg-linear-to-b from-muted/50 via-background to-background pt-36 pb-20 overflow-hidden">
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
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
          >
            <span className="text-foreground">From the Field: </span>
            <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
              Ploomba Blog
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Exploring the future of agriculture through innovation, technology, and sustainable farming practices
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 sm:py-24 bg-background relative overflow-hidden">
        {/* Background decoration */}
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {allPosts.map((post, index) => (
              <motion.div 
                key={post.slug} 
                variants={cardVariants}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <PostCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
