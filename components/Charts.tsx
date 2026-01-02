import { CatBreed } from '@/lib/types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

interface ChartsProps {
  breeds: CatBreed[];
  mode: 'countries' | 'breeds';
  onClickCountry?: (country: string) => void;
  selectedCountry?: string;
}

export default function Charts({ breeds, mode, onClickCountry, selectedCountry }: ChartsProps) {
  const data = mode === 'countries'
    ? Object.entries(
        breeds.reduce<Record<string, number>>((acc, b) => {
          acc[b.origin] = (acc[b.origin] || 0) + 1;
          return acc;
        }, {})
      ).map(([country, count]) => ({ name: country, count }))
    : breeds.map((b) => ({ name: b.name, count: 1 }));

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
        >
          <XAxis dataKey="name" tick={{ fill: 'currentColor', fontSize: 12 }} />
          <YAxis tick={{ fill: 'currentColor', fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1f2937', border: 'none', color: 'white' }}
          />
          <Bar
            dataKey="count"
            fill="#6366f1"
            radius={[4, 4, 0, 0]}
            onClick={(data: any) => {
              if (mode === 'countries' && onClickCountry) {
                onClickCountry(data.name);
              }
            }}
          >
            {data.map((entry) => (
              <Cell
                key={entry.name}
                fill={selectedCountry === entry.name ? '#f43f5e' : '#6366f1'}
                cursor={mode === 'countries' ? 'pointer' : 'default'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
