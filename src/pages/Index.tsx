import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function useInView() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, isVisible };
}

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, isVisible } = useInView();
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

const VK_ICON = (
  <svg className="w-5 h-5" viewBox="0 0 48 48" fill="currentColor">
    <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm9.68 24.645c.667.66 1.373 1.282 1.996 1.988.277.314.542.637.76.998.31.517.028 1.085-.254 1.117l-3.332-.002c-.868.072-1.56-.274-2.157-.87-.495-.493-.954-.996-1.427-1.498-.2-.212-.406-.41-.648-.572-.455-.306-.852-.214-1.104.264-.257.485-.316 1.016-.345 1.55-.04.786-.306.992-1.098 1.03-1.693.077-3.3-.177-4.8-1.025-1.324-.75-2.35-1.798-3.24-2.987-1.734-2.317-3.06-4.89-4.24-7.548-.246-.556-.065-.855.555-.866.93-.015 1.86-.013 2.79-.002.378.01.63.233.788.58.558 1.22 1.23 2.37 2.05 3.44.21.274.424.55.713.745.33.223.583.153.74-.214.103-.24.15-.496.175-.753.08-.837.09-1.672-.017-2.506-.063-.49-.307-.807-.797-.898-.25-.046-.213-.134-.092-.27.193-.217.375-.352.737-.352h2.713c.428.085.522.277.58.707l.002 3.015c-.003.2.1.794.46.926.29.09.48-.13.653-.332.783-.908 1.342-1.96 1.84-3.052.22-.478.412-.97.595-1.466.136-.368.348-.545.754-.537l3.563.003c.105 0 .212.002.315.02.495.085.63.304.48.79-.24.78-.662 1.44-1.09 2.096-.456.7-.944 1.375-1.4 2.074-.42.64-.387.962.126 1.494z"/>
  </svg>
);

const TG_ICON = (
  <svg className="w-5 h-5" viewBox="0 0 48 48" fill="currentColor">
    <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm9.697 14.09l-3.394 16.012c-.254 1.13-1.015 1.41-2.054.88l-5.67-4.18-2.736 2.635c-.303.303-.557.557-1.14.557l.407-5.785 10.53-9.514c.457-.407-.1-.633-.71-.226l-13.01 8.194-5.606-1.753c-1.22-.383-1.244-1.22.254-1.804l21.928-8.453c1.015-.38 1.903.226 1.575 1.805z"/>
  </svg>
);

