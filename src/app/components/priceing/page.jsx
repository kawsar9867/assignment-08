"use client";

import React from "react";
import { motion } from "framer-motion";

const PriceingPage = () => {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-center mb-7 font-semibold mt-15"
      >
        SkillSphere Membership
      </motion.h1>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="flex justify-center mb-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="w-100 shadow-lg rounded-2xl overflow-hidden"
          >
            <img src="/free.png" alt="" className="w-full" />
            <div className="bg-white p-3">
              <h1 className="text-3xl text-center font-semibold">Starter</h1>
              <h3 className="text-center text-2xl font-semibold">3 Users</h3>
              <p className="font-semibold text-center">
                Selected Courses Priority Email Support
              </p>
              <button className="w-full rounded-full bg-gray-300 py-1.5 hover:bg-black hover:text-white mt-7 active:scale-95">
                Starter Details
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="w-100 shadow-lg rounded-2xl overflow-hidden"
          >
            <img src="/group.png" alt="" className="w-full" />
            <div className="bg-white p-3">
              <h1 className="text-3xl text-center font-semibold">Growth</h1>
              <h3 className="text-center text-2xl font-semibold">20 Users</h3>
              <p className="font-semibold text-center">Phone & Slack Support</p>
              <button className="w-full rounded-full bg-gray-300 py-1.5 hover:bg-black hover:text-white mt-7 active:scale-95">
                Growth Details
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="w-100 shadow-lg rounded-2xl overflow-hidden"
          >
            <img src="/server.png" alt="" className="w-full" />
            <div className="bg-white p-3">
              <h1 className="text-3xl text-center font-semibold">Platform</h1>
              <h3 className="text-center text-xl font-semibold">
                Enterprise Users Full Platform API
              </h3>
              <p className="font-semibold text-center">
                Dedicated Success Manager
              </p>
              <button className="w-full rounded-full bg-gray-300 py-1.5 hover:bg-black hover:text-white mt-7 active:scale-95">
                Platform Details
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PriceingPage;
