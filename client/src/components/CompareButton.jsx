import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CompareButton = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Button onClick={() => navigate("/compare")}>
        <Text>관심공고 한 눈에 비교하기</Text>
      </Button>{" "}
    </Container>
  );
};

const Container = styled.div`
  width: 310px;
  height: 50px;
  position: fixed;
  bottom: 40px;
  left: 50%;
  margin-left: -155px;
`;

const Text = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 33px;
  text-align: center;
  letter-spacing: -0.0025em;
  color: #4876ef;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
`;

export default CompareButton;
