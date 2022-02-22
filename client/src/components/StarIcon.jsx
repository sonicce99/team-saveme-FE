import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";
import { wishJob } from "../utils/Api.js";

const StarIcon = ({ wished, job }) => {
  const [isWished, setIsWished] = useState(wished);

  const handleChangeisWished = (value) => setIsWished(!value);

  const wish = async (job) => {
    const res = await wishJob(job);
  };

  return (
    <Div>
      <AiFillStar
        className="StarIcon"
        onClick={() => {
          wish(job);
          handleChangeisWished(wished);
        }}
        color={isWished ? "#FDF179" : "#8691a5"}
      ></AiFillStar>
    </Div>
  );
};

const Div = styled.div`
  cursor: pointer;
`;

export default StarIcon;
