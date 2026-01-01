import { render } from '@testing-library/react';
import Charts from '@/components/Charts';

test('renders chart without crashing', () => {
  render(
    <Charts
      mode="countries"
      breeds={[
        { id: '1', name: 'Test', origin: 'Nowhere', description: '' },
      ]}
    />
  );
});