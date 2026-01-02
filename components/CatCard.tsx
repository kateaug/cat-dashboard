'use client';

import { CatBreed } from "@/lib/types";
import { useEffect, useState } from "react";

export default function CatCard({
  breed,
  onClick,
}: {
  breed: CatBreed;
  onClick: () => void;
}) {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/cat-image?breed=${breed.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.url) setImage(data.url);
      })
      .catch(console.error);
  }, [breed.id]);

  return (
   <div
      onClick={onClick}
      className="rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 cursor-pointer transition hover:shadow-xl"
    >
      {/* IMAGE BLOCK */}
      <div className="relative">
        {/* IMAGE */}
        <img
          className="w-full h-48 object-cover"
          src={image ?? ''}
          alt={breed.name}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black opacity-20 hover:opacity-0 transition duration-300" />

        {/* ORIGIN BADGE */}
        <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm">
          {breed.origin}
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-6 py-4">
        <h3 className="font-semibold text-lg hover:text-indigo-600 transition">
          {breed.name}
        </h3>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
          {breed.description ?? 'Lovely and unique cat breed.'}
        </p>
      </div>
    </div>
  );
}