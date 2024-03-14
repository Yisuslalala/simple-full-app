import VideoPlayer from "../VideoPlayer/VideoPlayer";

import "./InfoBox.css";

function InfoBox() {
  return (
    <div className="padding-block-900 color-accent-50">
      <div className="container center-text">
        <h3 className="primary-heading">Joyería a tu medida</h3>
        <div className="columns">
          <div className="padding-400 center-text">
            <p className="fw-semi-bold fs-650 padding-top-900">
              "Adéntrate en el encanto eterno de nuestras joyas de calidad
              excepcional. Cada pieza refleja el amor y la dedicación de una
              familia que ha pasado generaciones perfeccionando su arte.
              Descubre la calidez y la autenticidad en cada detalle, y lleva
              contigo un pedacito de hogar dondequiera que vayas."
            </p>
          </div>
          <div className="padding-400">
            {/* TODO: Agregar imagen, preguntar a tita */}
            <VideoPlayer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;
