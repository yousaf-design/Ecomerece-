import React, { createContext, useState } from 'react';


export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  // Function to calculate total cart items
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((acc, item) => acc + item, 0);
  };

  // Example of adding to cart
  const addToCart = (id) => {
    setCartItems(prevItems => ({
      ...prevItems,
      [id]: (prevItems[id] || 0) + 1
    }));
  };

  // Example of removing from cart
  const removeFromCart = (id) => {
    setCartItems(prevItems => {
      const updatedItems = { ...prevItems };
      if (updatedItems[id] > 0) {
        updatedItems[id] -= 1;
      }
      return updatedItems;
    });
  };

  return (
    <ShopContext.Provider value={{ cartItems, getTotalCartItems, addToCart, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
}
  export default ShopProvider;

