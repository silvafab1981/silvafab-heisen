import Head from 'next/head';
import Hero from '../templates/Hero';
import About from '../templates/About';
import Services from '../templates/Services';
import Portfolio from '../templates/Portfolio';
import Contact from '../templates/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
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
