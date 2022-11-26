import styles from "../../styles/components/screen/ScreenContent.module.css";
import usePokemonRegionList from "../../hooks/usePokemonRegionList";
import Box from "./Box";
import {TbPokeball} from 'react-icons/tb';

const ScreenContent = () => {
  const { pokemonData, loading } = usePokemonRegionList({ region: "kalos" });

  return (
    loading ? <TbPokeball className={styles.loading} /> : (
    <div className={styles.content}>
      {!!pokemonData &&
        pokemonData.map((data: number | string, idx: number) => (
          <Box key={idx} idx={idx + 1} pokeNum={data}></Box>
        ))}
    </div>)
  );
};

export default ScreenContent;
