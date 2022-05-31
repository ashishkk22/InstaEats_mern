import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  crossorigin: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export const itemFetch = data => API.get("/items", data);
export const postQuery = data => API.post("/query", data);
export const userSignUp = data => API.post("/user/signup", data);
export const userLogIn = data => API.post("/user/signin", data);
// export const userLogOut = data => API.post("/user/signout", data);
export const newOrder = data => API.post("/order", data);
export const orderList = () => API.get("/order/allOrders");
