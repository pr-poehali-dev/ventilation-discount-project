import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: 'Wind',
      title: 'Чистка вентиляции',
      description: 'Профессиональная очистка вентиляционных систем с использованием современного оборудования',
      price: 'от 2 500 ₽'
    },
    {
      icon: 'Droplets',
      title: 'Дезинфекция',
      description: 'Полная дезинфекция вентиляционных каналов безопасными препаратами',
      price: 'от 1 800 ₽'
    },
    {
      icon: 'Settings',
      title: 'Диагностика системы',
      description: 'Комплексная проверка работы вентиляционной системы с выявлением проблем',
      price: 'от 1 500 ₽'
    },
    {
      icon: 'Wrench',
      title: 'Ремонт вентиляции',
      description: 'Устранение неисправностей и восстановление работоспособности системы',
      price: 'от 3 000 ₽'
    }
  ];

  const benefits = [
    { icon: 'Shield', text: 'Гарантия 6 месяцев на все работы' },
    { icon: 'Clock', text: 'Работаем без выходных' },
    { icon: 'Award', text: 'Опыт более 10 лет' },
    { icon: 'Users', text: 'Более 2000 довольных клиентов' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="bg-primary text-primary-foreground py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Wind" size={32} className="text-primary-foreground" />
              <div>
                <h1 className="text-2xl font-bold">ВентСервис</h1>
                <p className="text-sm opacity-90">Профессиональная чистка вентиляции</p>
              </div>
            </div>
            <a href="tel:+79991234567" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Icon name="Phone" size={20} />
              <span className="font-semibold">+7 (999) 123-45-67</span>
            </a>
          </div>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Чистка и дезинфекция вентиляции
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Профессиональные услуги по обслуживанию вентиляционных систем с гарантией качества
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="secondary" className="text-lg px-6 py-3 bg-destructive text-destructive-foreground">
                🎉 Скидка 20% для пенсионеров
              </Badge>
              <Badge variant="outline" className="text-lg px-6 py-3 border-2 border-primary text-primary">
                ✓ Гарантия 6 месяцев
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4">{service.description}</CardDescription>
                  <p className="text-2xl font-bold text-center text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={benefit.icon as any} size={28} className="text-primary" />
                </div>
                <p className="font-semibold">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="discount" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-destructive/10 to-destructive/5 rounded-2xl p-8 border-2 border-destructive/20">
            <div className="flex items-center gap-6 flex-wrap">
              <div className="w-20 h-20 bg-destructive/20 rounded-full flex items-center justify-center text-4xl">
                🎉
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-3">Специальное предложение для пенсионеров</h2>
                <p className="text-xl text-muted-foreground mb-4">
                  Скидка <span className="text-destructive font-bold text-2xl">20%</span> на все виды услуг при предъявлении пенсионного удостоверения
                </p>
                <p className="text-sm text-muted-foreground">
                  * Акция действует постоянно. Скидка не суммируется с другими предложениями.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Наши гарантии</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="ShieldCheck" size={32} className="text-primary" />
                    <CardTitle>Гарантия 6 месяцев</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    На все виды работ предоставляется официальная гарантия сроком на 6 месяцев. 
                    При возникновении проблем мы бесплатно устраним их.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="FileCheck" size={32} className="text-primary" />
                    <CardTitle>Договор и документы</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Заключаем официальный договор, выдаем акт выполненных работ и кассовый чек. 
                    Все документы для бухгалтерии.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={32} className="text-primary" />
                    <CardTitle>Качество работ</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Используем сертифицированное оборудование и безопасные препараты. 
                    Все мастера имеют профильное образование.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={32} className="text-primary" />
                    <CardTitle>Точные сроки</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Приезжаем строго в назначенное время. Выполняем работы в согласованные сроки. 
                    Ценим ваше время.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Заказать услугу</h2>
            <p className="text-center text-muted-foreground mb-8">
              Оставьте заявку, и мы свяжемся с вами в течение 15 минут
            </p>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input
                      placeholder="Иван Иванович"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Комментарий</label>
                    <Textarea
                      placeholder="Опишите вашу задачу..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ВентСервис</h3>
              <p className="text-sm opacity-90">
                Профессиональная чистка и обслуживание вентиляционных систем с 2013 года
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@ventservice.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, д. 1
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">График работы</h3>
              <div className="text-sm space-y-1">
                <p>Пн-Вс: 8:00 - 22:00</p>
                <p className="opacity-90">Без выходных и праздников</p>
                <p className="opacity-90 mt-4">Прием заявок круглосуточно</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>© 2024 ВентСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
