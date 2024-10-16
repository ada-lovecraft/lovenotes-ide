import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(() => import('@/components/MonacoEditor'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Monaco Editor Example</h1>
      <MonacoEditor />
    </div>
  );
}