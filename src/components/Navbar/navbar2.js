/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { BiDonateHeart } from "react-icons/bi";
import { StyleRoot } from "radium";
import Modal from "../modals/modal";

const navbar2 = () => {
  const donateBtn = {
    "@media (max-width: 600px)": {
      display: `none`,
    },
  };
  const logo = {
    "@media (max-width: 600px)": {
      marginTop: `20px`,
    },
  };
  const menu = {
    "@media (max-width: 600px)": {
      backgroundColor: ``,
    },
  };
  return (
    <>
      <StyleRoot>
        <Modal />
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a
              href="#"
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              style={logo}
            >
              <BiDonateHeart className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full cursor-pointer" />
              <span className="ml-3 text-xl">Donate</span>
            </a>
            <div className="flex items-center md:order-2">
              <a
                href="/application"
                className="ml-35 px-2 mr-5 p-2 pr-3  rounded flex justify-between items-center bg-indigo-500 hborder-indigo-500 text-white"
                style={donateBtn}
              >
                Apply
              </a>
              <button
                className="ml-35 px-2 bg-transparent border-2 border-yellow-500 p-2 pr-3 rounded animate-bounce flex justify-between items-center hover:bg-indigo-500 hover:border-indigo-500 hover:text-white"
                style={donateBtn}
                data-modal-toggle="authentication-modal"
              >
                <BiDonateHeart className="mr-2" />
                Donate
              </button>

              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Mobile Menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden lg:bg-none justify-between items-center w-full md:flex md:w-auto md:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col lg:font-semibold uppercase mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                {[
                  ["Home", "/"],
                  ["About us", "/"],
                  ["Activities", ""],
                  ["Blog", "/"],
                  ["Contact Us", "/contactus"],
                ].map(([link, url]) => (
                  <li key={link}>
                    <a
                      href={url}
                      className={
                        link.indexOf("Home")
                          ? "block  py-2 lg:bg-transparent pl-2 lg:border-b-2 lg:border-transparent border-b border-gray-200  hover:border-blue-500  md:bg-transparent  md:p-0 dark:text-white"
                          : "block  py-2 lg:bg-transparent pl-2 lg:border-b-2 lg:border-blue-500 border-b border-gray-200  hover:border-blue-500  md:bg-transparent  md:p-0 dark:text-white"
                      }
                      aria-current="page"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </StyleRoot>
    </>
  );
};

export default navbar2;
