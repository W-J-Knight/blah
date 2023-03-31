import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.sitetitle}>
        The Blah
      </Link>
      <ul className="links">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/create">Say Some Thing</CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? styles.active : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
