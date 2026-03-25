import { useState, useRef, useCallback } from 'react';
import { FadeUp } from '@/components/shared/animations';

const pairs = [
  {
    before: 'https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/bucket/46771262-3719-46ae-a742-d9b9c17cd945.jpg',
    after: 'https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/32a7b3df-0120-449d-b343-cd31beb678bc.jpg',
    label: 'Вентиляционный канал',
  },
  {
    before: 'https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/bucket/69789c13-8385-436e-8a0c-ca344ef46a46.jpg',
    after: 'https://cdn.poehali.dev/projects/a06cc673-b8dc-4a0b-9953-38ff3ec5d1ff/files/32a7b3df-0120-449d-b343-cd31beb678bc.jpg',
    label: 'Шахта воздуховода',
  },
];

function Slider({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    updatePos(e.clientX);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragging.current) updatePos(e.clientX);
  };
  const onMouseUp = () => { dragging.current = false; };

  const onTouchMove = (e: React.TouchEvent) => {
    updatePos(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
    >
      <img src={after} alt="После" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt="До" className="absolute inset-0 h-full object-cover" style={{ width: containerRef.current?.offsetWidth ?? 600 }} draggable={false} />
      </div>

      <div className="absolute inset-y-0 flex items-center" style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}>
        <div className="w-0.5 h-full bg-white/80" />
        <div className="absolute w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center gap-0.5">
          <span className="text-gray-700 text-xs font-bold">◀▶</span>
        </div>
      </div>

      <div className="absolute top-3 left-3 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full pointer-events-none">ДО</div>
      <div className="absolute top-3 right-3 bg-blue-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full pointer-events-none">ПОСЛЕ</div>
    </div>
  );
}

export default function BeforeAfterSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <FadeUp>
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Результаты нашей работы
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">До и после чистки</h2>
            <p className="text-gray-500 text-lg">Перетащите разделитель, чтобы увидеть разницу</p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-8">
          {pairs.map((pair, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div>
                <Slider before={pair.before} after={pair.after} />
                <p className="mt-3 text-center text-sm text-gray-500 font-medium">{pair.label}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            {[
              { value: '1000+', label: 'объектов очищено' },
              { value: '100%', label: 'довольных клиентов' },
              { value: '2,5 года', label: 'на рынке · гарантия 1 год' },
            ].map((stat, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl py-6 px-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold px-8 py-4 rounded-2xl transition-colors shadow-lg shadow-blue-200"
            >
              Оставить заявку на чистку
            </a>
            <p className="mt-3 text-sm text-gray-400">Бесплатный выезд и оценка · Без предоплаты</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}