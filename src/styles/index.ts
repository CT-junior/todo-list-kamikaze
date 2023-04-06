"use-client";

import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  dark: {
    cinzaEscuro: "#151E1F",
    verdeEscuro: "#051213",
    cinzaClaro: "#B8BDBD",
  },
  light: {
    verdeClaro: "#0C665B",
    cinza: "#7B7E7E",
  },
  default: {
    branco: "#fff",
    laranja: "#F58634",
    vermelho: "#EE3131",
    preto: "#000",
  },
};

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: "light.verdeClaro",
      },
    }),
  },
  colors,
});

export default theme;
