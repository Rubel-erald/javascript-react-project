import axios from "axios";

const baseURL = "https://6a1f9a8ae96c1d13b586097a.mockapi.io";
const instance = axios.create({
  baseURL,
});

export default instance;
