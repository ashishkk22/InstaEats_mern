import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-white">
      <div className="">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="flex flex-col justify-content items-center px-4 py-4 mx-auto bg-white-50 max-w-7xl sm:px-6 lg:px-16">
        <h1 className="text-gray-500 font-semibold text-xl">InstaEats</h1>
        <div className="flex flex-wrap items-baseline lg:justify-center justify-center text-center">
          <span className="mt-2 text-sm font-light text-gray-500">
            Copyright © 2022 InstaEats. Designed by
            <a
              href="https://github.com/ashishkk22"
              className="mx-2 text-wickedblue hover:text-gray-500"
              rel="noopener noreferrer"
              target="_blank"
            >
              @AshishKachhadiya
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
