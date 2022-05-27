import React, { useEffect } from "react";
import EmptyCart from "./EmptyCart/EmptyCart";
import WithItem from "./WithItem/WithItem";
import { useSelector } from "react-redux";
const Cart = () => {
  const { cart } = useSelector(state => ({ ...state.item }));
  useEffect(() => {}, [cart]);
  return <>{cart.length == 0 ? <EmptyCart /> : <WithItem />}</>;
};

export default Cart;
