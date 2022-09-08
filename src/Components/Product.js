import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { insertCart } from '../api/posts'
import { getProducts } from '../api/posts';
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../store/reducer/productSlice";

function Product() {
  
  const [cart, setCart] = useState([]);
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()
  // const [products, setProducts] = useState([]);

    useEffect(()=>{
      getProducts().then((val)=>{
        console.log(val);
        dispatch(setProduct(val.data))
        // setProducts(val.data)
      }).catch((err)=>{
        console.log(err.message);
      })
    }, [products])

  const addToCart = (element) => {
   
    var arr = [...cart];
    let newElement = { ...element, qty: 1 };
    insertCart(newElement).then((res)=> console.log(res))
  };

  console.log("00000000000000000 : ", products)
  return (
    <div>
      <div className="container">
        <div
          className="row"
          style={{ marginTop: "20px", paddingottom: "10px" }}
        >
          {products && products.map((element) => {
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
                    <button type="button" class="btn btn-secondary" onClick={()=> addToCart(element)} >
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
