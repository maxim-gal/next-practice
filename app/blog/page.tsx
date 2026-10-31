import Link from 'next/link';

interface Post {
  id: string;
  title: string;
}

export default function BlogPage() {
  const posts: Post[] = [
    { id: '1', title: 'Введение в Next.js' },
    { id: '2', title: 'Layouts и Templates на практике' },
    { id: '3', title: 'Server vs Client Components' },
  ];

  return (
    <div>
      <h1>Блог</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ margin: '8px 0' }}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
