import { Wrench, Grid3x3, Hammer, Paintbrush, Home, Drill } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Drywall',
    description: 'Professional installation, repair, and finishing for smooth walls and ceilings.',
  },
  {
    icon: Grid3x3,
    title: 'Tiles',
    description: 'Expert tile installation for kitchens, bathrooms, and floors with precision and care.',
  },
  {
    icon: Hammer,
    title: 'Flooring',
    description: 'Hardwood installation, refinishing, laminate, and tile flooring for all living spaces.',
  },
  {
    icon: Home,
    title: 'Roofing',
    description: 'Repair, replacement, and maintenance for residential roofing systems.',
  },
  {
    icon: Paintbrush,
    title: 'Painting',
    description: 'Interior and exterior painting services with quality finishes and attention to detail.',
  },
  {
    icon: Drill,
    title: 'General Contracting',
    description: 'Full-service renovation and construction for projects of all sizes.',
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-[hsl(var(--light-bg))]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-[hsl(var(--primary-navy))]">
          OUR SERVICES
        </h2>
        <div className="w-24 h-1 bg-[hsl(var(--orange-accent))] mx-auto mb-12"></div>

        <p className="text-center text-lg text-[hsl(var(--dark-text))] max-w-3xl mx-auto mb-12">
          From flooring and drywall to roofing and tiling, we offer comprehensive renovation services
          to meet all your home improvement needs. Quality workmanship, reliable service, every time.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 shadow-card hover:shadow-lg transition-shadow border-2 border-[hsl(var(--light-bg))] hover:border-[hsl(var(--orange-accent))]"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-[hsl(var(--orange-accent))]/10 rounded-full flex items-center justify-center">
                    <Icon size={32} className="text-[hsl(var(--orange-accent))]" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--primary-navy))]">
                    {service.title}
                  </h3>
                  <p className="text-[hsl(var(--dark-text))] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-[hsl(var(--orange-accent))] text-white px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all shadow-lg"
          >
            Request a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
