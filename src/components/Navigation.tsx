import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Главная' },
    { to: '/detailing', label: 'Детейлинг' },
    { to: '/services', label: 'Услуги' },
    { to: '/prices', label: 'Цены' },
    { to: '/gallery', label: 'Галерея' },
    { to: '/contacts', label: 'Контакты' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gold">PRIME AUTO</span>
            <span className="text-2xl font-bold text-white">CLUB</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-gold ${
                  isActive(link.to) ? 'text-gold' : 'text-white/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+79686648888"
              className="flex items-center gap-2 text-gold font-semibold"
            >
              <Phone className="w-5 h-5" />
              +7 968 664-88-88
            </a>
            <Button className="bg-gold text-black hover:bg-gold/90 font-semibold">
              Записаться
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gold/20">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block text-base font-medium transition-colors ${
                  isActive(link.to) ? 'text-gold' : 'text-white/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+79686648888"
              className="flex items-center gap-2 text-gold font-semibold pt-4 border-t border-gold/20"
            >
              <Phone className="w-5 h-5" />
              +7 968 664-88-88
            </a>
            <Button className="w-full bg-gold text-black hover:bg-gold/90 font-semibold">
              Записаться
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
