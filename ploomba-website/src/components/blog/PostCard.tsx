'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface PostCardProps {
  post: {
    slug: string;
    title: string;
    tag: string;
    excerpt: string;
    imageUrl: string;
  };
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div>
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg"
      >
        <img
          src={post.imageUrl}
          alt={post.title}
          className="h-48 w-full object-cover"
        />
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <p className="text-xs font-medium uppercase text-primary">
              {post.tag}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
              {post.title}
            </h3>
            <p className="mt-3 text-base text-muted-foreground">
              {post.excerpt}
            </p>
          </div>
          <div className="mt-4 flex items-center font-semibold text-primary">
            Read More
            <ArrowRight className="h-4 w-4 ml-1 transition-all group-hover:ml-2" />
          </div>
        </div>
      </Link>
    </div>
  );
}

