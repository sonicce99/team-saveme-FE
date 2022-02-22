import styled from "styled-components";

const rowWidth = {
  firstWidth: 192,
  width: 271,
  gap: 8,
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
  &:nth-of-type(1) {
    margin-left: 8px;
  }
`;

export const CompareWrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
  height: 200vh; // 임시
  border: 1.5px solid #d8dce4;
  border-radius: 12px;
  overflow-x: auto;
`;

export const Rows = styled.div`
  position: relative;
  display: grid;
  text-align: center;
  font-size: 18px;
  grid-gap: ${rowWidth.gap}px;
  grid-template-columns: repeat(${(props) => props.repeatNum}, auto);
  width: ${(props) =>
    Number(props.repeatNum) * rowWidth.width +
    Number(props.repeatNum) * rowWidth.gap -
    (rowWidth.firstWidth - rowWidth.width)}px;

  &:nth-of-type(1) {
    /*
    overflow scroll이 있는 상태라 sticky가 안먹음..
    position: sticky;
    top: -1px;
    z-index: 99;
    background: orchid;
     */
    background: #f4f6fa;
  }
`;

export const Row = styled.div`
  margin: 1em 0;
  font-size: 21px;
  line-height: 2em;
  width: ${rowWidth.width}px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(1) {
    left: 0;
    width: ${rowWidth.firstWidth}px;
    position: -webkit-sticky;
    position: sticky;
  }
`;
