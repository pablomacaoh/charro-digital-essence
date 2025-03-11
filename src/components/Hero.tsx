
import { ArrowDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setDimensions();
    window.addEventListener('resize', setDimensions);

    // Particles configuration
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
    }> = [];

    // Increase particle count and size for more obvious animation
    const particleCount = Math.min(window.innerWidth / 8, 150);
    
    // More vibrant color palette for better visibility
    const colors = ['#8B5CF6B0', '#D946EFB0', '#F97316B0', '#0EA5E9B0'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 6 + 4, // Even larger bubbles for visibility
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 1.2, // Increased speed
        speedY: (Math.random() - 0.5) * 1.2  // Increased speed
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.9; // Higher opacity for better visibility
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
      });
      
      // Create connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) { // Increased connection distance
            ctx.beginPath();
            ctx.strokeStyle = '#10728BCC'; // More opaque connections
            ctx.globalAlpha = 0.5 * (1 - distance / 150);
            ctx.lineWidth = 2; // Thicker lines
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setDimensions);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 -z-10" 
        style={{ background: '#10728b4d' }}
      />
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 -z-10"
      />
      
      <div className="container mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-charro-700 uppercase bg-charro-100 rounded-full animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Servicios y Consultoría Digital
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-charro-900 mb-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Transformamos ideas en <br />
            <span className="text-accent">Excelencia Digital</span>
          </h1>
          
          <p className="text-lg md:text-xl text-charro-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.4s' }}>
            En <b>Charro.ai</b> revolucionamos la transformación digital. Impulsamos tu adopción de Inteligencia Artificial, fusionamos tecnologías y potenciamos la comunicación empresarial mediante WhatsApp, todo con un enfoque estratégico que convierte cada reto en una oportunidad de innovación.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <a 
              href="#services" 
              className="px-6 py-3 font-medium text-white bg-accent rounded-md hover:bg-accent/90 transition-colors duration-300 shadow-sm"
            >
              Servicios
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 font-medium text-charro-700 bg-transparent border border-charro-200 rounded-md hover:bg-charro-50 transition-colors duration-300"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-charro-400 hover:text-charro-600 transition-colors">
          <ArrowDown size={30} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
