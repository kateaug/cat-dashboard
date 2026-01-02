'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Charts from './Charts';
import { getCatBreeds } from '@/lib/queries';
import CatCard from './CatCard';
import { ThemeToggle } from './ThemeToggle';
import { CountryFilter } from './CountryFilter';
import Filters from './Filters';
import ChartTabs from './ChartTabs';

export default function MetricsClient() {
  const { data = [], isLoading } = useQuery({
    queryKey: ['cats'],
    queryFn: getCatBreeds,
  });

  const [chartMode, setChartMode] = useState<'countries' | 'breeds'>('countries');
  const [country, setCountry] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  const countries = [...new Set(data.map((b) => b.origin))];

  const filtered = data
    .filter((b) => b.name.toLowerCase().includes(search.toLowerCase()))
    .filter((b) => (country ? b.origin === country : true));

   const handleChartTabChange = (mode: 'countries' | 'breeds') => {
    setChartMode(mode);
    setCountry('');
    setSearch('');
  };  

  if (isLoading) {
    return <p className="text-gray-500">Loading cats…</p>;
  }

  return (

 
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-10">
      <header className="flex md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold">Cat Dashboard</h1>
        <ThemeToggle />
      </header>
      <section className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm">
        <div className="flex flex-wrap gap-4 items-center">
          <Filters search={search} onSearch={setSearch} />
          <CountryFilter countries={countries} value={country} onChange={setCountry} />
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm space-y-4">
        <ChartTabs active={chartMode} setActive={handleChartTabChange} />
        <Charts breeds={data} mode={chartMode} onClickCountry={(c) => setCountry(c)}
  selectedCountry={country} />
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Breeds ({filtered.length})
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          {filtered.map((b) => (
              <CatCard key={b.id} breed={b} onClick={() => {}} />
          ))}
        </div>
      </section>
    </div>
   );
}