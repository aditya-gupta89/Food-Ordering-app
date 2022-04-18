import React from "react";
import Cart from "../Cart/Cart";
const CartContext=React.createContext(
    {
        items:[],
        totalAmount:0,
        addItem: (item)=>{},
        removeItem:(id)=>{},
        clearCart:()=>{},
    }
)
export default CartContext