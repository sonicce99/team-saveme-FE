import React, { useCallback } from "react";
import theme from "../../styles/theme";
import {
  BsCheckWrapper,
  IconWrapper,
  ModalHeader,
  ModalRow,
  ModalRows,
  ModalRowWrapper,
  ModalWrapper,
  RowCheckBox,
  RowCompanyInfoBtn,
  RowCompanyName,
  RowSubEtc,
  RowSubTitle,
  RowTitle,
} from "../../styles/ModalStyle";
import { IoMdClose } from "react-icons/io";
import { BsCheckCircle } from "react-icons/bs";
import { Modal } from "react-bootstrap";
import Loading from "../Loading";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { LIVE, wishListAtom, wishListAtomSelector } from "../../recoil/atom";
import { changeWishStatus } from "../../utils/WishList";

export default function ModalStarList({ show, handleClose }) {
  const setWishList = useSetRecoilState(wishListAtom);

  const onClick = useCallback((id) => {
    setWishList((oldWish) => {
      return changeWishStatus(oldWish, id);
    });
  }, []);

  const wishList = useRecoilValue(wishListAtomSelector);

  return (
    <Modal show={show} onHide={handleClose} size="xl">
      {wishList ? (
        <ModalWrapper>
          <ModalHeader>
            <span>관심공고</span>
            <IconWrapper onClick={handleClose}>
              <IoMdClose size="40" />
            </IconWrapper>
          </ModalHeader>

          {wishList.length === 0 ? (
            <div>관심공고가 없습니다.</div>
          ) : (
            <>
              {wishList.map((data) => (
                <ModalRowWrapper
                  key={data.recruitmentId}
                  color={data.status === LIVE ? "#0d6efd" : "none"}
                >
                  <ModalRows>
                    <ModalRow>
                      <RowTitle>{data.positionTitle}</RowTitle>
                      <RowSubTitle>{`${data.experienceLevel} | ${data.requiredEducationLevel} | ${data.jobType}`}</RowSubTitle>
                      <RowSubEtc>{data.industryName}</RowSubEtc>
                    </ModalRow>
                    <ModalRow>
                      <RowCompanyName>{data.companyName}</RowCompanyName>
                      <RowCompanyInfoBtn>
                        <a href={data.companyHref} target="_blank">
                          기업정보
                        </a>
                      </RowCompanyInfoBtn>
                    </ModalRow>
                    <ModalRow>
                      {data.status === LIVE ? (
                        <RowCheckBox
                          bgColor={theme.colors.colorBlue}
                          color={theme.colors.colorLine}
                          onClick={() => onClick(`${data.recruitmentId}`)}
                        >
                          <BsCheckWrapper>
                            <BsCheckCircle size="28" />
                          </BsCheckWrapper>
                          <p>선택됨</p>
                        </RowCheckBox>
                      ) : (
                        <RowCheckBox
                          color={"#BEC3CC"}
                          bgColor={theme.colors.colorLine}
                          onClick={() => onClick(`${data.recruitmentId}`)}
                        >
                          <BsCheckWrapper>
                            <BsCheckCircle size="28" />
                          </BsCheckWrapper>
                          <p>선택</p>
                        </RowCheckBox>
                      )}
                    </ModalRow>
                  </ModalRows>
                </ModalRowWrapper>
              ))}
            </>
          )}
        </ModalWrapper>
      ) : (
        <Loading />
      )}
    </Modal>
  );
}
