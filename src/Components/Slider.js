import React, { useState } from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpg";

function Slider() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className={count == 0 ? "active carousel-item" : "carousel-item"}
          >
            <img
              src={img1}
              className="d-block w-100"
              alt="broken"
              style={{ height: "500px" }}
            />
          </div>
          <div
            className={count == 1 ? "active carousel-item" : "carousel-item"}
          >
            <img
              src={img2}
              className="d-block w-100"
              alt="broken"
              style={{ height: "500px" }}
            />
          </div>
          <div
            className={count == 2 ? "active carousel-item" : "carousel-item"}
          >
            <img
              src={img3}
              className="d-block w-100"
              alt="broken"
              style={{ height: "500px" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
          onClick={() => setCount(count === 0 ? 2 : count - 1)}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
          onClick={() => setCount(count === 2 ? 0 : count + 1)}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
