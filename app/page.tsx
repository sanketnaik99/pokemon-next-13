import PokemonCard from "@/components/PokemonCard/PokemonCard";
import PokemonLoader from "@/components/PokemonCard/PokemonLoader";
import { Inter } from "next/font/google";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

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
const getPokemon = async () => {
  const data = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0",
    { next: { revalidate: revalidate } }
  )
    .then((res: Response) => res.json())
    .then((data: PokemonPageResponse) => data);
  return data;
};

export default async function Home() {
  const data = await getPokemon();

  return (
    <section className="body-font">
      <div className="container mx-auto grid grid-cols-3 gap-2">
        {data &&
          data.results.map((pokemon) => (
            <Suspense key={pokemon.name} fallback={<PokemonLoader />}>
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            </Suspense>
          ))}
      </div>
    </section>
  );
}