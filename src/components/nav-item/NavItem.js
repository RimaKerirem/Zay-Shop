import { NavLink } from "react-router-dom";
import "./nav-item.css";

function NavItem({ id, title, handleClick }) {
  return (
    <li className="nav-item">
      <NavLink to={id} onClick={handleClick}>
        {title}
      </NavLink>
    </li>
  );
}

export default NavItem;
