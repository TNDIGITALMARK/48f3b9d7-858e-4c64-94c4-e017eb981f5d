import Link from 'next/link';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--primary-navy))] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-[hsl(var(--orange-accent))] text-2xl font-bold tracking-tight">K.V.H</span>
              <span className="text-white text-xl font-semibold">RENOVATIONS</span>
            </div>
            <p className="text-white/80">
              Your trusted GTA contractor for quality renovations at honest prices.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--orange-accent))] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--orange-accent))] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--orange-accent))] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-white/80 hover:text-[hsl(var(--orange-accent))] transition-colors">
                  Flooring
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/80 hover:text-[hsl(var(--orange-accent))] transition-colors">
                  Drywall
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/80 hover:text-[hsl(var(--orange-accent))] transition-colors">
                  Tiles
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/80 hover:text-[hsl(var(--orange-accent))] transition-colors">
                  Roofing
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/80 hover:text-[hsl(var(--orange-accent))] transition-colors">
                  Painting
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/80 hover:text-[hsl(var(--orange-accent))] transition-colors">
                  General Contracting
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-white/80 hover:text-[hsl(var(--orange-accent))] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/80 hover:text-[hsl(var(--orange-accent))] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/80 hover:text-[hsl(var(--orange-accent))] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#why-choose-us" className="text-white/80 hover:text-[hsl(var(--orange-accent))] transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 hover:text-[hsl(var(--orange-accent))] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:6479146945" className="flex items-center space-x-3 text-white/80 hover:text-[hsl(var(--orange-accent))] transition-colors">
                  <Phone size={18} className="flex-shrink-0" />
                  <span>(647) 914-6945</span>
                </a>
              </li>
              <li>
                <a href="mailto:Kvh.renovations@gmail.com" className="flex items-center space-x-3 text-white/80 hover:text-[hsl(var(--orange-accent))] transition-colors break-all">
                  <Mail size={18} className="flex-shrink-0" />
                  <span>Kvh.renovations@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center space-x-3 text-white/80">
                <MapPin size={18} className="flex-shrink-0" />
                <span>Greater Toronto Area</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>
            &copy; {currentYear} K.V.H Renovations. All rights reserved. | Quality Renovations, Honest Prices.
          </p>
        </div>
      </div>
    </footer>
  );
}
