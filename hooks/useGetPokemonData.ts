import { PokemonInfo } from "./../types/PokemonInfo.d";
import { PokemonInfoResponse } from "./../pages/api/pokemonInfo";

const useGetPokemonData = () => {
  const parseResponse: (response: PokemonInfoResponse) => PokemonInfo | {} = (
    response: PokemonInfoResponse
  ) => {
    const { info, species } = response;
    if (!info) return {};
    const types = info["types"].map((type: any) =>
      type["type"]["name"].toUpperCase()
    );
    let detail = "";
    if (!!species) {
      const detailInfo = species["genera"].find(
        (entry: any) => entry["language"]["name"] == "en"
      );
      detail = detailInfo?.["genus"] || "";
    }
    return {
      imgSrc:
        info["sprites"]["other"]["official-artwork"]["front_default"] || "",
      name: info["name"] || "",
      types: types || [],
      weight: info["weight"] / 10 || "-",
      height: info["height"] / 10 || "-",
      detail: detail,
    };
  };

  const getPokemonInfo = async (data: string | number) => {
    const url = `${window.location.href}/api/pokemonInfo?pokemonId=${data}`;
    const response = await (await fetch(url)).json();

    return parseResponse(response);
  };

  return { getPokemonInfo };
};

export default useGetPokemonData;
