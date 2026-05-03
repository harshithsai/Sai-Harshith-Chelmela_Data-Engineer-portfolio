import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Readme from "./components/Readme";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ParticlesBg from "./components/ui/particles-bg";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to allow the loading animation to play out nicely
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    // Custom smooth scroll behavior for anchor links
    const handleSmoothScroll = (e: MouseEvent) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          let startTime: number | null = null;
          const duration = 1200; // Increased duration for a slower, smoother roll

          const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
          };

          // Easing function for a more premium feel
          function easeInOutCubic(t: number, b: number, c: number, d: number) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
          }

          requestAnimationFrame(animation);
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll as any);
    });

    return () => {
      clearTimeout(timer);
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll as any);
      });
    };
  }, []);

  return (
    <div className="bg-brand-bg min-h-screen text-white font-sans selection:bg-white selection:text-black">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" />
        ) : (
          <div key="content" className="relative">
            <ParticlesBg />
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
        )}
      </AnimatePresence>
    </div>
  );
}
