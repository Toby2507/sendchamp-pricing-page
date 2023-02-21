import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
  fonts: {
    body: "DM Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;"
  },
  colors: {
    gray: {
      1: "rgba(255, 255, 255, 0.24)",
      2: "rgba(255, 255, 255, 0.56)",
      3: "rgba(25, 126, 239, 0.08)",
      5: "#eff4fe",
      6: "#e2edfe",
      8: "#9da8bb",
      10: "rgba(25, 126, 239, 0.4)"
    },
    brand: { main: "rgb(25, 126, 239)" },
    primary: { 600: "#0555a8" },
    black: { 600: "#595959" },
    background: { 1: "#ebedee", 2: "#0d253f" }
  }
});

export default theme;