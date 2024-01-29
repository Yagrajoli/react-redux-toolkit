import React from 'react'
import Card from './component/Card'
import products from './products.json'
import Product from './component/Product'

export default function App() {
  return (
    <>
      <Card/>

      <div className='product-compo'>

      
      {
        products.map((product)=>
          <Product {...product} />
        )
      }

      </div>

      
    </>
  )
}
