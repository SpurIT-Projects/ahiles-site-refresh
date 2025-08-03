import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, Shield, Star, CheckCircle, Smartphone, Camera, Laptop } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import phoneRepairImage from "@/assets/phone-repair.jpg";
import cameraRepairImage from "@/assets/camera-repair.jpg";
import laptopRepairImage from "@/assets/laptop-repair.jpg";

const Index = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Ремонт мобильных телефонов",
      description: "Качественный ремонт iPhone, Samsung, Huawei и других марок",
      image: phoneRepairImage,
      link: "/",
      features: [
        "Замена экранов и сенсоров",
        "Ремонт после попадания воды", 
        "Замена аккумуляторов",
        "Прошивка и разблокировка"
      ]
    },
    {
      icon: Camera,
      title: "Ремонт фотоаппаратов",
      description: "Профессиональный ремонт цифровых и зеркальных камер",
      image: cameraRepairImage,
      link: "/remont-fotoapparatov",
      features: [
        "Ремонт объективов",
        "Замена матриц и дисплеев",
        "Ремонт вспышки",
        "Чистка матриц"
      ]
    },
    {
      icon: Laptop,
      title: "Ремонт ноутбуков",
      description: "Диагностика и ремонт ноутбуков всех производителей",
      image: laptopRepairImage,
      link: "/remont-noutbukov",
      features: [
        "Замена экранов и клавиатур",
        "Ремонт материнских плат",
        "Чистка от пыли",
        "Установка SSD"
      ]
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: "Гарантия качества",
      description: "Предоставляем гарантию на все виды работ и запчасти"
    },
    {
      icon: Clock,
      title: "Быстрый ремонт",
      description: "Большинство ремонтов выполняем от 30 минут до 6 часов"
    },
    {
      icon: Star,
      title: "Опытные мастера",
      description: "Профессиональные специалисты с многолетним опытом"
    },
    {
      icon: CheckCircle,
      title: "Оригинальные запчасти",
      description: "Используем только качественные и проверенные комплектующие"
    }
  ];

  const repairTimes = [
    {
      service: "Замена экрана, прошивка, замена динамика",
      time: "до 30 минут"
    },
    {
      service: "Ремонт клавиатуры, замена корпуса, разблокировка",
      time: "1-3 часа"
    },
    {
      service: "Ремонт после воды, замена микросхем",
      time: "2-6 часов"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Качественный ремонт 
              <span className="text-primary-glow"> мобильных устройств</span> в Минске
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Сервисный центр «Ахилес» - быстрый и доступный ремонт мобильных телефонов, 
              фотоаппаратов и ноутбуков с гарантией качества
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+375172243209">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Позвонить сейчас
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                Узнать цены
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессиональный ремонт любых мобильных устройств с использованием 
              современного оборудования и оригинальных запчастей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card-gradient">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-glow">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <Button className="w-full" variant="outline">
                      Подробнее
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас?</h2>
            <p className="text-lg text-muted-foreground">
              Наши преимущества, которые делают нас лучшими в Минске
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <advantage.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Times Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Сроки ремонта</h2>
              <p className="text-lg text-muted-foreground">
                Мы работаем быстро, не жертвуя качеством
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {repairTimes.map((item, index) => (
                <Card key={index} className="bg-card-gradient">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Badge variant="secondary" className="mb-4 text-primary bg-primary/10">
                        {item.time}
                      </Badge>
                      <p className="text-sm text-muted-foreground">{item.service}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                * Более сложные ремонтные работы согласовываются с владельцем устройства
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы починить ваше устройство?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Обратитесь к нам сегодня для быстрой диагностики и качественного ремонта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+375172243209">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                +375 17 2-243-209
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Наши контакты
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;