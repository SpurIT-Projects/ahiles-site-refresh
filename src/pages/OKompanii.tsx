import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

const OKompanii = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">О компании</h1>
            <p className="text-lg text-muted-foreground">
              Частное предприятие "АХИЛЕС" - ваш надежный партнер в области ремонта электроники
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card-gradient">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-sm text-muted-foreground">
                  г.Минск, пр. Независимости, 44
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Телефоны</h3>
                <div className="text-sm text-muted-foreground">
                  <p>+375 17 2-243-209</p>
                  <p>+375 29 1-755-455</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Режим работы</h3>
                <div className="text-sm text-muted-foreground">
                  <p><strong>Пн - Пт:</strong> 9:00 - 19:00</p>
                  <p><strong>Сб:</strong> 10:00 - 17:00</p>
                  <p><strong>Вс:</strong> выходной</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card-gradient shadow-elegant">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Реквизиты компании</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>УНП:</strong> 191114814</p>
                    <p><strong>Название:</strong> Частное предприятие "АХИЛЕС"</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">О нашей компании</h2>
                  <p className="text-muted-foreground mb-4">
                    Частное предприятие "АХИЛЕС" - это современный сервисный центр, 
                    специализирующийся на профессиональном ремонте мобильных телефонов, 
                    цифровых фотоаппаратов и ноутбуков в городе Минске.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Мы предлагаем качественный, быстрый и доступный ремонт мобильных устройств, 
                    используя современное специализированное оборудование и оригинальные 
                    запасные части от ведущих мировых производителей.
                  </p>
                  <p className="text-muted-foreground">
                    Наша команда состоит из высококвалифицированных специалистов с многолетним 
                    опытом работы, которые готовы решить любую техническую проблему и вернуть 
                    вашему устройству полную функциональность.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default OKompanii;