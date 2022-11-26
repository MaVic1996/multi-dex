import { NextApiRequest, NextApiResponse } from "next";

type PokedexListResponse = {
  pokedexList: string[];
  message?: string;
};

const POKEDEX_MAPPING: Record<string, number> = {
  kalos: 12,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PokedexListResponse>
) {
  const { region } = req.query;
  if (!region || !POKEDEX_MAPPING[region.toString()])
    return res
      .status(400)
      .json({ message: "Region doesn't exists", pokedexList: [] });

  const pokedexEntry = POKEDEX_MAPPING[region.toString()];
  const pokedexData = await (
    await fetch(`https://pokeapi.co/api/v2/pokedex/${pokedexEntry}`)
  ).json();

  const pokedexList = pokedexData["pokemon_entries"].map(
    (entry: Record<string, Record<string, string>>) => {
      const splitted = entry["pokemon_species"]["url"].split("/");
      return splitted[splitted.length - 2];
    }
  );

  res.status(200).json({ pokedexList });
}
