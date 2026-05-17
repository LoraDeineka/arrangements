import { FaArrowRight, FaEnvelope, FaLocationDot, FaPaperPlane } from 'react-icons/fa6';

export default function ContactsPage() {
  return (
    /* Базовый контейнер с фоном */
    <div className="w-full min-h-screen bg-psy-bg text-psy-textMain flex flex-col items-center overflow-x-hidden">
      
      {/* Внутренний контейнер для контента */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-[8%] pt-32 pb-24 flex flex-col">
        
        {/* Категория / Хлебные крошки */}
        <span className="text-psy-accent text-xs md:text-sm font-medium tracking-wider uppercase mb-3 flex items-center gap-2">
          <FaEnvelope className="w-3 h-3" />
          Связь со мной
        </span>

        {/* Заголовок */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-4 max-w-4xl">
          Контакты:{' '}
          <span className="font-normal italic text-psy-accent">сделайте первый шаг к себе</span>
        </h1>

        {/* Подзаголовок */}
        <h2 className="font-sans text-lg sm:text-xl md:text-2xl text-psy-textMain/90 font-medium mb-12 max-w-3xl leading-relaxed">
          Выберите удобный способ связи, чтобы задать вопрос или записаться на первую сессию.
        </h2>

        {/* Сетка: Способы связи и Информация о приеме */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
          
          {/* Колонна 1: Прямые каналы связи */}
          <section className="flex flex-col">
            <h3 className="font-serif text-2xl md:text-3xl mb-6 text-psy-textMain">
              Быстрая связь:
            </h3>
            
            <div className="space-y-6">
              <div className="bg-psy-card p-6 rounded-2xl border border-psy-textMuted/5 flex items-start gap-4">
                <FaPaperPlane className="w-6 h-6 text-psy-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-lg mb-1 text-psy-textMain">Telegram</h4>
                  <p className="text-psy-textMuted text-sm mb-3">Для быстрой записи и организационных вопросов.</p>
                  <a 
                    href="https://t.me/LoraDei" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-psy-accent hover:underline font-medium"
                  >
                    Написать в Telegram <FaArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="bg-psy-card p-6 rounded-2xl border border-psy-textMuted/5 flex items-start gap-4">
                <FaEnvelope className="w-6 h-6 text-psy-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-lg mb-1 text-psy-textMain">Электронная почта</h4>
                  <p className="text-psy-textMuted text-sm mb-3">Для развернутых писем и сотрудничества.</p>
                  <a 
                    href="mailto:loradeipsy@gmail.com" 
                    className="inline-flex items-center gap-2 text-sm text-psy-accent hover:underline font-medium"
                  >
                    loradeipsy@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Колонна 2: Формат работы */}
          <section className="flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl mb-6 text-psy-textMain">
                Формат встреч:
              </h3>
              
              <ul className="space-y-5 mb-8">
                <li className="flex items-start gap-3 text-psy-textMuted text-base md:text-lg">
                  <FaLocationDot className="w-5 h-5 text-psy-accent mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-psy-textMain font-medium">Онлайн-сессии:</strong>{' '}
                    <span>Проводятся по всему миру (Zoom, Skype, Google Meet). Всё, что нужно — стабильный интернет и уединенное пространство.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-psy-textMuted text-base md:text-lg">
                  <FaLocationDot className="w-5 h-5 text-psy-accent mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-psy-textMain font-medium">Очный прием:</strong> tap-target{' '}
                    <span>Возможны личные встречи в уютном кабинете (информация по запросу).</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Короткое примечание */}
            <div className="p-6 bg-psy-card/50 rounded-2xl border border-psy-textMuted/5 text-sm text-psy-textMuted leading-relaxed">
              💡 <span className="text-psy-textMain font-medium">Важно:</span> Если я не отвечаю на сообщение сразу, значит, у меня идет сессия. Я обязательно свяжусь с вами, как только освобожусь.
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}