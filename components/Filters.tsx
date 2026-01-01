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
      className="border p-3 mb-4 dark:bg-gray-900"
    />
  );
}

