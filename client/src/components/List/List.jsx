import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  console.log(sort)
  const subCatsFilter = subCats.map(item => `&[filters][sub_categories][id][$eq]=${item}`).join('');
  const { data, loading, error } = useFetch(
      `/products?populate=*&[filters][categories][id]=
      ${catId}${subCatsFilter.replace(/,/g, '')}
      &[filters][price][$lte]=${maxPrice}` + (sort ? `&sort=price:${sort}` : ``)
  );

  return (
    <div className="list">
      {
        loading
        ? "loading"
        :
            data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
