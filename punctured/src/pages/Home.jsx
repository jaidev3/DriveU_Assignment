import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ShopList from "../components/ShopList";
import { Link } from "react-router-dom";
import d from "../db.json";
import ReactPaginate from "react-paginate";

function Home() {
  const [form, setForm] = useState({
    location: "none",
  });
  const [data, setData] = useState([]);
  ////pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(data.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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

      <Navbar>
        <h3>Punctured App</h3>
        <Link to="/cart">
          <button>Cart</button>
        </Link>
      </Navbar>

      <h3>Please select your location:</h3>
      <form action="" onSubmit={handleSubmit}>
        {/* <input
          onChange={handleInput}
          type="number"
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
      </form>

      <List>
        {data
          .filter((e) => {
            if (form.location === "none") return e;
            else if (e.address.includes(form.location)) {
              return e;
            }
          })
          .slice(pagesVisited, pagesVisited + usersPerPage)
          .map((e) => {
            return (
              <>
                <Link style={{ textDecoration: "none" }} to={`/${e.id}`}>
                  {" "}
                  <ShopList value={e} />
                </Link>
              </>
            );
          })}
      </List>

      {/* pagination */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
      />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  width: 90%;
  border: 1px solid black;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-bottom: 50px;
  background-color:#F4FCD9 ;
  
`;
const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-around;
  row-gap: 5px;
  column-gap:5px ;
  margin-top: 10px;
`;
const Navbar = styled.div`
display: flex ;
flex-direction:row ;
justify-content:space-around ;
background-color: #C5D8A4;
align-items:center ;

`;
