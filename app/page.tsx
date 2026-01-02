import Link from "next/link";

export default function HomePage() {
  return (
      <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
    
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-extrabold mb-4">Cat Metrics 🐾</h1>
        <p className="text-lg mb-8">Explore cat breeds with charts, filters and joy.</p>
        <Link
          href="/metrics"
          className="bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-xl text-lg transition"
        >
          Explore Breeds
        </Link>
      </div>
    </main>
  );
}