import { CatBreed } from '@/lib/types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function Charts({
  breeds,
  mode,
}: {
  breeds: CatBreed[];
  mode: 'countries' | 'breeds';
}) {
  const data =
    mode === 'countries'
      ? Object.values(
          breeds.reduce((acc: any, b) => {
            acc[b.origin] = acc[b.origin] || {
              label: b.origin,
              value: 0,
            };
            acc[b.origin].value++;
            return acc;
          }, {})
        )
      : breeds.map((b) => ({
          label: b.name,
          value: 1,
        }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="label" hide />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#6366f1" animationDuration={800} />
      </BarChart>
    </ResponsiveContainer>
  );
}
