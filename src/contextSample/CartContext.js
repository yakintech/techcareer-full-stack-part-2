import { createContext, useState } from "react";

//öncelikle boş bir context oluşturdum...
export const CartContext = createContext(null);


export const CartProvider = ({children}) => {

    //GLOBAL state tanımlıyorum
    const [cart, setcart] = useState([]);

    return <CartContext.Provider value={{cart,setcart}}>{children}</CartContext.Provider>

}