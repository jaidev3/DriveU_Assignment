import React, { useEffect, useState,useContext} from "react";
import styled from "styled-components";
import d from "../db.json";
import { useParams, Link } from "react-router-dom";
import { CartContext } from '../context/cartContext';

function SingleShop() {
  const [data,setData]=useState({});
  const {handleClick} =useContext(CartContext)


  useEffect(()=>{
    retrivedata()
  },[])
  const retrivedata=()=>{
    d.filter((e)=>{
if(e.id==id) return setData(e)
    })
   
  }
  console.log(data)
  const { id } = useParams();
  return (
    <div>
      <h1>detail of shop:{id}</h1>
      <button onClick={()=>{handleClick(data)}}>Add to Cart</button>
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
