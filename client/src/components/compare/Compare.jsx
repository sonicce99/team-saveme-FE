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
        <Rows repeatNum={5 + 1}>
          <Row>+</Row>
          <Row>SBS아이앤엠 플랫폼서비스팀 UX/UI디자인 채용 [DMC/경력우대]</Row>
          <Row>UX/UI 웹 서비스 기획 및 디자인 담당자 채용</Row>
          <Row>웹페이지 및 앱 UX/UI 디자인</Row>
          <Row>3</Row>
          <Row>3</Row>
        </Rows>

        <Rows repeatNum={5 + 1}>
          <Row>마감일</Row>
          <Row>1</Row>
          <Row>2</Row>
          <Row>3</Row>
          <Row>3</Row>
          <Row>3</Row>
        </Rows>
      </CompareWrapper>
    </>
  );
}
