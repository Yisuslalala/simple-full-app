import fakeProducts from "../../utilities/fakeProducts";

export const ProductList = () => {
  const listProducts = fakeProducts.map((product) => (
    <li key={product.id}>
      <img src={product.picture} />
      <p>{product.name}</p>
      {console.log(product.picture)}
    </li>
  ));
  return (
    <article>
      <h3>Productos</h3>
      {listProducts}
    </article>
  );
};
