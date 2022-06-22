import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchOrders } from "../../redux/features/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import moment from "moment";
import Loader from "../../Loader/Loader";
const Orders = () => {
  const dispatch = useDispatch();
  const { orders, loading } = useSelector(state => state.order);
  useEffect(() => {
    dispatch(fetchOrders({ toast }));
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <section className="orders light-section p-2 min-h-screen">
      <div className="container mx-auto pt-12">
        <h1 className="font-bold text-lg  mb-4">All Orders</h1>

        <div className="m-4">
          <table className="w-full table-auto bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Order Id</th>
                <th className="px-4 py-2 text-left">status</th>
                <th className="px-4 py-2 text-left">Address</th>
                <th className="px-4 py-2 text-left">Time</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => {
                const { _id, address, status, createdAt } = order;
                return (
                  <React.Fragment key={_id}>
                    <tr>
                      <td className="border px-4 py-2 text-primaryWeb">
                        {_id}
                      </td>
                      <td className="border px-4 py-2">{status}</td>
                      <td className="border px-4 py-2">{address}</td>
                      <td className="border px-4 py-2">
                        {moment(createdAt).format("MMMM Do YYYY, h:mm a")}
                        {/* {moment(createdAt).format(" hh:mm A")} */}
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Orders;
