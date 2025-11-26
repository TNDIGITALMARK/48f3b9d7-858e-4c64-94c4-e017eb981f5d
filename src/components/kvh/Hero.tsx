import Image from 'next/image';
import { Phone } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-[600px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/generated/hero-construction-team.png"
          alt="K.V.H Renovations professional construction team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
          Reliable, Affordable<br />Renovations
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/95 drop-shadow">
          Your Trusted GTA Contractor for Quality Home Improvements
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:6479146945"
            className="flex items-center space-x-2 bg-[hsl(var(--orange-accent))] text-white px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all shadow-lg"
          >
            <Phone size={24} />
            <span>Call or Text for Free Quote</span>
          </a>
          <a
            href="#contact"
            className="bg-white text-[hsl(var(--primary-navy))] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
          >
            Get Started Today
          </a>
        </div>

        {/* Phone Number Display */}
        <div className="mt-6">
          <a
            href="tel:6479146945"
            className="text-2xl font-bold text-[hsl(var(--orange-accent))] drop-shadow hover:text-white transition-colors"
          >
            (647) 914-6945
          </a>
        </div>
      </div>
    </section>
  );
}
