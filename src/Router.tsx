import { Routes, Route } from "react-router-dom";
import MainMenu from "./views/mainMenu";
import NewGame from "./views/newGame";
import DevSpace from "./views/devSpace";

export const Router = () => {
    return (
        <Routes>
            <Route path="*" element={<MainMenu />} />
            <Route path="newGame" element={<NewGame />} />
            <Route path="devSpace" element={<DevSpace />} />
        </Routes>
    );
};
