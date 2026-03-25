import { FadeUp } from '@/components/shared/animations';

const clients = [
  { name: 'Ресторан «Невский бриз»', category: 'Общепит', icon: '🍽️' },
  { name: 'Отель «Петроградъ»', category: 'Гостиница', icon: '🏨' },
  { name: 'ТЦ «Балтийский пассаж»', category: 'Торговый центр', icon: '🏬' },
  { name: 'Клиника «МедНорд»', category: 'Медицина', icon: '🏥' },
  { name: 'ЖК «Северная звезда»', category: 'ТСЖ', icon: '🏢' },
  { name: 'Пекарня «Булочная №1»', category: 'Производство', icon: '🥐' },
  { name: 'Фитнес-клуб «Форма»', category: 'Спорт', icon: '💪' },
  { name: 'Офисный центр «Адмирал»', category: 'Офисы', icon: '🏛️' },
];

export default function ClientsSection() {
  return (
    <section className="py-14 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <FadeUp>
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Нам доверяют организации Санкт-Петербурга
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {clients.map((client, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 bg-gray-50 rounded-2xl px-4 py-5 hover:bg-blue-50 transition-colors group"
              >
                <span className="text-3xl">{client.icon}</span>
                <span className="text-sm font-semibold text-gray-800 text-center leading-tight group-hover:text-blue-700 transition-colors">
                  {client.name}
                </span>
                <span className="text-xs text-gray-400">{client.category}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
