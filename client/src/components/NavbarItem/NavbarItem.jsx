import { Link } from "react-router-dom";

import "./NavbarItem.css";

const NavbarItem = ({ itemName, path }) => {
  return (
    <Link className="item" to={path}>
      {itemName}
    </Link>
  );
};

export default NavbarItem;
