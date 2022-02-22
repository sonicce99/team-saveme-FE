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
  PlusBtnWrapper,
  CompanyName,
  PositionTitle,
} from "../../styles/CompareStyle";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { compareBtnClickList } from "../../recoil/atom";
import ModalShow from "./ModalShow";
import { AiFillPlusCircle } from "react-icons/ai";
import { useGetStarData } from "../../utils/Api";
import Loading from "../Loading";

export default function Compare() {
  const { isLoading, data: starData } = useGetStarData();
  const [categoryAtom, setCategoryAtom] = useRecoilState(compareBtnClickList);
  console.log(starData);

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
    });
    const slide = document.querySelector(`.${keyName}`);
    slide.classList.toggle("slideOut");
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

      {isLoading ? (
        <Loading />
      ) : (
        <CompareWrapper>
          <Rows repeatNum={starData.data.length + 1}>
            <Row>
              <PlusBtnWrapper>
                <AiFillPlusCircle className="PlusIcon" onClick={handleShow} />
              </PlusBtnWrapper>
              <Text>공고 추가</Text>
            </Row>
            {starData.data.map((data) => (
              <Row key={data.recruitmentId}>
                <CompanyName color={theme.colors.colorBlue}>
                  {data.companyName}
                </CompanyName>
                <PositionTitle>{data.positionTitle}</PositionTitle>
              </Row>
            ))}
          </Rows>

          {categoryAtom.map((data) => (
            <Rows
              repeatNum={starData.data.length + 1}
              key={data.keyName}
              className={data.keyName}
            >
              <Row>{data.keyKoName}</Row>
              {starData.data.map((subData) => (
                <Row key={subData.recruitmentId}>{subData[data.keyName]}</Row>
              ))}
            </Rows>
          ))}
        </CompareWrapper>
      )}

      <ModalShow show={show} handleClose={handleClose} />
    </>
  );
}
