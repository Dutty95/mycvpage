import React from 'react';

const SKILLS_DATA = [
  {
    category: "Technical & Data",
    icon: "💻",
    items: [
      { name: "Python (Automation/Data)", level: 90 },
      { name: "SQL & Database Mgmt", level: 85 },
      { name: "Power BI & Analytics", level: 88 },
      { name: "Excel (Advanced)", level: 95 },
      { name: "Go (Golang)", level: 60 },
      { name: "Web (JS/TS/React)", level: 85 }
    ]
  },
  {
    category: "Management & HR",
    icon: "👔",
    items: [
      { name: "HR Management", level: 90 },
      { name: "Recruitment Strategy", level: 85 },
      { name: "Payroll Processing", level: 90 },
      { name: "Performance Appraisal", level: 88 },
      { name: "Conflict Resolution", level: 95 },
      { name: "Strategic Planning", level: 85 }
    ]
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-secondary relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[80px] animate-pulse-slow"></div>
       <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-[80px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Skills Matrix</h2>
          <p className="text-muted max-w-2xl mx-auto">
            A visual breakdown of my technical proficiency and management expertise, highlighting the dual nature of my professional profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SKILLS_DATA.map((group, idx) => (
            <div key={idx} className="bg-primary/50 border border-slate-700 p-8 rounded-xl hover:border-accent/30 transition-all shadow-xl group">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">{group.icon}</span>
                <h3 className="text-2xl font-semibold text-white">
                  {group.category}
                </h3>
              </div>
              
              <div className="space-y-6">
                {group.items.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-200 font-medium">{skill.name}</span>
                      <span className="text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-accent to-success rounded-full transform origin-left transition-transform duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-white mb-6">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Creative Problem Solving", "Team Leadership", "Research & Analysis", "Adaptability", "Public Speaking", "Technical Writing", "Project Management", "Technical Support"].map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full border border-slate-700 hover:border-accent hover:text-white transition-all cursor-default hover:scale-105">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;