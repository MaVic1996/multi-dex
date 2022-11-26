import { NextApiRequest, NextApiResponse } from "next";

export type PokemonInfoResponse = {
  info: any;
  species: any;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PokemonInfoResponse>
) {
  const { pokemonId } = req.query;

  if (!pokemonId || typeof pokemonId != "string")
    return res.status(400).json({
      message: "Pokemon id not provided",
      info: {},
      species: {},
    });

  const pokemonInfo = await (
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  ).json();
  const pokemonSpecies = await (
    await fetch(pokemonInfo["species"]["url"])
  ).json();

  res.status(200).json({
    info: pokemonInfo,
    species: pokemonSpecies,
  });
}
