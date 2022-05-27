import React from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <section className="p-16 min-h-screen bg-secondaryWeb ">
      <div className="flex items-center justify-center  ">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-xl">
          <h3 className="text-2xl font-bold text-center">Sign In</h3>
          <form action="">
            <div className="mt-4">
              <div>
                <label className="block">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primaryWeb"
                />
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primaryWeb"
                />
              </div>
              <div className="flex items-baseline justify-between mt-4">
                <button className="bg-primaryWeb text-white font-bold rounded-full p-1 hover:bg-orange-500  delay-75 px-8 mt-4 pt-2 pb-2">
                  Login
                </button>
                <p className="ml-6 text-primaryWeb rounded-lg p-1  px-1">
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
