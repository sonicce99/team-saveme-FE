import React, { useState } from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsCheckCircle } from "react-icons/bs";

const SearchBar = () => {
  const local1 = ["서울", "인천", "대구", "대전", "세종", "경남"];
  const local2 = ["경기", "부산", "광주", "울산", "강원", "경북"];

  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState([]);

  const handleTrue = () => setShow(true);
  const handleFalse = () => setShow(false);
  const handleValue = (e) => setValue(e.target.value);
  const handleValueNull = () => setValue("");
  const handleSelect = (e) => {
    if (selected.includes(e)) {
      const index = selected.indexOf(e);
      const array = [...selected];
      array.splice(index, 1);
      setSelected(array);
    } else {
      setSelected([...selected, e]);
    }
  };

  const navigate = useNavigate();

  return (
    <>
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
          <HiOutlineLocationMarker className="LocationIcon" />
          <DropdownButton
            variant="outline-secondary"
            title={
              selected.length === 0 ? "지역을 선택해주세요" : selected.join()
            }
            id="input-group-dropdown-1"
            onSelect={handleSelect}
          >
            <Box style={{ width: 410, height: 220 }}>
              <Div>
                {local1.map((local, index) => {
                  return (
                    <Box key={index}>
                      <Dropdown.Item
                        eventKey={local}
                        style={{
                          width: 202,
                          height: 34,
                          color: selected.includes(local)
                            ? "#4876EF"
                            : "#333333",
                          backgroundColor: selected.includes(local)
                            ? "#F4F6FA"
                            : "#ffffff",
                        }}
                      >
                        {local}
                      </Dropdown.Item>
                      <BsCheckCircle
                        className="CheckIcon"
                        color={selected.includes(local) ? "#4876EF" : "#D8DCE4"}
                      />
                    </Box>
                  );
                })}
              </Div>
              <Div>
                {local2.map((local, index) => {
                  return (
                    <Box key={index}>
                      <Dropdown.Item
                        eventKey={local}
                        style={{
                          width: 202,
                          height: 34,
                          color: selected.includes(local)
                            ? "#4876EF"
                            : "#333333",
                          backgroundColor: selected.includes(local)
                            ? "#F4F6FA"
                            : "#ffffff",
                        }}
                      >
                        {local}
                      </Dropdown.Item>
                      <BsCheckCircle
                        className="CheckIcon"
                        color={selected.includes(local) ? "#4876EF" : "#D8DCE4"}
                      />
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
              navigate("/search");
            }}
          >
            검색
          </Button>
        </InputGroup>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 1025px;
`;

const Div = styled.div``;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

export default SearchBar;
