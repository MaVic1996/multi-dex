import Case from "../../components/kanto/Case";
import MainSide from "../../components/kanto/MainSide";

const Kanto = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <MainSide></MainSide>
      <Case></Case>
    </div>
  );
};

export default Kanto;
