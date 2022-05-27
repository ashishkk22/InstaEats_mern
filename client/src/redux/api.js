import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const itemFetch = data => API.get("/items", data);
export const postQuery = data => API.post("/query", data);
