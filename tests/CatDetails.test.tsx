import { render, screen, fireEvent } from '@testing-library/react';
import CatDetails from '@/components/CatDetails';
import { CatBreed } from '@/lib/types';

const mockBreed: CatBreed = {
  id: 'abys',
  name: 'Abyssinian',
  origin: 'Egypt',
  description: 'Elegant and active',
};

describe('CatDetails', () => {
  it('renders breed info and image', () => {
    render(<CatDetails breed={mockBreed} image="https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg" />);

    expect(screen.getByText('Abyssinian')).toBeInTheDocument();
    expect(screen.getByText('Egypt')).toBeInTheDocument();
    expect(screen.getByText('Elegant and active')).toBeInTheDocument();

    const img = screen.getByAltText('Abyssinian');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg');
  });
});