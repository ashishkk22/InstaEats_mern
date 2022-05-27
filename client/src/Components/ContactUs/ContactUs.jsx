import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as api from "../../redux/api";
import toast from "react-hot-toast";
const ContactUs = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitQuery = async dataF => {
    try {
      const { email, name, query } = dataF;
      const formData = {
        email,
        name,
        query,
      };
      const data = await api.postQuery(formData);
      if (data.status === 200) {
        toast.success("Query posted successfully");
        return navigate("/");
      }
    } catch (err) {}
  };
  return (
    <section className="p-16 min-h-screen bg-secondaryWeb ">
      <div className="flex items-center justify-center  ">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-xl w-96">
          <h3 className="text-2xl font-bold text-center">Contact Us</h3>
          <form action="" onSubmit={handleSubmit(onSubmitQuery)}>
            <div className="mt-4">
              <div>
                <label className="block font-medium">Email</label>
                <input
                  type="text"
                  {...register("email", {
                    required: "Please enter the correct email id",
                    pattern: /^\S+@\S+$/i,
                    maxLength: {
                      value: 50,
                      message: "Please enter the valid email id",
                    },
                  })}
                  placeholder="Enter the Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primaryWeb"
                  required
                />
                <p className="text-primaryWeb">{errors.email?.message}</p>
              </div>
              <div>
                <label className="block mt-4 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter the name"
                  {...register("name", {
                    required: "Please enter the full name",
                    minLength: {
                      value: 4,
                      message: "Please enter the full name",
                    },
                  })}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primaryWeb"
                  required
                />
                <p className="text-primaryWeb">{errors.name?.message}</p>
              </div>
              <div className="mt-4">
                <label className="block font-medium">Query</label>
                <textarea
                  type="text"
                  {...register("query", {
                    required: "Please enter the full Query",
                    minLength: {
                      value: 15,
                      message: "Please enter the full Query",
                    },
                  })}
                  placeholder="Enter Your Query"
                  className="form-control w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primaryWeb form-control
        block
        
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        transition
        ease-in-out
        m-0"
                  required
                />
                <p className="text-primaryWeb">{errors.query?.message}</p>
              </div>
              <div className="flex items-baseline justify-center mt-4">
                <button className="bg-primaryWeb text-white font-bold rounded-full p-1 hover:bg-orange-500  delay-75 px-8 mt-4 pt-2 pb-2 w-40 ">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
