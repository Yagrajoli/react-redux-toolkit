import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cartSlice/cartSlice'


export default function Product(props) {

    const dispatch = useDispatch()

   
  return (
    <>
      <div className="product-title">
      
    <div className="card" style={{width : "18rem"}}>
        <img src={props.image} className="card-img-top" alt="random img"/>
        <div className="card-body" key={props.id}>
          <h5 className="card-title">Name:{props.productName}</h5>
          <p className="card-text">Price : {props.price}</p>
          <a href="#" className="btn btn-primary" onClick={(e)=>dispatch(addItem({name:props.productName, price:props.price}))}>Go somewhere</a>
        </div>
      </div>
      </div>
    </>
  )
}
