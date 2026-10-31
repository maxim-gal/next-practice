import Counter from './Counter';

async function getInfo() {
  return {
    title: 'О проекте',
    description: 'Данные получены на сервере без useEffect.',
  };
}

export default async function AboutPage() {
  const info = await getInfo();
  return (
    <main style={{ padding: 24 }}>
      <h1>{info.title}</h1>
      <p>{info.description}</p>
      <Counter />
    </main>
  );
}
