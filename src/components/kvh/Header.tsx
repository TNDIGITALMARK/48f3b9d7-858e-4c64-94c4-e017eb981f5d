'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[hsl(var(--background))] shadow-md border-b border-[hsl(var(--border))]">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-[hsl(var(--green-accent))] text-2xl font-bold tracking-tight">K.V.H</span>
              <span className="text-white text-xl ml-2 font-semibold">RENOVATIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--green-accent))] transition-colors font-medium">
              Home
            </Link>
            <Link href="#services" className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--green-accent))] transition-colors font-medium">
              Services
            </Link>
            <Link href="#why-choose-us" className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--green-accent))] transition-colors font-medium">
              Why Choose Us
            </Link>
            <Link href="#contact" className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--green-accent))] transition-colors font-medium">
              Contact
            </Link>

            {/* Phone CTA */}
            <a
              href="tel:6479146945"
              className="flex items-center space-x-2 bg-[hsl(var(--green-accent))] btn-text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[hsl(var(--green-accent-hover))] transition-all"
            >
              <Phone size={18} />
              <span>(647) 914-6945</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[hsl(var(--foreground))] hover:text-[hsl(var(--green-accent))] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="#home"
              className="block text-[hsl(var(--foreground))] hover:text-[hsl(var(--green-accent))] transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="block text-[hsl(var(--foreground))] hover:text-[hsl(var(--green-accent))] transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#why-choose-us"
              className="block text-[hsl(var(--foreground))] hover:text-[hsl(var(--green-accent))] transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link
              href="#contact"
              className="block text-[hsl(var(--foreground))] hover:text-[hsl(var(--green-accent))] transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:6479146945"
              className="flex items-center justify-center space-x-2 bg-[hsl(var(--green-accent))] btn-text-white px-5 py-3 rounded-lg font-semibold hover:bg-[hsl(var(--green-accent-hover))] transition-all"
            >
              <Phone size={18} />
              <span>(647) 914-6945</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
