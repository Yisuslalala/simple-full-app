import NavbarItem from "../../components/NavbarItem/NavbarItem";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar-container">
        <ul className="menu">
          <NavbarItem itemName={"Home"} path={"/"} />
          <NavbarItem itemName={"About"} path={"/about"} />
          <NavbarItem itemName={"Shop"} path={"/shop"} />
        </ul>
        {/**
          <ul className="menu vertical-menu">
            <NavbarItem itemName={"Home"} path={"/"} />
            <NavbarItem itemName={"About"} path={"/about"} />
            <NavbarItem itemName={"Shop"} path={"/shop"} />
          </ul>
          */}
      </nav>
    </div>
  );
};

export default Navbar;
