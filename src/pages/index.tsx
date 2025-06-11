<<<<<<< HEAD
import { Hero } from '../templates/Hero';
import { About } from '../templates/About';
import { Services } from '../templates/Services';
import { Portfolio } from '../templates/Portfolio';
import { Contact } from '../templates/Contact';
import { Footer } from '../components/Footer';
=======
import Head from 'next/head';
import Hero from '../templates/Hero';
import About from '../templates/About';
import Services from '../templates/Services';
import Footer from '../components/Footer';
>>>>>>> b147f74 (Primera versión estilo Heisen)

export default function Home() {
  return (
    <>
<<<<<<< HEAD
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
=======
      <Head>
        <title>Silvafab – Infraestructura IT</title>
        <meta name="description" content="Infraestructura, DevOps, Automatización y más." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-white text-gray-800">
        <Hero />
        <About />
        <Services />
      </main>
      <Footer />
    </>
  );
}
>>>>>>> b147f74 (Primera versión estilo Heisen)
