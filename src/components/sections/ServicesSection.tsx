import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { FadeUp } from '@/components/shared/animations';

const services = [
  {
    icon: 'Wind',
    title: 'Чистка вентиляции',
    desc: 'Удаляем пыль, грязь и микроорганизмы. Система работает как новая.',
    price: 'от 3 500 ₽',
    oldPrice: '5 000 ₽',
    tag: 'Популярно',
    tagColor: 'bg-blue-600',
    img: 'https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/68b4f409-6a25-49c3-a312-44814b57a052.jpg',
  },
  {
    icon: 'Settings',
    title: 'Монтаж вентиляции',
    desc: 'Проектируем и устанавливаем системы любой сложности под ключ.',
    price: 'от 12 000 ₽',
    oldPrice: null,
    tag: 'Под ключ',
    tagColor: 'bg-emerald-600',
    img: 'https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/70d1078b-a946-4575-a434-4109c63f0416.jpg',
  },
  {
    icon: 'ScanSearch',
    title: 'Диагностика системы',
    desc: 'Полная проверка работоспособности. Детальный отчёт и рекомендации.',
    price: 'Бесплатно',
    oldPrice: '2 500 ₽',
    tag: 'Бесплатно',
    tagColor: 'bg-green-500',
    img: 'https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/a6a198a4-4c90-4ec1-b635-3f9f6d4e3871.jpg',
  },
];

const benefits = [
  { icon: 'Shield', title: 'Гарантия 6 месяцев', desc: 'На все виды выполненных работ' },
  { icon: 'Zap', title: 'Выезд день в день', desc: 'Приедем в течение нескольких часов' },
  { icon: 'BadgeCheck', title: 'Сертифицированные мастера', desc: 'Официальные допуски и лицензии' },
  { icon: 'Banknote', title: 'Честные цены', desc: 'Без скрытых доплат и накруток' },
];

const processSteps = [
  { step: '01', icon: 'Phone', title: 'Звонок', desc: 'Позвоните или напишите нам в мессенджер' },
  { step: '02', icon: 'CalendarCheck', title: 'Согласование', desc: 'Выбираем удобное для вас время' },
  { step: '03', icon: 'Wrench', title: 'Работа', desc: 'Мастер приезжает и выполняет работу' },
  { step: '04', icon: 'Star', title: 'Результат', desc: 'Принимаете работу, оплачиваете' },
];

const galleryPhotos = [
  'https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/68b4f409-6a25-49c3-a312-44814b57a052.jpg',
  'https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/70d1078b-a946-4575-a434-4109c63f0416.jpg',
  'https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/a6a198a4-4c90-4ec1-b635-3f9f6d4e3871.jpg',
  'https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/5f3321e7-ddf7-4a03-8ccf-7dea09e0978d.jpg',
  'https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/402f65f5-e404-441b-9556-2cd1a5f2e48b.jpg',
  'https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/fea2f13f-400d-4a2c-a9c1-cb410b52f71e.jpg',
];

const faqs = [
  { q: 'Как часто нужно чистить вентиляцию?', a: 'Рекомендуется раз в год. Для кухонь и производств — каждые 6 месяцев.' },
  { q: 'Сколько времени занимает чистка?', a: 'В среднем 2–4 часа, зависит от размера системы и степени загрязнения.' },
  { q: 'Какие гарантии вы даёте?', a: 'Гарантия 6 месяцев на все работы. Если проблема возникла по нашей вине — устраним бесплатно.' },
  { q: 'Работаете ли вы в выходные?', a: 'Да, без выходных, включая вечернее время. Позвоните — согласуем удобный час.' },
];

export default function ServicesSection() {
  return (
    <>
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
            {processSteps.map((item, i) => (
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
              {galleryPhotos.map((src, i) => (
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
    </>
  );
}
