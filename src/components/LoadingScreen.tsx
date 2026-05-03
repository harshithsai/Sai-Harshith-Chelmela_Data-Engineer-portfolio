import { motion } from "motion/react";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-bg select-none"
    >
      <div className="relative flex items-center justify-center">
        {/* Animated Circle around the logo */}
        <motion.svg
          width="120"
          height="120"
          viewBox="0 0 100 100"
          className="absolute"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="white"
            strokeWidth="1.5"
            fill="transparent"
            strokeDasharray="283"
            initial={{ strokeDashoffset: 283 }}
            animate={{ 
              strokeDashoffset: [283, 0],
              rotate: [0, 360]
            }}
            transition={{ 
              strokeDashoffset: { duration: 1.5, ease: "easeInOut" },
              rotate: { duration: 3, ease: "linear", repeat: Infinity }
            }}
            style={{ opacity: 0.2 }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="white"
            strokeWidth="1.5"
            fill="transparent"
            strokeDasharray="283"
            initial={{ strokeDashoffset: 283 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, ease: [0.65, 0, 0.35, 1] }}
          />
        </motion.svg>

        {/* Logo Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-black tracking-tighter text-white"
        >
          SH<span className="text-white/30">.</span>
        </motion.div>
      </div>

      {/* Decorative details */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 text-[10px] font-mono uppercase tracking-[0.4em] text-white/50"
      >
        Initializing Architecture
      </motion.div>
    </motion.div>
  );
}
