import React, { useCallback, useState } from "react";
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
  Text,
  Div,
} from "../../styles/CompareStyle";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { compareBtnClickList } from "../../recoil/atom";
import ModalShow from "./ModalShow";
import { AiFillPlusCircle } from "react-icons/ai";

export default function Compare() {
  const [categoryAtom, setCategoryAtom] = useRecoilState(compareBtnClickList);

  const btnClick = useCallback((keyName, keyState, keyKoName) => {
    setCategoryAtom((oldCategory) => {
      const targetIndex = oldCategory.findIndex(
        (category) => category.keyName === keyName
      );
      const addCategory = {
        keyName: keyName,
        keyKoName: keyKoName,
        keyState: !keyState,
      };
      const newCategory = [...oldCategory];
      newCategory.splice(targetIndex, 1, addCategory);
      return newCategory;
      /*
      return [
        ...oldCategory.slice(0, targetIndex),
        newCategory,
        ...oldCategory.slice(targetIndex + 1),
      ];
      */
    });
    const test = document.querySelector(".test");
    test.classList.toggle("none");
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Header>
        <Link to="/">
          <Logo src={require("../../images/logo.png")} alt="Logo" />
        </Link>
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
            {categoryAtom.map((data) => (
              <CategoryBtn
                color={
                  data.keyState
                    ? theme.colors.colorBlue
                    : theme.colors.colorGray
                }
                key={data.keyName}
                onClick={() =>
                  btnClick(data.keyName, data.keyState, data.keyKoName)
                }
              >
                {data.keyKoName}
              </CategoryBtn>
            ))}
          </CompareFlex>
        </CompareHeaderWrapper>
      </Header>

      <CompareWrapper>
        <Rows repeatNum={5 + 1} className="test">
          <Div onClick={handleShow}>
            <AiFillPlusCircle className="PlusIcon" />
            <Text>공고 추가</Text>
          </Div>
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
      <ModalShow show={show} handleClose={handleClose} />
    </>
  );
}
