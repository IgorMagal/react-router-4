import { useEffect, useState } from "react";
import classes from "./MainNavigation.module.css";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function MainNavigation() {
  const [activeLink, setActiveLink] = useState(null);
  const loc = useLocation();

  useEffect(() => {
    setActiveLink(loc.pathname);
    console.log(loc.pathname);
  }, [loc]);
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link
              to="/"
              onClick={() => setActiveLink("/")}
              className={activeLink === "/" ? classes.active : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              onClick={() => setActiveLink("/events")}
              className={activeLink === "/events" ? classes.active : ""}
            >
              Events
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
