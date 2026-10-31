import type { ReactNode } from 'react';

export default function CoursesLayout({ children }: { children: ReactNode }) {
  return (
    <section style={{ background: '#f0f8ff', padding: '16px', marginTop: '16px' }}>
      <h2>Наши Курсы</h2>
      {children}
    </section>
  );
}
