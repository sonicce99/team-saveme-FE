import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import CompareButton from "./CompareButton";

const Main = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  return (
    <>
      <Image src={logo} alt="logoImage" />
      <Container>
        <SearchBar setData={setData} page={page} data={data} />
        {data.length === 0 ? null : (
          <SearchResult page={page} setPage={setPage} data={data} />
        )}
        <CompareButton />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 1025px;
  margin-top: 60px;
  position: relative;
  left: 50%;
  margin-left: -497.5px;
`;

const Image = styled.img`
  width: 278px;
  height: 54px;
  margin-top: 100px;
  margin-left: 220px;
  cursor: pointer;
`;

export default Main;
