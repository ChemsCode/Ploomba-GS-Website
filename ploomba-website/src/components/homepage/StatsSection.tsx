"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring } from 'framer-motion';
import { TrendingUp, Zap, Activity, Target } from 'lucide-react';
import Link from 'next/link';

interface StatProps {
  icon: React.ElementType;
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  duration?: number;
  decimals?: number;
}

const AnimatedCounter: React.FC<{
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}> = ({ end, duration = 2, decimals = 0, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  const inView = useInView(nodeRef, { once: true, amount: 0.5 });

  const motionValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(end);
    }
  }, [inView, end, motionValue]);

  useEffect(() => {
    const unsubscribe = motionValue.on('change', (latest) => {
      setCount(latest);
    });
    return unsubscribe;
  }, [motionValue]);

  return (
    <div ref={nodeRef}>
      <span>{prefix}</span>
      <span>{count.toFixed(decimals)}</span>
      <span>{suffix}</span>
    </div>
  );
};

const StatCard: React.FC<StatProps & { index: number }> = ({
  icon: Icon,
  end,
  suffix = '',
  prefix = '',
  label,
  description,
  duration = 2,
  decimals = 0,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative h-full rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 hover:border-primary/40 transition-all duration-500 overflow-hidden">
        {/* Animated gradient on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-primary/15 to-primary/5 mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <Icon className="w-7 h-7 text-primary" strokeWidth={2.5} />
          </motion.div>

          {/* Number */}
          <div className="mb-3">
            <div className="text-6xl sm:text-7xl font-bold text-foreground tracking-tight leading-none">
              <AnimatedCounter
                end={end}
                suffix={suffix}
                prefix={prefix}
                duration={duration}
                decimals={decimals}
              />
            </div>
          </div>

          {/* Label */}
          <h3 className="text-xl font-bold text-foreground mb-2">
            {label}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-tl from-primary/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

const StatsSection: React.FC<{ className?: string }> = ({ className = '' }) => {
  const stats: StatProps[] = [
    {
      icon: Zap,
      end: 300,
      suffix: 'kg',
      label: 'Load Capacity',
      description: 'Heavy-duty transport for demanding field operations',
      duration: 2.5,
    },
    {
      icon: TrendingUp,
      end: 95,
      suffix: '%',
      label: 'AI Accuracy',
      description: 'Precise yield predictions powered by machine learning',
      duration: 2.5,
    },
    {
      icon: Activity,
      end: 40,
      suffix: '%',
      label: 'Soil Protection',
      description: 'Significant reduction in harmful soil compaction',
      duration: 2.5,
    },
    {
      icon: Target,
      end: 247,
      suffix: '+',
      label: 'Field Hours',
      description: 'Real-world testing in actual farming conditions',
      duration: 3,
    },
  ];

  return (
    <section className={`relative py-24 sm:py-32 overflow-hidden ${className}`}>
      {/* Cleaner background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-muted/20 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Minimalist Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
          >
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-foreground">Performance Metrics</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Proven Results.</span>
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
              Real Impact.
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Numbers that demonstrate the power of autonomous farming technology
          </p>
        </motion.div>

        {/* Stats Grid - Bento Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} index={idx} />
          ))}
        </div>

        {/* Enhanced Bottom Section with Visual Interest */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <div className="relative rounded-3xl border-2 border-border bg-card/50 backdrop-blur-sm p-10 sm:p-12 overflow-hidden shadow-lg">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Farm?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                See how our technology can bring these results to your operation
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg shadow-xl cursor-pointer"
                  >
                    <span>Schedule a Demo</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </Link>
                
                <Link href="/technology/hardware">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-card border-2 border-primary/30 text-foreground rounded-full font-bold text-lg hover:bg-primary/5 hover:border-primary transition-all duration-300 cursor-pointer"
                  >
                    <span>View Technology</span>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
