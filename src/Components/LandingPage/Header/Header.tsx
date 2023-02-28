import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>Continental</Logo>
          <Nav>
            <Navigation>About</Navigation>
            <Navigation>Features</Navigation>
            <Navigation>Customer support</Navigation>
            <Navigation>About</Navigation>
            <NavLink to="/signin" style={{ textDecoration: "none" }}>
              <Button>sign in</Button>
            </NavLink>
          </Nav>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;

const Navigation = styled.p`
  margin: 0;
  margin-left: 40px;
  font-size: 15px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  :hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  padding: 10px 25px;
  font-size: 17px;
  background-color: #da5d00;
  border: 0;
  color: #fff;
  margin-left: 40px;

  :hover {
    cursor: pointer;
  }
`;

const Nav = styled.div`
  height: 70%;
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Wrapper = styled.div`
  width: 95%;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 10vh;
  background: linear-gradient(
    90deg,
    rgba(247, 247, 247, 1) 50.01%,
    #000000 49.99%,
    #000000 100%
  );
  display: flex;
  flex-wrap: wrap;
  /* position: fixed; */
  z-index: 1;
  left: 0;
  top: 0px;
  color: #fff;
`;
