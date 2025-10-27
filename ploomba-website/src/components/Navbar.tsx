"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/technology', label: 'Technology' },
    { href: '/blog', label: 'Blog' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Left Side - Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-primary">PLOOMBA</span>
        </Link>

        {/* Middle - Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side - Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground hover:bg-primary-hover px-4 py-2 rounded-md text-sm font-medium"
          >
            Request a Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background p-4">
          {/* Mobile Header */}
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <span className="text-2xl font-bold text-primary">PLOOMBA</span>
            </Link>
            <button onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-6 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Actions */}
            <div className="flex items-center gap-4 mt-8">
              <ThemeToggle />
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground hover:bg-primary-hover px-4 py-2 rounded-md text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Request a Demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
