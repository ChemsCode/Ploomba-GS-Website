"use client";

import { motion } from 'framer-motion';
import { FileText, Scale, AlertCircle, Users, Ban, ShieldCheck, Mail } from 'lucide-react';

export default function TermsOfServicePage() {
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
              <Scale className="h-16 w-16 text-primary" />
            </div>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our website and services.
          </p>
        </div>
      </motion.section>

      <article className="max-w-4xl mx-auto py-16 px-6">
        {/* Last Updated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground mb-12">
          <FileText className="h-4 w-4" />
          Last updated: November 5, 2025
        </div>

        {/* Introduction Notice */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-12">
          <div className="flex gap-3">
            <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Important Notice</h3>
              <p className="text-sm text-muted-foreground">
                By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this website.
              </p>
            </div>
          </div>
        </div>

        {/* 1. Agreement to Terms */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <FileText className="h-8 w-8 text-primary" />
            1. Agreement to Terms
          </h2>
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <p className="text-foreground leading-relaxed">
              By accessing or using the Ploomba Inc. website (the "Site"), you agree to be bound by these Terms of Service ("Terms"). These Terms apply to all visitors, users, and others who access or use the Site.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you disagree with any part of these terms, you do not have permission to access the Site. Your continued use of the Site constitutes your acceptance of any changes to these Terms.
            </p>
          </div>
        </section>

        {/* 2. Use License */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-primary" />
            2. Use License
          </h2>
          <div className="bg-card border border-border rounded-lg p-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Permission Granted</h3>
              <p className="text-muted-foreground mb-4">
                Permission is granted to temporarily access and view the materials on Ploomba's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Modify or copy the materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Use the materials for any commercial purpose or for any public display</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Attempt to decompile or reverse engineer any software contained on the Site</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Remove any copyright or other proprietary notations from the materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Transfer the materials to another person or "mirror" the materials on any other server</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Ploomba Inc. at any time.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Intellectual Property */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">3. Intellectual Property Rights</h2>
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <p className="text-foreground leading-relaxed">
              The Site and its original content, features, and functionality are and will remain the exclusive property of Ploomba Inc. and its licensors. The Site is protected by copyright, trademark, and other laws of both Canada and foreign countries.
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Protected Materials Include:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 bg-muted/50 rounded-lg text-sm text-muted-foreground">
                  Website design and layout
                </div>
                <div className="p-3 bg-muted/50 rounded-lg text-sm text-muted-foreground">
                  Text, images, and graphics
                </div>
                <div className="p-3 bg-muted/50 rounded-lg text-sm text-muted-foreground">
                  Logos and trademarks
                </div>
                <div className="p-3 bg-muted/50 rounded-lg text-sm text-muted-foreground">
                  Software and source code
                </div>
                <div className="p-3 bg-muted/50 rounded-lg text-sm text-muted-foreground">
                  Product designs and documentation
                </div>
                <div className="p-3 bg-muted/50 rounded-lg text-sm text-muted-foreground">
                  AI algorithms and robotics technology
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Ploomba Inc.
            </p>
          </div>
        </section>

        {/* 4. User Conduct */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Users className="h-8 w-8 text-primary" />
            4. User Conduct and Responsibilities
          </h2>
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <p className="text-foreground leading-relaxed mb-4">
              As a user of this Site, you agree to comply with all applicable laws and regulations. You agree not to:
            </p>
            <div className="space-y-3">
              <div className="p-4 border-l-4 border-destructive bg-destructive/5">
                <p className="text-sm text-foreground">
                  <strong>Prohibited:</strong> Use the Site in any way that is unlawful, fraudulent, or harmful
                </p>
              </div>
              <div className="p-4 border-l-4 border-destructive bg-destructive/5">
                <p className="text-sm text-foreground">
                  <strong>Prohibited:</strong> Attempt to gain unauthorized access to any portion of the Site or any systems or networks
                </p>
              </div>
              <div className="p-4 border-l-4 border-destructive bg-destructive/5">
                <p className="text-sm text-foreground">
                  <strong>Prohibited:</strong> Interfere with or disrupt the Site or servers or networks connected to the Site
                </p>
              </div>
              <div className="p-4 border-l-4 border-destructive bg-destructive/5">
                <p className="text-sm text-foreground">
                  <strong>Prohibited:</strong> Use automated systems (bots, scrapers) without our express written permission
                </p>
              </div>
              <div className="p-4 border-l-4 border-destructive bg-destructive/5">
                <p className="text-sm text-foreground">
                  <strong>Prohibited:</strong> Transmit any viruses, malware, or other malicious code
                </p>
              </div>
              <div className="p-4 border-l-4 border-destructive bg-destructive/5">
                <p className="text-sm text-foreground">
                  <strong>Prohibited:</strong> Impersonate any person or entity or misrepresent your affiliation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Disclaimers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <AlertCircle className="h-8 w-8 text-primary" />
            5. Disclaimers and Warranties
          </h2>
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <div className="bg-muted border border-border rounded-lg p-4 mb-4">
              <p className="text-sm font-semibold text-foreground mb-2">
                AS-IS BASIS
              </p>
              <p className="text-sm text-muted-foreground">
                The Site and all information, content, materials, products, and services included on or otherwise made available to you through the Site are provided on an "as is" and "as available" basis.
              </p>
            </div>
            <p className="text-muted-foreground">
              Ploomba Inc. makes no representations or warranties of any kind, express or implied, as to:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>The operation or availability of the Site</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>The accuracy, completeness, or timeliness of any information on the Site</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>That the Site will be secure, uninterrupted, or error-free</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>That defects will be corrected</span>
              </li>
            </ul>
            <p className="text-muted-foreground text-sm mt-4">
              Your use of the Site is at your sole risk. We do not warrant that the Site or its content will meet your requirements or expectations.
            </p>
          </div>
        </section>

        {/* 6. Limitation of Liability */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Ban className="h-8 w-8 text-primary" />
            6. Limitation of Liability
          </h2>
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <p className="text-foreground font-semibold mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
            </p>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Ploomba Inc., its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Loss of profits, data, use, goodwill, or other intangible losses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Damages resulting from your access to or use of (or inability to use) the Site</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Damages from any unauthorized access to or use of our servers and/or any personal information stored therein</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Damages from any bugs, viruses, or other harmful code</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Damages from any errors or omissions in any content</span>
                </li>
              </ul>
              <p className="text-muted-foreground text-sm italic mt-4">
                This limitation applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if we have been advised of the possibility of such damage.
              </p>
            </div>
          </div>
        </section>

        {/* 7. Indemnification */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">7. Indemnification</h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-muted-foreground leading-relaxed">
              You agree to defend, indemnify, and hold harmless Ploomba Inc. and its licensors, employees, contractors, agents, officers, and directors from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from:
            </p>
            <ul className="space-y-2 text-muted-foreground mt-4">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Your use of and access to the Site</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Your violation of any term of these Terms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span>Your violation of any third-party right, including any copyright, property, or privacy right</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 8. Governing Law */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">8. Governing Law and Jurisdiction</h2>
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <p className="text-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the Province of Quebec and the federal laws of Canada applicable therein, without regard to its conflict of law provisions.
            </p>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">Jurisdiction:</strong> You agree that any legal action or proceeding arising out of or relating to these Terms shall be instituted exclusively in the courts of Quebec, Canada, and you irrevocably submit to the jurisdiction of such courts.
              </p>
            </div>
          </div>
        </section>

        {/* 9. Changes to Terms */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">9. Changes to Terms</h2>
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Site after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </div>
        </section>

        {/* 10. Severability */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">10. Severability</h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. The invalid or unenforceable provision will be deemed modified to the extent necessary to make it valid and enforceable.
            </p>
          </div>
        </section>

        {/* 11. Entire Agreement */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">11. Entire Agreement</h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-muted-foreground leading-relaxed">
              These Terms constitute the entire agreement between you and Ploomba Inc. regarding your use of the Site and supersede all prior and contemporaneous written or oral agreements between you and Ploomba Inc.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Mail className="h-8 w-8 text-primary" />
            Contact Information
          </h2>
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
            <p className="text-foreground mb-4 text-lg">
              If you have any questions about these Terms of Service, please contact us:
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

