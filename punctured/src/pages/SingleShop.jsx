import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
function SingleShop() {
  const { id } = useParams();
  return (
    <div>
      <h1>detail of shop:{id}</h1>
      <button>Add to Cart</button>
      <Link to="/cart">
        <button>Check Cart</button>
      </Link>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default SingleShop;
