import React, { useState, useEffect } from "react";
import Product from "./Product"
import Slider from "./Slider";

function Home(){

    return(
        <div>
            <Slider />
            <Product />
        </div>
    )
}

export default Home;