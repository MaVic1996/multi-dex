import { NextApiRequest, NextApiResponse } from "next";

export type PokemonInfoResponse = {
  info: any;
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
    });

  const pokemonInfo = await (
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  ).json();
  res.status(200).json({
    info: pokemonInfo,
  });
}
