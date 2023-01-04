import "../styles/globals.css";
import type { AppProps } from "next/app";
import GoBackButton from "../components/common/GoBackButton";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoBackButton />
      <Component {...pageProps} />
    </>
  );
}
