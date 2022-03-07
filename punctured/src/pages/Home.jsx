import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ShopList from "../components/ShopList";
import d from "../db.json";

function Home() {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(d);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  console.log(data);
  return (
    <Wrapper>
      <h1>Punctured App</h1>
      <h3>Please select your location here:</h3>
      <form action="" onSubmit={handleSubmit}>
        {/* <input
          onChange={handleInput}
          type="text"
          name="distance"
          placeholder="enter distance"
        /> */}

        <select
          onChange={handleInput}
          name="location"
          placeholder="choose location"
        >
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Pune">Pune</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Gurgaon">Gurgaon</option>
          <option value="Chennai">Chennai</option>
          <option value="Kolkata">Kolkata</option>
        </select>
        <input type="submit" value="Enter"></input>
      </form>

      {data.filter((e)=>{
        
      }).map((e) => {
        return (
          <>
            <ShopList value={e} />
          </>
        );
      })}
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid black;
  margin: auto;
  display: flex;
  flex-direction: column; 
 overflow: scroll;
`;
