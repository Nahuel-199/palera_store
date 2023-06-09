import axios from "axios";

const BASE_URL = "https://back-papelera.onrender.com/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});