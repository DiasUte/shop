import React from 'react';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss"

const Cart = () => {

    const products = [
        {
            id: 1,
            img: " https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            desc: "Some description",
            quantity: 1,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: " https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            desc: "Some description",
            quantity: 2,
            oldPrice: 19,
            price: 52
        },
    ]

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total.toFixed(2);
    };

    return (
        <div className="cart">
            <h1>Products in your cart</h1>
            {products?.map((item) => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt=""/>
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">
                            {item.quantity} x ${item.price}
                        </div>
                    </div>
                    <DeleteOutlinedIcon
                        className="delete"
                    />
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">
        Reset Cart
      </span>
        </div>
    );
};

export default Cart;