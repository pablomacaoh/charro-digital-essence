
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src="/charroai_logo_hat.png" alt="Logo" className="h-14 w-14" />
              <a href="#home" className="font-display text-xl font-bold tracking-tight text-charro-900">
                Charro.ai
              </a>
            <p className="text-sm text-charro-600 mt-1">
              Servicios y Consultoría digital
            </p>
          </div>
          
          <div className="text-sm text-charro-600">
            © {currentYear} Charro.ai All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
