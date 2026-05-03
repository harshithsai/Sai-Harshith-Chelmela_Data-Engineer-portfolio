export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-brand-border">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-6 text-center md:text-left">
            <div className="text-white font-display font-bold text-3xl tracking-tighter">
              SH<span className="text-white/30">.</span>
            </div>
            <p className="text-gray-500 text-sm max-w-sm tracking-wide">
              Crafting premium digital experiences through thoughtful design and robust engineering. 
              Always building for the future.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-widest text-white/30">Connect</p>
              <ul className="space-y-2 text-white/60">
                <li><a href="https://github.com/harshithsai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/sai-harshith-ch" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="https://drive.google.com/file/d/1oMqb0Sbkeby3_OP9d6NOT5SF-8BARFm-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">Resume</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-widest text-white/30">Explore</p>
              <ul className="space-y-2 text-white/60">
                <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              </ul>
            </div>
            <div className="space-y-4 col-span-2 md:col-span-1">
              <p className="font-mono text-xs uppercase tracking-widest text-white/30">Legal</p>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-20 pt-8 border-t border-brand-border/30 gap-4">
          <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            © 2026 Portfolio Applet. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Available for hire</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
