import { motion } from "motion/react";

const experiences = [
  {
    company: "Logic Pursuits Private Consulting",
    role: "Associate Data Engineer",
    period: "Oct 2024 — Present",
    desc: "Spearheading revenue reconciliation for major clients like Shopify-NetSuite integrations using Snowflake Notebooks. Architecting end-to-end data pipelines for Public Credit Reporting and building complex forecasting dashboards.",
  },
  {
    company: "Distributed Data Analytics Platform",
    role: "Data Engineering Project",
    period: "Feb 2026",
    desc: "Built a 10K+ events/sec pipeline using Kafka, PySpark, and Snowflake. Implemented Lambda Architecture with 3-layer modeling (RAW/STAGING/MARTS) and orchestrated with Apache Airflow.",
  },
  {
    company: "Technical Growth",
    role: "Full Stack & Machine Learning",
    period: "2023 — 2024",
    desc: "Developed a MERN-stack price tracker with real-time web scraping and a CNN-based attendance system using MobileNetV2 and TensorFlow.",
  },
];

export default function Experience() {
  return (
    <motion.section 
      id="experience" 
      className="py-32 px-6 bg-brand-surface/30"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16">
          <div className="sticky top-32 h-fit space-y-6">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-white/50">History</h2>
            <p className="text-5xl text-white font-display tracking-tight leading-none">
              A JOURNEY <br /> THROUGH <span className="text-gradient underline decoration-brand-border underline-offset-8">TIME.</span>
            </p>
            <p className="text-gray-400 max-w-sm">
               Over the years, I've had the privilege of working with some of the most 
               innovative companies in the tech industry.
            </p>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                className="group relative border-l-2 border-brand-border pl-12 pb-16 last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2 border-brand-border bg-brand-bg group-hover:border-white transition-colors" />
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                    <h3 className="text-2xl font-display text-white">{exp.role}</h3>
                    <span className="text-xs font-mono uppercase tracking-widest text-white/30">{exp.period}</span>
                  </div>
                  <p className="text-lg font-medium text-gray-300">{exp.company}</p>
                  <p className="text-gray-400 max-w-2xl leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Education Block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative border-l-2 border-brand-border/30 pl-12 pt-8"
            >
              <div className="absolute left-[-9px] top-8 w-4 h-4 rounded-full border-2 border-brand-border/30 bg-brand-bg md:group-hover:border-white/50 transition-colors" />
              <div className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-white/30">Academic Foundation</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <p className="text-xl font-display text-white/80">Intermediate Education</p>
                    <span className="text-[10px] font-mono text-white/30">2018 — 2020</span>
                  </div>
                  <p className="text-sm text-gray-500">Sri Chaitanya, Hyderabad • Score: 97.5%</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <p className="text-xl font-display text-white/80">B.Tech in Computer Science</p>
                    <span className="text-[10px] font-mono text-white/30">2020 — 2024</span>
                  </div>
                  <p className="text-sm text-gray-500">GRIET, Hyderabad • CGPA: 8.64</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
