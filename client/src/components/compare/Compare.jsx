import React, { useState, useCallback, useEffect } from "react";
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
  DeleteBtn,
  MemoBtn,
} from "../../styles/CompareStyle";
import theme from "../../styles/theme";
import { Link } from "react-router-dom";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import {
  ALL,
  compareBtnClickList,
  DEL,
  LIVE,
  wishListAtom,
  wishListAtomSelector,
  wishListStatus,
} from "../../recoil/atom";
import { AiFillPlusCircle } from "react-icons/ai";
import { useGetStarData } from "../../utils/Api";
import Loading from "../Loading";
import ModalStarList from "./ModalStarList";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BiMemoryCard } from "react-icons/bi";
import { changeWishStatus } from "../../utils/WishList";

export default function Compare() {
  const { data: starData } = useGetStarData();
  const [categoryAtom, setCategoryAtom] = useRecoilState(compareBtnClickList);
  const setWishList = useSetRecoilState(wishListAtom);
  const setWishStatus = useSetRecoilState(wishListStatus);
  const wishList = useRecoilValue(wishListAtomSelector);

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

  const deleteWish = useCallback((id) => {
    setWishList((oldWish) => {
      return changeWishStatus(oldWish, id);
    });
  }, []);

  useEffect(() => {
    if (starData) {
      starData.data.map((data) => {
        setWishList((oldList) => {
          data.status = LIVE;
          return [...oldList, data];
        });
      });
      setWishStatus(LIVE);
    }
  }, [starData]);

  const [show, setShow] = useState(false);

  const handleClose = useCallback(() => {
    setShow(false);
    setWishStatus(LIVE);
  }, []);

  const handleShow = useCallback(() => {
    setShow(true);
    setWishStatus(ALL);
  }, []);

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
        {wishList ? (
          <>
            {wishList.length === 0 ? (
              <Rows repeatNum={1} bottom={false}>
                <Row right={false}>
                  <PlusBtnWrapper>
                    <AiFillPlusCircle
                      className="PlusIcon"
                      onClick={handleShow}
                    />
                  </PlusBtnWrapper>
                  <Text>공고 추가</Text>
                </Row>
              </Rows>
            ) : (
              <>
                <Rows repeatNum={wishList.length + 1} bottom={true}>
                  <Row right={true}>
                    <PlusBtnWrapper>
                      <AiFillPlusCircle
                        className="PlusIcon"
                        onClick={handleShow}
                      />
                    </PlusBtnWrapper>
                    <Text>공고 추가</Text>
                  </Row>
                  {wishList.map((data) => (
                    <Row key={data.recruitmentId}>
                      <CompanyName color={theme.colors.colorBlue}>
                        {data.companyName}
                      </CompanyName>
                      <PositionTitle>{data.positionTitle}</PositionTitle>
                      <DeleteBtn onClick={() => deleteWish(data.recruitmentId)}>
                        <IoIosCloseCircleOutline />
                      </DeleteBtn>
                      <MemoBtn>
                        <BiMemoryCard />
                      </MemoBtn>
                    </Row>
                  ))}
                </Rows>
                {categoryAtom.map((data) => (
                  <Rows
                    repeatNum={wishList.length + 1}
                    key={data.keyName}
                    className={data.keyName}
                    bottom={true}
                  >
                    <Row right={true}>{data.keyKoName}</Row>
                    {wishList.map((subData) => (
                      <Row key={subData.recruitmentId}>
                        {subData[data.keyName]}
                      </Row>
                    ))}
                  </Rows>
                ))}{" "}
              </>
            )}
          </>
        ) : (
          <Loading />
        )}
      </CompareWrapper>
      <ModalStarList show={show} handleClose={handleClose} />
    </>
  );
}
