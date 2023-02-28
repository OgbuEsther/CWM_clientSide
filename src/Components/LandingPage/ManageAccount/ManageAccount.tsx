import React from "react";
import styled from "styled-components";

const ManageAccount = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <h1>A waste management platform that serves you</h1>
          </Left>
        </Wrapper>
      </Container>
    </div>
  );
};

export default ManageAccount;

const Left = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  h1 {
    width: 35%;
    margin: 0;
    font-size: 2.5rem;
    font-weight: 600;
    text-transform: capitalize;

    @media screen and (max-width: 768px) {
      width: 80%;
      font-size: 2.2rem;
    }
  }
`;

const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  color: #00002d;
`;
