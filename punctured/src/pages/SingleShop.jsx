import React from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom"
function SingleShop() {
  const { id } = useParams();
  return <div>

    <h1>detail of shop:{id}</h1>
    <button>Add to Cart</button>
    <button>Check Cart</button>
    <button>Back to Home</button>
  </div>;
}

export default SingleShop;
