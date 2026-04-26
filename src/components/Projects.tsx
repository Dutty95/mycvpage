import React from 'react';
import { type Project } from '../types';

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "HR Analytics Dashboard",
    category: "Data Analysis",
    description: "Attrition analysis to identify underlying factors contributing to employee turnover and analyze trends. Provides data-driven insights to improve employee retention.",
    technologies: ["Power BI", "SQL", "Excel"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    link: "https://app.powerbi.com/groups/me/reports/bbdc50c9-3428-4bb3-af95-e0fb0eec1303/ReportSection?experience=power-bi",
    status: "Live"
  },
  {
    id: 2,
    title: "Clearx Sales Dashboard",
    category: "Data Analysis",
    description: "Comprehensive data analysis for a sales company, visualizing performance metrics and sales trends over the 2021-2022 period.",
    technologies: ["Power BI", "SQL", "Excel"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    link: "https://app.powerbi.com/view?r=eyJrIjoiZjBjOWQxMzMtN2EyOC00NjUwLWFmMTAtNmE3ZmJkNDNlY2UzIiwidCI6ImQ5ZWQxMWJkLTRhYTgtNDg2ZC04MzNlLTg5NGNjZjQ2MDlkMyJ9",
    status: "Live"
  },
  {
    id: 3,
    title: "Document Autofill App",
    category: "Development",
    description: "Web application designed to reduce errors when filling online forms by automating the document population process.",
    technologies: ["Next.js", "TypeScript", "JavaScript", "CSS"],
    imageUrl: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=600",
    link: "https://github.com/Dutty95/document-autofill-app",
    status: "Live"
  },
  {
    id: 4,
    title: "Casanomads Landing Page",
    category: "Development",
    description: "Airbnb walkthrough page showing tutorials for kitchen appliances, local places to checkout in Lagos, and emergency contacts.",
    technologies: ["React", "Vite", "JavaScript", "HTML/CSS"],
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600",
    link: "https://github.com/Dutty95/Casanomads",
    status: "Live"
  },
  {
    id: 5,
    title: "PerFind: Personal Finance",
    category: "Development",
    description: "Expense, income, budget, and goals management app. Tracks financial health and creates reports with visualization charts.",
    technologies: ["React Router", "JavaScript", "Charts"],
    imageUrl: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=600",
    link: "https://github.com/Dutty95/perfind",
    status: "Live"
  },
  {
    id: 6,
    title: "Proxy Manager Pro",
    category: "Automation",
    description: "GUI-based proxy manager to validate, rotate, and tunnel traffic through SOCKS4, SOCKS5, and HTTP proxies. Features live log view and speed testing.",
    technologies: ["Python", "Tkinter", "Networking"],
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
    status: "Live"
  },
  {
    id: 7,
    title: "Security & Utilities Tools",
    category: "Automation",
    description: "A collection of Python security and utility tools including Cpanel Checker, Duplicate Remover, Proxy Scraper, and Img2Pdf compressor.",
    technologies: ["Python", "Security", "Automation"],
    imageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=600",
    link: "https://github.com/Dutty95",
    status: "Live"
  },
  {
    id: 8,
    title: "Pentest Automation Suite",
    category: "Development",
    description: "CLI tool for automating reconnaissance and vulnerability scanning phases during penetration tests. (In Development)",
    technologies: ["Python", "Bash", "Linux"],
    imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=600",
    status: "Coming Soon"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary to-transparent z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-success mt-4 rounded-full"></div>
          <p className="text-slate-400 mt-4 text-center max-w-2xl">
            A portfolio of Data Analysis dashboards, Web Applications, and Python Automation tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="bg-secondary rounded-xl overflow-hidden border border-slate-700 transition-all duration-300 group hover:scale-[1.02] hover:-translate-y-1 hover:border-accent hover:shadow-[0_10px_30px_-10px_rgba(56,189,248,0.3)] flex flex-col h-full relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 right-4 z-20 bg-primary/90 text-accent text-xs font-mono py-1 px-3 rounded-full border border-accent/20 backdrop-blur-sm shadow-lg">
                  {project.category}
                </span>
                {project.status === "Coming Soon" && (
                   <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-30 backdrop-blur-[2px]">
                      <span className="text-white font-mono border border-white/30 px-3 py-1 rounded bg-black/50">Coming Soon</span>
                   </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700 group-hover:border-accent/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full text-center py-2 border border-accent text-accent rounded hover:bg-accent hover:text-white transition-all text-sm font-semibold"
                  >
                    View Project
                  </a>
                ) : (
                  <button disabled className="block w-full text-center py-2 border border-slate-700 text-slate-500 rounded cursor-not-allowed text-sm">
                    {project.status === "Coming Soon" ? "In Development" : "Internal / Offline"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;