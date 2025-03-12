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

    // Changed to only use circles
    const shapes: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
    }> = [];

    // Create small circles
    const shapeCount = Math.min(window.innerWidth / 8, 150);
    
    // Single color for all circles - white with transparency
    const circleColor = '#FFFFFF80';

    for (let i = 0; i < shapeCount; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1, // Smaller size for circles (1-5px)
        color: circleColor,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update shapes
      shapes.forEach(shape => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.fillStyle = shape.color;
        ctx.globalAlpha = 0.8;
        
        // Draw circles
        ctx.beginPath();
        ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
        
        // Update position
        shape.x += shape.speedX;
        shape.y += shape.speedY;
        
        // Bounce off edges
        if (shape.x < 0 || shape.x > canvas.width) {
          shape.speedX *= -1;
        }
        
        if (shape.y < 0 || shape.y > canvas.height) {
          shape.speedY *= -1;
        }
      });
      
      // Create connections between nearby circles (spiderweb effect)
      ctx.strokeStyle = '#FFFFFF40'; // Updated connection line color to match circles
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < shapes.length; i++) {
        for (let j = i + 1; j < shapes.length; j++) {
          const dx = shapes[i].x - shapes[j].x;
          const dy = shapes[i].y - shapes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 180) {
            ctx.beginPath();
            ctx.moveTo(shapes[i].x, shapes[i].y);
            ctx.lineTo(shapes[j].x, shapes[j].y);
            ctx.globalAlpha = 0.2 * (1 - distance / 180);
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
        style={{ 
          background: 'linear-gradient(135deg, #0a5068 0%, #0c6d94 100%), linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)' 
        }}
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
