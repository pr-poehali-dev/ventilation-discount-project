import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {

  const services: any[] = [];

  const benefits = [
    { icon: 'Shield', text: 'Гарантия 6 месяцев на все работы' },
    { icon: 'Calendar', text: 'Выезд день в день' },
    { icon: 'Award', text: 'Опыт 2.5 года' },
    { icon: 'Users', text: 'Более 1000 довольных клиентов' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="bg-primary text-primary-foreground py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Icon name="Wind" size={32} className="text-primary-foreground" />
              <div>
                <h1 className="text-2xl font-bold">Вент-Сервис</h1>
                <p className="text-sm opacity-90">Профессиональная чистка вентиляции</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <a 
                  href="https://vk.com/ventservisspb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  aria-label="ВКонтакте"
                >
                  <svg className="w-6 h-6" viewBox="0 0 48 48" fill="currentColor">
                    <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm9.68 24.645c.667.66 1.373 1.282 1.996 1.988.277.314.542.637.76.998.31.517.028 1.085-.254 1.117l-3.332-.002c-.868.072-1.56-.274-2.157-.87-.495-.493-.954-.996-1.427-1.498-.2-.212-.406-.41-.648-.572-.455-.306-.852-.214-1.104.264-.257.485-.316 1.016-.345 1.55-.04.786-.306.992-1.098 1.03-1.693.077-3.3-.177-4.8-1.025-1.324-.75-2.35-1.798-3.24-2.987-1.734-2.317-3.06-4.89-4.24-7.548-.246-.556-.065-.855.555-.866.93-.015 1.86-.013 2.79-.002.378.01.63.233.788.58.558 1.22 1.23 2.37 2.05 3.44.21.274.424.55.713.745.33.223.583.153.74-.214.103-.24.15-.496.175-.753.08-.837.09-1.672-.017-2.506-.063-.49-.307-.807-.797-.898-.25-.046-.213-.134-.092-.27.193-.217.375-.352.737-.352h2.713c.428.085.522.277.58.707l.002 3.015c-.003.2.1.794.46.926.29.09.48-.13.653-.332.783-.908 1.342-1.96 1.84-3.052.22-.478.412-.97.595-1.466.136-.368.348-.545.754-.537l3.563.003c.105 0 .212.002.315.02.495.085.63.304.48.79-.24.78-.662 1.44-1.09 2.096-.456.7-.944 1.375-1.4 2.074-.42.64-.387.962.126 1.494z"/>
                  </svg>
                </a>
                <a 
                  href="https://t.me/ventservisspb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  aria-label="Telegram"
                >
                  <svg className="w-6 h-6" viewBox="0 0 48 48" fill="currentColor">
                    <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm9.697 14.09l-3.394 16.012c-.254 1.13-1.015 1.41-2.054.88l-5.67-4.18-2.736 2.635c-.303.303-.557.557-1.14.557l.407-5.785 10.53-9.514c.457-.407-.1-.633-.71-.226l-13.01 8.194-5.606-1.753c-1.22-.383-1.244-1.22.254-1.804l21.928-8.453c1.015-.38 1.903.226 1.575 1.805z"/>
                  </svg>
                </a>
              </div>
              <a href="tel:88122009519" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Icon name="Phone" size={20} />
                <span className="font-semibold">8 (812) 200-95-19</span>
              </a>
            </div>
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
              <Badge variant="secondary" className="text-lg px-6 py-3 bg-primary text-primary-foreground">
                🛡️ Гарантия качества
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-3 bg-primary text-primary-foreground">
                ⚡ Быстрый выезд
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-3 bg-destructive text-destructive-foreground">
                💰 Скидки
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          
          <div className="max-w-6xl mx-auto mb-16 space-y-8">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src="https://cdn.poehali.dev/files/e4bfb201-8071-4f36-aa0d-9045b1aeb56f.jpg" 
                    alt="Чистка вентиляции"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">Чистка вентиляции</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Профессиональная очистка вентиляционных систем от пыли, грязи и микроорганизмов
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Удаление всех загрязнений</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Дезинфекция системы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Проверка работоспособности</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Гарантия качества</span>
                    </li>
                  </ul>
                  <p className="text-3xl font-bold text-primary">от 4 000 ₽</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto md:order-2">
                  <img 
                    src="https://cdn.poehali.dev/files/ceb28e7e-dfb2-4721-9e1c-2e46fb95e03f.jpg" 
                    alt="Монтаж вентиляции"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center md:order-1">
                  <h3 className="text-3xl font-bold mb-4">Монтаж вентиляции</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Установка современных вентиляционных систем любой сложности
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Проектирование системы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Качественный монтаж</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Настройка и тестирование</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Гарантия на работы</span>
                    </li>
                  </ul>
                  <p className="text-3xl font-bold text-primary">от 3 000 ₽</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src="https://cdn.poehali.dev/files/53b11054-d9bc-4d42-bb53-d25d74ce8797.png" 
                    alt="Ремонт вентиляции"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">Ремонт вентиляции</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Восстановление работоспособности вентиляционных систем
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Диагностика неисправностей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Замена поврежденных элементов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Настройка системы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Профилактическое обслуживание</span>
                    </li>
                  </ul>
                  <p className="text-3xl font-bold text-primary">от 5 000 ₽</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto md:order-2">
                  <img 
                    src="https://cdn.poehali.dev/files/40ece360-e5f1-49e5-ba3d-070da71f4c75.png" 
                    alt="Диагностика системы"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center md:order-1">
                  <h3 className="text-3xl font-bold mb-4">Диагностика системы</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Комплексная проверка работы вентиляционной системы с выявлением проблем
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Проверка всех компонентов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Выявление скрытых проблем</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Составление отчёта</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Рекомендации по обслуживанию</span>
                    </li>
                  </ul>
                  <p className="text-3xl font-bold text-primary">Бесплатно</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src="https://cdn.poehali.dev/files/b9f26125-2679-42b2-9817-da8173f6ede0.png" 
                    alt="Дезинфекция"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">Дезинфекция</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Полная дезинфекция вентиляционных каналов безопасными препаратами и удаление плесени и грибка
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Обработка безопасными препаратами</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Удаление плесени и грибка</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Уничтожение бактерий</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>Безопасность для людей и животных</span>
                    </li>
                  </ul>
                  <p className="text-3xl font-bold text-primary">от 5 000 ₽</p>
                </div>
              </div>
            </Card>
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
          <h2 className="text-3xl font-bold text-center mb-12">Специальные скидки</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-destructive/10 to-destructive/5 rounded-2xl p-8 border-2 border-destructive/20">
              <div className="flex items-center gap-6 flex-wrap">
                <div className="w-20 h-20 bg-destructive/20 rounded-full flex items-center justify-center text-4xl">
                  🎉
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Для пенсионеров</h3>
                  <p className="text-xl text-muted-foreground mb-2">
                    Скидка <span className="text-destructive font-bold text-2xl">20%</span> на все виды услуг при предъявлении пенсионного удостоверения
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border-2 border-primary/20">
              <div className="flex items-center gap-6 flex-wrap">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-4xl">
                  👨‍👩‍👧‍👦
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Для многодетных семей</h3>
                  <p className="text-xl text-muted-foreground mb-2">
                    Скидка <span className="text-primary font-bold text-2xl">15%</span> на все виды услуг при предъявлении удостоверения многодетной семьи
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 border-2 border-accent/20">
              <div className="flex items-center gap-6 flex-wrap">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center text-4xl">
                  ⭐
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Скидка за отзыв</h3>
                  <p className="text-xl text-muted-foreground mb-4">
                    Скидка <span className="text-accent font-bold text-2xl">10%</span> на следующий заказ за отзыв на Яндекс.Картах
                  </p>
                  <a 
                    href="https://yandex.ru/maps/-/CLvKjZz4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Icon name="Star" size={20} />
                    Оставить отзыв на Яндекс.Картах
                  </a>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-center text-muted-foreground mt-6">
              * Акции действуют постоянно. Скидки не суммируются с другими предложениями.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">Что говорят о нас наши клиенты</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-500">
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Отличная работа! Мастер приехал вовремя, быстро почистил вентиляцию. Теперь в квартире стало легче дышать. Спасибо за качественную работу!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Елена М.</p>
                      <p className="text-sm text-muted-foreground">Санкт-Петербург</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-500">
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Профессиональный подход! Сделали диагностику бесплатно, объяснили все проблемы. Цены адекватные, работу выполнили качественно. Рекомендую!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Дмитрий К.</p>
                      <p className="text-sm text-muted-foreground">Санкт-Петербург</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-500">
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Очень довольна! У нас была проблема с плесенью в вентиляции. Ребята все почистили, продезинфицировали. Прошло 4 месяца - проблема не вернулась!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Анна С.</p>
                      <p className="text-sm text-muted-foreground">Санкт-Петербург</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-500">
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Обращались для установки вентиляции в новой квартире. Работу сделали быстро и качественно. Цена соответствует качеству. Буду обращаться еще!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Александр П.</p>
                      <p className="text-sm text-muted-foreground">Санкт-Петербург</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-500">
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Спасибо за скидку пенсионерам! Мастер очень вежливый, все объяснил, показал что и как работает. Цена получилась приятная со скидкой."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Валентина И.</p>
                      <p className="text-sm text-muted-foreground">Санкт-Петербург</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-500">
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                      <Icon name="Star" size={20} fill="currentColor" />
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Заказывали чистку вентиляции в офисе. Работу выполнили аккуратно, не мешали сотрудникам. Результат отличный, воздух стал намного чище!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Игорь В.</p>
                      <p className="text-sm text-muted-foreground">Санкт-Петербург</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Наши работы</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">Примеры выполненных проектов</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/90a7b35f-4700-406c-809f-4f0d4047a1c0.jpg"
                    alt="Установка вентиляции в квартире"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Установка вентиляции</h3>
                  <p className="text-sm text-muted-foreground">Современная система вентиляции в квартире</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/5ac02589-0968-4589-be6b-be5d3159b3e4.jpg"
                    alt="Чистка вентиляции профессиональным оборудованием"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Профессиональная чистка</h3>
                  <p className="text-sm text-muted-foreground">Глубокая чистка вентиляционных каналов</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/5cefe21e-8c1f-4c68-a84f-6fe309e39ecf.jpg"
                    alt="Чистая вентиляционная решетка после обслуживания"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Результат работы</h3>
                  <p className="text-sm text-muted-foreground">Идеально чистая вентиляция после обслуживания</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/fb737ec6-7cdd-4a90-86ba-a27fcde43021.jpg"
                    alt="Установка вентиляции на кухне"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Вентиляция на кухне</h3>
                  <p className="text-sm text-muted-foreground">Монтаж системы вентиляции в квартире</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/f4772aaf-a52d-4e48-986d-ca6941a4a5f8.jpg"
                    alt="Вентиляция в ванной комнате"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Вентиляция в ванной</h3>
                  <p className="text-sm text-muted-foreground">Установка вытяжки в санузле квартиры</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/2fed6c2a-3911-4ce8-aebc-abe2dbb5490c.jpg"
                    alt="Вентиляция в спальне"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Вентиляция в спальне</h3>
                  <p className="text-sm text-muted-foreground">Приточная вентиляция для комфортного сна</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Как мы работаем</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">5 простых шагов к чистому воздуху</p>
            
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl">
                        📞
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="text-lg px-3 py-1">1</Badge>
                        <h3 className="text-xl font-bold">Заявка</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Оставить заявку вы можете через сайт или по номеру телефона. Мы свяжемся с вами в течение 15 минут.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl">
                        🚗
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="text-lg px-3 py-1">2</Badge>
                        <h3 className="text-xl font-bold">Выезд специалиста</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Мастер бесплатно выезжает к вам для замера потока и влажности воздуха, а также исследует состояние вашей вентиляции.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl">
                        💡
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="text-lg px-3 py-1">3</Badge>
                        <h3 className="text-xl font-bold">Консультация</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Наши мастера знают свое дело и с удовольствием проконсультируют вас по состоянию вентиляции бесплатно. Подскажем, как решить проблему с минимальными затратами времени и денег.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl">
                        📋
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="text-lg px-3 py-1">4</Badge>
                        <h3 className="text-xl font-bold">Договор на месте</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Мастер компании Вент-Сервис готов к любой нештатной ситуации, так как у него большой багаж знаний и опыта, а также полный набор профессионального оборудования.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-3xl">
                        ⚡
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="text-lg px-3 py-1">5</Badge>
                        <h3 className="text-xl font-bold">Выполнение работ</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Качественное выполнение всех работ с использованием профессионального оборудования.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left hover:no-underline">
                  Как часто нужно чистить вентиляцию?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Рекомендуется проводить профессиональную чистку вентиляции минимум 1 раз в год. 
                  При интенсивном использовании (кафе, рестораны) — каждые 6 месяцев.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left hover:no-underline">
                  Сколько времени занимает чистка вентиляции?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  В среднем работа занимает от 2 до 4 часов в зависимости от площади помещения 
                  и степени загрязнения системы.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left hover:no-underline">
                  Какие документы вы предоставляете после работы?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  После выполнения работ мы предоставляем договор, акт выполненных работ, 
                  кассовый чек и гарантийный талон на 6 месяцев.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left hover:no-underline">
                  Нужно ли освобождать помещение перед чисткой?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Нет, освобождать помещение не требуется. Мастера используют профессиональное 
                  оборудование и защитные материалы, которые предотвращают загрязнение интерьера.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left hover:no-underline">
                  Как получить скидку для пенсионеров?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Для получения скидки 20% необходимо предъявить пенсионное удостоверение 
                  при оформлении заказа или мастеру перед началом работ.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-card rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left hover:no-underline">
                  Работаете ли вы в выходные дни?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Мы работаем Пн-Сб с 10:00 до 21:00. Воскресенье — выходной день.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-card rounded-lg px-6 border-0">
                <AccordionTrigger className="text-left hover:no-underline">
                  Что изменится после чистки?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-2">
                    <li>• Улучшается качество воздуха, становится легче дышать и улучшается качество сна</li>
                    <li>• Уменьшается влажность помещения</li>
                    <li>• Снижается риск появления плесени, грибка и патогенных бактерий</li>
                    <li>• Улучшается теплообмен в квартире</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Связаться с нами</h2>
            <p className="text-muted-foreground mb-8">
              Работаем без выходных с 8:00 до 22:00
            </p>
            
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center gap-6">
                  <div className="flex items-center gap-3 text-2xl font-bold text-primary">
                    <Icon name="Phone" size={32} />
                    <a href="tel:88122009519" className="hover:opacity-80 transition-opacity">
                      8 (812) 200-95-19
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground">Звоните Пн-Сб с 10:00 до 21:00</p>
                  
                  <div className="flex items-center gap-3 text-lg text-primary">
                    <Icon name="Mail" size={24} />
                    <a href="mailto:ventservisspb@bk.ru" className="hover:opacity-80 transition-opacity">
                      ventservisspb@bk.ru
                    </a>
                  </div>
                  
                  <Button size="lg" asChild className="mt-2">
                    <a href="tel:88122009519">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Позвонить
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>


          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Вент-Сервис</h3>
              <p className="text-sm opacity-90">
                Профессиональная чистка и обслуживание вентиляционных систем с 2022 года
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  8 (812) 200-95-19
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  ventservisspb@bk.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Санкт-Петербург, ул. Блохина, д. 9, БЦ Кронверк
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">График работы</h3>
              <div className="text-sm space-y-1">
                <p>Пн-Сб: 10:00 - 21:00</p>
                <p className="opacity-90">Воскресенье выходной</p>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Мы в соцсетях</h4>
                <div className="flex gap-3">
                  <a 
                    href="https://vk.com/ventservisspb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="ВКонтакте"
                  >
                    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="currentColor">
                      <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm9.68 24.645c.667.66 1.373 1.282 1.996 1.988.277.314.542.637.76.998.31.517.028 1.085-.254 1.117l-3.332-.002c-.868.072-1.56-.274-2.157-.87-.495-.493-.954-.996-1.427-1.498-.2-.212-.406-.41-.648-.572-.455-.306-.852-.214-1.104.264-.257.485-.316 1.016-.345 1.55-.04.786-.306.992-1.098 1.03-1.693.077-3.3-.177-4.8-1.025-1.324-.75-2.35-1.798-3.24-2.987-1.734-2.317-3.06-4.89-4.24-7.548-.246-.556-.065-.855.555-.866.93-.015 1.86-.013 2.79-.002.378.01.63.233.788.58.558 1.22 1.23 2.37 2.05 3.44.21.274.424.55.713.745.33.223.583.153.74-.214.103-.24.15-.496.175-.753.08-.837.09-1.672-.017-2.506-.063-.49-.307-.807-.797-.898-.25-.046-.213-.134-.092-.27.193-.217.375-.352.737-.352h2.713c.428.085.522.277.58.707l.002 3.015c-.003.2.1.794.46.926.29.09.48-.13.653-.332.783-.908 1.342-1.96 1.84-3.052.22-.478.412-.97.595-1.466.136-.368.348-.545.754-.537l3.563.003c.105 0 .212.002.315.02.495.085.63.304.48.79-.24.78-.662 1.44-1.09 2.096-.456.7-.944 1.375-1.4 2.074-.42.64-.387.962.126 1.494z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://t.me/ventservisspb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="Telegram"
                  >
                    <svg className="w-8 h-8" viewBox="0 0 48 48" fill="currentColor">
                      <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm9.697 14.09l-3.394 16.012c-.254 1.13-1.015 1.41-2.054.88l-5.67-4.18-2.736 2.635c-.303.303-.557.557-1.14.557l.407-5.785 10.53-9.514c.457-.407-.1-.633-.71-.226l-13.01 8.194-5.606-1.753c-1.22-.383-1.244-1.22.254-1.804l21.928-8.453c1.015-.38 1.903.226 1.575 1.805z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>© 2024 Вент-Сервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}