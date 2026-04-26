import React, { useState, useEffect, useRef } from 'react';

const ROLES = [
  "HR Manager",
  "Python Developer",
  "Data Analyst",
  "Account Manager",
  "Executive Assistant",
  "Web Designer"
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);
  
  // Typing Effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typeSpeed = isDeleting ? 50 : 150;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  // Canvas Animation: Interactive Neural Network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particles
    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    const particleCount = Math.min(Math.floor(width * 0.1), 100);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      ctx.lineWidth = 0.5;
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Mouse interaction (Repel slightly)
        const dxMouse = p.x - mouseRef.current.x;
        const dyMouse = p.y - mouseRef.current.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        if (distMouse < 150) {
          const angle = Math.atan2(dyMouse, dxMouse);
          const force = (150 - distMouse) / 150;
          p.x += Math.cos(angle) * force * 1; // Push away
          p.y += Math.sin(angle) * force * 1;
        }

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${1 - distance / 150})`; // Cyan
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
        
        // Draw Mouse Connection
        if (distMouse < 200) {
           ctx.beginPath();
           ctx.strokeStyle = `rgba(16, 185, 129, ${1 - distMouse / 200})`; // Green for mouse interaction
           ctx.moveTo(p.x, p.y);
           ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
           ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#38bdf8';
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary pt-16">
      {/* Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-40"
      />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/60 to-primary z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block p-2 px-4 rounded-full border border-accent/30 bg-accent/10 text-accent mb-6 animate-fade-in backdrop-blur-sm shadow-[0_0_15px_rgba(56,189,248,0.3)]">
          <span className="font-mono text-sm tracking-wide">System: Online // Profile: Mayowa.E.Uwagbai</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-xl">
          Hi, I am <span className="text-white">Mayowa Uwagbai</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-muted mb-8 h-20">
          I am a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-success inline-block">
            {text}
            <span className="animate-pulse text-white ml-1">|</span>
          </span>
        </h2>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          An innovative and self-motivated professional bridging the gap between 
          <span className="text-white font-semibold relative inline-block mx-1">
             Corporate Strategy
             <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent/50"></span>
          </span> 
          and 
          <span className="text-white font-semibold relative inline-block mx-1">
             Technical Solutions
             <span className="absolute bottom-0 left-0 w-full h-0.5 bg-success/50"></span>
          </span>. 
          MBA holder with expertise in HR, Data Analysis (Power BI, SQL), and Software Development.
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
          <a href="https://www.linkedin.com/in/mayowa-uwagbai-55798067" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-3 bg-accent text-white font-semibold rounded-lg overflow-hidden transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:scale-105">
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a href="#projects" className="px-8 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-accent hover:text-white transition-all hover:bg-accent/10">
            View Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;