import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Services from '@/components/Services';
import CallToAction from '@/components/CallToAction';
import About from '@/components/About';
import OurOffice from '@/components/OurOffice';
import FAQ from '@/components/FAQ';
import Credentials from '@/components/Credentials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <CallToAction />
        <About />
        <OurOffice />
        <FAQ />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
