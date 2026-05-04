import { motion } from "motion/react";
import { Terminal, Code2, Globe, Cpu, Zap, Activity } from "lucide-react";

export default function Readme() {
  const stats = [
    { label: "Role", value: "Data Engineer / Analyst", icon: Cpu },
    { label: "Core", value: "Real-time ETL / BI", icon: Zap },
    { label: "Location", value: "Hyderabad, India", icon: Globe },
    { label: "Status", value: "System Nominal", icon: Activity },
  ];

  const highlights = [
    {
      title: "Distributed Pipeline Architecture",
      desc: "Specializing in Lambda and Kappa architectures for high-velocity event processing."
    },
    {
      title: "Cloud Data Warehousing",
      desc: "Expertise in Snowflake and Databricks for scalable, performant data lakes and warehouses."
    },
    {
      title: "Automated Intelligence",
      desc: "Implementing CI/CD for data pipelines and automated quality monitoring via dbt."
    }
  ];

  return (
    <motion.section 
      id="readme" 
      className="py-24 px-6 bg-transparent relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <Terminal className="text-brand-accent animate-pulse" size={24} />
          <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-white/40">README.system_manifest</h2>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-6"
            >
              <h3 className="text-4xl md:text-6xl font-display text-white leading-tight">
                Architecting flows that turn <span className="text-brand-accent">raw noise</span> into high-fidelity <span className="text-gradient">business intelligence</span>.
              </h3>
              <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
                I operate at the intersection of data engineering and strategic analysis. My focus is building robust, 
                self-healing pipelines that provide the bedrock for data-driven organizations.
              </p>
            </motion.div>

            {/* highlights grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.3 + (i * 0.25), 
                    ease: "easeOut" 
                  }}
                  className="p-8 rounded-3xl border border-brand-border bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-1000 group"
                >
                  <Code2 className="text-brand-accent/40 group-hover:text-brand-accent transition-colors mb-4" size={24} />
                  <h4 className="text-xl text-white font-medium mb-3">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
