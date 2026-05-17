import { FaArrowRight, FaCircleCheck, FaEye } from 'react-icons/fa6';

export default function RegressPage() {
  return (
    /* Базовый контейнер с фоном, который подтягивает стили и центрирует контент */
    <div className="w-full min-h-screen bg-psy-bg text-psy-textMain flex flex-col items-center overflow-x-hidden">
      
      {/* Внутренний контейнер для контента */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-[8%] pt-32 pb-24 flex flex-col">
        
        {/* Категория / Хлебные крошки */}
        <span className="text-psy-accent text-xs md:text-sm font-medium tracking-wider uppercase mb-3 flex items-center gap-2">
          <FaEye className="w-3 h-3" />
          Регрессионная терапия (Регресс)
        </span>

        {/* Заголовок */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-4 max-w-4xl">
          Регрессионная терапия:{' '}
          <span className="font-normal italic text-psy-accent">Путешествие к истокам вашей души</span>
        </h1>

        {/* Подзаголовок */}
        <h2 className="font-sans text-lg sm:text-xl md:text-2xl text-psy-textMain/90 font-medium mb-12 max-w-3xl leading-relaxed">
          Поиск ответов на сложные жизненные вопросы через работу с глубинной памятью и прошлым опытом.
        </h2>

        {/* Блок: Как это работает */}
        <section className="bg-psy-card p-8 md:p-10 rounded-3xl border border-psy-textMuted/5 mb-16 max-w-4xl">
          <h3 className="font-serif text-2xl md:text-3xl mb-4">Как это работает?</h3>
          <p className="text-psy-textMuted text-base md:text-lg leading-relaxed">
            Метод регрессии позволяет погрузиться в легкое, абсолютно безопасное трансовое состояние 
            (вы всё контролируете и помните). Мы отправляемся вглубь вашей памяти: в детство, 
            внутриутробный период или прошлые воплощения — в первопричину вашей нынешней проблемы. 
            Осознав и перепрошив эту ситуацию, мы исцеляем настоящее.
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
                'Повторяющиеся жизненные сценарии (наступаете на одни и те же «грабли»).',
                'Иррациональные страхи и фобии, у которых нет причин в этой жизни (страх высоты, темноты, воды и т.д.).',
                'Кармические узлы в отношениях (тянет к человеку, но вместе быть невыносимо).',
                'Поиск своего предназначения и экзистенциальные кризисы.'
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
                { title: 'Глубинное понимание', desc: 'Вы поймете, для чего вам даны те или иные испытания, и закроете старые долги/контракты.' },
                { title: 'Исцеление травм', desc: 'Устранение корневой причины проблемы, а не её симптомов.' },
                { title: 'Трансформацию жизни', desc: 'Освобождение от старых программ, мешающих вашему развитию и счастью.' }
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
  Записаться на сессию регресса
</a>
          
        </div>

      </div>
    </div>
  );
}