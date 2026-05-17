
import { Playfair_Display, Inter } from 'next/font/google';
import { FaTelegram, FaInstagram, FaYoutube, FaTiktok, FaFacebook } from 'react-icons/fa6';
import Link from 'next/link';

const playfair = Playfair_Display({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-inter',
});

export default function Home() {
  return (
    <div className={`${inter.variable} ${playfair.variable} min-h-screen bg-psy-bg text-psy-textMain font-sans flex flex-col items-center w-full overflow-x-hidden`}>
      
      {/* ОСНОВНОЙ КОНТЕНТ */}
      <main className="w-full max-w-7xl mx-auto px-6 md:px-[8%] pt-20 pb-24 flex flex-col">
        
        {/* Секция 1: Главный экран */}
        <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-start py-12">
          <div className="max-w-3xl w-full text-left">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-6">
              Трёхмерная терапия:{' '}
              <span className="font-normal italic text-psy-accent">Три ключа к вашей свободе: подсознание, тело и родовые сценарии.</span>
            </h1>
            
            <h2 className="font-sans text-xl sm:text-2xl md:text-3xl text-psy-textMuted font-medium mb-6">
  Нет проблем — есть задачи. Все ключи к решению уже есть внутри вас. Нужно только их увидеть.
</h2>

<p className="text-psy-textMuted text-base md:text-lg leading-relaxed mb-8 max-w-xl">
  Время изменилось. И те методы, которые работали еще несколько лет назад, уже не совсем актуальны сегодня. Можно годами сидеть на уютном диване в кабинете психолога. И можно найти решение своего запроса за одну сессию. Каждый выбирает для себя… 

</p>
<p className="text-psy-textMuted text-base md:text-lg leading-relaxed mb-8 max-w-xl">
Помогаю найти их первопричину в прошлых воплощениях (регресс), распутать родовые сценарии (МАК-расстановки) и навсегда отпустить их через тело (телесная терапия). Это безопасные методы, которые проходят под чутким контролем. За один цикл сессий вы получите результат, на который в обычной терапии уходят годы.
  
</p>
            
     <a
  href="https://t.me/LoraDei"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block text-center bg-psy-accent text-psy-bg w-full sm:w-auto px-9 py-4 rounded-full font-medium text-base hover:bg-opacity-90 transform hover:-translate-y-0.5 transition-all duration-200"
>
  Записаться на сессию
</a>
          </div>
        </section>

        {/* Секция 2: Направления работы */}
        <section className="py-20 border-t border-psy-textMuted/10 w-full">
          <h2 className="font-serif text-3xl md:text-4xl mb-10 text-left">
            Направления работы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="bg-psy-card p-8 rounded-2xl border border-psy-textMuted/5 flex flex-col justify-between min-h-[250px]">
              <div>
                <h3 className="font-serif text-xl mb-4 text-psy-textMain">Индивидуальная консультация</h3>
                <p className="text-psy-textMuted text-sm leading-relaxed">Глубокая проработка внутренних запросов в комфортном для вас темпе.</p>
              </div>
            </div>

            <div className="bg-psy-card p-8 rounded-2xl border border-psy-textMuted/5 flex flex-col justify-between min-h-[250px]">
              <div>
                <h3 className="font-serif text-xl mb-4 text-psy-textMain">Семейная терапия</h3>
                <p className="text-psy-textMuted text-sm leading-relaxed">Поиск взаимопонимания, преодоление кризисов и бережное выстраивание границ.</p>
              </div>
            </div>

            <div className="bg-psy-card p-8 rounded-2xl border border-psy-textMuted/5 flex flex-col justify-between min-h-[250px]">
              <div>
                <h3 className="font-serif text-xl mb-4 text-psy-textMain">Работа с выгоранием</h3>
                <p className="text-psy-textMuted text-sm leading-relaxed">Восстановление внутренних ресурсов, поиск баланса между работой и личной жизнью.</p>
              </div>
            </div>
          </div>
        </section>
        
      </main>

    </div>
  );
}