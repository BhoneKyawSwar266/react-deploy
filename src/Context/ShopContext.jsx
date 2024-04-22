// ShopContext.js

import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 1; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch("https://vicherserver.onrender.com/allproducts")
      .then((res) => res.json())
      .then((data) => setAll_Product(data))
      .catch((error) => console.error('Error fetching all products:', error));
  }, []);

  const addToCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));

    if (localStorage.getItem('auth-toke')) {
      // Perform additional actions if user is authenticated
    }
  };

  const removeCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = all_product.find((product) => product.id === Number(item));
        if (iteminfo) {
          totalAmount += iteminfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotlaCartItem = () => {
    let totalItem = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeCart,
    getTotalCartAmount,
    getTotlaCartItem
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
