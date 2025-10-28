"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../app/theme-context';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  // Scroll detection effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/technology', label: 'Technology' },
    { href: '/blog', label: 'Blog' }
  ];

  return (
    <>
      {/* Desktop Floating Navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
          ${isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
          }
        `}
      >
        <div className={`
          mx-auto transition-all duration-300 ease-in-out
          ${isScrolled 
            ? 'max-w-7xl px-4 py-3' 
            : 'max-w-5xl px-6 py-4 mt-6 bg-card backdrop-blur-md rounded-2xl shadow-xl mx-4'
          }
        `}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              {theme === 'light' ? (
                <img 
                  src="/Ploomba_Logo_With_Text_Black_Text.svg" 
                  alt="Ploomba" 
                  className="h-8 w-auto"
                />
              ) : (
                <img 
                  src="/Ploomba_Logo_With_Text_White_Text.svg" 
                  alt="Ploomba" 
                  className="h-8 w-auto"
                />
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-semibold text-muted-foreground hover:text-foreground transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Request a Demo
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md md:hidden"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="p-6"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-8">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  {theme === 'light' ? (
                    <img 
                      src="/Ploomba_Logo_With_Text_Black_Text.svg" 
                      alt="Ploomba" 
                      className="h-8 w-auto"
                    />
                  ) : (
                    <img 
                      src="/Ploomba_Logo_With_Text_White_Text.svg" 
                      alt="Ploomba" 
                      className="h-8 w-auto"
                    />
                  )}
                </Link>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block text-xl font-semibold text-foreground hover:text-primary transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="pt-6 border-t border-border"
                >
                  <div className="flex items-center justify-between">
                    <ThemeToggle />
                    <Link
                      href="/contact"
                      className="bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 rounded-full font-bold transition-all duration-200 hover:shadow-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Request a Demo
                    </Link>
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
