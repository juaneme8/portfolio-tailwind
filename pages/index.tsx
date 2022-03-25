import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Nav from '../components/Nav';
import Testimonials from '../components/Testimonials';
import Header from '../components/Header';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TailwindCSS Portolio</title>
        <meta name='description' content='This is my portfolio using Next.js and TailwindCSS' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-gray-800'>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;
