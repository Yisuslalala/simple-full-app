import "./Footer.css";

import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <section className="padding-block-900 color-accent-900">
      <div className="container">
        <div className="footer-columns">
          <div className="col">
            <div className="row">
              <h1 className="secondary-heading footer-text-color">
                ajad jewerly shop
              </h1>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <h1 className="">col2</h1>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <h5 className="secondary-heading">Síguenos!</h5>
              <div>
                <InstagramIcon fontSize="large" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
