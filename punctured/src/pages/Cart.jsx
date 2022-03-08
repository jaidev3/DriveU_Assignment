import React from 'react'
import {Link} from 'react-router-dom'
import styled from  'styled-components';
import ProductItem from '../components/ProductItem';
import {useContext} from "react";
import { CartContext } from '../context/cartContext';

function Cart() {
  const {cart} =useContext(CartContext);
  console.log(cart)
  return (
    <div>
      {cart.map((e)=>
        <h3><ProductItem key={e.id} value={e}/></h3>
      )}
      
     <Link to="/checkout"><button>Checkout</button></Link> 
     <Link to='/'><button>Back to Home</button></Link> 
    </div>
  )
}

export default Cart
