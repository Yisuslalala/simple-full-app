import fakeProducts from "../../utilities/fakeProducts";

import "./Home.css";

import FirstImage from "../../assets/FirstImage.jpg";
import SecondImage from "../../assets/SecondImage.jpg";

const Home = () => {
  const products = fakeProducts.map((product) => (
    <div key={product.id}>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <img src={product.url} alt={product.name} />
    </div>
  ));
  return (
    <main>
      <section className="padding-block-900">
        <div className="container">
          <div className="columns">
            <div>
              <h1 className="primary-heading fw-bold">ajad jewelry shop</h1>
              <p>En Ajad, la elegancia cobra vida con un brillo único.</p>
              <div className="image-container">
                <img src={FirstImage} alt="MainImage" className="image" />
              </div>
            </div>
            <div className="inverted-column">
              <div className="image-container image">
                <img src={SecondImage} alt="SecondImage" className="image" />
              </div>
              <p className="fw-semi-bold text">
                Descubre el arte de la elegancia en Ajad, donde cada joya es una
                obra maestra que ilumina tu estilo con un brillo excepcional.
              </p>
              <div className="button">
                <button>Tienda</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="home-images-wrapper">
            <>{products}</>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
