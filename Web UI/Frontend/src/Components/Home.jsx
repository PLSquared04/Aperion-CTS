import NavBar from "./Navbar";
import Products from "./Products";
import Cart from "./Cart";
import { CartProvider } from "../Contexts/CartContext";
import { useState } from "react";
import { useAuth } from "../Contexts/AuthContext";

export default function Home() {
  const {currentUser} = useAuth();
  const [viewCart, setViewCart] = useState(false);
  console.log("UID:\t",currentUser.uid);
  function toggleViewCart() {
    setViewCart((prevState) => !prevState);
  }
  return (
    <>
      <NavBar props={{toggleViewCart }} />
      <CartProvider>
        <Products />
        {viewCart && <Cart props={{toggleViewCart }}/>}
      </CartProvider>
    </>
  );
}
