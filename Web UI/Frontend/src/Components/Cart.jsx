import { useCart } from "../Contexts/CartContext";
import "../Styles/Cart.css";

export default function Cart(props) {
  let { userCart } = useCart();
  let tempUserCart = userCart;
  tempUserCart = tempUserCart.map((prod) => (
    <div className="prodContainer">
      <img className="ImageContainer" src={prod.image} />
      <div className="dataContainer">
        <h1 className="dataName">{prod.name}</h1>
        <h1 className="dataPrice">{prod.price}</h1>
        <h1 className="dataQty">{prod.quantity}</h1>
      </div>
    </div>
  ));
  let { toggleViewCart } = props.props;
  function closeCartWindow() {
    toggleViewCart();
  }
  return (
    <>
      <div className="cartContainerOuter">
        <button className="cartCloser" onClick={closeCartWindow}>X</button>
        <div className="cartContainer">
          <h1 className="cartHeader">CART</h1>
          {tempUserCart}
        </div>
      </div>
    </>
  );
}
