import { FadeUp } from '@/components/shared/animations';
import { useState, useEffect } from 'react';

const staticReviews = [
  {
    id: 0,
    name: 'Андрей Смирнов',
    role: 'Владелец квартиры, Санкт-Петербург',
    text: 'Давно не чистили вентиляцию, запах в квартире стоял неприятный. После чистки разница ощутима сразу — воздух свежий, тяга отличная. Мастер приехал вовремя, всё аккуратно, мусора после себя не оставил.',
    rating: 5,
    created_at: '2026-02-01',
  },
  {
    id: 0,
    name: 'Марина Козлова',
    role: 'Управляющая ТСЖ',
    text: 'Заказывали чистку вентшахт в многоквартирном доме. Объём большой, справились за один день. Предоставили акт выполненных работ с фотоотчётом. Жильцы довольны, перестали жаловаться на духоту.',
    rating: 5,
    created_at: '2026-01-15',
  },
  {
    id: 0,
    name: 'Дмитрий Фролов',
    role: 'Собственник кафе',
    text: 'Вентиляция на кухне забилась жиром, начали приходить предписания от пожарных. Ребята почистили быстро и качественно, дали гарантию. Теперь заключили договор на обслуживание раз в полгода.',
    rating: 5,
    created_at: '2026-03-01',
  },
  {
    id: 0,
    name: 'Елена Васильева',
    role: 'Жительница новостройки',
    text: 'Думала, что в новом доме всё в порядке, но тяги почти не было. Мастер объяснил, что каналы засорились ещё при стройке. После чистки вентиляция заработала как надо. Цена разумная, всё честно.',
    rating: 5,
    created_at: '2025-12-20',
  },
  {
    id: 0,
    name: 'Игорь Новиков',
    role: 'Владелец офиса',
    text: 'Сотрудники жаловались на духоту и головные боли. Вызвали диагностику — вентиляция не работала нормально несколько лет. Прочистили всю систему, сделали замеры тяги. Теперь в офисе дышится легко.',
    rating: 5,
    created_at: '2026-01-10',
  },
  {
    id: 0,
    name: 'Ольга Петрова',
    role: 'Частный дом, Ленобласть',
    text: 'Обратилась по рекомендации соседей. Приехали в тот же день, сделали всё аккуратно. Показали фото до и после — разница огромная. Буду рекомендовать всем знакомым.',
    rating: 5,
    created_at: '2026-02-14',
  },
];

interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  created_at: string;
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-base">★</span>
      ))}
    </div>
  );
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' });
}

function getInitials(name: string) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4 h-full">
      <div className="flex items-center justify-between">
        <Stars count={review.rating} />
        <span className="text-xs text-gray-400">{formatDate(review.created_at)}</span>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed flex-1">«{review.text}»</p>
      <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
          {getInitials(review.name)}
        </div>
        <div>
          <div className="font-semibold text-sm text-gray-900">{review.name}</div>
          <div className="text-xs text-gray-400">{review.role}</div>
        </div>
      </div>
    </div>
  );
}

function ReviewForm({ onSuccess }: { onSuccess: (r: Review) => void }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) { setError('Заполните имя и текст отзыва'); return; }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('https://functions.poehali.dev/70c4762b-f34f-4139-8c3d-cb39663f9ff7', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, role, text, rating }),
      });
      const data = await res.json();
      if (data.review) {
        onSuccess(data.review);
        setDone(true);
        setName(''); setRole(''); setText(''); setRating(5);
      }
    } catch {
      setError('Ошибка отправки. Попробуйте ещё раз.');
    }
    setLoading(false);
  };

  if (done) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-3">🎉</div>
        <p className="font-semibold text-gray-900 text-lg">Спасибо за отзыв!</p>
        <p className="text-gray-500 text-sm mt-1">Он уже виден на сайте</p>
        <button onClick={() => setDone(false)} className="mt-4 text-sm text-blue-600 hover:underline">Оставить ещё один</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя *</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Иван Петров"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Кто вы (необязательно)</label>
          <input
            value={role}
            onChange={e => setRole(e.target.value)}
            placeholder="Владелец квартиры"
            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Оценка</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map(s => (
            <button key={s} type="button" onClick={() => setRating(s)}
              className={`text-2xl transition-transform hover:scale-110 ${s <= rating ? 'text-yellow-400' : 'text-gray-200'}`}>
              ★
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Ваш отзыв *</label>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          rows={4}
          placeholder="Расскажите о вашем опыте работы с нами..."
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-colors"
      >
        {loading ? 'Отправляем...' : 'Опубликовать отзыв'}
      </button>
    </form>
  );
}

export default function ReviewsSection() {
  const [dbReviews, setDbReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('https://functions.poehali.dev/70c4762b-f34f-4139-8c3d-cb39663f9ff7')
      .then(r => r.json())
      .then(data => { if (data.reviews) setDbReviews(data.reviews); })
      .catch(() => {});
  }, []);

  const allReviews = [...staticReviews, ...dbReviews];

  const handleNewReview = (r: Review) => {
    setDbReviews(prev => [r, ...prev]);
    setShowForm(false);
    setTimeout(() => setShowForm(false), 0);
  };

  return (
    <section id="reviews" className="py-20 bg-[#f7f8fa]">
      <div className="max-w-6xl mx-auto px-4">
        <FadeUp>
          <div className="text-center mb-12">
            <span className="inline-block bg-yellow-50 text-yellow-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Отзывы клиентов
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Нам доверяют</h2>
            <p className="text-gray-500 text-lg mb-6">Более 1000 довольных клиентов в Санкт-Петербурге и области</p>
            <button
              onClick={() => setShowForm(v => !v)}
              className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
            >
              {showForm ? 'Скрыть форму' : '✏️ Оставить отзыв'}
            </button>
          </div>
        </FadeUp>

        {showForm && (
          <FadeUp>
            <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm p-6 mb-12">
              <h3 className="font-bold text-lg text-gray-900 mb-5">Ваш отзыв</h3>
              <ReviewForm onSuccess={handleNewReview} />
            </div>
          </FadeUp>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allReviews.map((r, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <ReviewCard review={r} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}