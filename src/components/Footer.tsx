
import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cinza-pedra text-white relative overflow-hidden">
      {/* Logo como marca d'água */}
      <div className="absolute right-8 bottom-8 opacity-10">
        <img 
          src="/lovable-uploads/fafeccc0-2627-4e55-907e-a5444810a6e3.png" 
          alt="Moakãhára Logo"
          className="w-32 h-32"
        />
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/fafeccc0-2627-4e55-907e-a5444810a6e3.png" 
                alt="Moakãhára Turismo"
                className="h-12 w-12 mr-3"
              />
              <div className="font-montserrat font-bold text-xl">
                Moakãhára
                <span className="block text-sm font-normal text-ocre-terra">TURISMO</span>
              </div>
            </div>
            <p className="font-lora text-branco-gelo leading-relaxed mb-6">
              "Moakãhára" - aquele que guia em língua guarani. 
              Conectando você às maravilhas de Foz do Iguaçu com autenticidade e respeito à natureza.
            </p>
            
            {/* Redes Sociais */}
            <div className="flex space-x-4">
              <a href="#" className="bg-verde-floresta p-2 rounded-full hover:bg-azul-cataratas transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="bg-verde-floresta p-2 rounded-full hover:bg-azul-cataratas transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="bg-verde-floresta p-2 rounded-full hover:bg-azul-cataratas transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.482-1.995.699 0 1.037.219 1.037 1.037 0 .631-.219 1.574-.662 2.447-.188.937.219 1.699 1.142 1.699 1.371 0 2.426-1.448 2.426-3.539 0-1.851-1.329-3.146-3.231-3.146-2.202 0-3.496 1.646-3.496 3.353 0 .662.254 1.371.571 1.756.063.075.072.141.053.219-.059.237-.191.756-.219.864-.037.14-.125.171-.291.104-1.007-.469-1.639-1.928-1.639-3.106 0-2.447 1.786-4.675 5.154-4.675 2.708 0 4.813 1.928 4.813 4.508 0 2.688-1.694 4.85-4.043 4.85-.789 0-1.532-.41-1.785-.901l-.484 1.848c-.175.662-.648 1.495-.966 2.004.728.225 1.497.345 2.292.345 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-montserrat text-lg font-semibold mb-4 text-ocre-terra">
              Links Rápidos
            </h3>
            <ul className="space-y-2 font-lora">
              <li><a href="#home" className="hover:text-ocre-terra transition-colors duration-300">Home</a></li>
              <li><a href="#sobre" className="hover:text-ocre-terra transition-colors duration-300">Sobre</a></li>
              <li><a href="#passeios" className="hover:text-ocre-terra transition-colors duration-300">Passeios</a></li>
              <li><a href="#historia" className="hover:text-ocre-terra transition-colors duration-300">História</a></li>
              <li><a href="#combo" className="hover:text-ocre-terra transition-colors duration-300">Monte seu Combo</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-montserrat text-lg font-semibold mb-4 text-ocre-terra">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-ocre-terra" />
                <span className="font-lora text-sm">Foz do Iguaçu, PR</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-ocre-terra" />
                <span className="font-lora text-sm">(45) 99999-9999</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-ocre-terra" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="font-lora text-sm">contato@moakahara.com.br</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="font-lora text-sm text-branco-gelo">
            © 2024 Moakãhára Turismo. Todos os direitos reservados. | 
            <span className="font-playfair italic"> "Aquele que guia com o coração"</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
