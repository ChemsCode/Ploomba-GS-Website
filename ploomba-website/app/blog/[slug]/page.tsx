// app/blog/[slug]/page.tsx
'use client';

import { allPosts, ContentBlock } from '../../../src/data/mock-posts';
import { notFound, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PostCard from '../../../src/components/blog/PostCard';
import { Quote, Calendar, User, Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';

// Helper function to animate variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeInOut" },
};

// Component to render individual content blocks
function ContentBlockRenderer({ block, index }: { block: ContentBlock; index: number }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="text-lg leading-relaxed text-muted-foreground"
        >
          {block.text}
        </motion.p>
      );
    
    case 'heading':
      if (block.level === 2) {
        return (
          <motion.h2
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 mb-6 text-3xl md:text-4xl font-bold tracking-tight text-foreground relative"
          >
            <span className="relative">
              {block.text}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -bottom-2 left-0 h-1 w-20 bg-primary rounded-full origin-left"
              />
            </span>
          </motion.h2>
        );
      } else {
        return (
          <motion.h3
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 mb-4 text-2xl md:text-3xl font-bold tracking-tight text-foreground"
          >
            {block.text}
          </motion.h3>
        );
      }
    
    case 'image':
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="my-12 relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src={block.src}
            alt={block.alt}
            fill
            className="object-cover"
          />
          {block.alt && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/60 to-transparent">
              <p className="text-sm text-white/90">{block.alt}</p>
            </div>
          )}
        </motion.div>
      );
    
    case 'quote':
      return (
        <motion.blockquote
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="my-12 relative"
        >
          <div className="relative rounded-2xl border-2 border-primary/30 bg-card/50 backdrop-blur-sm p-8 md:p-10 overflow-hidden shadow-lg">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-primary/10 to-transparent rounded-full blur-2xl" />
            
            <div className="relative z-10 flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Quote className="h-6 w-6 text-primary" strokeWidth={2.5} />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed italic">
                  "{block.text}"
                </p>
                {block.author && (
                  <p className="mt-4 text-base text-muted-foreground font-semibold">
                    — {block.author}
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.blockquote>
      );
    
    default:
      return null;
  }
}

export default function PostPage() {
  // 1. Get the slug from params
  const params = useParams();
  const slug = params?.slug as string;

  // 2. Get the post data
  const post = allPosts.find((p) => p.slug === slug);

  // 3. Handle not found
  if (!post) {
    notFound();
  }

  // 4. Get related posts (posts that are not the current one)
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  // 5. Render the new, structured layout
  return (
    <main className="pt-28">
      {/* --- Article Header --- */}
      <motion.header
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Tag Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-bold uppercase text-primary tracking-wide">
            {post.tag}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight"
        >
          {post.title}
        </motion.h1>

        {/* Meta Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-base text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            <span className="font-semibold">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>6 min read</span>
          </div>
        </motion.div>
      </motion.header>

      {/* --- Featured Image --- */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="relative w-full max-w-6xl mx-auto h-80 md:h-[600px] px-4 sm:px-6 lg:px-8">
          <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </motion.div>

      {/* --- Article Body --- */}
      <motion.article
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="prose prose-lg max-w-none space-y-6">
          {/* Render all content blocks dynamically */}
          {post.content.map((block, index) => (
            <ContentBlockRenderer key={index} block={block} index={index} />
          ))}
        </div>

        {/* Back to Blog Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-8 border-t-2 border-border"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300"
          >
            <span>←</span>
            <span>Back to All Posts</span>
          </Link>
        </motion.div>
      </motion.article>

      {/* --- Related Posts Section --- */}
      <section className="py-20 sm:py-24 bg-muted/30 mt-16 relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">More Insights</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              You Might Also
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60"> Like</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <PostCard post={relatedPost} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
