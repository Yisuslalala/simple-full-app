import NavbarItem from "../../components/NavbarItem/NavbarItem";

import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar-container">
        <div className="nav-wrapper">
          <div className="nav-item">Logo</div>
          <nav className="nav-item">
            <ul className="menu">
              <NavbarItem itemName={"Home"} path={"/"} />
              <NavbarItem itemName={"About"} path={"/about"} />
              <NavbarItem itemName={"Shop"} path={"/shop"} />
            </ul>
          </nav>
          <div className="nav-item">Cart</div>
        </div>
        {/**
          <ul className="menu vertical-menu">
            <NavbarItem itemName={"Home"} path={"/"} />
            <NavbarItem itemName={"About"} path={"/about"} />
            <NavbarItem itemName={"Shop"} path={"/shop"} />
          </ul>
          */}
      </nav>
    </header>
  );
};

export default Navbar;
