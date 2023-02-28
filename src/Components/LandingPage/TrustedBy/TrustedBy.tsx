import React from "react";
import styled from "styled-components";

const TrustedBy = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            Continental waste managers, is trusted by the awesome companies
          </Top>
          <Clients>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </Clients>
        </Wrapper>
      </Container>
    </div>
  );
};

export default TrustedBy;

const Clients = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 200px;
    height: 80%;
    background-color: red;
  }
`;

const Top = styled.p`
  margin: 0;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 600;
`;

const Wrapper = styled.div`
  width: 95%;
  height: 15vh;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
