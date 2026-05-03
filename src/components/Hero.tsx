import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowDownRight, Github, Linkedin, Database, BarChart3, FileText } from "lucide-react";

export default function Hero() {
  const name = "Chelmela Sai Harshith";
  const [displayText, setDisplayText] = useState("");

  const SOCIAL_LINKS = {
    github: "https://github.com/harshithsai",
    linkedin: "https://www.linkedin.com/in/sai-harshith-ch",
    resume: "https://drive.google.com/file/d/1oMqb0Sbkeby3_OP9d6NOT5SF-8BARFm-/view?usp=sharing"
  };

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= name.length) {
        setDisplayText(name.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-12 h-[1px] bg-brand-accent/30"></span>
            <span className="text-sm uppercase tracking-[0.3em] font-mono text-white/50">
              Data engineer and data analyst
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-white leading-[0.9]">
            ENGINEERING <br />
            <span className="text-gradient font-display font-medium">REAL-TIME DATA</span> <br />
            FOR STRATEGIC INSIGHT.
          </h1>

          <div className="grid md:grid-cols-2 gap-12 pt-12">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed max-w-xl">
                Hi, I'm{" "}
                <span className="text-white font-medium inline-flex items-center whitespace-pre-wrap">
                  {displayText}
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="ml-0.5 inline-block w-[2px] h-[1.2em] bg-brand-accent shadow-[0_0_8px_rgba(var(--color-brand-accent),0.6)] align-middle"
                  />
                </span>. 
                I build the distributed pipelines and cloud-native architectures that power high-velocity intelligence. 
                Specializing in Snowflake, Databricks, and real-time streaming to turn complexity into clarity.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <a href="#contact" className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium transition-transform hover:scale-105">
                  Let's Talk Data
                  <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <div className="flex items-center gap-6 text-gray-500">
                  <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 group/icon">
                    <Github size={20} />
                    <span className="text-[10px] uppercase tracking-widest font-mono opacity-0 group-hover/icon:opacity-100 transition-opacity">GitHub</span>
                  </a>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 group/icon">
                    <Linkedin size={20} />
                    <span className="text-[10px] uppercase tracking-widest font-mono opacity-0 group-hover/icon:opacity-100 transition-opacity">LinkedIn</span>
                  </a>
                  <a href={SOCIAL_LINKS.resume} target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors flex items-center gap-2 group/icon">
                    <FileText size={20} />
                    <span className="text-[10px] uppercase tracking-widest font-mono opacity-0 group-hover/icon:opacity-100 transition-opacity text-brand-accent">Resume</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex justify-end items-end pb-12 relative">
               {/* Data stream between icons */}
               <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
                 <motion.div
                   animate={{ 
                     x: [-40, -120],
                     opacity: [0, 1, 0]
                   }}
                   transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                   className="absolute top-1/2 right-[80px] text-[8px] font-mono text-brand-accent/40"
                 >
                   &lt;&lt;&lt;
                 </motion.div>
               </div>

               <div className="flex gap-8 relative z-10">
                 <div className="text-right space-y-1">
                   <p className="text-[10px] font-mono uppercase tracking-widest text-gray-600">ETL Specialist</p>
                   <Database className="ml-auto text-white/20" size={24} />
                 </div>
                 <div className="text-right space-y-1">
                   <p className="text-[10px] font-mono uppercase tracking-widest text-gray-600">Viz Expert</p>
                   <BarChart3 className="ml-auto text-white/20" size={24} />
                 </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
