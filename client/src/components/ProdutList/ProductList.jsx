import realPhotos from "../../utilities/realPhotos";

import "./ProductList.css";

export const ProductList = () => {
  const listProducts = realPhotos.map((product) => (
    <div key={product.id} className="pl-item">
      <img src={product.photo} className="pl-image" />
      <div className="pl-text">
        <p className="pl-name">{product.name}</p>
        {console.log(product.photo)}
        <p className="pl-price">{product.price}</p>
      </div>
    </div>
  ));
  return (
    <article className="pl padding-block-900">
      <div className="pl-title">
        <h3 className="secondary-heading fw-semi-bold">Productos</h3>
      </div>
      <div className="pl-images">{listProducts}</div>
    </article>
  );
};
