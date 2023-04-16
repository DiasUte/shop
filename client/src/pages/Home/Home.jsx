import React from 'react';
import Slider from "../../components/Silder/Slider.jsx";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts.jsx";

const Home = () => {


    return (
        <div>
            <Slider/>
            <FeaturedProducts type={"Popular Right Now"}/>
            <FeaturedProducts type={"Trending"}/>
        </div>
    );
};

export default Home;