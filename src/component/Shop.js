import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const getdata = async () => {
    const data = await fetch("https://fortnite1.p.rapidapi.com/upcoming/get", {
      method: "GET",
      headers: {
        authorization: "string",
        "x-rapidapi-key": "6485a298ccmsh50c49557d180251p144e64jsn5cd0c942dacd",
        "x-rapidapi-host": "fortnite1.p.rapidapi.com",
      },
    });
    const data1 = await data.json();
    setUpcoming(data1.data);
  };
  const [upcoming, setUpcoming] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      {upcoming.map(item => (
          <Link to = {`/shop/${item.itemId}`}>
             <h1 key={item.itemId}>{item.item.name}</h1>
         </Link>
      ))}
    </div>
  );
};

export default Shop;
