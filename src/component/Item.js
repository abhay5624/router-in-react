import React from "react";
import { useState, useEffect } from "react";

const Item = ({match}) => {
    const [itm, setItem] = useState({ images: {}});
  const getItem = async () => {
      
      const item = await fetch(`https://fortnite1.p.rapidapi.com/item/get?id=${match.params.any}`, {
	"method": "GET",
	"headers": {
		"authorization": "string",
		"x-rapidapi-key": "6485a298ccmsh50c49557d180251p144e64jsn5cd0c942dacd",
		"x-rapidapi-host": "fortnite1.p.rapidapi.com"
	}
});
 const itemdetails = await item.json();
 const itemDetails = itemdetails.data.item;
 setItem(itemDetails);
 console.log(itemDetails);
};
  useEffect(() => {
    getItem();
  }, []);
  return (
    <div>
  
<h1>{itm.name}</h1>
<p>{itm.description}</p>
<img src={itm.images.background} alt="" />
    </div>
  );
};

export default Item;
