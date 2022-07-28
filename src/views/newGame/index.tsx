import { Route, Routes } from "react-router-dom";
import PlayerName from "./PlayerName";
import StarterItems from "./StarterItems";
import NewGameOutlet from "./NewGameOutlet";

const NewGameRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<NewGameOutlet />}>
                <Route index element={<PlayerName />} />
                <Route path="starterItem" element={<StarterItems />} />
            </Route>
        </Routes>
    );
};

export default NewGameRouter;
