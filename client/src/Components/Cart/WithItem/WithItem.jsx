import React, { useEffect } from "react";
import cartBlack from "../../../images/cart-black.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  totalPrice,
  addToCart,
  decreaseCart,
} from "../../../redux/features/itemSlice";

const WithItem = () => {
  const dispatch = useDispatch();
  const { cart, itemTotalPrice } = useSelector(state => ({ ...state.item }));
  useEffect(() => {
    console.log("cart useEffect called");
    dispatch(totalPrice());
  }, [cart, dispatch]);
  const isLoggedIn = true;
  return (
    <>
      <section className="bg-secondaryWeb py-16">
        <div className="container mx-auto sm:w-1/2">
          <div className="flex flex-row items-center border-b border-gray-300 pb-4">
            <img src={cartBlack} alt="cart" />
            <h2 className="font-bold ml-4 text-2xl">Order Summary</h2>
          </div>
          {cart.map(cart => {
            const { id, price, image, name, qty } = cart;
            return (
              <div className="item-list" key={id}>
                <div className="flex flex-row items-center my-8">
                  <img
                    src={require("../../../images/" + image + ".jpeg")}
                    alt="itemImg"
                    className="w-40 h-32 rounded-md"
                  />
                  <div className="flex-1 ml-4">
                    <h1>{name}</h1>
                  </div>
                  <div className="flex-1 justify-center items-center">
                    <div className="flex justify-center items-center">
                      <button
                        className="font-bold text-lg text-secondaryWeb bg-primaryWeb rounded-lg p-2 mx-2"
                        onClick={() => dispatch(addToCart(cart))}
                      >
                        <img
                          src={require("../../../images/plus-16.png")}
                          alt="plus"
                        />
                      </button>
                      <span className="">{qty} Qty</span>
                      <button
                        className="font-bold text-lg text-secondaryWeb bg-primaryWeb rounded-lg p-2 mx-2 "
                        onClick={() => {
                          dispatch(decreaseCart(cart));
                          dispatch(totalPrice());
                        }}
                      >
                        <img
                          src={require("../../../images/minus-16.png")}
                          alt="minus"
                        />
                      </button>
                    </div>
                  </div>
                  <span className=" font-bold text-lg">₹ {price}</span>
                </div>
              </div>
            );
          })}

          <hr />
          <div className="text-right py-4">
            <div>
              <span className="text-lg font-bold">Total Amount: </span>
              <span className="text-primaryWeb font-bold text-xl ml-2">
                ₹ {itemTotalPrice}
              </span>
            </div>
            <div className="">
              <form action="" className="flex flex-col justify-center">
                <input
                  type="text"
                  className="border p-2 mt-8 focus:outline-none focus:ring-1 focus:ring-primaryWeb rounded-md"
                  placeholder="Phone Number"
                />
                <input
                  type="text"
                  className="border p-2 mt-4 focus:outline-none focus:ring-1 focus:ring-primaryWeb rounded-md"
                  placeholder="Address"
                />
                <div className="flex justify-end mt-4">
                  {isLoggedIn ? (
                    <button className="ml-6 bg-primaryWeb text-white font-bold rounded-full p-1 hover:bg-orange-500  delay-75 px-4 mt-4 pt-2 pb-2 w-1/4 ">
                      <Link to="/">Order Now</Link>
                    </button>
                  ) : (
                    <button className="ml-6 bg-primaryWeb text-white font-bold rounded-full p-1 hover:bg-orange-500  delay-75 px-4 mt-4 pt-2 pb-2 w-1/3 ">
                      <Link to="/signin">Sign in to continue</Link>
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WithItem;
