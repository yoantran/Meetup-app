import { Link } from "react-router-dom";
import MainNav from "./MainNavigation.module.css";

function MainNavigation() {
    return (
        <header className={MainNav.header}>
            <div className={MainNav.logo}>
                React Meetups
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}> All Meetups</Link>
                    </li>
                    <li>
                        <Link to={"/favourites"}> Favorite Meetups</Link>
                    </li>
                    <li>
                        <Link to={"/new-meetup"}> Add New Meetups</Link>
                    </li>
                </ul>
            </nav>
        </header>)
}

export default MainNavigation;
