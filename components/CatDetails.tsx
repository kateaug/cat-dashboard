import { CatBreed } from "@/lib/types";

export default function CatDetails({
  breed,
  image,
}: {
  breed: CatBreed;
  image: string | null;
}) {
  return (
    <div>
      <img
        src={image ?? '/placeholder-cat.jpg'}
        alt={breed.name}
        className="w-full h-80 object-cover"
      />

      <div className="p-6 space-y-3">
        <h2 className="text-2xl font-bold">{breed.name}</h2>
        <p className="text-sm text-indigo-500">{breed.origin}</p>
        <p className="text-gray-600 dark:text-gray-300">
          {breed.description}
        </p>
      </div>
    </div>
  );
}