import "./Footer.css";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="padding-block-900 color-accent-900">
        <div className="container">
          <div className="footer-columns footer-text-color center-text">
            <div className="col">
              <div className="row">
                <h5 className="secondary-heading">Páginas</h5>
              </div>
              <div className="links-wrapper padding-top-500">
                <Link to={"/"}>Home</Link>
                <Link to={"/About"}>About</Link>
                <Link to={"/Shop"}>Shop</Link>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <h5 className="secondary-heading">Contacto</h5>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <h5 className="secondary-heading">Síguenos!</h5>
                <div className="icons-wrapper padding-top-500">
                  <Link>
                    <div className="icon-item">
                      <InstagramIcon fontSize="large" />
                    </div>
                  </Link>
                  <Link>
                    <div className="icon-item">
                      <FacebookIcon fontSize="large" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="buttom footer-text-color center-text">
        <p>Developed by: @Yisuslalala</p>
      </div>
    </>
  );
};

export default Footer;
