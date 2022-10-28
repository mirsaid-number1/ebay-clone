import "../styles/globals.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import network from "../utils/network";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={network}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
