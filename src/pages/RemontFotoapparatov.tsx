import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, CheckCircle, Star, Shield, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import cameraRepairImage from "@/assets/camera-repair.jpg";

const RemontFotoapparatov = () => {
  const services = [
    "Ремонт любительских и профессиональных объективов",
    "Замена LCD дисплеев, корпусов и кнопок",
    "Замена цифровых матриц и вспышки",
    "Ремонт электроники любой сложности с заменой компонентов",
    "Чистка зеркальных матриц"
  ];

  const brands = [
    "Canon", "Kodak", "Ergo", "Samsung", "Nikon", 
    "Olimpus", "Sony", "Pentax", "Fujifilm"
  ];

  const advantages = [
    {
      icon: Clock,
      title: "Быстрая диагностика",
      description: "Определяем проблему и стоимость ремонта в кратчайшие сроки"
    },
    {
      icon: Star,
      title: "Срочность выполнения",
      description: "Стараемся выполнить ремонт максимально быстро"
    },
    {
      icon: Shield,
      title: "Гарантия качества",
      description: "Предоставляем гарантию на все виды работ"
    },
    {
      icon: CheckCircle,
      title: "Качественное обслуживание",
      description: "Профессиональный подход к каждому клиенту"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center"
        style={{ backgroundImage: `url(${cameraRepairImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Профессиональный ремонт 
              <span className="text-primary-glow"> цифровых фотоаппаратов</span> в Минске
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Качественный ремонт любых моделей цифровых фотоаппаратов с использованием 
              современного оборудования и оригинальных запасных частей
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Связаться с нами
              </Button>
              <Link to="/tsenyi">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Посмотреть цены
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="mb-16">
            <Card className="bg-card-gradient shadow-elegant">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  На сегодняшний день современные фотоаппараты являются воплощением высоких технологий – 
                  сложными цифровыми, оптическо-механическими устройствами. Сделать быстрый и качественный 
                  ремонт фотоаппаратов возможно только при наличии специального оборудования, оригинальных 
                  запасных частей и профессионализма персонала.
                </p>
                <p className="text-lg text-muted-foreground">
                  Сервисный центр «Ахилес» профессионально делает ремонт фотоаппаратов в городе Минске, 
                  используя современное специализированное оборудование и оригинальные запасные части от 
                  ведущих мировых производителей.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Supported Brands */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Ремонтируем фотоаппараты брендов</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {brands.map((brand, index) => (
                <Badge key={index} variant="secondary" className="text-base px-4 py-2 bg-primary/10 text-primary">
                  {brand}
                </Badge>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <Card className="bg-card-gradient shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Camera className="h-6 w-6 text-primary" />
                  Наши услуги по ремонту фотоаппаратов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium">
                    Мы предоставляем гарантию на все заменяемые части и основные виды работ
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Advantages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Преимущества нашего сервисного центра</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="bg-card-gradient text-center hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                      <advantage.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="mb-16">
            <Card className="bg-card-gradient shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Дополнительные преимущества</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Доступные расценки</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Гибкая система оплаты</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Удобное месторасположение</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Удобный график работы</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Индивидуальный подход</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Современное оборудование</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Опытные специалисты</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Качественные запчасти</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="bg-hero-gradient text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Поломался фотоаппарат?</h2>
              <p className="text-xl mb-6 text-white/90">
                Не принимайте поспешных решений, списывая со счетов хорошую технику! 
                Несите ее в сервисный центр «Ахилес» - мы знаем, как ее починить, 
                чтобы она запечатлела еще много красивых моментов вашей жизни.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Phone className="mr-2 h-5 w-5" />
                  +375 17 2-243-209
                </Button>
                <Link to="/kontaktyi">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Наши контакты
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default RemontFotoapparatov;