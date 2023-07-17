import React from "react";
import Product from "./Product";

const Name = () => {
    return (
        <div>
            <p><span className="desc">Name:</span> {Product.name}</p>
        </div>
    )
}

export default Name;