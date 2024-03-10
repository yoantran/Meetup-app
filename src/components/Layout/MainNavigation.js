import { Link } from "react-router-dom";
import { useContext } from "react";

import MainNav from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoriteCtx = useContext(FavoritesContext);
  return (
    <header className={MainNav.header}>
      <div className={MainNav.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}> All Meetups</Link>
          </li>
          <li>
            <Link to={"/favourites"}>
              Favorite Meetups
              <span className={MainNavigation.module.css.badge}>
                {FavoritesContext.totalFavorites}
              </span>
              {/* check again */}
            </Link>
          </li>
          <li>
            <Link to={"/new-meetup"}> Add New Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
