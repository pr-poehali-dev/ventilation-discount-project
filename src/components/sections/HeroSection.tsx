import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { TG_ICON, VK_ICON } from '@/components/shared/animations';

const stats = [
  { value: '1000+', label: 'довольных клиентов' },
  { value: '2.5', label: 'года опыта' },
  { value: '6 мес', label: 'гарантия' },
  { value: '24/7', label: 'поддержка' },
];

export default function HeroSection() {
  return (
    <>
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
              <span className="hidden sm:block text-xs text-gray-400 leading-none">Чистка вентиляции · СПб и Лен. область</span>
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
                Работаем без выходных · СПб и Ленинградская область
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
                  src="https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/fea2f13f-400d-4a2c-a9c1-cb410b52f71e.jpg"
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
    </>
  );
}
