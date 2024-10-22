import axios from "axios";

export const api = axios.create({
  baseURL: "https://devmoney-backend.onrender.com",
});
