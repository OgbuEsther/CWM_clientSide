import axios from "axios";

export interface userData {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  //   clientType: boolean;
  address: string;
}

export interface login {
  email: string;
  password: string;
}

const endPoint = "http://localhost:8000/api/clientauth";

export const createClient = async ({
  name,
  email,
  password,
  phoneNumber,
  //   clientType,
  address,
}: userData) => {
  await axios
    .post(`${endPoint}/signup`, {
      name,
      email,
      password,
      phoneNumber,
      //   clientType,
      address,
    })
    .then((res) => console.log(res));
};

export const loginClient = async ({ email, password }: login) => {
  return await axios
    .post(`${endPoint}/login`, { email, password })
    .then((res) => console.log("this is res", res));
};
