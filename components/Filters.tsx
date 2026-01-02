'use client';

export default function Filters({
  search,
  onSearch,
}: {
  search: string;
  onSearch: (v: string) => void;
}) {
  return (
    <input
      value={search}
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search cat breeds 🐱"
      className="w-full sm:w-auto border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"

    />
  );
}

