import React from "react";
import Product from "./Product";

function Price({price}) {
    return <p><span className="desc">Price:</span> ${Product.price}</p>
}

export default Price;