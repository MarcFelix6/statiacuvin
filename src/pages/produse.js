import { useContext } from "react";
import Card from "../components/card/card";
import { products } from "../data/data";
import { Context } from "../context/store";

const Products = ({ filterTerm = "Alb" }) => {
  const { cartItems, setCartItems } = useContext(Context);

  const handleAddProdCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "Center" }}
    >
      {products
        .filter((product) => product.culoare === filterTerm)
        .map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.nume}
            tipe={product.tip}
            quantity={product.Cantitate}
            price={product.pret}
            handleOnClick={() => handleAddProdCart(product)}
            description={product.description}
            recomendedFood={product["Mancaruri recomandate"]}
            alcoolVolum={product["Volum alcoolic"]}
          />
        ))}
    </div>
  );
};

export default Products;
