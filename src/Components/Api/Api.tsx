import axios from "axios";

export interface userData {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  //   clientType: boolean;
  address: string;
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
