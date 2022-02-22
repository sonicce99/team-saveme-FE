import styled from "styled-components";

export const ModelRows = styled.div`
  display: grid;
  grid-template-columns: repeat(600px 400px 200px);
  &:nth-of-type(1) {
    background: ${(props) => props.bgColor};
  }
`;

export const ModelRow = styled.div``;
