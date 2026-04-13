import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { FadeUp, TG_ICON } from '@/components/shared/animations';
import { useEffect, useRef } from 'react';

function Bitrix24Form() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement('script');
    script.setAttribute('data-b24-form', 'inline/2/yzdx1t');
    script.setAttribute('data-skip-moving', 'true');
    script.textContent = `
      (function(w,d,u){
        var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
        var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
      })(window,document,'https://cdn-ru.bitrix24.ru/b37049530/crm/form/loader_2.js');
    `;
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="max-w-xl mx-auto" />;
}

export default function ContactSection() {
  return (
    <>
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeUp>
            <div className="max-w-2xl mx-auto text-center mb-6">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Оставьте заявку</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">Свяжитесь с нами</h2>
              <p className="text-gray-500 text-lg">Бесплатная консультация и диагностика. Приедем в день обращения.</p>
            </div>
          </FadeUp>
          <FadeUp>
            <div className="max-w-xl mx-auto mb-8">
              <div className="discount-pulse relative bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-2xl p-5 text-center text-white shadow-xl shadow-red-200/40 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15),transparent_60%)]" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Icon name="Percent" size={22} />
                    <span className="text-2xl md:text-3xl font-black tracking-tight">СКИДКА 50%</span>
                  </div>
                  <p className="text-sm md:text-base font-medium opacity-95">только при заявке через сайт!</p>
                </div>
              </div>
            </div>
          </FadeUp>
          <FadeUp>
            <Bitrix24Form />
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
          <div className="border-t border-gray-800 pt-6 text-sm text-center space-y-1">
            <p>© 2026 Вент-Сервис. Все права защищены.</p>
            <p className="text-gray-600">ИП Иваньков Даниил Владимирович · ИНН 781448801799 · ОГРНИП 325784700152417</p>
            <p>
              <a href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors underline underline-offset-2">
                Политика конфиденциальности
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}