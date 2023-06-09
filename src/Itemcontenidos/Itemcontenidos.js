import React, { useState } from 'react'

const Itemcontenidos = ({stock, initial, onadd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity -1)
        }
    }

  return (
    <div className='Counter'>
        <div className='Controls'>
            <button className="Button" onClick={decrement}>-</button>
            <h5 className='Number'>{quantity}</h5>
            <button className="Button" onClick={increment}>+</button>
        </div>
    <div>
        <button className="Button" onClick={()=> onadd(quantity)} disabled={stock}>
            Agregar al carrito
        </button>
    </div>
    </div>
  )
}