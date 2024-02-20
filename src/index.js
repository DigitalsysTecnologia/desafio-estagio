import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/Theme.js";
import { BrowserRouter } from "react-router-dom";
import { CharacterProvider } from "./providers/CharactersContext.jsx";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <CharacterProvider>
          <App />
        </CharacterProvider>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>
);
