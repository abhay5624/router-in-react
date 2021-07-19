import React from "react";
import { useState, useEffect } from "react";


const Item = ({match}) => {
    const [itm, setItem] = useState({ images: {},ratings: {}});
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
    <div style={{backgroundColor: `black`, color: 'white'}}>
  
<h1 style={{margin: '0px',padding: '21.440px',textAlign: 'center' }}>{itm.name}</h1>
<p>{itm.description}</p>
<div>
<h3>Rating:</h3>
<ul style={{listStyle: 'none'}}>
  <li>Stars: {itm.ratings.avgStars}</li>
  <li>Values: {itm.ratings.numberVotes}</li>
  <li>Points {itm.ratings.totalPoints}</li>
</ul>
</div>
<h3>Rarity: {itm.rarity}</h3>
<h3>{itm.upcoming? 'Upcoming soon': ''}</h3>
<img src={itm.images.background} alt="" />
    </div>
  );
};

export default Item;
