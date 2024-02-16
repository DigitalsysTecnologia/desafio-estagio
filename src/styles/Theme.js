import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "'Merriweather',serif",
  },
  colors: {
    brand: {
      1: "#594F42",
      2: "#D4F739",
      3: "#271C14",
    },
    grey: {
      0.5: "rgba(21, 23, 26, 0.5)",
      0: "#15171A",
      1: "#212529",
      2: "#2B2F33",
      3: "#868E96",
      4: "#ADB5BD",
      5: "#CED4DA",
      6: "#DEE2E6",
      7: "#F1F3F5",
      8: "#F8F9FA",
      9: "#FDFEFF",
    },
  },
  fontSizes: {
    "3xl": "4rem",
    "2xl": "2.125rem",
    xl: "1.1rem",
    lg: "1rem",
    md: "1.563rem",
    sm: "1.25rem",
    xs: "0.7rem",
  },
  fontWeights: {
    extrabold: 800,
    bold: 700,
    semibold: 600,
    medium: 500,
  },
});

export { theme };
