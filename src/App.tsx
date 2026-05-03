import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Readme from "./components/Readme";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative selection:bg-white selection:text-black bg-brand-bg min-h-screen">
      
      <div className="relative z-10 w-full overflow-x-hidden">
        <Navbar />
        
        <main>
          <Hero />
          <Readme />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Background noise/texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Dynamic ambient light blobs */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-[700px] h-[700px] bg-white/5 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
    </div>
  );
}
