import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {

  const benefits = [
    { icon: 'Shield', text: 'Гарантия 6 месяцев на все работы' },
    { icon: 'Calendar', text: 'Выезд день в день' },
    { icon: 'Award', text: 'Опыт 2.5 года' },
    { icon: 'Users', text: 'Более 1000 довольных клиентов' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <header className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white py-8 shadow-2xl sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl shadow-lg">
                <Icon name="Wind" size={36} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Вент-Сервис</h1>
                <p className="text-sm opacity-90 font-medium">Профессиональная чистка вентиляции</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex gap-3">
                <a 
                  href="https://vk.com/ventservisspb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-md p-2.5 rounded-xl hover:bg-white/30 transition-all duration-300 shadow-lg hover:scale-110"
                  aria-label="ВКонтакте"
                >
                  <svg className="w-7 h-7" viewBox="0 0 48 48" fill="currentColor">
                    <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm9.68 24.645c.667.66 1.373 1.282 1.996 1.988.277.314.542.637.76.998.31.517.028 1.085-.254 1.117l-3.332-.002c-.868.072-1.56-.274-2.157-.87-.495-.493-.954-.996-1.427-1.498-.2-.212-.406-.41-.648-.572-.455-.306-.852-.214-1.104.264-.257.485-.316 1.016-.345 1.55-.04.786-.306.992-1.098 1.03-1.693.077-3.3-.177-4.8-1.025-1.324-.75-2.35-1.798-3.24-2.987-1.734-2.317-3.06-4.89-4.24-7.548-.246-.556-.065-.855.555-.866.93-.015 1.86-.013 2.79-.002.378.01.63.233.788.58.558 1.22 1.23 2.37 2.05 3.44.21.274.424.55.713.745.33.223.583.153.74-.214.103-.24.15-.496.175-.753.08-.837.09-1.672-.017-2.506-.063-.49-.307-.807-.797-.898-.25-.046-.213-.134-.092-.27.193-.217.375-.352.737-.352h2.713c.428.085.522.277.58.707l.002 3.015c-.003.2.1.794.46.926.29.09.48-.13.653-.332.783-.908 1.342-1.96 1.84-3.052.22-.478.412-.97.595-1.466.136-.368.348-.545.754-.537l3.563.003c.105 0 .212.002.315.02.495.085.63.304.48.79-.24.78-.662 1.44-1.09 2.096-.456.7-.944 1.375-1.4 2.074-.42.64-.387.962.126 1.494z"/>
                  </svg>
                </a>
                <a 
                  href="https://t.me/ventservisspb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-md p-2.5 rounded-xl hover:bg-white/30 transition-all duration-300 shadow-lg hover:scale-110"
                  aria-label="Telegram"
                >
                  <svg className="w-7 h-7" viewBox="0 0 48 48" fill="currentColor">
                    <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm9.697 14.09l-3.394 16.012c-.254 1.13-1.015 1.41-2.054.88l-5.67-4.18-2.736 2.635c-.303.303-.557.557-1.14.557l.407-5.785 10.53-9.514c.457-.407-.1-.633-.71-.226l-13.01 8.194-5.606-1.753c-1.22-.383-1.244-1.22.254-1.804l21.928-8.453c1.015-.38 1.903.226 1.575 1.805z"/>
                  </svg>
                </a>
              </div>
              <a href="tel:88122009519" className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-3 rounded-xl hover:bg-white/30 transition-all duration-300 shadow-lg font-semibold hover:scale-105">
                <Icon name="Phone" size={22} />
                <span className="hidden sm:inline">8 (812) 200-95-19</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-transparent to-green-100/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-6 py-2 text-sm font-semibold bg-green-500 text-white border-0 shadow-lg">
              🎯 Лучшая цена в СПб
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent leading-tight">
              Чистка и дезинфекция вентиляции
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Профессиональные услуги по обслуживанию вентиляционных систем с гарантией качества
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="secondary" className="text-base px-8 py-4 bg-white shadow-lg border-2 border-blue-200 text-blue-700 hover:scale-105 transition-transform">
                🛡️ Гарантия качества
              </Badge>
              <Badge variant="secondary" className="text-base px-8 py-4 bg-white shadow-lg border-2 border-green-200 text-green-700 hover:scale-105 transition-transform">
                ⚡ Быстрый выезд
              </Badge>
              <Badge variant="secondary" className="text-base px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:scale-105 transition-transform">
                💰 Скидки до 20%
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">Полный спектр услуг для вашей вентиляции</p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-12">
            <Card className="overflow-hidden shadow-2xl border-0 hover:shadow-3xl transition-shadow duration-300 rounded-3xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/e4bfb201-8071-4f36-aa0d-9045b1aeb56f.jpg" 
                    alt="Чистка вентиляции"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-10 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-white">
                  <Badge className="mb-4 w-fit px-4 py-1 bg-blue-600 text-white border-0">Популярно</Badge>
                  <h3 className="text-4xl font-bold mb-4 text-blue-900">Чистка вентиляции</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Профессиональная очистка вентиляционных систем от пыли, грязи и микроорганизмов
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Icon name="Check" size={18} className="text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Удаление всех загрязнений</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Icon name="Check" size={18} className="text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Дезинфекция системы</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Icon name="Check" size={18} className="text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Проверка работоспособности</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Icon name="Check" size={18} className="text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Гарантия качества</span>
                    </li>
                  </ul>
                  <div className="flex items-baseline gap-3">
                    <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">от 4 000 ₽</p>
                    <span className="text-gray-500 line-through text-xl">5 000 ₽</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden shadow-2xl border-0 hover:shadow-3xl transition-shadow duration-300 rounded-3xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto md:order-2 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/ceb28e7e-dfb2-4721-9e1c-2e46fb95e03f.jpg" 
                    alt="Монтаж вентиляции"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-10 flex flex-col justify-center md:order-1 bg-gradient-to-br from-green-50 to-white">
                  <Badge className="mb-4 w-fit px-4 py-1 bg-green-600 text-white border-0">Под ключ</Badge>
                  <h3 className="text-4xl font-bold mb-4 text-green-900">Монтаж вентиляции</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Установка современных вентиляционных систем любой сложности
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                        <Icon name="Check" size={18} className="text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Проектирование системы</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                        <Icon name="Check" size={18} className="text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Качественный монтаж</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                        <Icon name="Check" size={18} className="text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Настройка и тестирование</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                        <Icon name="Check" size={18} className="text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Документация</span>
                    </li>
                  </ul>
                  <div className="flex items-baseline gap-3">
                    <p className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">от 15 000 ₽</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden shadow-2xl border-0 hover:shadow-3xl transition-shadow duration-300 rounded-3xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/14d3e2ef-7b28-427f-b0c0-c30aef1c68ee.jpg" 
                    alt="Диагностика вентиляции"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-10 flex flex-col justify-center bg-gradient-to-br from-orange-50 to-white">
                  <Badge className="mb-4 w-fit px-4 py-1 bg-orange-600 text-white border-0">Диагностика</Badge>
                  <h3 className="text-4xl font-bold mb-4 text-orange-900">Диагностика системы</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Полная проверка работоспособности вентиляционной системы
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="bg-orange-100 p-1 rounded-full mt-0.5">
                        <Icon name="Check" size={18} className="text-orange-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Измерение производительности</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-orange-100 p-1 rounded-full mt-0.5">
                        <Icon name="Check" size={18} className="text-orange-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Выявление неисправностей</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-orange-100 p-1 rounded-full mt-0.5">
                        <Icon name="Check" size={18} className="text-orange-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Рекомендации по улучшению</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-orange-100 p-1 rounded-full mt-0.5">
                        <Icon name="Check" size={18} className="text-orange-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Детальный отчет</span>
                    </li>
                  </ul>
                  <div className="flex items-baseline gap-3">
                    <p className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">от 2 500 ₽</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Наши преимущества</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-8 border-0 bg-white/10 backdrop-blur-md shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 rounded-2xl">
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon name={benefit.icon} size={40} className="text-white" />
                </div>
                <p className="text-lg font-semibold leading-relaxed">{benefit.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Частые вопросы
            </h2>
            <p className="text-xl text-gray-600">Ответы на популярные вопросы наших клиентов</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-0 bg-white shadow-lg rounded-2xl px-6 overflow-hidden">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6 text-blue-900">
                  Как часто нужно чистить вентиляцию?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
                  Рекомендуется проводить профессиональную чистку вентиляции не реже одного раза в год. 
                  Для помещений с повышенной загрязненностью (кухни, производства) - каждые 6 месяцев.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-0 bg-white shadow-lg rounded-2xl px-6 overflow-hidden">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6 text-blue-900">
                  Сколько времени занимает чистка?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
                  В среднем чистка вентиляционной системы занимает от 2 до 4 часов, в зависимости от 
                  размера системы и степени загрязнения. Мы работаем быстро и качественно.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-0 bg-white shadow-lg rounded-2xl px-6 overflow-hidden">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6 text-blue-900">
                  Какие гарантии вы даете?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
                  Мы предоставляем гарантию 6 месяцев на все виды работ. Если в течение гарантийного 
                  срока возникнут проблемы по нашей вине - устраним их бесплатно.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-0 bg-white shadow-lg rounded-2xl px-6 overflow-hidden">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6 text-blue-900">
                  Работаете ли вы в выходные?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6 leading-relaxed">
                  Да, мы работаем без выходных. Можем приехать в удобное для вас время, 
                  включая вечерние часы и выходные дни. Звоните, и мы подберем оптимальное время.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-600 via-blue-500 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы заказать услугу?</h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Позвоните нам прямо сейчас или оставьте заявку, и мы свяжемся с вами в ближайшее время
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="tel:88122009519">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-7 text-xl font-bold shadow-2xl rounded-2xl hover:scale-105 transition-transform">
                <Icon name="Phone" size={24} className="mr-3" />
                8 (812) 200-95-19
              </Button>
            </a>
            <a href="https://t.me/ventservisspb" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md text-white border-2 border-white hover:bg-white/20 px-10 py-7 text-xl font-bold shadow-2xl rounded-2xl hover:scale-105 transition-transform">
                <Icon name="Send" size={24} className="mr-3" />
                Написать в Telegram
              </Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Wind" size={28} />
                <h3 className="text-2xl font-bold">Вент-Сервис</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Профессиональная чистка и обслуживание вентиляционных систем в Санкт-Петербурге
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-400">
                <a href="tel:88122009519" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="Phone" size={18} />
                  <span>8 (812) 200-95-19</span>
                </a>
                <a href="https://t.me/ventservisspb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="Send" size={18} />
                  <span>Telegram</span>
                </a>
                <a href="https://vk.com/ventservisspb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="Users" size={18} />
                  <span>ВКонтакте</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
              <p className="text-gray-400 leading-relaxed">
                Ежедневно, включая выходные<br/>
                с 9:00 до 21:00
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Вент-Сервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
