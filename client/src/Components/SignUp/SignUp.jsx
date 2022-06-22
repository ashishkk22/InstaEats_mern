import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userSignUp } from "../../redux/features/authSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitData = async dataForm => {
    dispatch(userSignUp({ dataForm, toast, navigate }));
  };
  return (
    <section className="p-2 sm:p-16 min-h-screen bg-secondaryWeb ">
      <div className="flex items-center justify-center w-full ">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-center">Sign Up</h3>
          <form action="" onSubmit={handleSubmit(onSubmitData)}>
            <div className="mt-4">
              <div>
                <label className="block mt-4">Name</label>
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
                  placeholder="Enter the Password"
                  {...register("password", {
                    required: "Please enter the valid password",
                    // pattern:
                    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
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
                <button className="bg-primaryWeb text-white font-bold rounded-full p-1 hover:bg-orange-500  delay-75 px-8    pt-2 pb-2 w-full sm:w-fit">
                  Sign Up
                </button>
                <p className="mt-6 sm:mt-0 sm:ml-6 text-primaryWeb rounded-lg p-1  px-1">
                  <Link to="/signin">Already Have an Account ?</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
