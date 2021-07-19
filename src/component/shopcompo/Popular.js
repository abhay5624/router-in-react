import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Popularitem from "./popularcompo/Popularitem";
const Popular = () => {
  const [item, setItem] = useState([]);
  let i = 0;
  //get popular item
  const getPopularItem = async () => {
    const data = await fetch("https://fortnite1.p.rapidapi.com/items/popular", {
      method: "GET",
      headers: {
        authorization: "string",
        "x-rapidapi-key": "6485a298ccmsh50c49557d180251p144e64jsn5cd0c942dacd",
        "x-rapidapi-host": "fortnite1.p.rapidapi.com",
      },
    });
    const data1 = await data.json();
    setItem(data1.entries);
    console.log(data1.entries);
  };
  useEffect(() => {
    getPopularItem();
  }, []);
  const nullValue = [];
  console.log(nullValue);
  return (
    <div>
        <h2>Popular items in the past 24 hours</h2>
      <div className="flexbox">
      
        {item.map((items) => (
          <div className="Popularitems">
            <div>
              <Popularitem detail={items.entries} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Popular;
