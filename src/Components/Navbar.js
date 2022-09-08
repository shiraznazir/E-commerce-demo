import React,{ useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Link } from "react-router-dom";
import { getCartProducts } from '../api/posts'

function Navbar() {

  const [cartCount, setCartCount] = useState([]);

  useEffect(()=>{
    getCartProducts().then((val)=>{
      //console.log("Card Data :- ", val.data);
      setCartCount(val.data)
    }).catch((err)=>{
      console.log(err.message);
    })
  }, [])
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
                        Cart {cartCount.length}
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
