
import { useState } from 'react';
import { Monitor, LineChart, Database, Wrench, Globe, Zap, MessageCircle, Handshake, Check } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Monitor className="h-10 w-10" />,
      title: "Adopción de IA",
      description: "Impulsamos la innovación en tu negocio mediante estrategias personalizadas de IA.",
      details: [
        "Evaluación de capacidades y necesidades para integración de IA",
        "Desarrollo de soluciones de IA personalizadas",
        "Implementación de chatbots y asistentes virtuales",
        "Automatización de procesos mediante algoritmos inteligentes",
        "Capacitación al personal en nuevas tecnologías de IA"
      ]
    },
    {
      icon: <Handshake className="h-10 w-10" />,
      title: "Integración de sistemas",
      description: "Conectamos y personalizamos tus sistemas para maximizar la eficiencia de tu operacion.",
      details: [
        "Análisis de sistemas actuales y evaluación de compatibilidad",
        "Diseño de arquitectura para integración eficiente",
        "Implementación de APIs y middleware personalizado",
        "Migración de datos entre plataformas",
        "Configuración de automatizaciones entre sistemas"
      ]
    },
    {
      icon: <MessageCircle className="h-10 w-10" />,
      title: "Comunicación empresarial vía WhatsApp",
      description: "Fortalecemos la interacción corporativa implementando soluciones integradas de WhatsApp.",
      details: [
        "Desarrollo de chatbots para WhatsApp Business",
        "Integración con CRM y sistemas de gestión",
        "Automatización de campañas y notificaciones",
        "Análisis de datos de interacción con clientes",
        "Implementación de sistemas de respuesta inteligente"
      ]
    },
    {
      icon: <Wrench className="h-10 w-10" />,
      title: "Consultoría de herramientas",
      description: "Evaluamos tus procesos y tecnologías actuales para identificar oportunidades de automatización y optimización, reduciendo tiempos y costos con soluciones de Software (SaaS).",
      details: [
        "Auditoría completa de herramientas tecnológicas actuales",
        "Análisis de procesos y flujos de trabajo",
        "Recomendación de soluciones SaaS adaptadas a necesidades específicas",
        "Evaluación de costos y retorno de inversión",
        "Plan de implementación y capacitación"
      ]
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Marketing Digital",
      description: "Revolucionamos la presencia de tu marca en el entorno digital mediante estrategias innovadoras que impulsan el engagement y generan resultados medibles.",
      details: [
        "Estrategias de posicionamiento SEO y SEM",
        "Gestión de redes sociales y contenido digital",
        "Diseño de campañas publicitarias digitales",
        "Análisis de métricas y optimización de conversiones",
        "Desarrollo de identidad de marca digital"
      ]
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Automatización",
      description: "Optimiza tus procesos mediante soluciones tecnológicas que liberan recursos, reducen costos y aceleran tu productividad.",
      details: [
        "Identificación de procesos repetitivos susceptibles de automatización",
        "Desarrollo de flujos de trabajo automatizados",
        "Implementación de RPA (Robotic Process Automation)",
        "Integración con sistemas existentes",
        "Monitoreo y optimización continua de procesos"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#0a5068] to-[#0c6d94] py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Impulsamos la transformación digital de tu negocio con soluciones integrales, diseñadas especialmente para satisfacer tus necesidades únicas.
            </p>
          </div>
        </section>
        
        {/* Services Navigation and Details */}
        <section className="py-16 bg-charro-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Services Navigation */}
              <div className="lg:col-span-4">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-semibold mb-6">Soluciones</h2>
                  <nav className="flex flex-col space-y-2">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveService(index)}
                        className={cn(
                          "p-4 rounded-lg text-left flex items-center gap-3 transition-colors",
                          activeService === index 
                            ? "bg-charro-100 text-accent" 
                            : "hover:bg-charro-50"
                        )}
                      >
                        <div className="shrink-0">
                          {service.icon}
                        </div>
                        <span className="font-medium">{service.title}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
              
              {/* Service Details */}
              <div className="lg:col-span-8">
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-charro-50 text-accent">
                      {services[activeService].icon}
                    </div>
                    <h2 className="text-3xl font-display font-bold">
                      {services[activeService].title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-charro-600 mb-8">
                    {services[activeService].description}
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">Lo que ofrecemos:</h3>
                  
                  <ul className="space-y-4 mb-8">
                    {services[activeService].details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent shrink-0 mt-1" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button size="lg" className="mt-4">
                    Solicitar información
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
