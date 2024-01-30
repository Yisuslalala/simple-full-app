import NavbarItem from "../../components/NavbarItem/NavbarItem";

import "./Navbar.css";

import AjadSoftLogo from "../../assets/AjadSoftLogo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar-container">
        <div className="nav-wrapper">
          <div className="nav-item img-container">
            <img src={AjadSoftLogo} alt="AjadSoftLogo" className="logo" />
          </div>
          <nav className="nav-item">
            <ul className="menu">
              <NavbarItem itemName={"Home"} path={"/"} />
              <NavbarItem itemName={"About"} path={"/about"} />
              <NavbarItem itemName={"Shop"} path={"/shop"} />
            </ul>
          </nav>
          <div className="nav-item img-container">
            <ShoppingCartIcon className="shop-cart" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
