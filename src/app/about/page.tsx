import { FaArrowRight, FaHeart, FaGraduationCap, FaHandshake } from 'react-icons/fa6';

export default function AboutPage() {
  return (
    /* Базовый контейнер с фоном, как и на других страницах */
    <div className="w-full min-h-screen bg-psy-bg text-psy-textMain flex flex-col items-center overflow-x-hidden">
      
      {/* Внутренний контейнер для контента */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-[8%] pt-32 pb-24 flex flex-col">
        
        {/* Категория / Хлебные крошки */}
        <span className="text-psy-accent text-xs md:text-sm font-medium tracking-wider uppercase mb-3 flex items-center gap-2">
          <FaHeart className="w-3 h-3" />
          Знакомство с терапевтом
        </span>

        {/* Заголовок */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-4 max-w-4xl">
          Обо мне:{' '}
          <span className="font-normal italic text-psy-accent">путь к бережным изменениям</span>
        </h1>

         <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-4 max-w-4xl">
          Я продукт своего продукта{' '}
        </h1>

        {/* Подзаголовок */}
        <h2 className="font-sans text-lg sm:text-xl md:text-2xl text-psy-textMain/90 font-medium mb-12 max-w-3xl leading-relaxed">
          Помогаю бережно пройти через кризисы, трансформировать сценарии прошлого и восстановить внутреннюю опору.
        </h2>

        {/* Блок: Мой подход */}
        <section className="bg-psy-card p-8 md:p-10 rounded-3xl border border-psy-textMuted/5 mb-16 max-w-4xl">
          <h3 className="font-serif text-2xl md:text-3xl mb-4">Мой подход в работе</h3>
          <p className="text-psy-textMuted text-base md:text-lg leading-relaxed">
            Я верю, что каждый человек обладает достаточным ресурсом для исцеления и глубокого изменения, но иногда этот 
            ресурс оказывается заблокирован травмами, выгоранием или чужими ожиданиями. В своей практике 
            я не даю готовых шаблонов и универсальных советов. Каждый уникален по своему и подход будет индивидуальным. Я не обещаю вам мгновенных результатов. Ваша трансформация - ваша ответственность. 
             Моя цель — создать для вас абсолютно 
            безопасное, принимающее и конфиденциальное пространство, где мы сможем мягко обойти 
            психологические защиты, увидеть корни проблемы и найти истинные ответы, которые уже есть внутри вас.
          </p>
        </section>

        {/* Сетка: Образование и Ценности */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
          
          {/* С какими направлениями я работаю */}
          <section className="flex flex-col">
            <h3 className="font-serif text-2xl md:text-3xl mb-6 flex items-center gap-3">
              <FaGraduationCap className="w-6 h-6 text-psy-accent" />
              Инструменты практики:
            </h3>
            <ul className="space-y-4">
              {[
                'Метафорические ассоциативные карты (МАК-расстановки) для глубокого диалога с подсознанием.',
                'Регрессионная терапия для поиска и исцеления корневых причин повторяющихся жизненных сценариев.',
                'Телесно-ориентированные техники для бережного освобождения от зажимов, блоков и стресса.',
                'Интегративный подход, адаптированный под ваш индивидуальный запрос.'
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3 text-psy-textMuted text-base md:text-lg">
                  <FaArrowRight className="w-4 h-4 text-psy-accent mt-1.5 flex-shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Принципы моей работы */}
          <section className="flex flex-col">
            <h3 className="font-serif text-2xl md:text-3xl mb-6 flex items-center gap-3">
              <FaHandshake className="w-6 h-6 text-psy-accent" />
              Принципы, на которые я опираюсь:
            </h3>
            <ul className="space-y-4">
              {[
                'Полная конфиденциальность и безопасность ваших личных историй.',
                'Бережность и уважение к вашей скорости изменений — без давления и форсирования.',
                'Отсутствие критики и оценивания: в моем пространстве вы можете быть любым.',
                'Фокус на долгосрочный результат, зафиксированный на уровне ума, эмоций и тела.'
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3 text-psy-textMuted text-base md:text-lg">
                  <FaArrowRight className="w-4 h-4 text-psy-accent mt-1.5 flex-shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* Блок с призывом к действию */}
        <div className="mt-16 text-left">
			   <a
  href="https://t.me/LoraDei"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block text-center bg-psy-accent text-psy-bg w-full sm:w-auto px-9 py-4 rounded-full font-medium text-base hover:bg-opacity-90 transform hover:-translate-y-0.5 transition-all duration-200"
>
  Начать терапию
</a>
          
        </div>

      </div>
    </div>
  );
}