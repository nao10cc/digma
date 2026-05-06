import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Name } from '@/components/Name';
import { Service } from '@/components/Service';
import { Zen } from '@/components/Zen';
import { Strength } from '@/components/Strength';
import { Vision } from '@/components/Vision';
import { Company } from '@/components/Company';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Name />
        <Service />
        <Zen />
        <Strength />
        <Vision />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
