import React from "react";

const PokemonLoader = () => {
  return (
    <div className="p-8 bg-gray-100">
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse"></div>
      </div>
      <div className="flex justify-center w-24 h-4 bg-gray-300 mt-4"></div>
    </div>
  );
};

export default PokemonLoader;
