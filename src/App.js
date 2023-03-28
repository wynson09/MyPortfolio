import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/qualification/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';


function App() {

  return (
    <div>
      <Header />
      <Hero />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
