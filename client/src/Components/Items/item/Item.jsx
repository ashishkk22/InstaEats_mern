import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, totalPrice } from "../../../redux/features/itemSlice";
import toast from "react-hot-toast";
import { addToCart } from "../../../redux/features/itemSlice";
import Loader from "../../../Loader/Loader";
const Item = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => ({ ...state.item }));
  useEffect(() => {
    if (Object.keys(items).length === 0) {
      dispatch(fetchItems({ toast }));
    }
  }, []);

  return (
    <>
      <section className="  px-1">
        <div className="flex container  mx-auto justify-center flex-wrap">
          {items.foodItems?.map(item => {
            const { id, price, image, name } = item;
            return (
              <div
                className="bg-secondaryWeb w-64 sm:w-80 rounded-xl m-1 sm:m-6 "
                key={id}
              >
                <img
                  src={require("../../../images/" + image + ".jpeg")}
                  alt="item_is_Missing"
                  className="h-40 sm:h-64 mb-4 mx-auto rounded-xl"
                />
                <div>
                  <h2 className="mb-2 text-lg sm:text-xl flex justify-center">
                    {name}
                  </h2>
                  <div className="flex flex-row justify-between items-center mb-4 w-full">
                    <span className="mx-6 text-sm">Price: ₹ {price}</span>
                    <button
                      className="mx-6 bg-primaryWeb px-2 rounded-full hover:bg-orange-500  delay-75 py-2 mt-2 text-white font-bold "
                      onClick={() => {
                        dispatch(addToCart(item));
                        dispatch(totalPrice());
                      }}
                    >
                      <span className="px-2">+</span>
                      <span className="px-2">Add</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Item;
