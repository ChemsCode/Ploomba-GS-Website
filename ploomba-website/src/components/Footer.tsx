import Link from 'next/link';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/technology', label: 'Technology' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/company/ploomba/?originalSubdomain=ca', label: 'LinkedIn', icon: Linkedin }
  ];

  return (
    <footer className="bg-footer text-footer-foreground border-t border-red-600">
      <div className="max-w-7xl mx-auto p-8 md:p-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Brand */}
          <div>
            <div className="mb-4">
              <Image 
                src="/Ploomba_Logo_With_Text_Black_Text.svg" 
                alt="Ploomba" 
                width={120}
                height={32}
                className="h-8 w-auto dark:hidden"
              />
              <Image 
                src="/Ploomba_Logo_With_Text_White_Text.svg" 
                alt="Ploomba" 
                width={120}
                height={32}
                className="h-8 w-auto hidden dark:block"
              />
            </div>
            <p className="text-sm text-footer-foreground/80">
              Revolutionizing agriculture with autonomous robots and AI-driven analytics. 
              Helping farmers optimize yields and reduce soil compaction for sustainable farming.
            </p>
          </div>

          {/* Column 2 - Pages */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Pages</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-footer-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-sm text-footer-foreground/80">
                <a
                  href="mailto:info@ploomba.com"
                  className="hover:text-primary transition-colors"
                >
                  info@ploomba.com
                </a>
              </p>
              <p className="text-sm text-footer-foreground/80">
                +1 (555) 123-4567
              </p>
            </div>
          </div>

          {/* Column 4 - Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-footer-foreground/80 hover:text-primary transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Copyright */}
        <div className="mt-8 border-t border-footer-foreground/20 pt-8 flex justify-between items-center text-sm text-footer-foreground/60">
          <span>© 2025 Ploomba Inc. All rights reserved.</span>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
