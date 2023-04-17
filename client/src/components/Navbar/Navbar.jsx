import React, {useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom";
import engImage from "../../../public/images/en.png"

import style from "./Navbar.module.scss"
import Cart from "../Cart/Cart.jsx";
import {useSelector} from "react-redux";

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const products = useSelector((state) => state.cart.products);

    return (
        <div className={style.navbar}>
            <div className={style.wrapper}>
                <div className={style.left}>
                    <div className={style.item}>
                        <img src={engImage} alt=""/>
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className={style.item}>
                        <span>USD</span>
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className={style.item}>
                        <Link className="link" to="/products/1">Men</Link>
                    </div>
                    <div className={style.item}>
                        <Link className="link" to="/products/2">Women</Link>
                    </div>
                    <div className={style.item}>
                        <Link className="link" to="/products/3">Children</Link>
                    </div>
                </div>
                <div className={style.center}>
                    <Link className="link" to="/">UTEBAYEV</Link>
                </div>
                <div className={style.right}>
                    <div className={style.item}>
                        <Link className="link" to="/">About</Link>
                    </div>
                    <div className={style.item}>
                        <Link className="link" to="/">Homepage</Link>
                    </div>
                    <div className={style.item}>
                        <Link className="link" to="/">Contact</Link>
                    </div>
                    <div className={style.item}>
                        <Link className="link" to="/">Stores</Link>
                    </div>
                    <div className={style.icons}>
                        <SearchIcon/>
                        <PersonOutlineOutlinedIcon/>
                        <FavoriteBorderOutlinedIcon/>
                        <div className={style.cartIcon} onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon/>
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart/>}
        </div>
    );
};

export default Navbar;