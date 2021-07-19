import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Upcoming = () => {
    const [upcoming, setUpcoming] = useState([ ]);
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
    useEffect(() => {
        getdata();
    }, []);
    return (
        <div>
          
      <h1>Upcoming Item</h1>
      <div className="flexwrap">
      {upcoming.map(item => (
        <div className="item">
          <Link to = {`/shop/${item.itemId}`} >
            <img src={item.item.images.icon} alt={item.item.name}/>
             <h3 key={item.itemId}>{item.item.name}</h3>
         </Link>
         </div>
             ))} 
             </div>  
        </div>
    )
}

export default Upcoming
