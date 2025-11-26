import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-[hsl(var(--primary-navy))]">
            ABOUT US
          </h2>
          <div className="w-24 h-1 bg-[hsl(var(--orange-accent))] mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-xl overflow-hidden shadow-card">
                <Image
                  src="/generated/about-profile.png"
                  alt="K.V.H Renovations founder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[hsl(var(--primary-navy))]">
                Your Partner in Quality Renovations
              </h3>
              <p className="text-lg text-[hsl(var(--dark-text))] leading-relaxed">
                K.V.H Renovations is a trusted general contractor serving the Greater Toronto Area
                with a commitment to quality workmanship and honest pricing. With years of experience
                in flooring, drywall, tiling, roofing, and more, we deliver reliable renovations
                that transform your home.
              </p>
              <p className="text-lg text-[hsl(var(--dark-text))] leading-relaxed">
                We pride ourselves on clear communication, attention to detail, and completing
                projects on time and within budget. Your satisfaction is our priority, and we
                treat every home as if it were our own.
              </p>
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-block bg-[hsl(var(--orange-accent))] btn-text-white px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all"
                >
                  Learn More About Our Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
