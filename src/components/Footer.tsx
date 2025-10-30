import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="text-xl font-bold text-gold">PRIME AUTO</span>
              <span className="text-xl font-bold text-white">CLUB</span>
            </Link>
            <p className="text-white/60 text-sm">
              Премиальный детейлинг и уход за вашим автомобилем
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <a
                href="tel:+79686648888"
                className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                +7 968 664-88-88
              </a>
              <div className="flex items-start gap-2 text-white/60">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>10:00 — 20:00</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Навигация</h3>
            <div className="space-y-2">
              <Link
                to="/detailing"
                className="block text-white/60 hover:text-gold transition-colors text-sm"
              >
                Детейлинг
              </Link>
              <Link
                to="/services"
                className="block text-white/60 hover:text-gold transition-colors text-sm"
              >
                Услуги
              </Link>
              <Link
                to="/prices"
                className="block text-white/60 hover:text-gold transition-colors text-sm"
              >
                Цены
              </Link>
              <Link
                to="/contacts"
                className="block text-white/60 hover:text-gold transition-colors text-sm"
              >
                Контакты
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} PRIME AUTO CLUB. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
