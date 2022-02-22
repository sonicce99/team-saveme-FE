import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const SearchResult = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Text>검색 결과</Text>
      <Box>
        {data.map((job, index) => {
          return (
            <One key={index}>
              <Div2>
                <Div>
                  <Title>{job.positionTitle}</Title>
                  <AiFillStar className="StarIcon" />
                </Div>
                <Div>
                  <CompanyName>{job.companyName}</CompanyName>
                  <AiFillHeart className="HeartIcon" />
                </Div>
              </Div2>
              <Div>
                <Condition>{job.experienceLevel}</Condition>
                <Condition>{job.requiredEducationLevel}</Condition>
                <Condition>{job.jobType}</Condition>
                <Condition>{job.locationName}</Condition>
                <Date>
                  {job.expirationDate
                    .replace(/^2022-/g, "~ ")
                    .replace(/-/g, "/")}
                </Date>
              </Div>
              <Div>
                <Sort>{job.industryName.replace(/·/g, ", ")}</Sort>
              </Div>
            </One>
          );
        })}
      </Box>
    </Container>
  );
};

const Container = styled.div`
  width: 1025px;
`;

const Div2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  width: 94px;
  height: 38px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
  font-size: 24px;
  line-height: 38px;
  letter-spacing: -0.0025em;
  color: ${({ theme }) => theme.colors.colorBlack};
  margin-bottom: 16px;
`;

const CompanyName = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.0025em;
  color: #333333;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 4px;
`;

const Box = styled.div`
  width: 1025px;
  border: 1.5px solid #d8dce4;
  border-radius: 12px 12px 0px 0px;
`;

const One = styled.div`
  width: 1025px;
  height: 144px;
  border-bottom: 1px solid #d8dce4;
  padding-top: 25px;
  padding-left: 24px;
`;

const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.0025em;
  color: #333333;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 4px;
  margin-bottom: 4px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Condition = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: -0.0025em;
  color: #646464;
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0 4px;
  margin-bottom: 16px;
`;

const Date = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: -0.0025em;
  color: #646464;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 12px;
`;

const Sort = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.0025em;
  color: #8691a5;
  margin: 0px 4px;
`;

export default SearchResult;
