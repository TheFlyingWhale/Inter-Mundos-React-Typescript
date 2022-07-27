import { Route, Routes } from "react-router-dom";
import { PlayerName, StarterItem } from "./newGame";
import NewGameOutlet from "./NewGameOutlet";

const NewGameRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<NewGameOutlet />}>
                <Route index element={<PlayerName />} />
                <Route path="starterItem" element={<StarterItem />} />
            </Route>
        </Routes>
    );
};

export default NewGameRouter;
