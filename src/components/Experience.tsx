import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-primary border-t border-slate-800 relative overflow-hidden">
      {/* Background Decoration with Animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-10 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-success/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] animate-blob animation-delay-4000 mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Professional Experience & Education</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work History */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-8 flex items-center">
              <span className="mr-3 text-3xl">💼</span> Work History
            </h3>
            <div className="space-y-12 border-l-2 border-slate-700 ml-3 pl-8 relative">

              {/* Role 1: Shared Value */}
              <div className="relative group">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-slate-500 bg-primary group-hover:border-accent group-hover:bg-accent transition-colors"></span>
                <h4 className="text-xl font-semibold text-white">HR / Technical Support Specialist</h4>
                <p className="text-slate-400 text-sm mb-2 font-mono">Shared Value Global Concept, Ilorin | Jan 2022 – Present</p>
                <div className="text-slate-400 text-sm leading-relaxed">
                   <p className="mb-2">Combined HR responsibilities with technical support oversight.</p>
                   <ul className="list-disc ml-4 space-y-1 text-xs text-slate-500">
                     <li>Data Analyst & Database Management</li>
                     <li>Electronic Record Management</li>
                     <li>Web Administrator</li>
                   </ul>
                </div>
              </div>

              {/* Role 2: Naija Nomads */}
              <div className="relative group">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-accent bg-primary group-hover:bg-accent transition-colors shadow-[0_0_10px_rgba(56,189,248,0.5)]"></span>
                <h4 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">Executive Assistant</h4>
                <p className="text-accent text-sm mb-2 font-mono">Naija Nomads, Lagos | Feb 2025 – March 2026</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Providing high-level administrative support, managing schedules, and ensuring operational efficiency for executive leadership.
                </p>
              </div>

              {/* Role 3: MALhub */}
              <div className="relative group">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-slate-500 bg-primary group-hover:border-accent group-hover:bg-accent transition-colors"></span>
                <h4 className="text-xl font-semibold text-white">Data Analyst</h4>
                <p className="text-slate-400 text-sm mb-2 font-mono">MALhub, Ilorin | Apr 2024 – Jan 2025</p>
                <p className="text-slate-400 text-sm">
                  Transforming data into actionable insights to drive business decision-making processes.
                </p>
              </div>

              {/* Role 4: Manhardi */}
              <div className="relative group">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-slate-500 bg-primary group-hover:border-accent group-hover:bg-accent transition-colors"></span>
                <h4 className="text-xl font-semibold text-white">Administrative Manager</h4>
                <p className="text-slate-400 text-sm mb-2 font-mono">Manhardi Nigeria Limited, Ilorin | Nov 2022 – Jan 2025</p>
                <ul className="text-slate-400 text-sm list-disc ml-4 space-y-1">
                  <li>Supervision of Quarry activities along with Operation Manager.</li>
                  <li>Handling administrative matters and regulatory submissions (DSS, Immigration).</li>
                  <li>Dispute resolution and customer relationship management.</li>
                </ul>
              </div>

              {/* Role 5: Our Garden */}
              <div className="relative group">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-slate-500 bg-primary group-hover:border-accent group-hover:bg-accent transition-colors"></span>
                <h4 className="text-xl font-semibold text-white">HR / Account Manager / Technical Support</h4>
                <p className="text-slate-400 text-sm mb-2 font-mono">Our Garden Restaurant & Bar, Ilorin | Aug 2020 – Jan 2025</p>
                <ul className="text-slate-400 text-sm list-disc ml-4 space-y-1">
                  <li><strong>HR Manager:</strong> Coordinated recruitment, payroll, appraisals, and conflict resolution.</li>
                  <li><strong>Account Manager:</strong> Managed accounts and financial supervision.</li>
                  <li><strong>Technical Support:</strong> Provided IT support for the company infrastructure.</li>
                </ul>
              </div>

              {/* Role 6: Teaching & Early Career */}
              <div className="relative group">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-slate-700 bg-primary group-hover:border-slate-500 transition-colors"></span>
                <h4 className="text-lg font-semibold text-slate-300">Early Career</h4>
                <ul className="text-slate-500 text-xs mt-2 space-y-2">
                  <li>
                    <span className="font-semibold text-slate-400">Computer Science Teacher</span> - A.A Raji Special School (Nov 2018 - Oct 2019)
                  </li>
                  <li>
                    <span className="font-semibold text-slate-400">Music Producer</span> - M-pire Records (May 2014 - Oct 2017)
                  </li>
                  <li>
                    <span className="font-semibold text-slate-400">Cafe Operator</span> - T & F Cafe (Aug 2013 - Oct 2014)
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Education & Certs */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-8 flex items-center">
              <span className="mr-3 text-3xl">🎓</span> Education
            </h3>
            <div className="space-y-8">
              <div className="bg-secondary p-6 rounded-xl border border-slate-700 hover:border-accent/50 transition-all shadow-lg hover:shadow-accent/10">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white">MBA Human Resource Management</h4>
                  <span className="text-xs font-mono bg-slate-800 text-slate-300 px-2 py-1 rounded">2023</span>
                </div>
                <p className="text-accent text-sm">Kwasu Business School (Ilorin, Kwara State)</p>
                <p className="text-slate-400 text-sm mt-2">
                  Master of Business Administration.
                </p>
              </div>

              <div className="bg-secondary p-6 rounded-xl border border-slate-700 hover:border-accent/50 transition-all shadow-lg hover:shadow-accent/10">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white">B.Sc. Economics</h4>
                  <span className="text-xs font-mono bg-slate-800 text-slate-300 px-2 py-1 rounded">2018</span>
                </div>
                <p className="text-accent text-sm">Kwara State University (Malete, Kwara State)</p>
              </div>

              {/* Certifications Section */}
              <div className="bg-secondary p-6 rounded-xl border border-slate-700 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                
                <h4 className="text-lg font-bold text-white mb-6 border-b border-slate-700 pb-2">Licenses & Certifications</h4>
                
                <div className="space-y-6">
                  {/* Cert 1 */}
                  <div className="group">
                    <div className="flex justify-between items-start">
                      <h5 className="text-white font-medium group-hover:text-accent transition-colors">Generative AI in HR</h5>
                      <span className="text-[10px] font-mono bg-success/20 text-success px-2 py-0.5 rounded border border-success/30">Jan 2025</span>
                    </div>
                    <p className="text-sm text-slate-400">HRCI</p>
                    <p className="text-xs text-slate-500 mt-1">Skills: HR • Artificial Intelligence for Business</p>
                  </div>

                  {/* Cert 2 */}
                  <div className="group">
                    <div className="flex justify-between items-start">
                      <h5 className="text-white font-medium group-hover:text-accent transition-colors">Payroll Administration</h5>
                      <span className="text-[10px] font-mono bg-success/20 text-success px-2 py-0.5 rounded border border-success/30">Jan 2025</span>
                    </div>
                    <p className="text-sm text-slate-400">HRCI</p>
                    <p className="text-xs text-slate-500 mt-1">Skills: Payroll Management</p>
                  </div>

                  {/* Cert 3 */}
                  <div className="group">
                    <div className="flex justify-between items-start">
                      <h5 className="text-white font-medium group-hover:text-accent transition-colors">Data Analysis</h5>
                      <span className="text-[10px] font-mono bg-slate-700 text-slate-300 px-2 py-0.5 rounded">Jul 2024</span>
                    </div>
                    <p className="text-sm text-slate-400">MALhub</p>
                    <p className="text-xs text-slate-500 mt-1">Skills: Data Analysis • Modeling • Warehousing</p>
                  </div>

                  {/* Cert 4 */}
                  <div className="group">
                    <div className="flex justify-between items-start">
                      <h5 className="text-white font-medium group-hover:text-accent transition-colors">HR as a Strategic Business Partner</h5>
                      <span className="text-[10px] font-mono bg-slate-700 text-slate-300 px-2 py-0.5 rounded">Jan 2024</span>
                    </div>
                    <p className="text-sm text-slate-400">Birdify - LMSAFP</p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;