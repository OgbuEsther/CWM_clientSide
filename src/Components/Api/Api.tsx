import axios from "axios";

export interface userData {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
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

  address,
}: userData) => {
  await axios
    .post(`${endPoint}/signup`, {
      name,
      email,
      password,
      phoneNumber,

      address,
    })
    .then((res) => {
      return res.data;
    });
};

export const loginClient = async ({ email, password }: login) => {
  return await axios
    .post(`${endPoint}/login`, { email, password })
    .then((res) => {
      return res.data;
    });
  // .catch((err) => console.log(`this is api consumption error`, err));
};
