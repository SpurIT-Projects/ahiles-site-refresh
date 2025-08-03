import { Phone, Clock, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <h3 className="text-xl font-bold text-primary">AHILES</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Качественный, быстрый и доступный ремонт мобильных устройств, 
              фотоаппаратов и ноутбуков в Минске.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>УНП:</strong> 191114814</p>
              <p><strong>Частное предприятие "АХИЛЕС"</strong></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Быстрые ссылки</h4>
            <nav className="space-y-2">
              <Link 
                to="/" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Ремонт мобильных телефонов
              </Link>
              <Link 
                to="/remont-fotoapparatov" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Ремонт фотоаппаратов
              </Link>
              <Link 
                to="/remont-noutbukov" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Ремонт ноутбуков
              </Link>
              <Link 
                to="/tsenyi" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Цены
              </Link>
              <Link 
                to="/o-kompanii" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                О компании
              </Link>
              <Link 
                to="/kontaktyi" 
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Контакты
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone size={16} className="text-primary" />
                <div>
                  <div>+375 17 2-243-209</div>
                  <div>+375 29 1-755-455</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} className="text-primary" />
                <span>г.Минск, пр.Независимости, 44<br />вход с проспекта</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock size={16} className="text-primary" />
                <div>
                  <div>пн-пт: 9:00-19:00</div>
                  <div>сб: 10:00-17:00</div>
                  <div>вс: выходной</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Частное предприятие "АХИЛЕС". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;