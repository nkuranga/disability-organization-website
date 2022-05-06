import React from "react";
import { aboutData } from "../DummyData/";

const aboutus = () => {
  return (
    <>
      <section className="bg-gray-100  lg:py-8 lg:flex lg:justify-center w-4/4">
        <div className="bg-white w-full lg:mx-8 lg:flex lg:max-w-6xl lg:shadow-lg sm:bg-white md:bg-white sm:shadow-lg sm:rounded-md ">
          <div className="lg:w-1/2">
            <div
              className="h-64 bg-cover  lg:h-full"
              style={{
                backgroundImage: `url(${aboutData.img})`,
              }}
            ></div>
          </div>

          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h1 className="font-extrabold uppercase text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-800 ">
              {aboutData.title}
            </h1>
            <p className="mt-4 text-gray-500 ">{aboutData.description}</p>

            <div className="mt-8">
              <a
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default aboutus;
