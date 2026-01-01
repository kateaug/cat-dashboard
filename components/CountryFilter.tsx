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
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-lg p-2"
    >
      <option value="">All countries</option>
      {countries.map((o: string) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
}