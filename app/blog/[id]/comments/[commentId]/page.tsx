export default async function CommentPage({
  params,
}: {
  params: Promise<{ id: string; commentId: string }>;
}) {
  const { id, commentId } = await params;
  return (
    <div>
      <h1>Комментарий {commentId}</h1>
      <p>К посту №{id}</p>
    </div>
  );
}
