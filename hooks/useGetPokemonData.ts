import { PokemonInfoResponse } from "./../pages/api/pokemonInfo";
const useGetPokemonData = () => {
  const parseResponse = (response: PokemonInfoResponse) => {
    if (!response["info"]) return {};
    return {
      img: response["info"]["sprites"]["other"]["official-artwork"][
        "front_default"
      ],
      name: response["info"]["name"],
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
