import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { AppNavbar } from "../componenet/AppNavbar";
import { theme } from "../componenet/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppNavbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
