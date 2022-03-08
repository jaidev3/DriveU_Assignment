import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductItem from "../components/ProductItem";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function Cart() {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <Wrapper>
      <Navbar>
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </Navbar>

      <List>
        {cart.map((e, i) => (
          <h3>
            <ProductItem key={e.id} value={e} />
          </h3>
        ))}
      </List>
    </Wrapper>
  );
}

export default Cart;

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
  flex-direction: column;
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
