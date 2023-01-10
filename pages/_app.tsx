import "../styles/globals.css";
import type { AppProps } from "next/app";
import GoBackButton from "../components/common/GoBackButton";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoBackButton />{" "}
      <div
        style={{
          padding: "0 2rem",
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
