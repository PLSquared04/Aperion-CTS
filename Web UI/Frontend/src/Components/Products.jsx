import { useCart } from "../Contexts/CartContext";
import { useEffect,useState } from "react";
import "../Styles/Products.css";
export default function Products() {
  let { updateCart } = useCart();
  let [products,setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const res = await fetch("http://localhost:8000/getProducts");
      const data = await res.json();
      let listOfProducts = data;
      listOfProducts = listOfProducts.map((prod) => {
        return (
          <div className="prodContainer">
            <img className="ImageContainer" src={prod.img} />
            <div className="dataContainer">
              <h1 className="dataName">{prod.item_name}</h1>
              <h1 className="dataPrice">{prod.price}</h1>
              <h1 className="dataPrice">{prod.stock}</h1>
              <h1 className="dataDate">
                {new Date(prod.manufacture_date).toDateString()}
              </h1>
              <h1 className="dataDate">
                {new Date(prod.expiry_date).toDateString()}
              </h1>
            </div>
            <button onClick={() => addProdToCart({ ...prod, quantity: 1 })}>
              Add to Cart
            </button>
          </div>
        );
      });
      setProducts(listOfProducts)
    }
    getProducts();
  });
  const addProdToCart = (product) => {
    updateCart(product);
  };
  return <div className="superContainer">{products}</div>;
}
/*
<div class="ImageContainer" style="background-image: url(&quot;https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr7BTqTgniAq87NEjjH_ejajGHocgsRABRXA&amp;usqp=CAU&quot;);"></div>*/
