import { createContext, useState } from "react";
import Cart from "../pages/Cart";
export const CartContext = createContext();


export const CartContextProvider = ({ children }) => {
    const [cart,setData]=useState([]);
    const handleClick=(value)=>{
setData([
    ...cart,value
])
    }
  return <CartContext.Provider value={{cart,handleClick}}>{children}</CartContext.Provider>;
};
