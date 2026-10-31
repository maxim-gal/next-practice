import type { ReactNode } from 'react';
import NavBar from './components/NavBar';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <NavBar />
        <main style={{ padding: '24px' }}>{children}</main>
      </body>
    </html>
  );
}
