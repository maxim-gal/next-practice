import Link from 'next/link';

export default function CoursesPage() {
  const courses = ['nextjs', 'react', 'typescript'];
  return (
    <div>
      <h1>Все курсы</h1>
      <ul>
        {courses.map((slug) => (
          <li key={slug} style={{ margin: '8px 0' }}>
            <Link href={`/courses/${slug}`}>Курс: {slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
