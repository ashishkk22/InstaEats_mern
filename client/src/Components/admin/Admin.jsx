import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { order } from "../../redux/features/itemSlice";
import moment from "moment";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Loader from "../../Loader/Loader";
import {
  adminAllOrders,
  updateOrderStatus,
} from "../../redux/features/orderSlice";
const Admin = () => {
  const { allOrders, orderUpdate } = useSelector(state => ({
    ...state.order,
  }));
  useEffect(() => {
    dispatch(adminAllOrders({ toast }));
  }, [orderUpdate]);
  const dispatch = useDispatch();
  const selectHandler = (e, _id) => {
    dispatch(
      updateOrderStatus({ orderId: _id, changedStatus: e.target.value, toast })
    );
  };

  return (
    <div className="container mx-auto min-h-screen">
      <h2 className="text-lg m-5">All Orders</h2>
      <table className="w-full table-auto bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Orders</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Address</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Placed At</th>
          </tr>
        </thead>
        <tbody>
          {allOrders?.map(order => {
            const { _id, totalPrice, customerId, address, status, createdAt } =
              order;
            return (
              <tr key={_id}>
                <td className="border px-4 py-2 text-black-900">
                  <p>Id: {_id}</p>
                  <div>Total Price : {totalPrice}</div>
                </td>
                <td className="border px-4 py-2">{customerId.name}</td>
                <td className="border px-4 py-2">{address}</td>
                <td className="border px-2 py-2 !w-32">
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryWeb-500 focus:border-primaryWeb-500 block p-2.5 text-center"
                    onChange={e => selectHandler(e, _id)}
                  >
                    <option
                      value="order_placed"
                      selected={status === "order_placed" ? "selected" : ""}
                    >
                      Order_placed
                    </option>
                    <option
                      value="confirmed"
                      selected={status === "confirmed" ? "selected" : ""}
                    >
                      Confirmed
                    </option>
                    <option
                      value="prepared"
                      selected={status === "prepared" ? "selected" : ""}
                    >
                      Prepared
                    </option>
                    <option
                      value="delivered"
                      selected={status === "delivered" ? "selected" : ""}
                    >
                      Delivered
                    </option>
                    <option
                      value="completed"
                      selected={status === "completed" ? "selected" : ""}
                    >
                      Completed
                    </option>
                  </select>
                </td>
                <td className="border px-4 py-2">
                  {moment(createdAt).format("MMMM Do YYYY, h:mm a")}
                  {/* ${ moment(order.createdAt).format('hh:mm A') } */}
                </td>
                {/* <td className="border px-4 py-2">
              payment status
              {/* ${ order.paymentStatus ? 'paid' : 'Not paid' } */}
                {/* </td>  */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
