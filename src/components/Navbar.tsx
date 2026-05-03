import { motion } from "motion/react";
import { User, Code, Briefcase, Mail, Award } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { name: "Readme", href: "#readme", icon: User },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Certs", href: "#certifications", icon: Award },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-4"
    >
      <div className="relative group">
        {/* Liquid Glow effect */}
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/5 to-white/20 rounded-full blur-xl group-hover:opacity-100 transition duration-1000"
        />
        
        <motion.div 
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="relative bg-white/[0.05] backdrop-blur-3xl border border-white/20 rounded-full px-6 py-3 flex items-center gap-8 shadow-[0_8px_40px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          {/* Liquid Shine Overlay */}
          <motion.div 
            className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{ 
              x: ["-100%", "100%"]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear",
              repeatDelay: 2
            }}
          />
          
          <a 
            href="#hero" 
            className="text-white font-display font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity cursor-pointer z-20"
          >
            SH<span className="text-white/30">.</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group/item relative text-[11px] font-bold text-white/50 hover:text-white transition-all duration-300 uppercase tracking-[0.2em] flex items-center gap-2"
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div 
                  className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover/item:w-full transition-all duration-300"
                />
              </a>
            ))}
          </div>
          <div className="md:hidden flex gap-4">
             {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/60 hover:text-white transition-all p-1"
              >
                <item.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
