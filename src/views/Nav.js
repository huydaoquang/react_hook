import "./Nav.scss";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="topnav">
      <NavLink activeClassName="active" to="/" exact={true}>
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/Timer">
        Timer App
      </NavLink>
      <NavLink activeClassName="active" to="/Todo">
        Todo App
      </NavLink>
      <NavLink activeClassName="active" to="/Blogs">
        Blogs App
      </NavLink>
      <NavLink activeClassName="active" to="/Secret">
        Secret
      </NavLink>
    </div>
  );
};
export default Nav;
