import { useEffect, useState } from "react";

const usePokemonRegionList = ({ region }: { region: string }) => {
  const [pokemonData, setPokemonData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const url = `http://localhost:3000/api/pokedata?region=${region}`;
      const response = await (await fetch(url)).json();

      setPokemonData(response["pokedexList"]);

      setTimeout(() => setLoading(false), 1500);
    };
    loadData();
  }, [region]);

  return { pokemonData, loading };
};

export default usePokemonRegionList;
