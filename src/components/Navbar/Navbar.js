import React, { useState } from "react";
import { Link, useMatch, useResolvedPath  } from "react-router-dom";



const Navbar = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
    } else {
      setBurgerClass("burger-bar unclicked");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const List = () => {

    function CustomLink({ to, children, ...props }) {
      const resolvedPath = useResolvedPath(to);
      const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    
      return (
        <li className={isActive ? "active" : ""}>
          <Link to={to} {...props}>
            {children}
          </Link>
        </li>
      );
    }

    return (
      <ul className="links">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/create">Say Some Thing</CustomLink>
      </ul>
    );
  };
  

  return (
    <div>
      <nav>
        <Link to="/" className="sitetitle">
          The Blah
        </Link>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>

        <div className="nav-menu">
          <List />
        </div>
      </nav>

      {isMenuClicked && (
        <div className="menu">
          <List />
        </div>
      )}
    </div>
  );
};





export default Navbar;
