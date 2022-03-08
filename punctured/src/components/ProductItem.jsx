import React from "react";
import styled from "styled-components";

function ProductItem({ value }) {
  return (
    <Wrapper>
      <div className="img">
        <img src="https://thumbs.dreamstime.com/z/mechanic-working-auto-repair-garage-car-maintenance-76981082.jpg"></img>
      </div>
      <div className="text">
        <h3>{value.shop_name}</h3>
        <p>Service: Tire Puncture</p>
        <p>Price : Rs 100</p>
      </div>
      <button>Delete</button>
    </Wrapper>
  );
}

export default ProductItem;

const Wrapper = styled.div`
  width: 400px;
  height: 100px;
  border: 1px solid black;
  border-radius: 5px;
  margin: auto;
  text-align: left;
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: row;

  .img {
    width: 150px;
    height: 100px;
    border: 1px solid black;
    border-radius: 5px;
  }
  img {
    width: 100%;
  }
  .text > h3 {
    margin: 0;
    margin-left: 5px;
  }
  .text > p {
    margin: 0;
    margin-left: 5px;
  }
`;
