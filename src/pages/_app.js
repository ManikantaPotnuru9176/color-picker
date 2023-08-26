import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@/components/theme";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
