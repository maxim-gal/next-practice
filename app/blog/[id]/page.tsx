import Link from 'next/link';

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1>Пост №{id}</h1>
      <p>Это содержимое поста с идентификатором {id}.</p>
      <Link href={`/blog/${id}/comments/5`}>Перейти к комментарию 5</Link>
    </div>
  );
}
