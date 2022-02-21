import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import SearchBar from "./SearchBar";

const Main = () => {
  return (
    <>
      <Image src={logo} alt="logoImage" />
      <SearchBar main />
    </>
  );
};

const Image = styled.img`
  width: 278px;
  height: 54px;
  margin-top: 100px;
  margin-left: 220px;
`;

export default Main;
