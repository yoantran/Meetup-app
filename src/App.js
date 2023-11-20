// import { Route, Routes } from "react-router-dom";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigation from "./components/Layout/MainNavigation";

function App() {
    return (
        // fixed with this reference: https://bobbyhadz.com/blog/react-useroutes-may-be-used-only-in-context-of-router
        <Router>
            <div>
                <MainNavigation/>
                <Routes>
                    {/*reference to this: https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom */}
                    <Route path="/" exact element={<AllMeetupsPage/>}/>
                    <Route path="/favourites" element={<FavoritesPage/>}/>
                    <Route path="/new-meetup" element={<NewMeetupPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
