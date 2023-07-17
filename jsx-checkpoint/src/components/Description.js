import React from "react";
import Product from "./Product";

const Description = () => {
    return (
        <div>
            <p> <span className="desc"> Description:</span> 
            {Product.description}</p>
        </div>
    )
}

export default Description;