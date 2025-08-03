import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Laptop, CheckCircle, Star, Shield, Clock, Phone, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import laptopRepairImage from "@/assets/laptop-repair.jpg";

const RemontNoutbukov = () => {
  const services = [
    "Тщательная и полная диагностика (бесплатная при условии последующего ремонта)",
    "Профилактика и чистка от пыли",
    "Восстановление данных",
    "Разблокирование",
    "Восстановление элементов питания",
    "Ремонт или замена корпуса, экрана, клавиатуры",
    "Ремонт материнской платы",
    "Ремонт привода",
    "Сложнейшая пайка BGA компонентов"
  ];

  const brands = [
    "Asus", "Acer", "Apple", "HP", "Sony", "Toshiba", 
    "Pavillion", "LG", "Lenovo", "Samsung", "Fujitsu-Siemens", 
    "Amilo", "Dell", "MSI"
  ];

  const selectionCriteria = [
    "Отзывы клиентов",
    "Уровень обслуживания", 
    "Техническое оснащение центра",
    "Опыт и квалификация мастеров"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center"
        style={{ backgroundImage: `url(${laptopRepairImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Качественный ремонт 
              <span className="text-primary-glow"> ноутбуков</span> в Минске
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Профессиональная диагностика и ремонт ноутбуков всех производителей 
              с гарантией качества и в кратчайшие сроки
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
                <h2 className="text-2xl font-bold mb-4">Как выбрать компанию для ремонта ноутбука?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Ноутбуки – уникальное высокотехническое устройство, как и вся современная техника, 
                  нуждается в профилактическом уходе и в ремонте. Ведь даже самые надёжные и качественные 
                  модели требуют и очистку от пыли, грязи, и модернизацию отдельных узлов.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Самостоятельный ремонт может усугубить поломку. Небольшие габариты устройства, 
                      плотное расположение деталей, специфические разъёмы требуют профессиональных 
                      навыков и специфического оборудования.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Selection Criteria */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">На что обращать внимание при выборе сервиса</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {selectionCriteria.map((criteria, index) => (
                <Card key={index} className="bg-card-gradient text-center hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold">{criteria}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* About Company */}
          <div className="mb-16">
            <Card className="bg-card-gradient shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Laptop className="h-6 w-6 text-primary" />
                  «Ahiles» - качественный и гарантированно надёжный ремонт ноутбуков в Минске
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-6">
                  Компания «Ахилес» - коллектив высокопрофессиональных специалистов, которые знают 
                  досконально всё об устройстве и безупречной работе лэптопов. Занимаясь ремонтом 
                  различных моделей ноутбуков в городе Минске, мы осуществляем диагностические, 
                  профилактические, ремонтные работы практически всех производителей техники.
                </p>
                <p className="text-lg text-muted-foreground">
                  Для нас не существует поломки, которую мы не сможем диагностировать и устранить. 
                  Ведь наши специалисты не только опытные и квалифицированные, а по-настоящему 
                  увлеченные своей работой.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Supported Brands */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Ремонтируем ноутбуки всех брендов</h2>
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
                <CardTitle className="text-2xl">Наши услуги по ремонту ноутбуков</CardTitle>
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
              </CardContent>
            </Card>
          </div>

          {/* Quality Guarantee */}
          <div className="mb-16">
            <Card className="bg-card-gradient shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    После диагностирования и необходимого ремонта вся техника проходит проверку, 
                    отладку и настройку. Ведь именно от грамотной настройки операционной системы 
                    в дальнейшем зависит производительность ноутбука.
                  </p>
                  <p className="text-muted-foreground">
                    Мы ценим как своё время, так и занятость клиентов, поэтому осуществляем все 
                    работы в кротчайшие сроки.
                  </p>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-primary font-medium">
                      Уверенность в своём профессионализме, оборудовании и надёжных комплектующих 
                      позволяет предоставлять компании «Ахилес» длительную гарантию на все виды работ.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services */}
          <div className="mb-16">
            <Card className="bg-muted">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Дополнительные услуги</h3>
                <p className="text-muted-foreground">
                  Мы не только найдём и устраним поломку, мы обязательно проконсультируем по поводу 
                  дальнейших профилактических процедур, правильному уходу, необходимой модернизации 
                  и даже дадим рекомендации относительно рациональной покупки ставшего незаменимым 
                  в нашей жизни ноутбука.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="bg-hero-gradient text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Доверьте ремонт профессионалам</h2>
              <p className="text-xl mb-6 text-white/90">
                Отдавая технику нашим специалистам, вы отдаёте ноутбук в надёжные руки. 
                Мы вернём ему полную функциональность и продлим срок службы.
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

export default RemontNoutbukov;