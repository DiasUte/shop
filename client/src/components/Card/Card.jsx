import React from "react";
import style from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  console.log(item);
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className={style.card}>
        <div className={style.image}>
          {item?.isNew && <span>New Season</span>}
          <img
            src={item.img}
            alt=""
            className={style.mainImg}
          />
          <img
            src={item.img2
            }
            alt=""
            className={style.secondImg}
          />
        </div>
        <h2>{item?.title}</h2>
        <div className={style.prices}>
          <h3>${item.oldPrice || item?.price + 20}</h3>
          <h3>${item?.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
