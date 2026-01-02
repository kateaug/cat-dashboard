'use client';

export function CountryFilter({
  countries,
  value,
  onChange,
}: {
  countries: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
     <div className="relative inline-block">
      {/* Select with hidden native arrow */}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none border rounded-lg p-2 pr-8 dark:bg-gray-900 dark:text-gray-100"
      >
        <option value="">All countries</option>
        {countries.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Custom arrow */}
      {!value ? (
           <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <svg
          className="h-4 w-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      ) : (
        <button
          onClick={() => onChange('')}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 px-1"
        >
          ×
        </button>
      )}
    </div>
  );
}