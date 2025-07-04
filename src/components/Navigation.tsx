
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/#sobre' },
    { name: 'Passeios', href: '/#passeios' },
    { name: 'Histórias', href: '/historias' },
    { name: 'Curiosidades', href: '/curiosidades' },
    { name: 'Roteiros', href: '/roteiros' },
    { name: 'Monte Seu Combo', href: '/combo' },
    { name: 'Ingressos', href: '/ingressos' },
    { name: 'Contato', href: '/#contato' }
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Se é um link interno da home page e estamos em outra página
    if (href.startsWith('/#') && location.pathname !== '/') {
      window.location.href = href;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/fafeccc0-2627-4e55-907e-a5444810a6e3.png" 
              alt="Moakãhára Turismo"
              className="h-12 w-12 mr-3"
            />
            <div className="font-montserrat font-bold text-xl text-verde-floresta">
              Moakãhára
              <span className="block text-sm font-normal text-cinza-pedra">TURISMO</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            {menuItems.map((item) => (
              item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="font-montserrat text-verde-floresta hover:text-azul-cataratas transition-colors duration-300 relative group text-sm"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-azul-cataratas group-hover:w-full transition-all duration-300"></span>
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-montserrat text-verde-floresta hover:text-azul-cataratas transition-colors duration-300 relative group text-sm"
                  onClick={() => handleLinkClick(item.href)}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-azul-cataratas group-hover:w-full transition-all duration-300"></span>
                </a>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link
              to="/combo"
              className="bg-verde-floresta hover:bg-azul-cataratas text-white px-6 py-2 rounded-full font-montserrat font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Monte seu Combo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-verde-floresta"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 font-montserrat text-verde-floresta hover:text-azul-cataratas transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 font-montserrat text-verde-floresta hover:text-azul-cataratas transition-colors duration-300"
                    onClick={() => handleLinkClick(item.href)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <Link
                to="/combo"
                className="block mx-3 mt-4 bg-verde-floresta text-white px-6 py-2 rounded-full font-montserrat font-semibold text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Monte seu Combo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
