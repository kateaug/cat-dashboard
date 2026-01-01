import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center">
        <img
          src="https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg"
          className="mx-auto mb-6 rounded-3xl shadow-xl max-w-md"
        />
        <h1 className="text-5xl font-extrabold mb-4">Cat Metrics 🐾</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Explore cat breeds with charts, filters and joy.
        </p>
        <Link
          href="/metrics"
          className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg"
        >
          Explore Breeds →
        </Link>
      </div>
    </main>
  );
}