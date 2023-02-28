import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Container>
        <p>© {new Date().getFullYear()} Continental Waste Managers LTD.</p>
        <p>
          Developed by{" "}
          <a href="mailto:isaacetor7@gmail.com">Isaac Etor & Esther Ogbu</a>{" "}
        </p>
      </Container>
    </div>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  /* height: 10vh; */
  padding: 10px;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #f7f7f7;

  p {
    margin: 0;

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
  a {
    text-decoration: underline;
    color: #f7f7f7;
  }
`;
