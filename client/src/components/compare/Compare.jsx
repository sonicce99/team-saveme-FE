import React from "react";
import {
  CompareWrapper,
  Header,
  Rows,
  Row,
  Logo,
  BtnWrapper,
  FlexTitleBtn,
  Title,
  TitleBtn,
  CompareHeaderWrapper,
  CompareFlex,
  CategoryBtn,
} from "../../styles/CompareStyle";
import theme from "../../styles/theme";
import { categoryList } from "../../utils/categoryList";

export default function Compare() {
  return (
    <>
      <Header>
        <Logo src={require("../../images/logo.png")} alt="Logo" />
        <BtnWrapper>
          <FlexTitleBtn>
            <div>
              <Title>관심공고 비교하기</Title>
            </div>
            <div>
              <TitleBtn
                bgColor={theme.colors.colorSub}
                color={theme.colors.colorBlue}
              >
                열어보기
              </TitleBtn>
              <TitleBtn
                bgColor={theme.colors.colorBlue}
                color={theme.colors.colorSub}
              >
                저장하기
              </TitleBtn>
            </div>
          </FlexTitleBtn>
        </BtnWrapper>
        <CompareHeaderWrapper>
          <CompareFlex color={theme.colors.colorLine}>
            <span>비교 항목 선택</span>
            {Object.entries(categoryList).map(([key, value]) => (
              <CategoryBtn color={theme.colors.colorBlue} key={key}>
                {value}
              </CategoryBtn>
            ))}
          </CompareFlex>
        </CompareHeaderWrapper>
      </Header>

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
