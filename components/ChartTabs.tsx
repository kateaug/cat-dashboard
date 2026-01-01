'use client';

type ChartMode = 'countries' | 'breeds';

export default function ChartTabs({
  active,
  setActive,
}: {
  active: ChartMode;
  setActive: (v: ChartMode) => void;
}) {
  return (
    <div className="flex gap-3 mb-4">
      {(['countries', 'breeds'] as ChartMode[]).map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-4 py-2 rounded-lg ${
            active === tab
              ? 'bg-indigo-600 text-white'
              : 'border dark:border-gray-600'
          }`}
        >
          {tab === 'countries' ? 'By Country' : 'By Breed'}
        </button>
      ))}
    </div>
  );
}