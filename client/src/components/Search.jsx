import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const Search = () => {
  return (
    <Container>
      <Div>
        <Image src={logo} />
        <SearchBar />
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
