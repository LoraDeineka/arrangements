"use client";

import Link from 'next/link';

export default function NavLinks() {
  // Функция для снятия галочки с чекбокса при клике на ссылку
  const closeMenu = () => {
    const el = document.getElementById('menu-toggle') as HTMLInputElement;
    if (el) el.checked = false;
  };

  return (
    <nav className="
      absolute top-12 left-0 right-0 flex flex-col items-center gap-6 py-8 bg-psy-bg/95 backdrop-blur-lg border-b border-psy-textMuted/10 opacity-0 pointer-events-none transition-all duration-300
      peer-checked:opacity-100 peer-checked:pointer-events-auto
      md:static md:flex-row md:opacity-100 md:pointer-events-auto md:py-0 md:bg-transparent md:border-none md:space-x-9 md:space-y-0 md:gap-0
    ">
      <Link href="/about" onClick={closeMenu} className="text-sm text-psy-textMuted hover:text-psy-accent transition-colors w-full text-center md:w-auto">
        Обо мне
      </Link>
      <Link href="/constellations" onClick={closeMenu} className="text-sm text-psy-textMuted hover:text-psy-accent transition-colors w-full text-center md:w-auto">
        Расстановки
      </Link>
      <Link href="/regress" onClick={closeMenu} className="text-sm text-psy-textMuted hover:text-psy-accent transition-colors w-full text-center md:w-auto">
        Регресс
      </Link>
      <Link href="/somatic" onClick={closeMenu} className="text-sm text-psy-textMuted hover:text-psy-accent transition-colors w-full text-center md:w-auto">
        Телесная терапия
      </Link>
      <Link href="/contacts" onClick={closeMenu} className="text-sm text-psy-textMuted hover:text-psy-accent transition-colors w-full text-center md:w-auto">
        Контакты
      </Link>
    </nav>
  );
}