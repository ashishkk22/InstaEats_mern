import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import * as api from "../../redux/api";
const Queries = () => {
  const dispatch = useDispatch();
  const [queryData, setQueryData] = useState([]);
  useEffect(() => {
    fetchQuery();
  }, []);
  const fetchQuery = async () => {
    try {
      const data = await api.getQueries();
      const queries = data.data.data;
      if (data.status === 200) {
        setQueryData(queries);
      }
    } catch (err) {}
  };
  const handleDeleteQuery = async ({ id }) => {
    try {
      const data = await api.deleteQuery({ id });
      fetchQuery();
    } catch (err) {}
  };
  return (
    <div className="container mx-auto min-h-screen">
      <h2 className="text-lg m-5">All Queries</h2>
      <table className="w-full table-auto bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Query</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {queryData?.map(onQuery => {
            const { _id, email, name, query } = onQuery;
            return (
              <tr key={_id}>
                <td className="border px-4 py-2 text-black-900">{email}</td>
                <td className="border px-4 py-2">{name}</td>
                <td className="border px-4 py-2">{query}</td>
                <td className="border px-2 py-2">
                  <button
                    className=" bg-primaryWeb text-white font-bold rounded-lg p-1 hover:bg-orange-500  delay-75 "
                    onClick={() => handleDeleteQuery({ id: _id })}
                  >
                    Delete
                  </button>
                </td>
                {/* <td className="border px-4 py-2"> */}
                {/* {moment(createdAt).format("MMMM Do YYYY, h:mm a")} */}
                {/* ${ moment(order.createdAt).format('hh:mm A') } */}
                {/* </td> */}
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

export default Queries;
