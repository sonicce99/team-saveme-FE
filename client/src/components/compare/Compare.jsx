import React from "react";
import { CompareWrapper, Header, Rows, Row } from "../../styles/CompareStyle";

export default function Compare() {
  return (
    <>
      <Header />
      <CompareWrapper>
        <Rows repeatNum={5}>
          <Row>1</Row>
          <Row>
            222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
          </Row>
          <Row>3</Row>
          <Row>4</Row>
          <Row>5</Row>
        </Rows>

        <Rows repeatNum={5}>
          <Row>1</Row>
          <Row>
            222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
          </Row>
          <Row>3</Row>
          <Row>4</Row>
          <Row>5</Row>
        </Rows>
      </CompareWrapper>
    </>
  );
}
