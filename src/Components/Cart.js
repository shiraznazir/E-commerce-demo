import React, { useEffect } from "react";
import { getCartProducts } from "../api/posts";
import { deleteCartProducts } from "../api/posts";
import { updateCartProducts } from "../api/posts";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/reducer/cartSlice";

function Cart() {
  
  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()

  const fetchData = () => {
    getCartProducts()
      .then((val) => {
        dispatch(setCart(val.data))
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteProduct = (ids) => {
    deleteCartProducts(ids).then((res) => fetchData());
    //setCart(cart.filter((item) => item.id !== ids));
  };
  const updateProducts = (element) => {
    updateCartProducts(element).then((res) => fetchData());
  };
  const decreaseProduct = (element) => {
    if (element.qty > 1) {
      const data = {...element, qty: element.qty-1}
      updateProducts(data);
    }
  };

  const increaseProduct = (element) => {
    const data = {...element, qty: element.qty+1}
    updateProducts(data);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      {cart && cart.length === 0 ? (
        <h1 class="text-center">Add Some Items in Cart</h1>
      ) : (
        <div className="container">
          <div
            className="row"
            style={{ marginTop: "20px", paddingottom: "10px" }}
          >
            {cart.length && cart.map((element) => {
              return (
                <div className="col-md-3  p-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={element.image}
                      className="card-img-top"
                      alt="broken"
                      style={{ height: "220px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{element.name}</h5>
                      <p className="card-text">{element.description}</p>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        onClick={() => decreaseProduct(element)}
                      >
                        -
                      </button>
                      <a>{element.qty}</a>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        onClick={() => increaseProduct(element)}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => deleteProduct(element.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
