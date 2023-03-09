import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import bg from "../../Assets/AnimatedShape.svg";
import { useMutation } from "@tanstack/react-query";
import { loginClient } from "../Api/Api";
import { loginClients } from "../Global/ReduxState";
import * as yup from "yup";
import { UseAppDispatch } from "../Global/Store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";

const Signin = () => {
  const dispatch = UseAppDispatch();
  const navigate = useNavigate();

  const loginSchema = yup
    .object({
      email: yup.string().required("please enter a valid email address"),
      password: yup.string().required("please enter your password"),
    })
    .required();

  type formData = yup.InferType<typeof loginSchema>;

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<formData>({
    resolver: yupResolver(loginSchema),
  });

  const signin = useMutation({
    mutationFn: loginClient,
    mutationKey: ["loginAllClients"],

    onSuccess: (data: any) => {
      dispatch(loginClients(data.data));
    },
  });

  const submit = handleSubmit((data) => {
    signin.mutate(data);
    console.log(`this is yup signin`, data);
    reset();
    Swal.fire({
      title: "registration",
      html: "redirecting to dashboard",
      timer: 2000,
      timerProgressBar: true,

      willClose: () => {
        navigate("/");
      },
    });
  });

  return (
    <div>
      <Container>
        <Logo>Continental</Logo>
        <Wrapper onSubmit={submit}>
          <AuthArea>
            <h2>Sign In</h2>
            <input
              {...register("email")}
              type="email"
              placeholder="email"
              required
            />
            <p>{errors?.email && errors?.email.message} </p>
            <input
              {...register("password")}
              type="password"
              placeholder="password"
              required
            />
            <p>{errors?.password && errors?.password.message} </p>
            <span>
              No account? <Account to="/register">Create one!</Account>
            </span>
          </AuthArea>
          <Buttons>
            <Button color="#fff" background="#DA5D00" type="submit">
              Sign in
            </Button>
          </Buttons>
        </Wrapper>
        <Footer>Developed by I.E.F . © {new Date().getFullYear()}</Footer>
      </Container>
    </div>
  );
};

export default Signin;

// const Container = styled.div``
// const Container = styled.div``
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

const Account = styled(NavLink)`
  margin-left: 5px;
  text-decoration: none;
  color: #da5d00;
`;

const Buttons = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const AuthArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
  }

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
  border-radius: 5px;
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
