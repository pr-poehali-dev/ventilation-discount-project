import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { FadeUp, TG_ICON } from '@/components/shared/animations';
import { useState } from 'react';

const LEADS_URL = 'https://functions.poehali.dev/0b90581e-d9a0-45db-a521-29e887016b0a';

function LeadForm() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const services = ['Чистка вентиляции', 'Монтаж вентиляции', 'Диагностика (бесплатно)', 'Другое'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(LEADS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="max-w-md mx-auto text-center bg-green-50 border border-green-200 rounded-3xl p-12">
        <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <Icon name="CheckCircle" size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Заявка принята!</h3>
        <p className="text-gray-500">Перезвоним вам в течение 15 минут</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-sm text-blue-600 hover:underline">
          Отправить ещё одну
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-[#f7f8fa] rounded-3xl p-8 border border-gray-100 shadow-sm space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Ваше имя *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            placeholder="Иван Иванов"
            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Телефон *</label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
            placeholder="+7 (900) 000-00-00"
            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Услуга</label>
        <select
          value={form.service}
          onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
          className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        >
          <option value="">Выберите услугу</option>
          {services.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Комментарий</label>
        <textarea
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          placeholder="Опишите задачу или задайте вопрос..."
          rows={3}
          className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm">Что-то пошло не так. Позвоните нам: 8 (812) 200-93-51</p>
      )}

      <Button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-base font-bold rounded-2xl shadow-lg shadow-blue-200 hover:scale-[1.02] transition-all disabled:opacity-70"
      >
        {status === 'loading' ? (
          <span className="flex items-center gap-2 justify-center">
            <Icon name="Loader" size={18} className="animate-spin" /> Отправляем...
          </span>
        ) : (
          <span className="flex items-center gap-2 justify-center">
            <Icon name="Send" size={18} /> Отправить заявку
          </span>
        )}
      </Button>

      <p className="text-center text-xs text-gray-400">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p>
    </form>
  );
}

export default function ContactSection() {
  return (
    <>
      {/* CALL */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeUp>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Оставьте заявку</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">Позвоните нам</h2>
              <p className="text-gray-500 text-lg mb-10">Бесплатная консультация и диагностика. Приедем в день обращения.</p>
              <a href="tel:88122009351">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-7 text-2xl font-bold rounded-2xl shadow-lg shadow-blue-200 hover:scale-105 transition-all">
                  <Icon name="Phone" size={28} className="mr-3" />
                  8 (812) 200-93-51
                </Button>
              </a>
              <p className="text-gray-400 text-sm mt-6">Ежедневно с 10:00 до 21:00, без выходных</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <FadeUp>
        <section className="py-24 bg-[#f7f8fa]">
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
              <p className="text-sm leading-relaxed">Профессиональная чистка и обслуживание вентиляционных систем в Санкт-Петербурге и Ленинградской области.</p>
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
              <p className="text-sm leading-relaxed">Ежедневно, включая выходные<br />с 10:00 до 21:00</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-sm text-center">
            © 2026 Вент-Сервис. Все права защищены.
          </div>
        </div>
      </footer>
    </>
  );
}