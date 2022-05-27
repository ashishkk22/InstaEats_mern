import React from "react";
import EmptyImg from "../../../images/empty-cart.png";
import { Link } from "react-router-dom";
const EmptyCart = () => {
  return (
    <section className="py-16 bg-secondaryWeb">
      <div className="container mx-auto text-center flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-2">Cart Empty 😔</h1>
        <p className="text-gray-500 text-lg mb-12">
          You Probably haven't Ordered from InstaEats yet. <br /> To order, Go
          to the main Page
        </p>
        <img src={EmptyImg} alt="empty_img" className="w-2/5" />
        <button className="ml-6 bg-primaryWeb text-white font-bold rounded-full p-1 hover:bg-orange-500  delay-75 px-4 mt-4 pt-2 pb-2">
          <Link to="/">Go Back</Link>
        </button>
      </div>
    </section>
  );
};

export default EmptyCart;