export default function Index() {
  const services = [
    {
      icon: 'Wind',
      title: 'Чистка вентиляции',
      desc: 'Удаляем пыль, грязь и микроорганизмы. Система работает как новая.',
      price: 'от 4 000 ₽',
      oldPrice: '5 000 ₽',
      tag: 'Популярно',
      tagColor: 'bg-blue-600',
      img: 'https://cdn.poehali.dev/files/e4bfb201-8071-4f36-aa0d-9045b1aeb56f.jpg',
    },
    {
      icon: 'Settings',
      title: 'Монтаж вентиляции',
      desc: 'Проектируем и устанавливаем системы любой сложности под ключ.',
      price: 'от 15 000 ₽',
      oldPrice: null,
      tag: 'Под ключ',
      tagColor: 'bg-emerald-600',
      img: 'https://cdn.poehali.dev/files/ceb28e7e-dfb2-4721-9e1c-2e46fb95e03f.jpg',
    },
    {
      icon: 'ScanSearch',
      title: 'Диагностика системы',
      desc: 'Полная проверка работоспособности. Детальный отчёт и рекомендации.',
      price: 'от 2 500 ₽',
      oldPrice: null,
      tag: 'Быстро',
      tagColor: 'bg-amber-500',
      img: 'https://cdn.poehali.dev/files/14d3e2ef-7b28-427f-b0c0-c30aef1c68ee.jpg',
    },
  ];

  const stats = [
    { value: '1000+', label: 'довольных клиентов' },
    { value: '2.5', label: 'года опыта' },
    { value: '6 мес', label: 'гарантия' },
    { value: '24/7', label: 'поддержка' },
  ];

  const benefits = [
    { icon: 'Shield', title: 'Гарантия 6 месяцев', desc: 'На все виды выполненных работ' },
    { icon: 'Zap', title: 'Выезд день в день', desc: 'Приедем в течение нескольких часов' },
    { icon: 'BadgeCheck', title: 'Сертифицированные мастера', desc: 'Официальные допуски и лицензии' },
    { icon: 'Banknote', title: 'Честные цены', desc: 'Без скрытых доплат и накруток' },
  ];

  const faqs = [
    { q: 'Как часто нужно чистить вентиляцию?', a: 'Рекомендуется раз в год. Для кухонь и производств — каждые 6 месяцев.' },
    { q: 'Сколько времени занимает чистка?', a: 'В среднем 2–4 часа, зависит от размера системы и степени загрязнения.' },
    { q: 'Какие гарантии вы даёте?', a: 'Гарантия 6 месяцев на все работы. Если проблема возникла по нашей вине — устраним бесплатно.' },
    { q: 'Работаете ли вы в выходные?', a: 'Да, без выходных, включая вечернее время. Позвоните — согласуем удобный час.' },
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-gray-900 font-sans">

      {/* HEADER */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm"
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl">
              <Icon name="Wind" size={22} className="text-white" />
            </div>
            <div>
              <span className="text-lg font-bold text-gray-900 tracking-tight">Вент-Сервис</span>
              <span className="hidden sm:block text-xs text-gray-400 leading-none">Чистка вентиляции · СПб</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a href="https://vk.com/ventservisspb" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-all" aria-label="ВКонтакте">
              {VK_ICON}
            </a>
            <a href="https://t.me/ventservisspb" target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-500 hover:text-sky-500 hover:bg-sky-50 transition-all" aria-label="Telegram">
              {TG_ICON}
            </a>
            <a href="tel:88122009351"
              className="ml-2 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all hover:scale-105 shadow-md shadow-blue-200">
              <Icon name="Phone" size={16} />
              <span className="hidden sm:inline">8 (812) 200-93-51</span>
              <span className="sm:hidden">Звонок</span>
            </a>
          </div>
        </div>
      </motion.header>

      {/* HERO */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50" />
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Работаем без выходных · Лучшая цена в СПб
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-5 tracking-tight"
              >
                Чистка и обслуживание<br/>
                <span className="text-blue-600">вентиляции</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-500 mb-8 leading-relaxed max-w-md"
              >
                Профессиональная чистка, монтаж и диагностика вентиляционных систем. Приедем в день обращения.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                <a href="tel:88122009351">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base font-bold rounded-2xl shadow-lg shadow-blue-200 hover:scale-105 transition-all">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Позвонить
                  </Button>
                </a>
                <a href="https://t.me/ventservisspb" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-2 border-gray-200 hover:border-gray-300 bg-white text-gray-700 px-8 py-6 text-base font-bold rounded-2xl hover:scale-105 transition-all">
                    {TG_ICON}
                    <span className="ml-2">Написать</span>
                  </Button>
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-100/50 aspect-[4/3]">
                <img
                  src="https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/ca308976-8970-47ce-9397-90ed7ee29358.jpg"
                  alt="Чистка вентиляции"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 border border-gray-100">
                <div className="bg-green-100 p-2 rounded-xl">
                  <Icon name="CheckCircle" size={22} className="text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Гарантия 6 месяцев</div>
                  <div className="text-xs text-gray-400">На все виды работ</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="max-w-3xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((s) => (
              <div key={s.value} className="bg-white rounded-2xl px-5 py-4 text-center border border-gray-100 shadow-sm">
                <div className="text-2xl font-extrabold text-blue-600">{s.value}</div>
                <div className="text-sm text-gray-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Что мы делаем</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Наши услуги</h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.1}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className={`absolute top-4 left-4 ${s.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {s.tag}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-blue-50 p-2 rounded-xl">
                        <Icon name={s.icon} size={20} className="text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>
                    <div className="flex items-baseline gap-2 pt-3 border-t border-gray-100">
                      <span className="text-2xl font-extrabold text-gray-900">{s.price}</span>
                      {s.oldPrice && <span className="text-sm text-gray-400 line-through">{s.oldPrice}</span>}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Почему выбирают нас</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Наши преимущества</h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <FadeUp key={b.title} delay={i * 0.08}>
                <div className="bg-[#f7f8fa] rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
                  <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={b.icon} size={22} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-sm text-gray-500">{b.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeUp className="text-center mb-14">
            <p className="text-blue-200 font-semibold text-sm uppercase tracking-widest mb-3">Просто и быстро</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Как мы работаем</h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '01', icon: 'Phone', title: 'Звонок', desc: 'Позвоните или напишите нам в мессенджер' },
              { step: '02', icon: 'CalendarCheck', title: 'Согласование', desc: 'Выбираем удобное для вас время' },
              { step: '03', icon: 'Wrench', title: 'Работа', desc: 'Мастер приезжает и выполняет работу' },
              { step: '04', icon: 'Star', title: 'Результат', desc: 'Принимаете работу, оплачиваете' },
            ].map((item, i) => (
              <FadeUp key={item.step} delay={i * 0.1}>
                <div className="relative">
                  <div className="text-6xl font-black text-white/10 leading-none mb-2">{item.step}</div>
                  <div className="bg-white/15 backdrop-blur rounded-2xl p-5 border border-white/20">
                    <div className="bg-white/20 w-11 h-11 rounded-xl flex items-center justify-center mb-3">
                      <Icon name={item.icon} size={20} className="text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-blue-100">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Наши работы</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Примеры объектов</h2>
          </FadeUp>
          <FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                'https://cdn.poehali.dev/files/e4bfb201-8071-4f36-aa0d-9045b1aeb56f.jpg',
                'https://cdn.poehali.dev/files/ceb28e7e-dfb2-4721-9e1c-2e46fb95e03f.jpg',
                'https://cdn.poehali.dev/files/14d3e2ef-7b28-427f-b0c0-c30aef1c68ee.jpg',
                'https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/ca308976-8970-47ce-9397-90ed7ee29358.jpg',
                'https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/0d39a509-4987-4be5-b8ee-a1947567b3cd.jpg',
                'https://cdn.poehali.dev/files/e4bfb201-8071-4f36-aa0d-9045b1aeb56f.jpg',
              ].map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden aspect-square group shadow-sm hover:shadow-xl transition-all duration-300">
                  <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#f7f8fa]">
        <div className="container mx-auto px-4">
          <FadeUp className="text-center mb-14">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Вопрос — ответ</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Частые вопросы</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="bg-white rounded-2xl border border-gray-100 px-6 shadow-sm">
                    <AccordionTrigger className="text-base font-semibold hover:no-underline py-5 text-gray-900 text-left">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-500 pb-5 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <FadeUp>
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 text-white text-center shadow-2xl shadow-blue-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15),transparent_60%)]" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Готовы навести порядок?</h2>
                <p className="text-blue-100 text-lg mb-8">Позвоните или напишите — приедем в день обращения</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="tel:88122009351">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-base font-bold rounded-2xl shadow-lg hover:scale-105 transition-all">
                      <Icon name="Phone" size={20} className="mr-2" />
                      8 (812) 200-93-51
                    </Button>
                  </a>
                  <a href="https://t.me/ventservisspb" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 px-8 py-6 text-base font-bold rounded-2xl hover:scale-105 transition-all">
                      {TG_ICON}
                      <span className="ml-2">Telegram</span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeUp>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-600 p-2 rounded-xl">
                  <Icon name="Wind" size={18} className="text-white" />
                </div>
                <span className="text-white font-bold text-lg">Вент-Сервис</span>
              </div>
              <p className="text-sm leading-relaxed">Профессиональная чистка и обслуживание вентиляционных систем в Санкт-Петербурге.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Контакты</h4>
              <div className="space-y-2 text-sm">
                <a href="tel:88122009351" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="Phone" size={15} /> 8 (812) 200-93-51
                </a>
                <a href="https://t.me/ventservisspb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="Send" size={15} /> Telegram
                </a>
                <a href="https://vk.com/ventservisspb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="Users" size={15} /> ВКонтакте
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Режим работы</h4>
              <p className="text-sm leading-relaxed">Ежедневно, включая выходные<br />с 9:00 до 21:00</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-sm text-center">
            © 2026 Вент-Сервис. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
