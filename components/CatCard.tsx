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
  className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden flex flex-col h-[320px] transition transform hover:scale-[1.02]"
>
  {/* IMAGE */}
  <div className="h-48 w-full bg-gray-200 flex-shrink-0 overflow-hidden relative">
    {image ? (
      <img
        src={image}
        alt={breed.name}
        className="h-full w-full object-cover"
      />
    ) : (
      <span className="text-gray-500 text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Anonymous 🐱
      </span>
    )}
  </div>


      {/* TEXT */}
      <div className="p-4 flex flex-col justify-between">
        <h3 className="font-bold text-lg truncate">{breed.name}</h3>
        <span className="text-sm text-indigo-500 truncate">{breed.origin}</span>
      </div>
    </div>
  );
}