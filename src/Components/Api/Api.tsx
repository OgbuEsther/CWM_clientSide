import axios from "axios";

interface userData {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  clientType: string;
  address: string;
}

const endPoint = "http://localhost:8000/api/clientauth";

export const createClient = async ({
  name,
  email,
  password,
  phoneNumber,
  clientType,
  address,
}: userData) => {
  await axios.post(`${endPoint}/signup`, {
    name,
    email,
    password,
    phoneNumber,
    clientType,
    address,
  });
};
