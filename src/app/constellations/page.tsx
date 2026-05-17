import { FaArrowRight, FaCircleCheck } from 'react-icons/fa6';

export default function ConstellationsPage() {
  return (
    /* Добавили базовый контейнер с фоном и цветом текста на всю высоту экрана */
    <div className="w-full min-h-screen bg-psy-bg text-psy-textMain flex flex-col items-center overflow-x-hidden">
      
      {/* Внутренний контейнер для центрирования контента */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-[8%] pt-32 pb-24 flex flex-col">
        
        {/* Хлебные крошки / Категория */}
        <span className="text-psy-accent text-xs md:text-sm font-medium tracking-wider uppercase mb-3">
          Расстановки на МАК-картах (Метафорические ассоциативные карты)
        </span>

        {/* Заголовок */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-4 max-w-4xl">
          Расстановки на МАК-картах:{' '}
          <span className="font-normal italic text-psy-accent">работа с подсознанием</span>
        </h1>

        {/* Подзаголовок */}
        <h2 className="font-sans text-lg sm:text-xl md:text-2xl text-psy-textMain/90 font-medium mb-12 max-w-3xl leading-relaxed">
          Мягкий и глубокий метод работы с подсознанием через визуальные образы. Без долгих месяцев терапии.
        </h2>

        {/* Блок: Как это работает */}
        <section className="bg-psy-card p-8 md:p-10 rounded-3xl border border-psy-textMuted/5 mb-16 max-w-4xl">
          <h3 className="font-serif text-2xl md:text-3xl mb-4">Как это работает?</h3>
          <p className="text-psy-textMuted text-base md:text-lg leading-relaxed">
            Наш мозг часто блокирует болезненные воспоминания, но подсознание помнит всё. 
            Метафорические карты — это ключ к вашему подсознанию. С их помощью вы проецируете вашу 
            ситуацию (проблемы в отношениях, бизнесе, внутренние конфликты) на карты. Это позволяет 
            обойти психологические защиты, увидеть корень проблемы со стороны и эффективно решить любой запрос.
          </p>
        </section>

        {/* Сетка для запросов и результатов */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
          
          {/* Колонна: С какими запросами приходят */}
          <section className="flex flex-col">
            <h3 className="font-serif text-2xl md:text-3xl mb-6">
              С какими запросами приходят:
            </h3>
            <ul className="space-y-4">
              {[
                'Чувствую, что застрял на месте.',
                'Не знаю, куда двигаться дальше.',
                'Сложные отношения с партнером, родителями.',
                'Финансовые трудности или страх проявлять себя.',
                'Необходимость сделать сложный выбор.'
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3 text-psy-textMuted text-base md:text-lg">
                  <FaArrowRight className="w-4 h-4 text-psy-accent mt-1.5 flex-shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Колонна: Что вы получите в результате */}
          <section className="flex flex-col">
            <h3 className="font-serif text-2xl md:text-3xl mb-6">
              Что вы получите в результате:
            </h3>
            <ul className="space-y-5">
              {[
                { title: 'Ясность', desc: 'Вы четко увидите скрытые причины вашей проблемы и распутаете «клубок» мыслей.' },
                { title: 'Облегчение', desc: 'Уйдет тревога и неопределенность.' },
                { title: 'Пошаговый план', desc: 'Вы уйдете с сессии с конкретным пониманием, что делать дальше.' }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-psy-textMuted text-base md:text-lg">
                  <FaCircleCheck className="w-5 h-5 text-psy-accent mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-psy-textMain font-medium">{item.title}:</strong>{' '}
                    <span>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* Кнопка записи */}
        <div className="mt-16 text-left">
			    <a
  href="https://t.me/LoraDei"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block text-center bg-psy-accent text-psy-bg w-full sm:w-auto px-9 py-4 rounded-full font-medium text-base hover:bg-opacity-90 transform hover:-translate-y-0.5 transition-all duration-200"
>
  Записаться на сессию МАК
</a>
          
        </div>

      </div>
    </div>
  );
}