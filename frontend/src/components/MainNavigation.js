//import { useEffect, useState } from "react";
import classes from "./MainNavigation.module.css";
//import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import NewsletterSignup from "./NewsletterSignup";

function MainNavigation() {
  //const [activeLink, setActiveLink] = useState(null);
  //const loc = useLocation();

  // useEffect(() => {
  //   setActiveLink(loc.pathname);
  //   console.log(loc.pathname);
  // }, [loc]);
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>|</li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>|</li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
          <NewsletterSignup />
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
