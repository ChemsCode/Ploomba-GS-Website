'use client';

import { useEffect } from 'react';
import { allPosts } from '../../../src/data/mock-posts';
import { notFound, useParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function PostPage() {
  const params = useParams();
  const slug = params?.slug as string;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="pt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-center text-3xl md:text-5xl font-bold mt-12">
          {post.title}
        </h1>
        <p className="text-center text-muted-foreground mt-4">
          By {post.author} • {post.date}
        </p>
      </motion.div>

      {/* Featured Image */}
      <motion.div
        className="relative w-full h-96 mt-12 max-w-5xl mx-auto px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src={post.imageUrl}
          alt={post.title}
          className="rounded-lg object-cover w-full h-full"
        />
      </motion.div>

      {/* Content Body */}
      <motion.div
        className="max-w-2xl mx-auto py-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div
          className="prose prose-lg dark:prose-invert max-w-none space-y-6 leading-relaxed text-lg text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.div>
    </main>
  );
}

