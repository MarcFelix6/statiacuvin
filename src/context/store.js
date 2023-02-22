import { createContext, useState, useEffect } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
  const storedData = sessionStorage.getItem("cart");
  const storedItems = storedData ? JSON.parse(storedData) : [];     

  const [cartItems, setCartItems] = useState(storedItems);
  const [showToast, setShowToast] = useState({
    show: false,
    title: "Test message",
    message: "Message delivered with success",
    position: "top-end",
    bg: "success",
  });

  useEffect(() => {
        sessionStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  return <Context.Provider value={{cartItems, setCartItems, showToast, setShowToast}}>{children}</Context.Provider>;
};

export default Provider;


