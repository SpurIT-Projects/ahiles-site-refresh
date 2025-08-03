import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Clock, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "О компании", href: "/o-kompanii" },
    { name: "Ремонт фотоаппаратов", href: "/remont-fotoapparatov" },
    { name: "Ремонт ноутбуков", href: "/remont-noutbukov" },
    { name: "Цены", href: "/tsenyi" },
    { name: "Контакты", href: "/kontaktyi" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background shadow-elegant border-b">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-4 mb-2 md:mb-0">
              <div className="flex items-center gap-1">
                <Phone size={14} />
                <span>+375 17 2-243-209</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone size={14} />
                <span>+375 29 1-755-455</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>пн-пт: 9:00-19:00, сб: 10:00-17:00</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>г.Минск, пр.Независимости, 44</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">AHILES</h1>
              <p className="text-sm text-muted-foreground">Сервисный центр</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.href) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;