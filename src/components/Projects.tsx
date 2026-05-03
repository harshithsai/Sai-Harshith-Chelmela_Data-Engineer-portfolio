import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import behaviorAnalyticsImg from "../assets/images/behavior-analytics.png";

const projects = [
  {
    title: "Real-Time Behavior Analytics",
    category: "Data Engineering / Real-Time",
    description: "Built a high-velocity Lambda architecture processing 10K+ events/sec with <30s latency using Kafka, PySpark, and Snowflake. Automated pipeline status monitoring and data quality testing via dbt and Airflow.",
    tags: ["Kafka", "PySpark", "Snowflake", "dbt", "Airflow", "Lambda"],
    image: behaviorAnalyticsImg,
    github: "https://github.com/harshithsai/Real_Time_User_behaviour_analytics",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Utilization and Forecast Dashboard",
    category: "Professional / Analytics",
    description: "Built an automated Power BI system for resource tracking and gap analysis. Integrated SharePoint data via Power Query with fully automated refresh logic.",
    tags: ["Power BI", "Power Query", "SharePoint", "DAX"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Product Price Tracking",
    category: "Full Stack / Automation",
    description: "Automated e-commerce scraping system using Puppeteer and Node.js. Integrated automated email alerts for real-time price drop notifications.",
    tags: ["MERN", "Puppeteer", "Node.js", "Nodemailer"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    className: "md:col-span-1 md:row-span-1"
  }
];

export default function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="py-32 px-6"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-white/50">Selected Works</h2>
            <p className="text-4xl md:text-6xl text-white font-display tracking-tight leading-none">
              PUSHING THE <br /> <span className="text-gradient">BOUNDARIES.</span>
            </p>
          </div>
          <p className="max-w-md text-gray-400 text-lg">
            A small collection of projects where I've tackled complex problems 
            and delivered high-impact solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-brand-border bg-brand-surface ${project.className}`}
            >
              <div className="absolute inset-x-0 bottom-0 z-20 p-8 pt-32 bg-gradient-to-t from-brand-bg via-brand-bg/90 to-transparent">
                <div className="flex justify-between items-end">
                  <div className="space-y-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-white/40">{project.category}</span>
                    <h3 className="text-xl md:text-2xl font-display text-white leading-tight">{project.title}</h3>
                    <p className="text-gray-400 text-sm max-w-xs">{project.description}</p>
                    <div className="flex gap-2 pt-2">
                       {project.tags.map(tag => (
                         <span key={tag} className="text-[10px] px-2 py-1 rounded bg-brand-border text-gray-300 font-mono">{tag}</span>
                       ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-black transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-black transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.7] group-hover:scale-105 transition-all duration-700" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('stock-fallback')) {
                    target.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80&fallback=true";
                  }
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
