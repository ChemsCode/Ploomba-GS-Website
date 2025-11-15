"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Battery, 
  Gauge, 
  Weight, 
  Zap, 
  Shield, 
  Eye,
  Wifi,
  MapPin,
  AlertCircle,
  ChevronRight,
  CheckCircle2,
  Camera,
  Cpu
} from 'lucide-react';

export default function WagonPage() {
  const [activeTab, setActiveTab] = useState<'autonomy' | 'computing' | 'physical' | 'power'>('autonomy');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const keySpecs = [
    {
      label: "Payload Capacity",
      value: "300kg",
      icon: Weight,
    },
    {
      label: "Battery Range",
      value: "12+ hours",
      icon: Battery,
    },
    {
      label: "Top Speed",
      value: "5 km/h",
      icon: Gauge,
    },
    {
      label: "All-Weather",
      value: "IP65 Rated",
      icon: Shield,
    }
  ];

  const keyFeatures = [
    {
      icon: Battery,
      title: "Extended Runtime",
      description: "Powered by advanced LFP batteries for 12+ hours of continuous operation in the field."
    },
    {
      icon: Shield,
      title: "All-Weather Design",
      description: "IP65 rated and built to operate in extreme conditions - from scorching heat to dust and moisture."
    },
    {
      icon: Wifi,
      title: "Real-Time Connectivity",
      description: "4G LTE modem ensures constant connection for remote monitoring and fleet management."
    },
    {
      icon: Gauge,
      title: "Powerful Drive System",
      description: "High-torque motors designed for rugged terrain, steep slopes, and heavy payloads."
    },
    {
      icon: Eye,
      title: "Advanced Vision System",
      description: "Multiple cameras with 360° coverage for autonomous navigation and obstacle detection."
    },
    {
      icon: MapPin,
      title: "Precision Navigation",
      description: "RTK GPS combined with computer vision for centimeter-level accuracy in any environment."
    }
  ];

  const safetyFeatures = [
    "Front and rear safety bumpers",
    "Emergency stop buttons",
    "High-visibility LED lighting",
    "Audible alert system",
    "Obstacle detection cameras",
    "Redundant safety systems"
  ];

  const specifications = {
    autonomy: [
      { label: "Navigation", value: "Vision + RTK GPS" },
      { label: "Obstacle Detection", value: "360° camera coverage" },
      { label: "Path Planning", value: "AI-powered autonomous routing" },
      { label: "Row Following", value: "Computer vision based" },
      { label: "Remote Monitoring", value: "Real-time web dashboard" },
    ],
    computing: [
      { label: "Cameras", value: "Multiple high-resolution" },
      { label: "GPS", value: "RTK (centimeter accuracy)" },
      { label: "Processing", value: "Onboard AI compute" },
      { label: "Storage", value: "High-capacity solid state" },
      { label: "Connectivity", value: "4G LTE modem" },
    ],
    physical: [
      { label: "Weight", value: "200 kg (empty)" },
      { label: "Payload", value: "300 kg maximum" },
      { label: "Dimensions", value: "Compact footprint" },
      { label: "Ground Clearance", value: "High clearance design" },
      { label: "Tires", value: "All-terrain agricultural" },
    ],
    power: [
      { label: "Battery Type", value: "LFP (Lithium Iron Phosphate)" },
      { label: "Runtime", value: "12+ hours continuous" },
      { label: "Charging Time", value: "Fast charge capable" },
      { label: "Field Swappable", value: "Yes" },
      { label: "Motor Power", value: "High-torque electric" },
    ]
  };

  return (
    <main>
      {/* Hero Section with Product Overview */}
      <section className="relative bg-linear-to-b from-muted/50 via-background to-background pt-36 pb-20 overflow-hidden">
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
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-foreground">Amplify your farm with </span>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
                Ploomba
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Autonomous wagons designed to help you work more productively, while building the foundation for smart farming automation
            </p>
          </motion.div>

          {/* Key Specs Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {keySpecs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center p-6 bg-card border-2 border-border rounded-2xl hover:border-primary/50 transition-all duration-300"
              >
                <spec.icon className="w-8 h-8 text-primary mx-auto mb-3" strokeWidth={2} />
                <div className="text-3xl font-bold text-foreground mb-1">{spec.value}</div>
                <div className="text-sm text-muted-foreground">{spec.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-20 sm:py-32 bg-background relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Ploomba was designed </span>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
                with you in mind
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our autonomous wagons utilize computer vision, high-precision GPS, and AI to follow workers and navigate independently. They work immediately out of the box with no need for complex infrastructure.
            </p>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative rounded-3xl overflow-hidden border-2 border-border shadow-2xl bg-muted/30"
          >
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center">
                <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Product Image</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 sm:py-32 bg-muted/30 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Key </span>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
                Features
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-card border-2 border-border rounded-3xl p-8 hover:border-primary/50 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <div className="w-14 h-14 bg-linear-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                        <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-foreground">Easy to use. </span>
                <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
                  Infinitely capable.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our plug-and-play autonomy allows Ploomba to work immediately out of the box, empowering everyone on your team to become an operator with minimal training.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Beyond transport, Ploomba wagons can carry, scout, map fields, collect data, and serve as a platform for various implements—making them adaptable to your evolving needs.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Learn More
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border-2 border-border shadow-2xl bg-muted/30"
            >
              <div className="aspect-square flex items-center justify-center">
                <div className="text-center">
                  <Zap className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Capabilities Image</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI & Intelligence Section */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border-2 border-border shadow-2xl bg-muted/30 md:order-1"
            >
              <div className="aspect-square flex items-center justify-center">
                <div className="text-center">
                  <Cpu className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">AI Technology Image</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:order-2"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                <span className="text-foreground">Super smart. </span>
                <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
                  Always improving.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Ploomba uses computer vision and high-precision GPS to learn and navigate new environments autonomously. Our AI understands the surroundings and safely travels through crops, stopping for obstacles and people.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Once you train one Ploomba, share that knowledge across your entire fleet for immediate productivity gains. Track your fleet online via a user-friendly dashboard with fleet-level control and regular over-the-air updates.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>Computer vision + RTK GPS navigation</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>Fleet-wide knowledge sharing</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>Over-the-air software updates</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety Features Section */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Advanced safety features for </span>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
                peace of mind
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Safety is our top priority. Multiple layers of protection ensure safe operation around people and obstacles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {safetyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full">
              <AlertCircle className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Utilizing computer vision, high-precision GPS, and AI</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Technical </span>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
                Specifications
            </span>
            </h2>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {(['autonomy', 'computing', 'physical', 'power'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card text-muted-foreground hover:bg-card/80 border border-border'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Specs Table */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto bg-card border-2 border-border rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="divide-y divide-border">
              {specifications[activeTab].map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="grid grid-cols-2 p-6 hover:bg-muted/30 transition-colors duration-200"
                >
                  <div className="font-semibold text-foreground">{spec.label}</div>
                  <div className="text-muted-foreground">{spec.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Ploomba </span>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
                in Action
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { src: '/new_ploomba_in_field_1.jpg', alt: 'Ploomba autonomous wagon in strawberry field' },
              { src: '/new_ploomba_in_field_2.jpg', alt: 'Ploomba wagon carrying strawberry harvest' },
              { src: '/new_ploomba_in_field_3.jpg', alt: 'Ploomba operating in agricultural field' },
              { src: '/new_ploomba_in_field_4.jpg', alt: 'Ploomba autonomous transport system' },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-3xl overflow-hidden border-2 border-border shadow-xl hover:border-primary/50 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative aspect-video">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-linear-to-b from-muted/50 via-muted/30 to-background relative overflow-hidden">
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

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Ready to transform </span>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
                your farm operations?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Get in touch with our team to learn how Ploomba can help you work smarter, not harder.
            </p>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold text-xl shadow-2xl hover:shadow-primary/20 transition-all duration-300"
              >
                Contact Sales
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </Link>
              </motion.div>
        </div>
      </section>
    </main>
  );
}
