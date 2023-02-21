import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { App } from "./App";
import theme from "./Utils/chakraTheme";

const container = document.getElementById("root");
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ChakraProvider>
  </React.StrictMode>,
);

