import styled from "styled-components";

export const Modal = styled.aside`
  width: 100%;
  height: 100vh;
  background: #333;
  position: absolute;
  top: 0;
  left: -100%;
  z-index: 10;
  opacity: 0;

  &.on {
    opacity: 1;
    left: 0;
  }
`;

export const ModalWrapper = styled.div`
  width: 1200px;
  height: 880px;
  margin: 0 auto;
  background: #fff;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background-color: #2c3034;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
`;

export const ModalHeader = styled.div`
  height: 97px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  line-height: 38px;
  padding: 40px;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;

export const ModalRowWrapper = styled.div`
  border: 1px solid ${(props) => props.color};
`;

export const ModalRows = styled.div`
  display: grid;
  height: 145px;
  grid-template-columns: repeat(3, auto);
  margin-left: 40px;
`;

export const ModalRow = styled.div`
  position: relative;
  &:nth-of-type(1) {
    width: 660px;
  }
  &:nth-of-type(2) {
    width: 300px;
  }
  &:nth-of-type(3) {
    width: 198px;
    cursor: pointer;
  }
`;

export const RowTitle = styled.span`
  display: block;
  position: absolute;
  width: 100%;
  top: 25px;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
`;

export const RowSubTitle = styled.span`
  display: block;
  position: absolute;
  width: 100%;
  top: 57px;
  font-size: 16px;
  line-height: 25px;
  color: #646464;
`;

export const RowSubEtc = styled.span`
  display: block;
  position: absolute;
  width: 100%;
  top: 98px;
  font-size: 14px;
  line-height: 22px;
  color: #8691a5;
`;

export const RowCompanyName = styled.span`
  display: block;
  position: absolute;
  width: 100%;
  top: 25px;
  font-size: 18px;
  line-height: 28px;
`;

export const RowCompanyInfoBtn = styled.button`
  display: block;
  position: absolute;
  top: 96px;
  border: 1px solid #d8dce4;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 1px 8px;
  font-size: 14px;
  line-height: 22px;
  color: #646464;
`;

export const BsCheckWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;

export const RowCheckBox = styled.div`
  color: ${(props) => props.color};
  background: ${(props) => props.bgColor};
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;
