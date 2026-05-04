import { motion } from "motion/react";
import { Layout, Server, Database } from "lucide-react";

const skillCategories = [
  {
    name: "Engineering & Cloud",
    icon: Server,
    skills: ["Apache Kafka", "PySpark", "Apache Airflow", "Snowflake", "Databricks", "dbt", "Matillion", "AWS", "Azure"]
  },
  {
    name: "Languages & Tools",
    icon: Database,
    skills: ["Python", "SQL", "C++", "MySQL", "MongoDB", "SQL Server", "Git", "GitHub", "ELT Pipelines", "Lambda Architecture"]
  },
  {
    name: "Analytics & Viz",
    icon: Layout,
    skills: ["Power BI", "Excel", "Data Modeling", "Dashboard Design", "Report Automation", "Power Query", "Star Schema", "Financial Recon"]
  }
];

function SkillRow({ category, speed, direction = "left" }: { category: typeof skillCategories[0], speed: number, direction?: "left" | "right" }) {
  // Duplicate skills to ensure a seamless loop
  const duplicatedSkills = [...category.skills, ...category.skills, ...category.skills, ...category.skills];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-brand-border group-hover:border-white transition-colors">
            <category.icon size={16} className="text-white" />
          </div>
          <h3 className="text-lg font-display font-medium text-white">{category.name}</h3>
        </div>
        <div className="hidden md:block h-px flex-grow mx-8 bg-gradient-to-r from-brand-border to-transparent"></div>
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{category.skills.length} Competencies</span>
      </div>
      
      <div className="relative flex overflow-hidden py-4">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-bg to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-bg to-transparent z-10"></div>

        <motion.div 
          className="flex gap-6 whitespace-nowrap hover:[animation-play-state:paused]"
          animate={{ 
            x: direction === "left" ? [0, -1200] : [-1200, 0] 
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
          style={{ width: "max-content" }}
        >
          {duplicatedSkills.map((skill, idx) => (
            <div 
              key={`${skill}-${idx}`}
              className="group relative px-10 py-8 rounded-3xl border border-brand-border bg-brand-surface/40 backdrop-blur-sm transition-all duration-500 hover:border-white/50 hover:bg-brand-surface hover:-translate-y-2 cursor-pointer overflow-hidden flex items-center justify-center min-w-[180px]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-display text-white transition-all duration-500 group-hover:scale-110 tracking-tight">{skill}</p>
              </div>

              {/* Background Glow */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/5 blur-2xl rounded-full group-hover:bg-white/10 transition-colors"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <motion.section 
      className="py-32 px-6 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-white/50">Capabilities</h2>
          <p className="text-6xl text-white font-display tracking-tight leading-none">
            TECHNICAL <span className="text-gradient">STACK.</span>
          </p>
        </div>

        <div className="space-y-16">
          <SkillRow category={skillCategories[0]} speed={30} />
          <SkillRow category={skillCategories[1]} speed={40} direction="right" />
          <SkillRow category={skillCategories[2]} speed={35} />
        </div>

        {/* Certifications Section */}
        <div id="certifications" className="mt-32 border-t border-brand-border/30 pt-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-white/50">Verified Expertise</h2>
              <p className="text-4xl text-white font-display tracking-tight leading-none">
                AWARDS & <br /> <span className="text-gradient">CERTIFICATIONS.</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto min-w-[300px]">
              {[
                { name: "Snowflake – SnowPro Core", date: "Jan 2026" },
                { name: "Matillion ETL Foundations", date: "Dec 2025" },
                { name: "AWS Academy Cloud Foundations", date: "Feb 2023" },
                { name: "CCNAv7 Networking", date: "Apr 2023" },
                { name: "SQL Certified – HackerRank", date: "2023" }
              ].map((cert) => (
                <div key={cert.name} className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/[0.05] transition-colors group">
                  <p className="text-white font-display text-lg group-hover:text-brand-accent transition-colors">{cert.name}</p>
                  <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mt-4">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
