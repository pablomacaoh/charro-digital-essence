
import { Monitor, LineChart, Database, Wrench, Globe, Zap, MessageCircle, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Adopción de IA",
      description: "Impulsamos la innovación en tu negocio mediante estrategias personalizadas de IA."
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Integración de sistemas",
      description: "Conectamos y personalizamos tus sistemas para maximizar la eficiencia de tu operacion."
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Comunicación empresarial vía WhatsApp",
      description: "Fortalecemos la interacción corporativa implementando soluciones integradas de WhatsApp."
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Consultoría de herramientas",
      description: "Evaluamos tus procesos y tecnologías actuales para identificar oportunidades de automatización y optimización, reduciendo tiempos y costos con soluciones de Software (SaaS)."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Marketing Digital",
      description: "Revolucionamos la presencia de tu marca en el entorno digital mediante estrategias innovadoras que impulsan el engagement y generan resultados medibles."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Automatización",
      description: "Optimiza tus procesos mediante soluciones tecnológicas que liberan recursos, reducen costos y aceleran tu productividad."
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 section-transition">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-charro-700 uppercase bg-charro-100 rounded-full">
            ¿Cómo te podemos ayudar?
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-charro-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="max-w-2xl mx-auto text-charro-600">
            Impulsamos la transformación digital de tu negocio con soluciones integrales, diseñadas especialmente para satisfacer tus necesidades únicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-charro-50 text-accent mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-charro-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Ver más detalles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
