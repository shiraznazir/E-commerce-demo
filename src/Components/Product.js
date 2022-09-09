import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { insertCart } from "../api/posts";
import { getProducts } from "../api/posts";
import { getCartProducts } from "../api/posts";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../store/reducer/productSlice";
import { setCart } from "../store/reducer/cartSlice";
import { getCardProductById } from "../api/posts";
import { updateCartProducts } from "../api/posts";

function Product() {
  //const [cart, setCart] = useState([]);
  const cart = useSelector((state) => state.cart.cart);
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);

  const fetchData = () => {
    getProducts()
      .then((val) => {
        console.log(val);
        dispatch(setProduct(val.data));
        // setProducts(val.data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const fetchCartData = () => {
    getProducts()
      .then((val) => {
        //console.log(val);
        dispatch(setCart(val.data));
        //console.log("insert2")
        // setProducts(val.data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
    //fetchCartData();
  }, []);

  const addToCart = (element) => {
    //console.log("test", getCardProductById(element.id));
    getCardProductById(element.id)
      .then((val) => {
        val.data.qty = val.data.qty + 1;
        //console.log("ooooooooooooooooooooo :- ", val.data);
        updateCartProducts(val.data).then((res) => fetchCartData());
      })
      .catch((err) => {
        console.log(err.message);
        let newElement = { ...element, qty: 1 };
        insertCart(newElement).then((res) => {
          //console.log("insert1")
          fetchCartData();
        });
      });
    //   if (typeof(element.qty) !== 'undefined') {
    //     console.log("defined",typeof(element.qty))

    //   }
  };

  return (
    <div>
      <div className="container">
        <div
          className="row"
          style={{ marginTop: "20px", paddingottom: "10px" }}
        >
          {products &&
            products.map((element) => {
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
                        onClick={() => addToCart(element)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Product;
