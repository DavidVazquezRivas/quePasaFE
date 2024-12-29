import axios from "axios";

const BASE_URL = import.meta.env.VITE_BE_BASE_URL;

// Create an Axios instance
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
