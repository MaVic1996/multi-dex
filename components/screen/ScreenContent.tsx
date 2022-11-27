import styles from "../../styles/components/screen/ScreenContent.module.css";
import usePokemonRegionList from "../../hooks/usePokemonRegionList";
import Box from "./Box";
import {TbPokeball} from 'react-icons/tb';
import PokemonInfo from "./PokemonInfo";
import { useState } from "react";
import useGetPokemonData from "../../hooks/useGetPokemonData";

const ScreenContent = () => {
  const { pokedexData, loading } = usePokemonRegionList({ region: "kalos" });
  const [isOpen, setOpen] = useState(false);
  const [pokemonInfo, setPokemonInfo] = useState<any>(null);

  const { getPokemonInfo } = useGetPokemonData();

  const obtainPokemonData = async (data: string|number) => {
    setPokemonInfo(await getPokemonInfo(data));
    setOpen(true);
  }


  return (
    loading ? <TbPokeball className={styles.loading} /> : (
    <div className={styles.content}>
      {!!pokedexData &&
        pokedexData.map((data: number | string, idx: number) => (
          <Box key={idx} idx={idx + 1} pokeNum={data} onClick={() => obtainPokemonData(data)}></Box>
        ))}
        
        <PokemonInfo pokemonIdx={pokedexData.indexOf(pokemonInfo?.id.toString()) + 1} closeInfo={() => setOpen(false)} isOpen={isOpen} pokemonInfo={pokemonInfo} />
    </div>)
  );
};

export default ScreenContent;
