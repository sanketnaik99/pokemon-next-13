import { revalidate } from "@/app/home/pokemon/[pageNumber]/page";
import { Pokemon } from "@/types/pokemon";
import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  url: string;
}

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const getPokemonData = async (url: string) => {
  const data = await fetch(url, { next: { revalidate: revalidate } })
    .then((res: Response) => res.json())
    .then((data: Pokemon) => data);
  return data;
};

const PokemonCard = async ({ name, url }: Props) => {
  const pokemonData = await getPokemonData(url);

  return (
    <div className="p-8 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-lg">
      <div className="flex justify-center">
        {pokemonData.sprites.front_default ? (
          <Image
            alt={pokemonData.name}
            width={100}
            height={100}
            src={pokemonData.sprites.front_default}
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-300 animate-pulse"></div>
        )}
      </div>
      <div className="flex justify-center text-xl font-bold mt-4">
        {capitalize(name)}
      </div>
    </div>
  );
};

export default PokemonCard;
