import React from "react";
import styled from "styled-components";
import { RiFileList3Line } from "react-icons/ri";

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20rem;
  margin-bottom: 2rem;
  .img-block {
    display: flex;
    height: 12rem;
    width: 12rem;
  }
  img {
    height: 12rem;
    width: 12rem;
  }
`;

export const HausAnimated = () => {
  return (
    <ImageContainer>
      <div className="img-block">
        <RiFileList3Line className="img-block" />
      </div>
    </ImageContainer>
  );
};
