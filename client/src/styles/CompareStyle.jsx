import styled from "styled-components";

const rowWidth = {
  width: 382,
  gap: 27,
};

export const Header = styled.div`
  position: relative;
  height: 238px;
  width: 1200px;
  margin: 0 auto;
`;

export const Logo = styled.img`
  display: block;
  position: absolute;
  top: 53px;
  width: 125px;
  height: 24px;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  top: 117px;
  width: 100%;
`;

export const FlexTitleBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const Title = styled.span`
  display: block;
  font-weight: bold;
  font-size: 24px;
`;

export const TitleBtn = styled.button`
  color: ${(props) => props.color};
  background: ${(props) => props.bgColor};
  width: 175px;
  height: 44px;
  padding: 8px 54px;
  border-radius: 10px;
  margin-left: 12px;
`;

export const CompareHeaderWrapper = styled.div`
  position: absolute;
  top: 185px;
  width: 100%;
`;

export const CompareFlex = styled.div`
  display: flex;
  margin-left: 10px;
  justify-content: left;
  align-items: center;

  span {
    display: block;
    color: #646464;

    &:after {
      content: "▷";
      margin-left: 9px;
      color: ${(props) => props.color};
    }
  }
`;

export const CategoryBtn = styled.button`
  height: 33px;
  border: 1.5px solid ${(props) => props.color};
  box-sizing: border-box;
  border-radius: 6px;
  margin: 0 4px;
  padding: 0 10px;
  color: ${(props) => props.color};
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
