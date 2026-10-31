'use client';
import { useEffect } from 'react';

export default function BlogTemplate({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log('BlogTemplate смонтирован заново');
  }, []);
  return <div>{children}</div>;
}
