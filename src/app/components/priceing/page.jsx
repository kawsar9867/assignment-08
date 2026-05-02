import React from "react";

const PriceingPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mb-5 font-semibold  ">
        SkillSphere Membership
      </h1>
      <div className="flex justify-center mb-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div className="w-100 hover:transform hover:scale-102 duration-150">
            <img
              className=" rounded-t-lg border-t-3 shadow-lg"
              src="/free.png"
              alt=""
            />
            <div className="rounded-b-2xl bg-white  shadow-lg pr-1 pl-1">
              <h1 className="text-3xl text-center font-semibold pt-3">
                Starter
              </h1>
              <h3 className="text-center text-2xl font-semibold">3 Users</h3>
              <p className="font-semibold text-center">
                Selected Courses Priority Email Support
              </p>
              <button className="w-full rounded-full bg-gray-300 font-semibold py-1.5 transform duration-150  hover:bg-black hover:text-white mt-7 mb-1 active:scale-95">
                Starter Details
              </button>
            </div>
          </div>

          <div className="w-100 hover:transform hover:scale-102 duration-150">
            <img
              className="rounded-t-lg border-t-3 shadow-lg"
              src="/group.png"
              alt=""
            />
            <div className="rounded-b-2xl bg-white  shadow-lg pr-1 pl-1">
              <h1 className="text-3xl text-center font-semibold pt-3">
                Growth
              </h1>
              <h3 className="text-center text-2xl font-semibold">20 Users</h3>
              <p className="font-semibold text-center">Phone & Slack Support</p>
              <button className="w-full rounded-full bg-gray-300 font-semibold py-1.5 transform duration-150  hover:bg-black hover:text-white mt-7 mb-1 active:scale-95">
                Growth Details
              </button>
            </div>
          </div>

          <div className="w-100 hover:transform hover:scale-102 duration-150">
            <img
              className="rounded-t-lg border-t-3 shadow-lg"
              src="/server.png"
              alt=""
            />
            <div className="rounded-b-2xl bg-white  shadow-lg pr-1 pl-1">
              <h1 className="text-3xl text-center font-semibold pt-3">
                Platform
              </h1>
              <h3 className="text-center text-2xl font-semibold">
                Enterprice Users Full Platform API
              </h3>
              <p className="font-semibold text-center">
                Dedicated Success Manager
              </p>
              <button className="w-full rounded-full bg-gray-300 font-semibold py-1.5 transform duration-150  hover:bg-black hover:text-white mt-7 mb-1 active:scale-95">
                Platform Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceingPage;
