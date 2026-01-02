import '@testing-library/jest-dom/extend-expect';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ url: 'https://placekitten.com/400/300' }),
  })
) as jest.Mock;