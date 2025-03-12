
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

    // More geometric shapes like creai.mx - triangles, squares, circles
    const shapes: Array<{
      x: number;
      y: number;
      type: 'circle' | 'square' | 'triangle';
      size: number;
      color: string;
      rotation: number;
      speedX: number;
      speedY: number;
      rotationSpeed: number;
    }> = [];

    // Create a variety of geometric shapes
    const shapeCount = Math.min(window.innerWidth / 10, 120);
    
    // Updated color palette with white to #10728b4d range
    const colors = [
      '#FFFFFF80', // White with transparency
      '#E6F3F780', // Very light blue with transparency
      '#C8E6F080', // Light blue with transparency
      '#A9D9E980', // Medium light blue with transparency
      '#8ACCDF80', // Medium blue with transparency
      '#6CBFD680', // Medium dark blue with transparency
      '#4DB3CC80', // Dark blue with transparency
      '#10728B80'  // Target color with transparency
    ];

    for (let i = 0; i < shapeCount; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
        size: Math.random() * 8 + 3, 
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        rotationSpeed: (Math.random() - 0.5) * 0.02
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update shapes
      shapes.forEach(shape => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        ctx.fillStyle = shape.color;
        ctx.globalAlpha = 0.8;
        
        // Draw different shapes
        if (shape.type === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (shape.type === 'square') {
          ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
        } else if (shape.type === 'triangle') {
          ctx.beginPath();
          ctx.moveTo(0, -shape.size);
          ctx.lineTo(shape.size, shape.size);
          ctx.lineTo(-shape.size, shape.size);
          ctx.closePath();
          ctx.fill();
        }
        
        ctx.restore();
        
        // Update position and rotation
        shape.x += shape.speedX;
        shape.y += shape.speedY;
        shape.rotation += shape.rotationSpeed;
        
        // Bounce off edges
        if (shape.x < 0 || shape.x > canvas.width) {
          shape.speedX *= -1;
        }
        
        if (shape.y < 0 || shape.y > canvas.height) {
          shape.speedY *= -1;
        }
      });
      
      // Create connections between nearby shapes (spiderweb effect)
      ctx.strokeStyle = '#10728B40'; // Updated connection line color
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
          background: 'linear-gradient(135deg, #10728b4d 0%, #10728b4d 100%), linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)' 
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
