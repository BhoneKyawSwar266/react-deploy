// ProductDisplay.js

import React, { useContext, useEffect, useState } from "react";
import "../ProductDisplay/ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart, all_product } = useContext(ShopContext);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (product && product.id) {
      const productInfo = all_product.find((item) => item.id === product.id);
      if (productInfo) {
        setDescription(productInfo.description);
      }
    }
  }, [product, all_product]);

  // Check if product is undefined or null
  if (!product) {
    return <div>No product data available</div>;
  }

  const { name, image, old_price, new_price } = product;

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {/* Check if image is available before rendering */}
        </div>
        <div className="productdisplay-main-img">
          {/* Check if image is available before rendering */}
          {image && (
            <img src={image} alt="" className="productdisplay-main-img" />
          )}
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{name}</h1>

        <div className="productdisplay-right-description">{description}</div>
        <div className="productdisplay-right-prices">
          {old_price ? (
            <div className="productdisplay-right-prices-old">
              {old_price} MMK
            </div>
          ) : null}

          <div className="productdisplay-right-prices-new">{new_price} MMK</div>
        </div>

        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          {" "}
          <span>Category : </span>
          {product.category}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
