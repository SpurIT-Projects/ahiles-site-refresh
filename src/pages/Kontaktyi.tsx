import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Kontaktyi = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Контакты</h1>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами удобным для вас способом
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card-gradient shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Наш адрес
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">
                    г. Минск, пр. Независимости, 44
                  </p>
                  <p className="text-muted-foreground mb-4">
                    (ст. м. Площадь Победы, вход с проспекта)
                  </p>
                  <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Карта будет здесь</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-card-gradient">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Phone className="h-5 w-5 text-primary" />
                      Телефоны
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium">+375 17 2-243-209</p>
                      <p className="font-medium">+375 29 1-755-455</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card-gradient">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Clock className="h-5 w-5 text-primary" />
                      Режим работы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1 text-sm">
                      <p><strong>Пн-Пт:</strong> 9:00-19:00</p>
                      <p><strong>Сб:</strong> 10:00-17:00</p>
                      <p><strong>Вс:</strong> выходной</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card-gradient shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Напишите нам
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input 
                      id="name" 
                      placeholder="Введите ваше имя"
                      className="border-input focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Электронная почта</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Введите ваш email"
                      className="border-input focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Текст сообщения</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Опишите вашу проблему или задайте вопрос"
                      rows={6}
                      className="border-input focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Quick Contact Section */}
          <div className="mt-16 text-center">
            <Card className="bg-hero-gradient text-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Нужна срочная консультация?</h2>
                <p className="text-white/90 mb-6">
                  Позвоните нам прямо сейчас - мы ответим на все ваши вопросы
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+375172243209">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-primary"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      +375 17 2-243-209
                    </Button>
                  </a>
                  <a href="tel:+375291755455">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-primary"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      +375 29 1-755-455
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Kontaktyi;