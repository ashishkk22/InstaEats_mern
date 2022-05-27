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
function App() {
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
        </Routes>
        <Footer />
        <Toaster position="	top-right" />
      </BrowserRouter>
    </>
  );
}

export default App;
