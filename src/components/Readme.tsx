import { motion } from "motion/react";
import { Terminal, Code2, Globe, Cpu, Zap, Activity } from "lucide-react";

export default function Readme() {
  const stats = [
    { label: "Role", value: "Associate Data Engineer", icon: Cpu },
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
    <section id="readme" className="py-24 px-6 bg-brand-bg relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <Terminal className="text-brand-accent animate-pulse" size={24} />
          <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-white/40">README.system_manifest</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-4xl md:text-5xl font-display text-white leading-tight">
                Architecting flows that turn <span className="text-brand-accent">raw noise</span> into high-fidelity <span className="text-gradient">business intelligence</span>.
              </h3>
              <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
                I operate at the intersection of data engineering and strategic analysis. My focus is building robust, 
                self-healing pipelines that provide the bedrock for data-driven organizations.
              </p>
            </motion.div>

            {/* highlights grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-brand-border bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
                >
                  <Code2 className="text-brand-accent/40 group-hover:text-brand-accent transition-colors mb-4" size={20} />
                  <h4 className="text-white font-medium mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar / Stats Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-brand-border bg-brand-surface relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Terminal size={120} />
              </div>
              
              <div className="relative z-10 space-y-8">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase font-mono tracking-widest text-brand-accent">System_Profile</p>
                  <div className="h-1 w-12 bg-brand-accent/30 rounded-full"></div>
                </div>

                <div className="space-y-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between border-b border-brand-border pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <stat.icon className="text-gray-500" size={16} />
                        <span className="text-xs font-mono text-gray-500">{stat.label}</span>
                      </div>
                      <span className="text-[11px] font-mono text-white text-right">{stat.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-600 mb-2">
                    <span>Performance_Index</span>
                    <span>99.9%</span>
                  </div>
                  <div className="w-full h-1.5 bg-brand-bg rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "99.9%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-brand-accent"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
