import React,{ useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Link } from "react-router-dom";
import { getCartProducts } from '../api/posts'
import { useSelector } from "react-redux";


function Navbar() {

  const cart = useSelector((state) => state.cart.cart);
  // const dispatch = useDispatch();
  const  [count,setCount] = useState(0)
  const fetchData = () => {
    getCartProducts()
      .then((val) => {
        setCount(val.data.length)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, [cart]);

  return (
    <div className="App-header sticky">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <h3>Logo</h3>
          </div>
          <div className="col-md-6">
            <ul className="d-inline-flex">
              <li className="nav-item">
                <Link to="/" style={{ color: "#fff" }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">About</li>
              <li className="nav-item">Contact Us</li>
              <li className="nav-item">Products</li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <form className="d-flex d-inline-flex">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
                <div className="col-md-5">
                <button type="button" class="btn btn-secondary ms-2">
                      <Link to="/cart" style={{ color: "#fff" }}>
                        Cart {count}
                      </Link>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
