import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

function PaymentDetails() {
  return (
    <Wrapper>
      <Navbar> <Link to='/'><button>Back to Home</button></Link> </Navbar>
      <h1>payment details</h1>
    
    </Wrapper>
  );
}

export default PaymentDetails;
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