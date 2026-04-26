import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Skills from './components/Skills';

function App() {
  return (
    <div className="bg-primary min-h-screen text-text selection:bg-accent/30 selection:text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-primary py-8 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} Mayowa Uwagbai. All Rights Reserved. Built with React & Gemini 2.5.
          </p>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}

export default App;