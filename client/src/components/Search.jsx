import React from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const Search = () => {
  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="검색어를 입력하세요"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <DropdownButton
          variant="outline-secondary"
          title="지역을 선택해주세요"
          id="input-group-dropdown-1"
        >
          <Box>
            <Div>
              <Dropdown.Item href="#">서울</Dropdown.Item>
              <Dropdown.Item href="#">인천</Dropdown.Item>
              <Dropdown.Item href="#">대구</Dropdown.Item>
              <Dropdown.Item href="#">대전</Dropdown.Item>
              <Dropdown.Item href="#">세종</Dropdown.Item>
              <Dropdown.Item href="#">경남</Dropdown.Item>
            </Div>

            <Div>
              <Dropdown.Item href="#">경기</Dropdown.Item>
              <Dropdown.Item href="#">부산</Dropdown.Item>
              <Dropdown.Item href="#">광주</Dropdown.Item>
              <Dropdown.Item href="#">울산</Dropdown.Item>
              <Dropdown.Item href="#">강원</Dropdown.Item>
              <Dropdown.Item href="#">경북</Dropdown.Item>
            </Div>
          </Box>
        </DropdownButton>
        <Button variant="outline-secondary" id="button-addon2">
          검색
        </Button>
      </InputGroup>
    </>
  );
};

const Div = styled.div``;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

export default Search;
