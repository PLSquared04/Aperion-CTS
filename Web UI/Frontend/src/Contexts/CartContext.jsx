import { createContext,useState,useContext } from "react";

const CartContext = createContext();
export function CartProvider ( {children} ) {

    const [userCart,setUserCart] = useState([
        {
            id: 1,
            name: "prod1",
            price: "10",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr7BTqTgniAq87NEjjH_ejajGHocgsRABRXA&usqp=CAU",
            quantity : 1
          },
          {
            id: 2,
            name: "prod2",
            price: "20",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr7BTqTgniAq87NEjjH_ejajGHocgsRABRXA&usqp=CAU",
            quantity : 1    
          },
    ]);
    
    const updateCart = (newProd) => {
        setUserCart((prevState) => [...prevState,newProd])
    }

    const toggleViewCart = () => {
        setViewCart((prevState) => !prevState);
    }
    
    const value = {
        userCart,
        updateCart
    }
    return (
        <CartContext.Provider value={value}>
          {children}
        </CartContext.Provider>
      );
}


export function useCart() {
    return useContext(CartContext)
}
