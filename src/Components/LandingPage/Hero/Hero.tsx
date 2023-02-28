import React from "react";
import styled from "styled-components";
import hero from "../../../Assets/Waste_management.svg";
import {} from "react-icons";

const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <LeftWrapper height="70%">
              <Caption>continental waste management platform</Caption>
              <Title>
                See garbage pick-up schedule and make payment for your waste
                bill
              </Title>
              <Desc>
                one place to manage everything relating to how your manage your
                waste
              </Desc>
              <Button>get started</Button>
            </LeftWrapper>
          </Left>
          <Right>
            <LeftWrapper height="90%">
              <img src={hero} alt="" />
            </LeftWrapper>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const Desc = styled.p`
  color: #00002d86;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 14.5px;
  }
`;
const Button = styled.button`
  padding: 12px 27px;
  margin-top: 40px;
  font-size: 14.5px;
  border: 0;
  background-color: #ff88002b;
  text-transform: capitalize;
  font-weight: 600;
  transition: all ease-in-out 0.2s;

  :hover {
    cursor: pointer;
    background-color: #ff880052;
  }

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Title = styled.h1`
  width: 70%;
  font-weight: 600;
  margin: 0;
  margin-top: 30px;
  font-size: 2.3rem;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    width: 85%;
    margin-top: 20px;
  }
`;

const Caption = styled.div`
  padding: 10px 20px;
  width: 340px;
  background-color: #ff88002b;
  border-radius: 5px;
  font-weight: 500;
  text-transform: capitalize;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: 300px;
  }
`;

const LeftWrapper = styled.div<{ height: string }>`
  width: 90%;
  margin: auto;

  @media screen and (max-width: 768px) {
    height: ${({ height }) => height};
  }

  img {
    @media screen and (max-width: 768px) {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
const Right = styled.div`
  width: 50%;
  height: 90vh;
  background-color: #000000;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 55vh;
    width: 100%;
  }

  @media screen and (max-width: 1440px) {
    min-width: 50%;
  }
`;

const Left = styled.div`
  width: 50%;
  height: calc(100vh - 10vh);
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 60vh;
    width: 100%;
  }
  @media screen and (max-width: 1440px) {
    min-width: 50%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Container = styled.div`
  width: 100%;
  color: #00002d;
`;
