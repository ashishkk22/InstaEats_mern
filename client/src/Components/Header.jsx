import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import cart from "../images/cart_.png";
import { useSelector } from "react-redux";
const Header = () => {
  const { cartTotalQty } = useSelector(state => ({ ...state.item }));
  useEffect(() => {}, [cartTotalQty]);
  return (
    <>
      <nav className="relative container mx-auto flex items-center justify-between font-semibold py-4">
        <div className="flex flex-row items-center justify-center">
          <Link to="/" className="flex flex-row items-center justify-center">
            <img src={Logo} alt="logo" className="w-28" />
            <h2 className="text-2xl mx-1">InstaEats </h2>
          </Link>
        </div>
        <div className="text-xl ">
          <ul className="flex items-center">
            <li className="ml-6 hover:text-primaryWeb rounded-lg p-1  delay-100 px-2">
              <Link to="/">Home</Link>
            </li>
            <li className="ml-6 hover:text-primaryWeb rounded-lg p-1   delay-100 px-2">
              <Link to="/signup">Sign Up</Link>
            </li>
            <li className="ml-6 hover:text-primaryWeb rounded-lg p-1   delay-100 px-2">
              <Link to="/signin">Sign In</Link>
            </li>
            <li className="ml-6 hover:text-primaryWeb rounded-lg p-1   delay-100 px-2">
              <Link to="/contactus">ContactUs</Link>
            </li>
            <li className="ml-6 bg-primaryWeb rounded-lg p-1 hover:bg-orange-500  delay-75 px-2 ">
              <Link
                to="cart"
                className="flex flex-row justify-center items-center"
              >
                {!cartTotalQty == 0 && (
                  <h1 className="text-secondaryWeb mx-1">{cartTotalQty}</h1>
                )}

                <img src={cart} alt="cart" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
