import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const Search = () => {
  const [data, setData] = useState([]);

  return (
    <Container>
      <Div>
        <Image src={logo} />
        <SearchBar setDatafnc={setData} />
      </Div>
      <SearchResult />
    </Container>
  );
};

const Container = styled.div`
  width: 1200px;
  margin: ${({ theme }) => theme.margins.marginCenter};
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 24px;
`;

const Image = styled.img`
  width: 125px;
  height: 24px;
  margin-right: 50px;
  cursor: pointer;
`;

export default Search;
