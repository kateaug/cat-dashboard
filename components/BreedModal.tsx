'use client';

import { CatBreed } from '@/lib/types';

export function BreedModal({
  breed,
  onClose,
}: {
  breed: CatBreed;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-2">{breed.name}</h2>
        <p className="text-sm text-gray-500 mb-4">{breed.origin}</p>
        <p>{breed.description}</p>

        <button
          onClick={onClose}
          className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}