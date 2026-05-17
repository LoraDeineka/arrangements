import { FaArrowRight, FaCircleCheck, FaWind } from 'react-icons/fa6';

export default function BodyTherapyPage() {
  return (
    /* Базовый контейнер с фоном */
    <div className="w-full min-h-screen bg-psy-bg text-psy-textMain flex flex-col items-center overflow-x-hidden">
      
      {/* Внутренний контент */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-[8%] pt-32 pb-24 flex flex-col">
        
        {/* Категория / Хлебные крошки */}
        <span className="text-psy-accent text-xs md:text-sm font-medium tracking-wider uppercase mb-3 flex items-center gap-2">
          <FaWind className="w-3 h-3" />
          Телесно-ориентированная терапия
        </span>

        {/* Заголовок */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-4 max-w-4xl">
          Телесная терапия:{' '}
          <span className="font-normal italic text-psy-accent">Освободите тело от груза эмоций</span>
        </h1>

        {/* Подзаголовок */}
        <h2 className="font-sans text-lg sm:text-xl md:text-2xl text-psy-textMain/90 font-medium mb-12 max-w-3xl leading-relaxed">
          Верните себе контакт с телом, избавьтесь от мышечных зажимов и хронической усталости.
        </h2>

        {/* Блок: Как это работает */}
        <section className="bg-psy-card p-8 md:p-10 rounded-3xl border border-psy-textMuted/5 mb-16 max-w-4xl">
          <h3 className="font-serif text-2xl md:text-3xl mb-4">Как это работает?</h3>
          <p className="text-psy-textMuted text-base md:text-lg leading-relaxed">
            Тело помнит всё: невыплаканные слезы, подавленный гнев, стрессы и обиды «живут» в нас в 
            виде мышечных зажимов и блоков. На сессии через специальные дыхательные, двигательные 
            и мануальные техники мы бережно высвобождаем заблокированные эмоции. Это не просто 
            упражнения — это глубокая психотерапевтическая работа через тело, которая выводит 
            застрявший стресс из мышц, чтобы изменения зафиксировались на физическом уровне.
          </p>
        </section>

        {/* Сетка: Запросы и Результаты */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
          
          {/* С какими запросами приходят */}
          <section className="flex flex-col">
            <h3 className="font-serif text-2xl md:text-3xl mb-6">
              С какими запросами приходят:
            </h3>
            <ul className="space-y-4">
              {[
                'Синдром хронической усталости, выгорание, отсутствие энергии.',
                'Неумение расслабляться, постоянный контроль и тревожность.',
                'Непринятие своего тела, комплексы, потеря сексуальности.',
                'Панические атаки и подавленный гнев.',
                'Постоянное мышечное напряжение (плечи, шея, ком в горле).',
                'Психосоматика, боли без медицинской причины.'
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3 text-psy-textMuted text-base md:text-lg">
                  <FaArrowRight className="w-4 h-4 text-psy-accent mt-1.5 flex-shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Что вы получите в результате */}
          <section className="flex flex-col">
            <h3 className="font-serif text-2xl md:text-3xl mb-6">
              Что вы получите в результате:
            </h3>
            <ul className="space-y-6">
              {[
                { title: 'Свободу движений', desc: 'Тело станет легким, уйдут привычные зажимы и боли.' },
                { title: 'Прилив энергии', desc: 'Вы почувствуете ресурс, который раньше тратился на удержание напряжения.' },
                { title: 'Эмоциональную разгрузку', desc: 'Ощущение глубокого спокойствия, безопасности и легкости.' }
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

        {/* Кнопка действия */}
        <div className="mt-16 text-left">
			<a
  href="https://t.me/LoraDei"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block text-center bg-psy-accent text-psy-bg w-full sm:w-auto px-9 py-4 rounded-full font-medium text-base hover:bg-opacity-90 transform hover:-translate-y-0.5 transition-all duration-200"
>
  Записаться на телесную терапию
</a>
          
        </div>

      </div>
    </div>
  );
}