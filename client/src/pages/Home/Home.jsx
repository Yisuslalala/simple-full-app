import "./Home.css";

import MainImage from "../../assets/MainImage.jpg";
import MainImageFixed from "../../assets/MainImageFixed.jpg";
import MainImageSecondFix from "../../assets/MainImageSecondFix.jpg";

const Home = () => {
  return (
    <main>
      <section className="padding-block-900">
        <div className="container">
          <div className="columns">
            <div>
              <h1 className="primary-heading fw-bold">ajad jewelry shop</h1>
              <p>En Ajad, la elegancia cobra vida con un brillo único.</p>
              <button>Tienda</button>
            </div>
            <div>
              <img
                src={MainImageSecondFix}
                alt="MainImage"
                className="main-image"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="home-images-wrapper">
            <div className="product">lorem</div>
            <div className="product">lorem</div>
            <div className="product">lorem</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
