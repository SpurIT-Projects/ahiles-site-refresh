import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Camera, Laptop, AlertCircle } from "lucide-react";

const Tsenyi = () => {
  const phoneRepairs = [
    { service: "Диагностика", price: "бесплатно (10 руб. в случае отказа от ремонта)" },
    { service: "Программный ремонт", price: "от 30,00 руб." },
    { service: "Установка динамика в мобильном телефоне", price: "от 30,00 руб." },
    { service: "Установка системного разъема мобильного телефона", price: "от 30,00 руб." },
    { service: "Установка шлейфа в мобильном телефоне", price: "от 35,00 руб." },
    { service: "Ремонт сим-приемника", price: "от 30,00 руб." },
    { service: "Установка сенсора", price: "от 35,00 руб." },
    { service: "Установка дисплея", price: "от 35,00 руб." },
    { service: "Восстановление после попадания влаги, грязи, механических повреждений", price: "от 40,00 руб." },
    { service: "Установка микросхем питания", price: "от 40,00 руб." },
    { service: "Установка системной платы", price: "от 35,00 руб." },
    { service: "Восстановление печатного монтажа", price: "от 35,00 руб." }
  ];

  const laptopRepairs = [
    { service: "Программный ремонт", price: "35,00 руб." },
    { service: "Корпусной ремонт ноутбука", price: "от 60,00 руб." },
    { service: "Восстановление материнской платы ноутбука", price: "от 75,00 руб." },
    { service: "Установка системного разъема ноутбука", price: "от 60,00 руб." },
    { service: "Установка клавиатуры ноутбука (без учета стоимости запчастей)", price: "от 45,00 руб." },
    { service: "Ремонт шлейфа экрана ноутбука", price: "от 75,00 руб." },
    { service: "Установка южного (северного) моста (без учета стоимости запчастей)", price: "от 70,00 руб." },
    { service: "Ремонт сетевого зарядного устройства ноутбука", price: "35,00 руб." },
    { service: "Установка матрицы ноутбука (без учета стоимости запчастей)", price: "от 50,00 руб." },
    { service: "Установка шлейфа матрицы (без учета стоимости запчастей)", price: "от 45,00 руб." },
    { service: "Установка жесткого диска (с установкой ОС для ноутбука, без учета стоимости запчастей)", price: "от 50,00 руб." }
  ];

  const cameraRepairs = [
    { service: "Ремонт объектива фотоаппарата", price: "от 40,00 руб." },
    { service: "Ремонт системной платы фотоаппарата", price: "от 45,00 руб." },
    { service: "Ремонт картоприемника фотоаппарата", price: "от 35,00 руб." },
    { service: "Ремонт фотовспышки", price: "от 40,00 руб." },
    { service: "Ремонт зеркальной фотокамеры", price: "от 80,00 руб." },
    { service: "Корпусной ремонт", price: "от 35,00 руб." },
    { service: "Установка дисплея", price: "от 25,00 руб." },
    { service: "Установка объектива", price: "от 35,00 руб." }
  ];

  const PriceTable = ({ title, icon: Icon, repairs }: { title: string; icon: any; repairs: Array<{service: string; price: string}> }) => (
    <Card className="bg-card-gradient shadow-elegant">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon className="h-6 w-6 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {repairs.map((repair, index) => (
            <div key={index} className="flex justify-between items-start gap-4 py-2 border-b border-border last:border-b-0">
              <span className="text-sm text-foreground flex-1">{repair.service}</span>
              <Badge variant="secondary" className="text-primary bg-primary/10 whitespace-nowrap">
                {repair.price}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Цены на ремонт</h1>
            <p className="text-lg text-muted-foreground">
              Прозрачные и доступные цены на все виды ремонтных работ
            </p>
          </div>

          {/* Important Notice */}
          <Card className="bg-muted border-primary/20 mb-12">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Важная информация о ценах:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Цены указаны без стоимости запасных частей и деталей</li>
                    <li>• В зависимости от сложности сборки аппарата цена может меняться</li>
                    <li>• Диагностика бесплатна при условии последующего ремонта</li>
                    <li>• Все работы выполняются с гарантией качества</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-12">
            <PriceTable
              title="Ремонт устройств связи"
              icon={Smartphone}
              repairs={phoneRepairs}
            />

            <PriceTable
              title="Ремонт ноутбуков"
              icon={Laptop}
              repairs={laptopRepairs}
            />

            <PriceTable
              title="Ремонт фотоаппаратов"
              icon={Camera}
              repairs={cameraRepairs}
            />
          </div>

          {/* Contact CTA */}
          <div className="mt-16">
            <Card className="bg-hero-gradient text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Нужна точная оценка стоимости?</h2>
                <p className="text-white/90 mb-6">
                  Принесите ваше устройство на бесплатную диагностику, и мы предоставим 
                  точную стоимость ремонта с учетом всех необходимых работ
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-sm text-white/80 mb-1">Звоните прямо сейчас:</p>
                    <p className="font-bold text-lg">+375 17 2-243-209</p>
                    <p className="font-bold text-lg">+375 29 1-755-455</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tsenyi;