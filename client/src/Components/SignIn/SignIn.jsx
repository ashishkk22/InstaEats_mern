import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { userLogIn } from "../../redux/features/authSlice";
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitQuery = async dataForm => {
    dispatch(userLogIn({ dataForm, toast, navigate }));
  };
  return (
    <section className="p-2 sm:p-16 min-h-screen bg-secondaryWeb ">
      <div className="flex items-center justify-center  ">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-center">Sign In</h3>
          <form action="" onSubmit={handleSubmit(onSubmitQuery)}>
            <div className="mt-4">
              <div>
                <label className="block">Email</label>
                <input
                  type="text"
                  placeholder="Enter the Email"
                  {...register("email", {
                    required: "Please enter the correct email id",
                    pattern: /^\S+@\S+$/i,
                    maxLength: {
                      value: 50,
                      message: "Please enter the valid email id",
                    },
                  })}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primaryWeb"
                  required
                />
                <p className="text-primaryWeb">{errors.name?.message}</p>
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Please enter the valid password",
                    maxLength: {
                      value: 50,
                      message: "Please enter the valid password",
                    },
                  })}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primaryWeb"
                  required
                />
                <p className="text-primaryWeb">{errors.name?.message}</p>
              </div>
              <div className="flex sm:items-baseline flex-col mt-4 sm:flex-row items-center">
                <button className="bg-primaryWeb text-white font-bold rounded-full p-1 hover:bg-orange-500  delay-75 px-8    pt-2 pb-2 w-full sm:w-min">
                  Login
                </button>
                <p className="mt-2 sm:mt-0 sm:ml-6 text-primaryWeb rounded-lg p-1  px-1">
                  <Link to="/signup">Don't Have an Account ?</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
