import React from "react";
import styled from "styled-components";
import hero from "../../../Assets/Mobile_payments.svg";

const Features = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            <h1>
              Continental Waste Management platform offers you seamless
              navigation processes for all your needs
            </h1>
          </Top>
          <Bottom>
            <One>
              <Text>
                <h1>Online Payment you can trust.</h1>
                <p>
                  You shouldn't bother yourself going to the bank to pay your
                  waste bill, you can do that in your dashboard.
                </p>
                <button>sign in</button>
              </Text>
              <Image src={hero} alt="" />
            </One>
            <Two>
              <Right>
                <Up src={hero} />
                <Down>
                  <h1>Customer Support</h1>
                  <p>All of your questions would be answered in the app</p>
                  <button>sign in</button>
                </Down>
              </Right>
              <Left>
                <Up src={hero} alt="" />
                <Down>
                  <h1>Customer Support</h1>
                  <p>All of your questions would be answered in the app</p>
                  <button>sign in</button>
                </Down>
              </Left>
            </Two>
          </Bottom>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Features;

const Up = styled.img`
  width: 100%;
  height: 180px;
`;
const Down = styled.div`
  display: flex;
  height: 180px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 0;
    font-weight: 600;
    opacity: 0.9;
    font-size: 1.6rem;
  }

  p {
    margin: 0;
    margin-top: 10px;
    font-size: 17px;
    width: 70%;
    text-align: center;
    opacity: 0.9;
  }

  button {
    margin-top: 20px;
    padding: 10px 30px;
    font-size: 17px;
    border: 0;
    opacity: 0.8;
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
    font-weight: 600;
    margin-bottom: 40px;

    :hover {
      cursor: pointer;
    }
  }
`;

const Text = styled.div`
  width: 50%;

  button {
    padding: 12px 27px;
    width: 120px;
    margin-top: 25px;
    font-size: 14.5px;
    border: 2px solid #00002d;
    font-weight: 600;
    background-color: transparent;
    text-transform: capitalize;
    transition: all ease-in-out 0.2s;

    :hover {
      cursor: pointer;
      border: 2px solid #ff8800;
      color: #ff8800;
    }

    @media screen and (max-width: 768px) {
      padding: 10px 20px;
      margin-top: 20px;
    }
  }

  h1 {
    font-weight: 600;
    width: 80%;
    line-height: 2.4rem;
    margin: 0;
    font-size: 2.5rem;

    @media screen and (max-width: 768px) {
      width: 80%;
      font-size: 1.8rem;
      line-height: 1.7rem;
    }
    @media screen and (max-width: 500px) {
      width: 90%;
      font-size: 1.7rem;
      line-height: 1.7rem;
    }
  }

  p {
    width: 80%;
    opacity: 0.9;
    margin-top: 22px;
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Image = styled.img`
  height: 80%;
  width: 40%;
  object-fit: contain;

  @media screen and (max-width: 530px) {
    display: none;
  }
`;

const Right = styled.div`
  box-shadow: rgba(33, 35, 38, 0.058) 0px 10px 10px -10px;
  width: 500px;
  height: 45vh;
  background-color: #da5d00;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (max-width: 500px) {
    /* border-radius: 0; */
    width: 95%;
  }
`;

const Left = styled.div`
  width: 360px;
  height: 45vh;
  background-color: #000000;
  overflow: hidden;
  color: #fff;
  border-radius: 20px;
  box-shadow: rgba(33, 35, 38, 0.058) 0px 10px 10px -10px;
`;

const One = styled.div`
  width: 69%;
  padding: 20px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: rgba(33, 35, 38, 0.058) 0px 10px 10px -10px;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 85%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    border-radius: 0;
    padding: 30px;
  }
`;

const Two = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
  gap: 20px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 80%;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Top = styled.div`
  width: 50%;
  margin-top: 90px;

  h1 {
    text-align: center;
    margin: 0;
    font-size: 2.3rem;
    font-weight: 600;
    text-transform: capitalize;

    @media screen and (max-width: 768px) {
      font-size: 1.43rem;
    }
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Container = styled.div`
  width: 100%;
`;
