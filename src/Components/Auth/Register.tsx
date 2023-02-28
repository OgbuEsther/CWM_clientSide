import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import bg from "../../Assets/AnimatedShape.svg";
import { useMutation } from "@tanstack/react-query";
import { createClient } from "../Api/Api";

const Register = () => {
  const newClient = useMutation({
    mutationFn: createClient,
    mutationKey: ["signup"],
  });

  return (
    <div>
      <Container>
        <Logo>Continental</Logo>
        <Wrapper>
          <AuthArea>
            <h2>Create account</h2>
            <input
              //   value={name}
              onChange={(e) => {
                // setName(e.target.value);
              }}
              type="text"
              required
              placeholder="FullName"
            />
            <input
              onChange={(e) => {
                // setEmail(e.target.value);
              }}
              type="text"
              required
              placeholder="eMail"
            />
            <input
              onChange={(e) => {
                // setEmail(e.target.value);
              }}
              type="number"
              required
              placeholder="Phone Number"
              maxLength={11}
            />
            <input
              onChange={(e) => {
                // setEmail(e.target.value);
              }}
              type="text"
              required
              placeholder="Address"
            />
            <input
              //   value={password}
              onChange={(e) => {
                // setPassword(e.target.value);
              }}
              type="password"
              required
              placeholder="Enter Password"
              minLength={8}
              aria-hidden="true"
            />

            <span>
              Already have an account? <Account to="/signin">Sign in!</Account>
            </span>
          </AuthArea>
          <Buttons>
            <Button type="submit" color="#fff" background="#da5d00">
              Register
            </Button>
          </Buttons>
        </Wrapper>
        <Footer>Developed by Isaac Etor. © {new Date().getFullYear()}</Footer>
      </Container>
    </div>
  );
};

export default Register;

const Footer = styled.button`
  width: 100%;
  border: 0;
  background-color: transparent;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000a0;
  font-size: 15px;
`;
const Button = styled.button<{ color: string; background: string }>`
  background-color: ${(props) => props.background};
  width: 120px;
  height: 40px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 0;
  color: ${(props) => props.color};
  transition: all 350ms;

  :hover {
    border: 2px solid #da5d00;
    background-color: transparent;
    color: #da5d00;
    cursor: pointer;
  }
`;

const Buttons = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Account = styled(NavLink)`
  margin-left: 5px;
  text-decoration: none;
  color: #da5d00;
`;

const AuthArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    border: 0;
    outline: 0;
    border-bottom: 1px solid #da5e0060;
    background-color: transparent;
    font-size: 16px;
    color: #000000b5;
    margin-bottom: 20px;
  }

  span {
    display: flex;
    font-size: 14px;
  }

  h2 {
    margin: 15px 0px;
    font-weight: 500;
    color: #000000cf;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    color: #da5d00;
    margin-top: 30px;
  }
`;

const Wrapper = styled.form`
  max-width: 370px;
  width: calc(100% - 40px);
  padding: 44px;
  min-width: 320px;
  /* min-height: 330px; */
  background-color: #f8f9f8;
  box-shadow: rgba(99, 99, 99, 0.156) 0px 2px 8px 0px;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 100%;
    box-shadow: none;
    min-width: 90%;
    max-width: 90%;
    padding: 0;
    padding-top: 44px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000;
  background-image: url(${bg});
  background-size: cover;
  color: #000000ca;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: poppins;
  overflow: hidden;

  @media screen and (max-width: 550px) {
    width: 100%;
    background: none;
    background-color: none;
    background-color: #f8f9f8;
  }
`;
