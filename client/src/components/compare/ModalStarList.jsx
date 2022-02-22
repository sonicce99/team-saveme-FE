import React from "react";
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

export default function ModalStarList({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} size="xl">
      <ModalWrapper>
        <ModalHeader>
          <span>관심공고</span>
          <IconWrapper onClick={handleClose}>
            <IoMdClose size="40" />
          </IconWrapper>
        </ModalHeader>

        <ModalRowWrapper>
          <ModalRows>
            <ModalRow>
              <RowTitle>SBS알ㄴ으ㅏㅇ르ㅏ늘다ㅡ</RowTitle>
              <RowSubTitle>경력무관 | 학력무관 | 파견직</RowSubTitle>
              <RowSubEtc>편집디자인, 웹디자인</RowSubEtc>
            </ModalRow>
            <ModalRow>
              <RowCompanyName>(주)키스템프</RowCompanyName>
              <RowCompanyInfoBtn>기업정보</RowCompanyInfoBtn>
            </ModalRow>
            <ModalRow>
              <RowCheckBox
                bgColor={theme.colors.colorBlue}
                color={theme.colors.colorWhite}
              >
                <BsCheckWrapper>
                  <BsCheckCircle size="28" />
                </BsCheckWrapper>
                <p>선택됨</p>
              </RowCheckBox>
            </ModalRow>
          </ModalRows>
        </ModalRowWrapper>
        <ModalRowWrapper>
          <ModalRows>
            <ModalRow>
              <RowTitle>SBS알ㄴ으ㅏㅇ르ㅏ늘다ㅡ</RowTitle>
              <RowSubTitle>경력무관 | 학력무관 | 파견직</RowSubTitle>
              <RowSubEtc>편집디자인, 웹디자인</RowSubEtc>
            </ModalRow>
            <ModalRow>
              <RowCompanyName>(주)키스템프</RowCompanyName>
              <RowCompanyInfoBtn>기업정보</RowCompanyInfoBtn>
            </ModalRow>
            <ModalRow>
              <RowCheckBox
                bgColor={theme.colors.colorBlue}
                color={theme.colors.colorWhite}
              >
                <BsCheckWrapper>
                  <BsCheckCircle size="28" />
                </BsCheckWrapper>
                <p>선택됨</p>
              </RowCheckBox>
            </ModalRow>
          </ModalRows>
        </ModalRowWrapper>
      </ModalWrapper>
    </Modal>
  );
}
