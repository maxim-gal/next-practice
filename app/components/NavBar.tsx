'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { CSSProperties } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const linkStyle = (href: string): CSSProperties => ({
    marginRight: '16px',
    fontWeight: isActive(href) ? 'bold' : 'normal',
    textDecoration: isActive(href) ? 'underline' : 'none',
  });

  return (
    <nav style={{ padding: '16px', borderBottom: '1px solid #ccc' }}>
      <Link href="/" style={linkStyle('/')}>Главная</Link>
      <Link href="/about" style={linkStyle('/about')}>О нас</Link>
      <Link href="/blog" style={linkStyle('/blog')}>Блог</Link>
      <Link href="/courses" style={linkStyle('/courses')}>Курсы</Link>
      <Link href="/feedback" style={linkStyle('/feedback')}>Обратная связь</Link>
      <button onClick={() => router.push('/about')} style={{ marginLeft: '16px' }}>
        Перейти к «О нас»
      </button>
    </nav>
  );
}
