import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Popularitem = ({detail}) => {
    const [item, setItem] = useState({})
    console.log(detail)
    return (
        <div className="itemList">
       
{detail.map(item => (
    <div className="item">
    <Link  to = {`/shop/${item.identifier}`}>
 
    <img src={item.images.transparent} alt={item.name}/>
    <h3>{item.name}</h3>
    </Link>
    </div>
))}

        </div>
    )
}

export default Popularitem
