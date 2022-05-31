import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import Home from "./Components/Home/Home";
import ContactUs from "./Components/ContactUs/ContactUs";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Orders from "./Components/Orders/Orders";
import SingleOrder from "./Components/Orders/SingleOrder/SingleOrder";
import ProtectedRouteOrder from "./protectedRoutes/ProtectedRouteOrder";
import NotFound from "./Components/PageWithError/NotFound";
function App() {
  const { authenticated } = useSelector(state => ({ ...state.auth }));
  // const { authenticated } = useSelector(state => ({ ...state.auth }));
  // useEffect(() => {}, [authenticated]);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/cart" element={<Cart />}></Route>

          <Route
            path="/orders"
            element={authenticated ? <Orders /> : <SignIn />}
          ></Route>
          <Route
            path="/orders/:id"
            element={authenticated ? <SingleOrder /> : <SignIn />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
        <Toaster position="	top-right" />
      </BrowserRouter>
    </>
  );
}

export default App;
