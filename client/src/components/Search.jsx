import React, { useState } from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { BsCheckCircle } from "react-icons/bs";

const Search = () => {
  const local1 = ["서울", "인천", "대구", "대전", "세종", "경남"];
  const local2 = ["경기", "부산", "광주", "울산", "강원", "경북"];

  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  const handleTrue = () => setShow(true);
  const handleFalse = () => setShow(false);
  const handleValue = (e) => setValue(e.target.value);
  const handleValueNull = () => setValue("");

  return (
    <Container>
      <InputGroup className="mb-3">
        <BiSearch className="SearchIcon" />
        <FormControl
          placeholder="검색어를 입력하세요"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={value}
          onChange={handleValue}
        />
        <GrLocation className="LocationIcon" />
        <DropdownButton
          variant="outline-secondary"
          title="지역을 선택해주세요"
          id="input-group-dropdown-1"
        >
          <Box style={{ width: 410, height: 220 }}>
            <Div>
              {local1.map((local, index) => {
                return (
                  <Box key={index}>
                    <Dropdown.Item
                      href="#"
                      style={{
                        width: 202,
                        height: 34,
                      }}
                    >
                      {local}
                    </Dropdown.Item>
                    <BsCheckCircle className="CheckIcon" />
                  </Box>
                );
              })}
            </Div>
            <Div>
              {local2.map((local, index) => {
                return (
                  <Box key={index}>
                    <Dropdown.Item
                      href="#"
                      style={{
                        width: 202,
                        height: 34,
                      }}
                    >
                      {local}
                    </Dropdown.Item>
                    <BsCheckCircle className="CheckIcon" />
                  </Box>
                );
              })}
            </Div>
          </Box>
        </DropdownButton>
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => {
            handleFalse();
            handleValueNull();
          }}
        >
          검색
        </Button>
      </InputGroup>
    </Container>
  );
};

const Container = styled.div`
  width: 995px;
  height: 50px;
  position: relative;
  left: 50%;
  margin-left: -497.5px;
  margin-top: 170px;
`;

const Div = styled.div``;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

export default Search;
