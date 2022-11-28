import Pokedex from "../../components/Pokedex";

const Kalos = () => {
  return (
    <div
      style={{
        padding: "0 2rem",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Pokedex />
    </div>
  );
};

export default Kalos;
