import React from "react";
import { newsContent } from "../DummyData/";

const news = () => {
  return (
    <>
      {/* <!-- Container for demo purpose --> */}
      <div className="container my-24 px-6 mx-auto">
        {/* <!-- Section: Design Block --> */}
        <section className="mb-12 text-center">
          <h2 className="font-extrabold mb-12 uppercase text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-800 to-indigo-700 ">
            Latest Activities
          </h2>

          <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
            {newsContent.map((news) => (
              <div className="mb-0" key={news.id}>
                <div className="relative block bg-white rounded-lg shadow-lg">
                  <div className="flex">
                    <div
                      className="overflow-hidden bg-no-repeat bg-cover relative shadow-lg rounded-lg mx-4 -mt-4"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      <img src={news.img} className="w-full" alt="" />
                      <a href="#!">
                        <div
                          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="font-bold text-lg mb-3">{news.title}n</h5>
                    <p className="text-gray-500 mb-4">
                      <small>
                        Published <u>10.01.2022</u> by
                        <a href="#" className="text-gray-900">
                          {news.author}
                        </a>
                      </small>
                    </p>
                    <p className="mb-4 pb-2">{news.description}</p>
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
            ))}
          </div>
        </section>
        {/* <!-- Section: Design Block  */}
      </div>
      {/* <!-- Container for demo purpose --></>; */}
    </>
  );
};

export default news;
