import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { GameContextProvider } from "./context/GameContext";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <ChakraProvider>
            <GameContextProvider>
                <App />
            </GameContextProvider>
        </ChakraProvider>
    </React.StrictMode>
);
