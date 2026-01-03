import { render, screen, waitFor } from '@testing-library/react';
import CatCard from '@/components/CatCard';
import { CatBreed } from '@/lib/types';

const mockBreed: CatBreed = {
  id: 'abys',
  name: 'Abyssinian',
  origin: 'Egypt',
  description: 'Lovely cat breed',
};

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ url: 'https://placekitten.com/300/200' }),
    } as Response)
  ) as jest.Mock;
});

afterAll(() => {
  jest.resetAllMocks();
});

test('renders CatCard with name, origin, and image', async () => {
  render(<CatCard breed={mockBreed} onClick={() => {}} />);

  expect(screen.getByText('Abyssinian')).toBeInTheDocument();
  expect(screen.getByText('Egypt')).toBeInTheDocument();

  await waitFor(() => {
    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img).toHaveAttribute('src', 'https://placekitten.com/300/200');
  });
});
