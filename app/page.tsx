import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>Главная</h1>
      <ul>
        <li><Link href="/about">О проекте</Link></li>
        <li><Link href="/blog">Блог</Link></li>
        <li><Link href="/courses">Курсы</Link></li>
        <li><Link href="/feedback">Обратная связь</Link></li>
      </ul>
    </main>
  );
}
