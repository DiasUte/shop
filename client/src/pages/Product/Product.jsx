import React, {useState} from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import {useParams} from "react-router-dom";

const Product = () => {
    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState("img");
    const [quantity, setQuantity] = useState(1);

    const data = {
        id: 1,
        img: " https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
        img2: " https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
        title: "Long Sleeve Graphic T-shirt",
        isNew: true,
        desc: "Some description",
        oldPrice: 19,
        price: 12
    }

    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img
                        onMouseEnter={(e) => setSelectedImg("img")}
                        src={
                            data?.img
                        }
                        alt=""
                    />
                    <img
                        src={
                            data?.img2
                        }
                        alt=""
                        onMouseEnter={(e) => setSelectedImg("img2")}
                    />
                </div>
                <div className="mainImg">
                    <img
                        src={
                            data[selectedImg]
                        }
                        alt=""
                    />
                </div>
            </div>
            <div className="right">
                <h1>{data?.title}</h1>
                <span className="price">${data?.price}</span>
                <p>{data?.desc}</p>
                <div className="quantity">
                    <button
                        onClick={() =>
                            setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                        }
                    >
                        -
                    </button>
                    {quantity}
                    <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                </div>
                <button
                    className="add">
                    <AddShoppingCartIcon/> ADD TO CART
                </button>
                <div className="links">
                    <div className="item">
                        <FavoriteBorderIcon/> ADD TO WISH LIST
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr/>
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr/>
                    <span>ADDITIONAL INFORMATION</span>
                    <hr/>
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    );
};

export default Product;
