import realPhotos from "../../utilities/realPhotos";

import "./ProductList.css";

export const ProductList = () => {
  const listProducts = realPhotos.map((product) => (
    <div key={product.id} className="pl-item">
      <img src={product.photo} className="pl-image" />
      <div className="pl-text padding-top-400">
        <p className="pl-name">{product.name}</p>
        {console.log(product.photo)}
        <p className="pl-price">{product.price} mxn</p>
      </div>
    </div>
  ));
  return (
    <article className="pl">
      <div className="pl-title">
        <h3 className="secondary-heading fw-semi-bold ">Productos</h3>
      </div>
      <div className="pl-images padding-top-500">{listProducts}</div>
    </article>
  );
};
