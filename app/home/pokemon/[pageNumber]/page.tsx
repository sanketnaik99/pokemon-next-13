import PokemonCard from "@/components/PokemonCard/PokemonCard";
import PokemonLoader from "@/components/PokemonCard/PokemonLoader";
import React, { Suspense } from "react";

// Revalidate every 24 hours
export const revalidate = 86400;

// Interface for a result from the /pokemon endpoint
interface PokemonData {
  name: string;
  url: string;
}

// Interface for the /pokemon endpoint response
interface PokemonPageResponse {
  count: number;
  next: string;
  results: PokemonData[];
}

// Fetches a list of pokemon from the /pokemon endpoint
// TODO: ADD PAGINATION
const getPokemon = async (pageNumber: number) => {
  const offset = (pageNumber - 1) * 20;
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`,
    { next: { revalidate: revalidate } }
  )
    .then((res: Response) => res.json())
    .then((data: PokemonPageResponse) => data);
  return data;
};

const page = async ({ params }: { params: { pageNumber: number } }) => {
  const pokemon = await getPokemon(params.pageNumber);

  return (
    <div className="relative border-2 border-lime-300 rounded-md w-full min-h-[300px]">
      <h4 className="text-sm absolute font-bold text-center text-white bg-lime-300 p-2 rounded-sm top-0 right-0">
        Pokemon Page
      </h4>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {pokemon.results.map((pokemon) => (
          <Suspense key={pokemon.name} fallback={<PokemonLoader />}>
            {/* @ts-expect-error Server Component */}
            <PokemonCard name={pokemon.name} url={pokemon.url} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default page;
