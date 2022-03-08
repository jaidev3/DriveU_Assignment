import React from 'react'
import {Link} from 'react-router-dom';
import styled from  'styled-components'

function Checkout() {
  return (
    <Wrapper>
      <Navbar><Link to='payment'><button>Pay Now</button></Link> </Navbar>
      <h1>Checkout page</h1>
      <p>Please Enter your details here</p>
    
    </Wrapper>
  )
}

export default Checkout
const Wrapper = styled.div`
  width: 90%;
  border: 1px solid black;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-bottom: 50px;
  background-color: #f4fcd9;
`;
const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-around;
  row-gap: 5px;
  column-gap: 5px;
  margin-top: 10px;
`;
const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #c5d8a4;
  align-items: center;
`;