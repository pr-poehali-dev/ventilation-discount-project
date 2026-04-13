import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { TG_ICON, VK_ICON } from '@/components/shared/animations';
import { useState, useEffect } from 'react';

function useCountdown() {
  const getTimeLeft = () => {
    const now = new Date();
    const end = new Date(now);
    end.setHours(23, 59, 59, 999);
    const diff = Math.max(0, end.getTime() - now.getTime());
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    return { h, m, s };
  };
  const [time, setTime] = useState(getTimeLeft);
  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

export function DiscountTimer({ compact = false }: { compact?: boolean }) {
  const { h, m, s } = useCountdown();
  if (compact) {
    return (
      <span className="inline-flex items-center gap-1 font-mono text-sm font-bold">
        <Icon name="Clock" size={14} />
        {pad(h)}:{pad(m)}:{pad(s)}
      </span>
    );
  }
  return (
    <div className="flex items-center justify-center gap-2 mt-2">
      <Icon name="Clock" size={16} className="opacity-80" />
      <span className="text-xs opacity-80">До конца акции:</span>
      {[
        { v: pad(h), l: 'ч' },
        { v: pad(m), l: 'м' },
        { v: pad(s), l: 'с' },
      ].map((t) => (
        <span key={t.l} className="bg-white/20 backdrop-blur rounded-lg px-2 py-1 font-mono text-sm font-bold">
          {t.v}<span className="text-xs opacity-70 ml-0.5">{t.l}</span>
        </span>
      ))}
    </div>
  );
}

const stats = [
  { value: '1000+', label: 'довольных клиентов' },
  { value: '2.5', label: 'года опыта' },
  { value: '6 мес', label: 'гарантия' },
  { value: '24/7', label: 'поддержка' },
];

const navLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Результаты', href: '#results' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contact' },
];

export default function HeroSection() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-md'
            : 'bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm'
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img
              src="https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/bucket/bc519339-6d8d-4b89-b580-345f25af0069.jpg"
              alt="Вент-Сервис"
              className="h-10 w-auto object-contain"
            />
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <a href="https://vk.com/ventservisspb" target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-all" aria-label="ВКонтакте">
              {VK_ICON}
            </a>
            <a href="https://t.me/ventservisspb" target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex p-2 rounded-lg text-gray-500 hover:text-sky-500 hover:bg-sky-50 transition-all" aria-label="Telegram">
              {TG_ICON}
            </a>
            <a href="tel:88122009351"
              className="ml-1 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all hover:scale-105 shadow-md shadow-blue-200">
              <Icon name="Phone" size={16} />
              <span className="hidden sm:inline">8 (812) 200-93-51</span>
              <span className="sm:hidden">Звонок</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors ml-1"
              aria-label="Меню"
            >
              <Icon name={mobileOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100 px-4">
                  <a href="https://vk.com/ventservisspb" target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-all" aria-label="ВКонтакте">
                    {VK_ICON}
                  </a>
                  <a href="https://t.me/ventservisspb" target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-lg text-gray-500 hover:text-sky-500 hover:bg-sky-50 transition-all" aria-label="Telegram">
                    {TG_ICON}
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

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

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mb-6"
              >
                <a
                  href="#contact"
                  className="discount-pulse inline-flex flex-col items-center gap-1.5 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold px-6 py-3 rounded-2xl shadow-lg shadow-red-200/50 hover:shadow-red-300/60 hover:scale-105 transition-all cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Icon name="Percent" size={18} />
                    СКИДКА 50% при заявке с сайта
                    <Icon name="ArrowRight" size={16} />
                  </span>
                  <DiscountTimer compact />
                </a>
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
                <a href="#contact">
                  <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-6 text-base font-bold rounded-2xl shadow-lg shadow-red-200/50 hover:scale-105 transition-all">
                    <Icon name="Gift" size={20} className="mr-2" />
                    Заявка со скидкой 50%
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
              <div className="absolute -top-3 -right-3 discount-pulse bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-2xl shadow-xl px-4 py-2.5 text-center">
                <div className="text-xl font-black leading-none">-50%</div>
                <div className="text-[10px] font-semibold opacity-90 mt-0.5">с сайта</div>
              </div>
            </motion.div>
          </div>

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