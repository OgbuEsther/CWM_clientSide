import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import bg from "../../Assets/AnimatedShape.svg";
import { useMutation } from "@tanstack/react-query";
import { createClient, userData } from "../Api/Api";
import Swal from "sweetalert2";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { UseAppDispatch } from "../Global/Store";

import { useNavigate } from "react-router-dom";
import { registerClient } from "../Global/ReduxState";

const Register = () => {
  const dispatch = UseAppDispatch();

  const navigate = useNavigate();

  const userSchema = yup
    .object({
      name: yup.string().required("please enter a name"),
      email: yup.string().required("please enter a email"),
      password: yup.string().required("please enter a password"),
      phoneNumber: yup.string().required("please enter a phone number"),
      clientType: yup.boolean().required("please enter a client type"),
      address: yup.string().required("please enter a address"),
    })
    .required();

  type formData = yup.InferType<typeof userSchema>;

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<formData>({
    resolver: yupResolver(userSchema),
  });

  const newClient = useMutation({
    mutationFn: createClient,
    mutationKey: ["registerAllClients"],

    onSuccess: (data: any) => {
      dispatch(registerClient(data.data));
    },
  });
  const submit = handleSubmit((data) => {
    newClient.mutate(data);
    console.log("this is yup data", data);
    reset();
    navigate("/home");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "signed up successfully",
      showConfirmButton: false,
      timer: 2500,
    });
  });
  // console.log("this is yup data 2", submit);

  const submit2 = (e: any) => {
    e.preventDefault();
    console.log(`button dey work`);
  };

  return (
    <div>
      <Container>
        <Logo>Continental</Logo>
        <Wrapper onSubmit={submit}>
          <AuthArea>
            <h2>Create account</h2>
            <input
              {...register("name")}
              type="text"
              required
              placeholder="FullName"
            />
            <p>{errors?.name && errors?.name?.message} </p>
            <input
              {...register("email")}
              type="text"
              required
              placeholder="email"
            />
            <p>{errors?.email && errors?.email?.message} </p>
            <input
              {...register("phoneNumber")}
              type="number"
              required
              placeholder="Phone Number"
              maxLength={11}
            />
            <p>{errors?.phoneNumber && errors?.phoneNumber?.message} </p>
            <input
              {...register("address")}
              type="text"
              required
              placeholder="Address"
            />
            <p>{errors?.address && errors?.address?.message} </p>
            <input
              {...register("password")}
              type="password"
              required
              placeholder="Enter Password"
              minLength={8}
              aria-hidden="true"
            />
            <p>{errors?.password && errors?.password?.message} </p>

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

  p {
    margin: 0;
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
