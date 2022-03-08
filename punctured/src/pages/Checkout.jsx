import React from 'react'
import {Link} from 'react-router-dom';
import styled from  'styled-components'

function Checkout() {
  return (
    <div>
      <h1>checkout page</h1>
   <Link to='payment'><button>Pay Now</button></Link>  
    </div>
  )
}

export default Checkout
