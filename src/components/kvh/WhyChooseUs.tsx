import { Shield, Layers, DollarSign, Handshake } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Dependable service you can count on, with projects completed on time and to specification.',
  },
  {
    icon: Layers,
    title: 'Versatility',
    description: 'Comprehensive services from flooring to roofing - one contractor for all your renovation needs.',
  },
  {
    icon: DollarSign,
    title: 'Fair Pricing',
    description: 'Honest, competitive rates with transparent quotes and no hidden costs.',
  },
  {
    icon: Handshake,
    title: 'Quality Workmanship',
    description: 'Years of experience delivering exceptional results with attention to every detail.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-padding bg-[hsl(var(--secondary-dark))]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-[hsl(var(--foreground))]">
          WHY CHOOSE US
        </h2>
        <div className="w-24 h-1 bg-[hsl(var(--green-accent))] mx-auto mb-12"></div>

        <p className="text-center text-lg text-[hsl(var(--muted-text))] max-w-3xl mx-auto mb-12">
          When you choose K.V.H Renovations, you're choosing a partner dedicated to transforming
          your vision into reality with professionalism, quality, and care.
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-[hsl(var(--card))] rounded-xl p-8 shadow-card hover:shadow-lg transition-all border-2 border-[hsl(var(--border))] hover:border-[hsl(var(--green-accent))]"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-[hsl(var(--green-accent))]/10 rounded-full flex items-center justify-center shadow-md">
                    <Icon size={32} className="text-[hsl(var(--green-accent))]" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--foreground))]">
                    {benefit.title}
                  </h3>
                  <p className="text-[hsl(var(--muted-text))] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-[hsl(var(--foreground))]">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[hsl(var(--card))] rounded-xl p-6 shadow-card border border-[hsl(var(--border))]">
              <p className="text-[hsl(var(--muted-text))] italic mb-4">
                "K.V.H transformed our outdated kitchen into a modern space we love. Professional
                work, fair pricing, and excellent communication throughout the project."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[hsl(var(--green-accent))] rounded-full flex items-center justify-center btn-text-white font-bold">
                  SM
                </div>
                <div>
                  <p className="font-semibold text-[hsl(var(--foreground))]">Sarah M.</p>
                  <p className="text-sm text-[hsl(var(--muted-text))]">Toronto</p>
                </div>
              </div>
            </div>

            <div className="bg-[hsl(var(--card))] rounded-xl p-6 shadow-card border border-[hsl(var(--border))]">
              <p className="text-[hsl(var(--muted-text))] italic mb-4">
                "The team completed our basement renovation on time and within budget. Highly
                recommend for anyone looking for quality work at honest prices."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[hsl(var(--green-accent))] rounded-full flex items-center justify-center btn-text-white font-bold">
                  MD
                </div>
                <div>
                  <p className="font-semibold text-[hsl(var(--foreground))]">Mike D.</p>
                  <p className="text-sm text-[hsl(var(--muted-text))]">Mississauga</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
