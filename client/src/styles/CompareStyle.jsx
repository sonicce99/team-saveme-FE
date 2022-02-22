import styled from "styled-components";

const rowWidth = {
  width: 382,
  gap: 27,
};

// 임시
export const Header = styled.div`
  height: 300px;
  background: slategray;
`;

export const CompareWrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
  height: 200vh; // 임시
  border: 1px solid tomato;
  overflow-x: auto;
`;

export const Rows = styled.div`
  margin: 3rem 0;
  position: relative;
  display: grid;
  grid-gap: ${rowWidth.gap}px;
  grid-template-columns: repeat(${(props) => props.repeatNum}, 1fr);
  background-color: gainsboro;
  width: ${(props) =>
    Number(props.repeatNum) * rowWidth.width +
    Number(props.repeatNum) * rowWidth.gap}px;

  &:first-child {
    position: sticky;
    top: -1px;
    z-index: 99;
    background: orchid;
  }
`;

export const Row = styled.div`
  margin: 1em 0;
  font-size: 14px;
  line-height: 2em;
  width: ${rowWidth.width}px;
  background-color: aliceblue;
  &:nth-child(1) {
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    background: gold;
  }
`;
