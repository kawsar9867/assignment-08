"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const BannerPage = () => {
  return (
    <div className="relative w-full h-auto overflow-hidden">
      <Image
        src="/Bnner.png"
        alt="Website Banner"
        width={1200}
        height={600}
        className="w-full h-auto"
        priority
      />

      <div className="absolute inset-0 flex flex-col items-start justify-center  bg-black/20 animate__animated animate__backInRight">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold ml-2 mt-12 mb-8 text-white flex items-center gap-2"
        >
          Upgrade Your Skills Today
        </motion.h1>
        <p className="text-white text-lg mt-1 ml-7">
          Learn from Industry Experts
        </p>

        <button className="mt-2 ml-7 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full transition-all">
          Explore Courses
        </button>
      </div>
    </div>
  );
};

export default BannerPage;
