import { useEffect, useState } from "react";

const usePokemonRegionList = ({ region }: { region: string }) => {
  const [pokedexData, setPokedexData] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const url = `${window.location.href}/api/pokedata?region=${region}`;
      const response = await (await fetch(url)).json();

      setPokedexData(response["pokedexList"]);

      setTimeout(() => setLoading(false), 1500);
    };
    loadData();
  }, [region]);

  return { pokedexData, loading };
};

export default usePokemonRegionList;
