import React from "react";
import styled from "styled-components";

const SearchResult = () => {
  return (
    <Container>
      <Text>검색 결과</Text>
    </Container>
  );
};

const Container = styled.div`
  width: 1200px;
  border: 1px solid black;
`;

const Text = styled.p`
  width: 94px;
  height: 38px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
  font-size: 24px;
  line-height: 38px;
  letter-spacing: -0.0025em;
  color: ${({ theme }) => theme.colors.colorBlack}; ;
`;

export default SearchResult;
