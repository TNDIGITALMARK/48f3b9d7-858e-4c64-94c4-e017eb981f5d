'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', projectType: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-[hsl(var(--light-bg))]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-[hsl(var(--primary-navy))]">
          CONTACT US
        </h2>
        <div className="w-24 h-1 bg-[hsl(var(--orange-accent))] mx-auto mb-12"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[hsl(var(--primary-navy))]">
                Get in Touch
              </h3>
              <p className="text-lg text-[hsl(var(--dark-text))] mb-8">
                Ready to start your renovation project? Contact us today for a free quote.
                We're here to answer your questions and discuss your home improvement needs.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:6479146945"
                className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[hsl(var(--orange-accent))]"
              >
                <div className="w-12 h-12 bg-[hsl(var(--orange-accent))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-[hsl(var(--orange-accent))]" />
                </div>
                <div>
                  <p className="text-sm text-[hsl(var(--light-text))] uppercase tracking-wide">Call or Text</p>
                  <p className="text-xl font-bold text-[hsl(var(--primary-navy))]">(647) 914-6945</p>
                </div>
              </a>

              <a
                href="mailto:Kvh.renovations@gmail.com"
                className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[hsl(var(--orange-accent))]"
              >
                <div className="w-12 h-12 bg-[hsl(var(--orange-accent))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-[hsl(var(--orange-accent))]" />
                </div>
                <div>
                  <p className="text-sm text-[hsl(var(--light-text))] uppercase tracking-wide">Email Us</p>
                  <p className="text-lg font-semibold text-[hsl(var(--primary-navy))] break-all">
                    Kvh.renovations@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-card">
                <div className="w-12 h-12 bg-[hsl(var(--orange-accent))]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-[hsl(var(--orange-accent))]" />
                </div>
                <div>
                  <p className="text-sm text-[hsl(var(--light-text))] uppercase tracking-wide">Service Area</p>
                  <p className="text-lg font-semibold text-[hsl(var(--primary-navy))]">
                    Greater Toronto Area
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-[hsl(var(--primary-navy))] p-8 rounded-xl text-white shadow-lg">
              <h4 className="text-2xl font-bold mb-3">Ready to Get Started?</h4>
              <p className="mb-6 text-white/90">
                Call or text us now for a free, no-obligation quote on your renovation project.
              </p>
              <a
                href="tel:6479146945"
                className="inline-flex items-center space-x-2 bg-[hsl(var(--orange-accent))] text-white px-6 py-3 rounded-lg font-bold hover:brightness-110 transition-all"
              >
                <Phone size={20} />
                <span>Call Now: (647) 914-6945</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-card">
            <h3 className="text-2xl font-bold mb-6 text-[hsl(var(--primary-navy))]">
              Send Us a Message
            </h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold">
                  Thank you! We'll get back to you shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[hsl(var(--primary-navy))] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[hsl(var(--primary-navy))] mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[hsl(var(--primary-navy))] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-semibold text-[hsl(var(--primary-navy))] mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full"
                >
                  <option value="">Select a service...</option>
                  <option value="flooring">Flooring</option>
                  <option value="drywall">Drywall</option>
                  <option value="tiles">Tiles</option>
                  <option value="roofing">Roofing</option>
                  <option value="painting">Painting</option>
                  <option value="general">General Contracting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[hsl(var(--primary-navy))] mb-2">
                  Project Description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[hsl(var(--orange-accent))] text-white px-6 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
