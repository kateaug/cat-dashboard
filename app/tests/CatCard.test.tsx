import { render, screen } from '@testing-library/react';
import CatCard from '@/components/CatCard';

test('renders breed name and origin', () => {
  render(
    <CatCard
      breed={{ id: 'abys', name: 'Abyssinian', origin: 'Egypt', description: '' }}
      onClick={() => {}}
    />
  );

  expect(screen.getByText('Abyssinian')).toBeInTheDocument();
  expect(screen.getByText('Egypt')).toBeInTheDocument();
});