import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchOrders } from "../../redux/features/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import moment from "moment";
const Orders = () => {
  const dispatch = useDispatch();
  const { orders, loading } = useSelector(state => state.order);
  useEffect(() => {
    console.log("component rendered");
    dispatch(fetchOrders({ toast }));
  }, []);
  return loading ? (
    <h1>Loading Please Wait </h1>
  ) : (
    <section className="orders light-section p-2 min-h-screen">
      <div className="container mx-auto pt-12">
        <h1 className="font-bold text-lg  mb-4">All Orders</h1>

        <div className="m-4">
          <table className="w-full table-auto bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Order Id</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Address</th>
                <th className="px-4 py-2 text-left">Time</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => {
                const { _id, address, mobile, createdAt } = order;
                return (
                  <React.Fragment key={_id}>
                    <tr>
                      <td className="border px-4 py-2 text-primaryWeb">
                        <Link to={`/orders/${_id}`} state={_id}>
                          {_id}
                        </Link>
                      </td>
                      <td className="border px-4 py-2">{mobile}</td>
                      <td className="border px-4 py-2">{address}</td>
                      <td className="border px-4 py-2">
                        {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
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
