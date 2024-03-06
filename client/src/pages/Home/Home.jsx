import { ProductList } from "../../components/ProductList/ProductList";

import "./Home.css";

import FirstImage from "../../assets/FirstImage.jpg";
import SecondImage from "../../assets/SecondImage.jpg";

const Home = () => {
  return (
    <main>
      <section className="padding-block-900">
        <div className="container center-text">
          <div className="columns">
            <div>
              <div>
                <h1 className="primary-heading fw-bold">ajad jewelry shop</h1>
                <p className="padding-400 fs-650">
                  En Ajad, la elegancia cobra vida con un brillo único.
                </p>
              </div>
              <div className="image-container">
                <img src={FirstImage} alt="MainImage" className="image" />
              </div>
            </div>
            <div className="inverted-column">
              <div className="image-container inverted-image">
                <img src={SecondImage} alt="SecondImage" className="image" />
              </div>
              <div className="inverted-text">
                <p className="fw-semi-bold padding-400 fs-650">
                  Descubre el arte de la elegancia en Ajad, donde cada joya es
                  una obra maestra que ilumina tu estilo con un brillo
                  excepcional.
                </p>
              </div>
              <div className="inverted-button padding-400">
                <button className="button">Tienda</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-block-900">
        <div className="container">
          <div className="images-wrapper">
            <ProductList />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
