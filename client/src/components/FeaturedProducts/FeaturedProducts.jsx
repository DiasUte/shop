import React, {useEffect, useRef, useState} from "react";
import Card from "../Card/Card.jsx";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img: " https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
            img2: " https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: " https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
            img2: " https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 3,
            img: " https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
            img2: " https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
            title: "Long Sleeve Graphic T-shirt",
            isNew: false,
            oldPrice: 19,
            price: 12
        }
        , {
            id: 4,
            img: " https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
            img2: " https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 5,
            img: " https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
            img2: " https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
            title: "Long Sleeve Graphic T-shirt",
            isNew: false,
            oldPrice: 19,
            price: 12
        },
        {
            id: 6,
            img: " https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
            img2: " https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600 ",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12
        }
    ]
    const [scrollPosition, setScrollPosition] = useState(0);
    const ref = useRef();

    const [cards, setCards] = useState([...data, ...data]);
    useEffect(() => {
        const container = ref.current;
        const handleScroll = () => {
            const maxScrollPosition =
                container?.scrollWidth - container?.clientWidth - 1; // subtract 1 to account for possible floating point precision errors
            const currentPosition = container?.scrollLeft;

            if (currentPosition === maxScrollPosition) {
                setCards((prevCards) => [...prevCards, ...data]); // append new set of cards to the end of the container
            }

            setScrollPosition(currentPosition);
        };

        container.addEventListener("scroll", handleScroll);

        return () => container.removeEventListener("scroll", handleScroll);
    }, [cards, data]);
    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type}</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                    lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas.
                </p>
            </div>
            <div className="bottom">
                <button
                    disabled={scrollPosition === 0}
                    onClick={() => {
                        ref.current?.scrollBy({
                            left: -ref.current?.clientWidth,
                            behavior: "smooth",
                        });
                    }}
                >
                    {'<'}
                </button>
                <div className="cardWrapper" ref={ref}>
                    {data.map((item) => (
                        <Card item={item} key={item.id} />
                    ))}
                </div>
                <button
                    disabled={
                        scrollPosition ===
                        ref.current?.scrollWidth -
                        ref.current?.clientWidth
                    }
                    onClick={() => {
                        ref.current?.scrollBy({
                            left: ref.current?.clientWidth,
                            behavior: "smooth",
                        });
                    }}
                >
                    {'>'}
                </button>
            </div>
        </div>
    );
};

export default FeaturedProducts;
