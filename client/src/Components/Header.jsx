import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";
import cartImage from "../images/cart_.png";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/features/authSlice";
import { adminAllOrders } from "../redux/features/orderSlice";

const Header = () => {
  const { cartTotalQty, cart } = useSelector(state => ({ ...state.item }));
  const { authenticated, role } = useSelector(state => ({ ...state.auth }));
  useEffect(() => {}, [cartTotalQty, cart, authenticated, role]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {
    dispatch(userLogout({ navigate, toast }));
  };
  const handleAdmin = () => {
    dispatch(adminAllOrders({ toast }));
  };
  return (
    <>
      <Disclosure as="nav" className="p-2">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primaryWeb focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-between">
                  <div className="flex-shrink-0 flex items-center">
                    <Link
                      to="/"
                      className="flex flex-row items-center justify-center"
                    >
                      <img src={Logo} alt="logo" className="w-28 ml-3" />
                      <h2 className="text-2xl mx-1">InstaEats </h2>
                    </Link>
                  </div>
                  <div className="hidden md:block md:ml-6">
                    <div className="flex space-x-4">
                      <ul className="flex items-center mt-2">
                        <li className="ml-6 hover:text-primaryWeb rounded-lg p-1  delay-100 px-2 ">
                          <Link to="/" className="text-lg">
                            Home
                          </Link>
                        </li>
                        {authenticated ? (
                          <>
                            {role == "user" ? (
                              <li className="ml-6 hover:text-primaryWeb rounded-lg p-1   delay-100 px-2">
                                <Link className="text-lg" to="/orders">
                                  Orders
                                </Link>
                              </li>
                            ) : (
                              <></>
                            )}
                          </>
                        ) : (
                          <>
                            <li className="ml-6 hover:text-primaryWeb rounded-lg p-1   delay-100 px-2">
                              <Link className="text-lg" to="/signup">
                                Sign Up
                              </Link>
                            </li>
                            <li className="ml-6 hover:text-primaryWeb rounded-lg p-1   delay-100 px-2">
                              <Link className="text-lg" to="/signin">
                                Sign In
                              </Link>
                            </li>
                          </>
                        )}
                        {authenticated ? (
                          <>
                            {role == "admin" ? (
                              <>
                                <li
                                  className="ml-6 hover:text-primaryWeb rounded-lg p-1   delay-100 px-2"
                                  onClick={handleAdmin}
                                >
                                  <Link className="text-lg" to="/admin">
                                    Admin
                                  </Link>
                                </li>
                                <li className="ml-6 hover:text-primaryWeb rounded-lg p-1   delay-100 px-2">
                                  <Link className="text-lg" to="/queries">
                                    Queries
                                  </Link>
                                </li>
                              </>
                            ) : (
                              <></>
                            )}
                          </>
                        ) : (
                          <></>
                        )}
                        {role !== "admin" ? (
                          <li className="ml-6 hover:text-primaryWeb rounded-lg p-1   delay-100 px-2">
                            <Link className="text-lg" to="/contactus">
                              ContactUs
                            </Link>
                          </li>
                        ) : (
                          <></>
                        )}

                        {authenticated && (
                          <li className="ml-6 hover:text-primaryWeb rounded-lg p-1   delay-100 px-2">
                            <Link to="/" onClick={handleLogout}>
                              Logout
                            </Link>
                          </li>
                        )}
                        <li className="ml-6 bg-primaryWeb rounded-lg p-1 hover:bg-orange-500  delay-75 px-2 ">
                          <Link
                            to="cart"
                            className="flex flex-row justify-center items-center"
                          >
                            {!cartTotalQty == 0 && (
                              <h1 className="text-secondaryWeb mx-1">
                                {cartTotalQty}
                              </h1>
                            )}

                            <img src={cartImage} alt="cart" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <ul className="flex  mt-3 flex-col px-3 py-2 rounded-md text-base font-medium">
                  <li className="text-black hover:text-primaryWeb rounded-lg p-2  mb-2  delay-100  bg-secondaryWeb">
                    <Link to="/">Home</Link>
                  </li>
                  {authenticated ? (
                    <>
                      {role == "user" ? (
                        <li className="text-black hover:text-primaryWeb rounded-lg p-2  mb-2  delay-100  bg-secondaryWeb">
                          <Link to="/orders">Orders</Link>
                        </li>
                      ) : (
                        <></>
                      )}
                    </>
                  ) : (
                    <>
                      <li className="text-black hover:text-primaryWeb rounded-lg p-2  mb-2  delay-100  bg-secondaryWeb">
                        <Link to="/signup">Sign Up</Link>
                      </li>
                      <li className="text-black hover:text-primaryWeb rounded-lg p-2  mb-2  delay-100  bg-secondaryWeb">
                        <Link to="/signin">Sign In</Link>
                      </li>
                    </>
                  )}
                  {authenticated ? (
                    <>
                      {role == "admin" ? (
                        <>
                          <li
                            className="text-black hover:text-primaryWeb rounded-lg p-2  mb-2  delay-100  bg-secondaryWeb"
                            onClick={handleAdmin}
                          >
                            <Link to="/admin">Admin</Link>
                          </li>
                          <li className="text-black hover:text-primaryWeb rounded-lg p-2  mb-2  delay-100  bg-secondaryWeb">
                            <Link to="/queries">Queries</Link>
                          </li>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ) : (
                    <></>
                  )}
                  {role !== "admin" ? (
                    <li className="text-black hover:text-primaryWeb rounded-lg p-2  mb-2  delay-100  bg-secondaryWeb">
                      <Link to="/contactus">ContactUs</Link>
                    </li>
                  ) : (
                    <></>
                  )}

                  {authenticated && (
                    <li className="text-black hover:text-primaryWeb rounded-lg p-2  mb-2  delay-100  bg-secondaryWeb">
                      <Link to="/" onClick={handleLogout}>
                        Logout
                      </Link>
                    </li>
                  )}
                  <li className="text-black hover:text-primaryWeb rounded-lg p-2  mb-2  delay-100  bg-secondaryWeb ">
                    <Link to="cart">Cart</Link>
                  </li>
                </ul>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Header;
