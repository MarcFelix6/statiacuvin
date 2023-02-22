import { useState, useContext, useEffect } from "react";
import { Context } from "../context/store";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./cart.css";
import Formular from "../components/cartForm/form";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(Context);
  const [cartList, setCartList] = useState([]);


  const removeItemFromCart = (idx) =>
    setCartItems((cartItems) =>
      cartItems.filter((cartItems, index) => index !== idx)
    );

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    const newList = [];
    cartItems.forEach((product) => {
      const found = newList.find((obj) => obj?.id === product.id);
      const obj = { ...product };
      if (found) {
        found.qty++;
      } else {
        obj.qty = 1;
        newList.push(obj);
      }
    });
    setCartList(newList);
  }, [cartItems]);

  const handleIncQty = (productItem) => {
    productItem.qty++;
    const newCartList = [...cartList];
    setCartList(newCartList);
  };

  const handleDecQty = (productItem) => {
    if (productItem.qty === 1) return;
    productItem.qty--;
    const newCartList = [...cartList];
    setCartList(newCartList);
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center mx-auto mt-4">
        <div className="align-items-center  ">
          <h3>Cosul tau este gol</h3>
          <button onClick={() => navigate("/")}>Magazin</button>
          <h6>Intra pe prima pagina si selecteaza vinul preferat</h6>
        </div>
      </div>
    );
  }

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <table className="table table-light table-hover m-0 p-3">
            <tbody>
              {cartList.map((cartItem, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={cartItem.image} style={{ height: "6rem" }} />
                    </td>

                    <td>{cartItem.nume}</td>
                    <td>{cartItem.pret}</td>
                    <td>Cantitate {cartItem.Cantitate}</td>
                    <td>
                      <div>{cartItem.qty}.buc</div>
                    </td>
                    <td>
                      <button
                        className="btn btn-info ms-3"
                        onClick={() => handleIncQty(cartItem)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-info ms-3"
                        onClick={() => handleDecQty(cartItem)}
                      >
                        -
                      </button>
                      <button
                        className="btn btn-danger ms-4"
                        onClick={() => removeItemFromCart(index)}
                      >
                        Sterge
                      </button>
                    </td>
                    <td>{(cartItem.pret * cartItem.qty).toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto " style={{ marginTop: "2rem" }}>
          <button className="btn btn-danger ms-2" onClick={clearCart}>
            Goleste Cosul
          </button>
          {/* <Link to="/formular"> <button className="btn btn-primary ms-2">Cumpara</button> </Link> */}
        </div>
        <div className="col-auto ms-auto " style={{ marginTop: "2rem" }}>
          <h2>
            Total{" "}
            {cartList.reduce((acc, prod) => acc + prod.pret * prod.qty, 0)}
          </h2>
        </div>
        <div>
          <Formular message={cartList} onEmailSuccess={clearCart} />
        </div>
      </div>
    </section>
  );
};

export default Cart;
