import NavbarItem from "../../components/NavbarItem/NavbarItem";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="menu">
        <NavbarItem itemName={"Home"} path={"/"} />
        <NavbarItem itemName={"About"} path={"/about"} />
        <NavbarItem itemName={"Shop"} path={"/shop"} />
      </ul>
    </nav>
  );
};

export default Navbar;
