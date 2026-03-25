import { FadeUp } from '@/components/shared/animations';

const reviews = [
  {
    name: 'Андрей Смирнов',
    role: 'Владелец квартиры, Санкт-Петербург',
    text: 'Давно не чистили вентиляцию, запах в квартире стоял неприятный. После чистки разница ощутима сразу — воздух свежий, тяга отличная. Мастер приехал вовремя, всё аккуратно, мусора после себя не оставил.',
    rating: 5,
    date: 'февраль 2026',
    avatar: 'АС',
  },
  {
    name: 'Марина Козлова',
    role: 'Управляющая ТСЖ',
    text: 'Заказывали чистку вентшахт в многоквартирном доме. Объём большой, справились за один день. Предоставили акт выполненных работ с фотоотчётом. Жильцы довольны, перестали жаловаться на духоту.',
    rating: 5,
    date: 'январь 2026',
    avatar: 'МК',
  },
  {
    name: 'Дмитрий Фролов',
    role: 'Собственник кафе',
    text: 'Вентиляция на кухне забилась жиром, начали приходить предписания от пожарных. Ребята почистили быстро и качественно, дали гарантию. Теперь заключили договор на обслуживание раз в полгода.',
    rating: 5,
    date: 'март 2026',
    avatar: 'ДФ',
  },
  {
    name: 'Елена Васильева',
    role: 'Жительница новостройки',
    text: 'Думала, что в новом доме всё в порядке, но тяги почти не было. Мастер объяснил, что каналы засорились ещё при стройке. После чистки вентиляция заработала как надо. Цена разумная, всё честно.',
    rating: 5,
    date: 'декабрь 2025',
    avatar: 'ЕВ',
  },
  {
    name: 'Игорь Новиков',
    role: 'Владелец офиса',
    text: 'Сотрудники жаловались на духоту и головные боли. Вызвали диагностику — вентиляция не работала нормально несколько лет. Прочистили всю систему, сделали замеры тяги. Теперь в офисе дышится легко.',
    rating: 5,
    date: 'январь 2026',
    avatar: 'ИН',
  },
  {
    name: 'Ольга Петрова',
    role: 'Частный дом, Ленобласть',
    text: 'Обратилась по рекомендации соседей. Приехали в тот же день, сделали всё аккуратно. Показали фото до и после — разница огромная. Буду рекомендовать всем знакомым.',
    rating: 5,
    date: 'февраль 2026',
    avatar: 'ОП',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-base">★</span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-[#f7f8fa]">
      <div className="max-w-6xl mx-auto px-4">
        <FadeUp>
          <div className="text-center mb-12">
            <span className="inline-block bg-yellow-50 text-yellow-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Отзывы клиентов
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Нам доверяют</h2>
            <p className="text-gray-500 text-lg">Более 1000 довольных клиентов в Санкт-Петербурге и области</p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <FadeUp key={i} delay={i * 0.07}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4 h-full">
                <div className="flex items-center justify-between">
                  <Stars count={r.rating} />
                  <span className="text-xs text-gray-400">{r.date}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">«{r.text}»</p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900">{r.name}</div>
                    <div className="text-xs text-gray-400">{r.role}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
