import { useEffect, useState } from "react";
import "./product.css";

function Product() {

    const [products, setProducts] = useState({});
    const [productCard, setProductCard] = useState([]);


    async function fetchData() {
        const res = await fetch("http://localhost:8000/getProducts");
        const data = await res.json();
        console.log(data);
        setProducts(data);
        let card = [];
        for (let item in data) {
            card.push(
                <div className="card col-lg-3" key={data[item].id} >
                    <img className="card-img-top" src={data[item].img} height="300vh" />
                    <div className="card-body">
                        <h4 className="card-title">{data[item].item_name}</h4>
                        <h5 className="card-text">Color:{data[item].color}</h5>
                        <h5 className="card-text">Price:${data[item].price}</h5>
                        <div className="d-flex justify-content-between">
                            <button className="btn cart">Add to Cart</button>
                            <button className="btn btn-dark"><i className="fa-solid fa-camera"></i></button>
                        </div>
                    </div>
                </div>)
        };
        setProductCard(card);
    }

    useEffect(() => {
        fetchData();
        /* setProducts(data);
        let card = [];
        for (let item in data) {
            console.log(data[item].img);
            card.push(<div className="card w-25 col-lg-3" key={data[item].id} >
                <img className="card-img-top" src={data[item].img} height="300vh" />
                <div className="card-body">
                    <h4 className="card-title">{item}</h4>
                    <h5 className="card-text">Color:{data[item].color}</h5>
                    <h5 className="card-text">Price:${data[item].price}</h5>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>)
        };
        setProductCard(card); */
    }, [])


    return (
        <div className="product row w-75 d-flex justify-content-around">
            {productCard}
        </div>
    )
}

export default Product;