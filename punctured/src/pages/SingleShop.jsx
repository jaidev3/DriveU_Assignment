import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import d from "../db.json";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

function SingleShop() {
  const [data, setData] = useState({});
  const { handleClick } = useContext(CartContext);
  const { id } = useParams();
  useEffect(() => {
    retrivedata();
  }, []);

  const retrivedata = () => {
    d.filter((e) => {
      if (e.id == id) return setData(e);
    });
  };
  console.log(data);
  
  return (
    <Wrapper>
      <div className="nav">
      <Link to="/cart">
        <button>Check Cart</button>
      </Link>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      </div>

      <div className="body">
      <div className="img"><img src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/7/11/0/DOTY0219_Lauren-Nelson-Design_Sunset-Idea-House_1.jpg.rend.hgtvcom.966.644.suffix/1562855447397.jpeg"></img></div>
      <div className="detail">
      <h2>{data.shop_name}</h2>
      <p>Address: {data.address}</p>
      <p>Distance: {data.radius} Km</p>
      <p>Discount: {data.discount} %</p>
      <h3>Services Provided:</h3>
      <p>Tire Puncture : Rs 200</p>
      <p>Car Wash : Rs 100</p>
      
      
      <button onClick={() => { handleClick(data);}}>
        Add to Cart
      </button>
      </div>
        </div>
     
      
    </Wrapper>
  );
}

export default SingleShop;

const Wrapper = styled.div`
  width:70% ;
  border:1px solid black ;
  border-radius: 5px;
  margin:auto ;
  .nav{
    height:50px ;
    align-items:center ;
    background-color:#C5D8A4 ;
  }
.body{
  background-color:#F4FCD9 ;
  display: flex;
  flex-direction:row ;
   
}

.img{
  width:40% ;
  border:1px solid ;
}
img{
  width:100% ;
}
.detail{
  text-align:left ;
  padding:10px ;
}
`