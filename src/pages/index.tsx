import { Hero } from '../templates/Hero';
import { About } from '../templates/About';
import { Services } from '../templates/Services';
import { Portfolio } from '../templates/Portfolio';
import { Contact } from '../templates/Contact';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}