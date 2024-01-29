import React from 'react'
import { useSelector } from 'react-redux'
import { getItemSelector } from '../redux/cartSlice/cartSlice';


export default function Card() {
    const item = useSelector(getItemSelector);
    const total = item.reduce((a,b)=>a+b.price, 0)

    console.log(item);
   
  return (
    <>
      <div className="card-top">
        <h2>Total Item : {item.length} ( Rs.{total}) /-</h2>
      </div>
    </>
  )
}
