import React from "react";
import styled from "styled-components";
import bg from "../../../Assets/scatteredForcefields.svg";

const GetStarted = () => {
  return (
    <div>
      <Container>
        <h1>
          It's easy to get started. <br /> click the button! <br /> 👇🏼
        </h1>
        <button>get started</button>
      </Container>
    </div>
  );
};

export default GetStarted;

const Container = styled.div`
  width: 100%;
  height: 60vh;
  background-image: url(${bg});
  background-color: #010116fa;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #ffffff40;

  h1 {
    margin: 0;
    font-size: 2.5rem;
    color: #fff;
    text-align: center;
    font-weight: 600;
    opacity: 0.9;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 375px) {
      font-size: 1.2rem;
    }
  }

  button {
    padding: 10px 25px;
    font-size: 18px;
    margin-top: 20px;
    background-color: #da5d00;
    transition: all 0.3s ease;
    border: 0;

    :hover {
      border: 2px solid #da5d00;
      color: #da5d00;
      cursor: pointer;
      background-color: transparent;
    }

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
    @media screen and (max-width: 375px) {
      font-size: 14px;
    }
  }
`;
