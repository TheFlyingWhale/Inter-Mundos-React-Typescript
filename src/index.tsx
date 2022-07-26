import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { GameContextProvider } from "./context/GameContext";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <ChakraProvider>
            <GameContextProvider>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </GameContextProvider>
        </ChakraProvider>
    </React.StrictMode>
);
