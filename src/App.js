import './App.css';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
