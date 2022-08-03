import React from 'react';
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import About from './component/about/About';
import Experience from './component/experience/Experience';
import Portofolio from './component/portofolio/Portofolio';
import Service from './component/services/Service';
import Testimonials from './component/testimonials/Testimonials';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portofolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
