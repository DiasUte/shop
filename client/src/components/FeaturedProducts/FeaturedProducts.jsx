import React, {useEffect, useRef, useState} from "react";
import Card from "../Card/Card.jsx";
import "./FeaturedProducts.scss";
import axios from "axios";

const REACT_APP_API_TOKEN = "4cc31aef95a3cff3791f49af907bcb7684294ad9b86ab88763c677c41aa9f7532d7b77f4565cc2a529a3faaaf8003600f641dfe9d2c054cb4c4786b920b21a6fc4b311b6c2fe58d1dd971b2c8ccc3a24043ada0e642d8e9344e320a39af1034c0f52eb8a478fd023bb160715f0e5ee3c8a0f681e9b58c36b8fa14666c44228dc";
const REACT_APP_API_URL = "http://localhost:1337/api";

const FeaturedProducts = ({type}) => {


    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(REACT_APP_API_URL + "/products/?populate=*", {
                    headers: {
                        Authorization: "bearer " + REACT_APP_API_TOKEN,
                    }
                })
                setData(response.data.data)
            } catch (e) {
                console.log(e)
            }
        }

        fetchData();
    }, [])

    console.log(data)

    // console.log(products)

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

        container?.addEventListener("scroll", handleScroll);

        return () => container?.removeEventListener("scroll", handleScroll);
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
                        <Card item={item} key={item.id}/>
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
