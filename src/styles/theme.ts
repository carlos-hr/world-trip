import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "500": "#FFBA08",
    },
    gray: {
      "500": "#47585B",
    },
  },
  fonts: {
    fonts: {
      heading: "Poppins",
      body: "Poppins",
    },
    color: "gray.500",
  },
});
