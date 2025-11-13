'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Calendar as CalendarIcon, MessageCircle, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { InlineWidget } from 'react-calendly';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [activeTab, setActiveTab] = useState<'form' | 'calendar'>('form');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@ploomba.com",
      href: "mailto:info@ploomba.com",
      description: "Drop us a line anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (514) 123-4567",
      href: "tel:+15141234567",
      description: "Mon-Fri from 9am to 5pm EST"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Montreal, QC, Canada",
      href: null,
      description: "Come visit our office"
    }
  ];

  return (
    <main>
      {/* Enhanced Header Section */}
      <section className="relative bg-linear-to-b from-muted/50 via-background to-background pt-32 pb-20 overflow-hidden">
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
            <span className="text-foreground">Get in </span>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
              Touch
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Ready to transform your farming operations? Reach out to learn more about our agricultural technology solutions
          </motion.p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                We&apos;re Here to
                <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60"> Help</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Get in touch with us by filling out the contact form, scheduling a call on our calendar, or reaching out directly via email or phone.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group relative rounded-2xl border-2 border-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/40 transition-all duration-300 overflow-hidden"
                  >
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
                    
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                          <info.icon className="w-7 h-7 text-primary" strokeWidth={2.5} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {info.description}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground font-semibold hover:text-primary transition-colors inline-flex items-center gap-1"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-semibold">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Tabbed Interface */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-3xl border-2 border-border bg-card shadow-2xl overflow-hidden">
                {/* Tab Navigation */}
                <div className="flex border-b-2 border-border bg-muted/30">
                  <button
                    onClick={() => setActiveTab('form')}
                    className={`relative flex-1 px-6 py-4 text-base font-bold transition-all duration-300 ${
                      activeTab === 'form'
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Contact Form
                    </span>
                    {activeTab === 'form' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab('calendar')}
                    className={`relative flex-1 px-6 py-4 text-base font-bold transition-all duration-300 ${
                      activeTab === 'calendar'
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      Schedule Call
                    </span>
                    {activeTab === 'calendar' && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-8">
                  {/* Contact Form Tab */}
                  {activeTab === 'form' && (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                      suppressHydrationWarning
                    >
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">
                          Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          {...register('name')}
                          className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                          placeholder="Your name"
                          suppressHydrationWarning
                        />
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-destructive flex items-center gap-1"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.name.message}
                          </motion.p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          {...register('email')}
                          className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                          placeholder="your.email@example.com"
                          suppressHydrationWarning
                        />
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-destructive flex items-center gap-1"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.email.message}
                          </motion.p>
                        )}
                      </div>

                      {/* Company Field */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-bold text-foreground mb-2">
                          Company
                        </label>
                        <input
                          id="company"
                          type="text"
                          {...register('company')}
                          className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                          placeholder="Your company (optional)"
                          suppressHydrationWarning
                        />
                        {errors.company && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-destructive flex items-center gap-1"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.company.message}
                          </motion.p>
                        )}
                      </div>

                      {/* Message Field */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          {...register('message')}
                          rows={5}
                          className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                          placeholder="Tell us about your project..."
                          suppressHydrationWarning
                        />
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-destructive flex items-center gap-1"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors.message.message}
                          </motion.p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={submitStatus === 'loading'}
                        whileHover={{ scale: submitStatus === 'loading' ? 1 : 1.02 }}
                        whileTap={{ scale: submitStatus === 'loading' ? 1 : 0.98 }}
                        className="group relative w-full bg-primary text-primary-foreground px-6 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {submitStatus === 'loading' ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="w-5 h-5" />
                            </>
                          )}
                        </span>
                        {/* Shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6 }}
                        />
                      </motion.button>

                      {/* Status Messages */}
                      {submitStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="rounded-xl bg-green-500/10 border border-green-500/20 p-4"
                        >
                          <p className="text-center text-green-600 dark:text-green-400 font-semibold flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-5 h-5" />
                            Thank you! We&apos;ll be in touch soon.
                          </p>
                        </motion.div>
                      )}
                      
                      {submitStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="rounded-xl bg-destructive/10 border border-destructive/20 p-4"
                        >
                          <p className="text-center text-destructive font-semibold flex items-center justify-center gap-2">
                            <AlertCircle className="w-5 h-5" />
                            Something went wrong. Please try again.
                          </p>
                        </motion.div>
                      )}
                    </motion.form>
                  )}

                  {/* Calendly Tab */}
                  {activeTab === 'calendar' && (
                    <motion.div
                      key="calendar"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="-m-8"
                    >
                      <InlineWidget
                        url="https://calendly.com/ploomba-demo/30min"
                        styles={{
                          height: '700px',
                          width: '100%',
                        }}
                      />
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
