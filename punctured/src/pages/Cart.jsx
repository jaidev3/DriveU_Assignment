import React from 'react'
import {Link} from 'react-router-dom'
import styled from  'styled-components'
function Cart() {
  return (
    <div>
      <h1>Cart page</h1>
     <Link to="/checkout"><button>Checkout</button></Link> 
     <Link to='/'><button>Back to Home</button></Link> 
    </div>
  )
}

export default Cart
