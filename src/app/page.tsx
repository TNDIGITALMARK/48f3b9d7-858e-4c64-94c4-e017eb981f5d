import { Header } from '@/components/kvh/Header';
import { Hero } from '@/components/kvh/Hero';
import { About } from '@/components/kvh/About';
import { Services } from '@/components/kvh/Services';
import { WhyChooseUs } from '@/components/kvh/WhyChooseUs';
import { Contact } from '@/components/kvh/Contact';
import { Footer } from '@/components/kvh/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}