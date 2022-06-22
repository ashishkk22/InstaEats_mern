import React, { useEffect } from "react";
import cartBlack from "../../../images/cart-black.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  totalPrice,
  addToCart,
  decreaseCart,
  order,
} from "../../../redux/features/itemSlice";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const WithItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, itemTotalPrice } = useSelector(state => ({ ...state.item }));
  const { authenticated } = useSelector(state => ({ ...state.auth }));
  useEffect(() => {
    dispatch(totalPrice());
  }, [cart, dispatch]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitData = async dataForm => {
    const array = cart.map(item => {
      return item._id;
    });
    const obj = {
      item: array,
      totalPrice: itemTotalPrice,
      ...dataForm,
    };
    dispatch(order({ toast, navigate, obj }));
  };
  return (
    <>
      <section className="min-h-screen bg-secondaryWeb py-1 sm:py-10 md:py-16">
        <div className="container mx-auto sm:w-10/12 md:w-8/12">
          <div className="flex flex-row items-center border-b border-gray-300 pb-2 mt-3">
            <img src={cartBlack} alt="cart" />
            <h2 className="font-bold ml-4 text-lg sm:text-2xl">
              Order Summary
            </h2>
          </div>
          {cart.map(cart => {
            const { id, price, image, name, qty } = cart;
            return (
              <div className="item-list" key={id}>
                <div className="flex flex-row items-center  my-8">
                  <img
                    src={require("../../../images/" + image + ".jpeg")}
                    alt="itemImg"
                    className="sm:w-40 w-1/4 h-1/4 sm:h-32 rounded-md"
                  />
                  <div className="flex-1 ml-4">
                    <h1 className="text-xs sm:text-xl">{name}</h1>
                  </div>
                  <div className="flex-1 justify-center items-center w-full">
                    <div className="flex justify-center items-center ">
                      <button
                        className="font-bold text-lg text-secondaryWeb bg-primaryWeb rounded sm:rounded-lg p-1 sm:p-2 mx-1 sm:mx-2"
                        onClick={() => dispatch(addToCart(cart))}
                      >
                        <img
                          src={require("../../../images/plus-16.png")}
                          alt="plus"
                          className="w-1 sm:w-fit"
                        />
                      </button>
                      <span className="text-xs sm:text-xl">{qty} Qty</span>
                      <button
                        className="font-bold text-lg text-secondaryWeb bg-primaryWeb rounded sm:rounded-lg p-1 sm:p-2 mx-1 sm:mx-2 "
                        onClick={() => {
                          dispatch(decreaseCart(cart));
                          dispatch(totalPrice());
                        }}
                      >
                        <img
                          src={require("../../../images/minus-16.png")}
                          alt="minus"
                          className="w-1 sm:w-fit"
                        />
                      </button>
                    </div>
                  </div>
                  <span className=" font-bold text-xs sm:text-lg">
                    ₹ {price}
                  </span>
                </div>
              </div>
            );
          })}

          <hr />
          <div className="text-right py-4">
            <div>
              <span className="text-base sm:text-lg font-bold">
                Total Amount:{" "}
              </span>
              <span className="text-primaryWeb font-bold  ml-2 text-base sm:text-lg">
                ₹ {itemTotalPrice}
              </span>
            </div>
            <div className="">
              <form
                action=""
                className="flex flex-col justify-center"
                onSubmit={handleSubmit(onSubmitData)}
              >
                <input
                  type="text"
                  {...register("mobile", {
                    required: "Please enter the correct mobile number",
                    minLength: {
                      value: 10,
                      message: "Please enter the correct mobile number",
                    },
                    maxLength: {
                      value: 10,
                      message: "Please enter the correct mobile number",
                    },
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Please enter the correct mobile number",
                    },
                  })}
                  className="border p-1 sm:p-2 mt-2 sm:mt-8 focus:outline-none focus:ring-1 focus:ring-primaryWeb rounded-md"
                  placeholder="Phone Number"
                />
                <p className="text-primaryWeb">{errors.name?.message}</p>
                <input
                  type="text"
                  {...register("address", {
                    required: "Please enter the correct address",
                    minLength: {
                      value: 10,
                      message: "Please enter the correct address",
                    },
                  })}
                  className="border p-1 sm:p-2 mt-2 sm:mt-4 focus:outline-none focus:ring-1 focus:ring-primaryWeb rounded-md"
                  placeholder="Address"
                />
                <p className="text-primaryWeb">{errors.name?.message}</p>
                <div className="flex justify-end mt-4">
                  {authenticated ? (
                    <button className="ml-6 bg-primaryWeb text-white font-bold rounded-full p-1 hover:bg-orange-500  delay-75 px-4 mt-4 pt-2 pb-2 w-1/4 ">
                      Order Now
                    </button>
                  ) : (
                    <button className="ml-6 bg-primaryWeb text-white font-bold rounded-full p-1 hover:bg-orange-500  delay-75 px-4  mt-0 sm:mt-4 pt-2 pb-2 w-fit sm:w-1/3 ">
                      <Link to="/signin" className="text-sm sm:text-base">
                        Sign in to continue
                      </Link>
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
