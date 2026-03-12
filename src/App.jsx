import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  console.log("App rendering: Navbar, Hero, About, Skills, Tools, Portfolio, Projects, Contact, Footer");
  
  return (
    <main className="bg-dark-bg text-white selection:bg-primary/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Tools />
      <Portfolio />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
