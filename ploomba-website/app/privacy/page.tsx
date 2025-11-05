"use client";

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <motion.section
        className="bg-gradient-to-br from-muted via-muted to-muted/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-screen-xl mx-auto px-4 py-20 md:py-28 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="p-4 bg-primary/10 rounded-full">
              <Shield className="h-16 w-16 text-primary" />
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we protect and manage your data.
          </p>
        </div>
      </motion.section>

      <article className="max-w-4xl mx-auto py-16 px-6">
        {/* Last Updated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground mb-12">
          <FileText className="h-4 w-4" />
          Last updated: November 5, 2025
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Eye className="h-8 w-8 text-primary" />
            Introduction
          </h2>
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <p className="text-foreground leading-relaxed text-lg">
              Ploomba Inc. ("we," "us," or "our") respects your privacy and is committed to protecting it through compliance with this policy. This Privacy Policy describes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>The types of information we may collect from you or that you may provide when you visit our website</li>
              <li>Our practices for collecting, using, maintaining, protecting, and disclosing that information</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              This policy applies to information we collect on this website and through email, text, and other electronic communications. Please read this policy carefully to understand our practices regarding your information.
            </p>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <FileText className="h-8 w-8 text-primary" />
            Information We Collect
          </h2>
          
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Personal Information You Provide</h3>
              <p className="text-muted-foreground mb-4">
                We collect information that you provide directly to us when you:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Contact Form Submissions:</strong> Name, email address, company name (optional), phone number (optional), and your message or inquiry</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Demo Requests:</strong> Information you provide when requesting a product demonstration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Newsletter Subscriptions:</strong> Email address and preferences for receiving updates about our products and services</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-4">
                As you navigate through our website, we may collect certain information automatically, including:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Usage Details:</strong> Information about your visit, including pages viewed, time spent, and navigation patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Device Information:</strong> IP address, browser type, operating system, and device identifiers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Location Data:</strong> General geographic location based on IP address</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Cookies and Tracking Technologies</h3>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">How We Use Your Information</h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-muted-foreground mb-6">
              We use information that we collect about you or that you provide to us, including any personal information:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Communication</h4>
                <p className="text-sm text-muted-foreground">Respond to your inquiries, demo requests, and provide customer support</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Service Delivery</h4>
                <p className="text-sm text-muted-foreground">Provide, operate, and maintain our website and services</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Improvement</h4>
                <p className="text-sm text-muted-foreground">Improve our website, products, and user experience</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Analytics</h4>
                <p className="text-sm text-muted-foreground">Understand and analyze usage trends and preferences</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Marketing</h4>
                <p className="text-sm text-muted-foreground">Send you updates, newsletters, and promotional materials (with your consent)</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Legal Compliance</h4>
                <p className="text-sm text-muted-foreground">Comply with legal obligations and protect our rights</p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Sharing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">How We Share Your Information</h2>
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <p className="text-muted-foreground">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Service Providers:</strong> With third-party vendors who perform services on our behalf (e.g., email delivery, analytics)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect our rights and safety</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span><strong className="text-foreground">Business Transfers:</strong> In connection with any merger, sale, or transfer of company assets</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Lock className="h-8 w-8 text-primary" />
            Data Security
          </h2>
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <p className="text-foreground leading-relaxed">
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. These measures include:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Encryption of data in transit using SSL/TLS protocols</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Regular security assessments and updates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Access controls and authentication measures</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Employee training on data protection practices</span>
              </li>
            </ul>
            <p className="text-muted-foreground text-sm italic mt-4">
              However, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Your Rights and Choices</h2>
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <p className="text-muted-foreground mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-primary bg-muted/30">
                <h4 className="font-semibold text-foreground mb-2">Access and Correction</h4>
                <p className="text-sm text-muted-foreground">Request access to and correction of your personal information</p>
              </div>
              <div className="p-4 border-l-4 border-primary bg-muted/30">
                <h4 className="font-semibold text-foreground mb-2">Deletion</h4>
                <p className="text-sm text-muted-foreground">Request deletion of your personal information, subject to legal obligations</p>
              </div>
              <div className="p-4 border-l-4 border-primary bg-muted/30">
                <h4 className="font-semibold text-foreground mb-2">Opt-Out</h4>
                <p className="text-sm text-muted-foreground">Opt-out of marketing communications at any time</p>
              </div>
              <div className="p-4 border-l-4 border-primary bg-muted/30">
                <h4 className="font-semibold text-foreground mb-2">Data Portability</h4>
                <p className="text-sm text-muted-foreground">Request a copy of your data in a portable format</p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Retention */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Data Retention</h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-muted-foreground">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </div>
        </section>

        {/* Children's Privacy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Children's Privacy</h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-muted-foreground">
              Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </div>
        </section>

        {/* Changes to Policy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Changes to This Privacy Policy</h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Mail className="h-8 w-8 text-primary" />
            Contact Us
          </h2>
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
            <p className="text-foreground mb-4 text-lg">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong className="text-foreground">Email:</strong> <a href="mailto:info@ploomba.com" className="text-primary hover:underline">info@ploomba.com</a></p>
              <p><strong className="text-foreground">Company:</strong> Ploomba Inc.</p>
              <p><strong className="text-foreground">Location:</strong> Montreal, Quebec, Canada</p>
            </div>
          </div>
        </section>

      </article>
    </main>
  );
}

