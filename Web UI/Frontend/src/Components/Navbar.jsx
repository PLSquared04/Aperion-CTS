import React from "react";
import { useAuth } from "../Contexts/AuthContext";
import { useCart } from "../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
import "../Styles/Navbar.css"

export default function NavBar(props) {
  const { currentUser, logout } = useAuth();
  const history = useNavigate();
  async function handleLogout() {
    try {
      await logout();
      history("/login");
    } catch(err) {
        console.log("Error Occured in logout!", err);
    }
  }
  let {toggleViewCart} = props.props
  function handleCart() {
    toggleViewCart();
  } 
  return (<>
  <div className="LogoContainer">
    <img className="LogoImg" src="https://cdn-icons-png.flaticon.com/512/9355/9355669.png"/>
    <h1 className="LogoText">Apeiron</h1>
  </div>
  <button onClick={handleLogout}>logout</button>
  <button onClick={handleCart}>View Cart</button>
  </>);
}
