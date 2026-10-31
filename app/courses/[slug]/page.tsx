export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div>
      <h1>Курс: {slug}</h1>
      <p>Описание курса {slug}...</p>
    </div>
  );
}
