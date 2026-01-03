'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getCatBreeds } from '@/lib/queries';
import { CatBreed } from '@/lib/types';

import CatCard from '@/components/CatCard';
import CatDetails from '@/components/CatDetails';
import Charts from '@/components/Charts';
import ChartTabs from '@/components/ChartTabs';
import Filters from '@/components/Filters';
import { CountryFilter } from '@/components/CountryFilter';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function MetricsClient() {
  const { data = [], isLoading } = useQuery({
    queryKey: ['cats'],
    queryFn: getCatBreeds,
  });

  const [chartMode, setChartMode] =
    useState<'countries' | 'breeds'>('countries');

  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('');
  const [selected, setSelected] = useState<{
  breed: CatBreed;
  image: string | null;
} | null>(null);

  const countries = Array.from(
    new Set(data.map((b) => b.origin))
  ).sort();

  const filteredBreeds = data.filter((b) => {
    const matchesSearch = b.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCountry = country ? b.origin === country : true;

    return matchesSearch && matchesCountry;
  });

  if (isLoading) {
    return <p className="text-gray-500">Loading cats…</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-10">
      {/* HEADER */}
      <header className="flex justify-between items-center gap-4">
        <h1 className="text-3xl font-bold">Cat Dashboard</h1>
        <ThemeToggle />
      </header>

      {/* FILTERS */}
      <section className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm">
        <div className="flex flex-wrap gap-4 items-center">
          <Filters search={search} onSearch={setSearch} />
          <CountryFilter
            countries={countries}
            value={country}
            onChange={setCountry}
          />
        </div>
      </section>

      {/* CHARTS */}
      <section className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm space-y-4">
        <ChartTabs
          active={chartMode}
          setActive={(mode) => {
            setChartMode(mode);
            setCountry(''); // reset country on tab switch
          }}
        />
        <Charts
          breeds={filteredBreeds}
          mode={chartMode}
          onClickCountry={(c) => setCountry(c)}
        />
      </section>

      {/* GRID */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Breeds ({filteredBreeds.length})
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredBreeds.map((breed) => (
            <CatCard
                key={breed.id}
                breed={breed}
                onClick={(image) =>
                    setSelected({ breed, image })
                }
            />
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSelected(null)}
          />

          <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-2xl mx-4 overflow-hidden">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition"
            >
              ✕
            </button>
            <CatDetails breed={selected.breed} image={selected.image} />
          </div>
        </div>
      )}
    </div>
  );
}