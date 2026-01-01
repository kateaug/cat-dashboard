import { CatBreed } from "./types";

export async function getCatBreeds(): Promise<CatBreed[]> {
  const res = await fetch('/api/cats')

  if (!res.ok) throw new Error('Failed to fetch cat breeds');

  const data = await res.json();

  return data.map((b: any) => ({
    id: b.id,
    name: b.name,
    origin: b.origin || 'Unknown',
    description: b.description,
  }));
}